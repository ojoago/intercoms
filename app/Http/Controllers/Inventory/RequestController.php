<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Models\Inventory\RequestDetail;
use App\Models\Inventory\RequestItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class RequestController extends Controller
{
    public function index(){
        try {
            $data = RequestDetail::with('items')->withCount('items')
                            ->with('team')->with(['initiator' => function($q){$q->select('user_pid','username');}])
                            ->with(['collector' =>function($q){$q->select('user_pid','username');}])
                            ->where('requested_by', getUserPid())
                            ->get();
            return pushData($data, 'request loaded');
        } catch (\Throwable $e) {
            logError($e->getMessage());

            return responseMessage(status: 204, data: [], msg: STS_500);
        }
    }

    // load request store manager 
    public function loadRequestList(){
        try {
            $data = RequestDetail::with('items')->withCount('items')
                            ->with('team')->with(['initiator' => function($q){$q->select('user_pid','username');}])
                            ->with(['collector' =>function($q){$q->select('user_pid','username');}])
                            // ->where('region_pid', getRegionPid())
                            ->get();
            return pushData($data, 'request loaded');
        } catch (\Throwable $e) {
            logError($e->getMessage());

            return responseMessage(status: 204, data: [], msg: STS_500);
        }
    }
    //
    public function itemRequest(Request $request){

        $validator = Validator::make($request->all(),[
            'date' => 'nullable|date' ,
            'receiver' => 'required' ,
            'team' => 'required' ,
            'items.*.item_pid' => 'required' ,
            'items.*.quantity' => 'required|gt:0'
        ]);


        if(!$validator->fails()){
            try {
                $data = [
                    'date' => $request->date ?? justDate() ,
                    'note' => $request->note ,
                    'receiver' => $request->receiver ,
                    'team_pid' => $request->team ,
                    // 'region_pid' => getRegionPid() ,
                    'pid' => $request->pid ?? public_id() ,
                    'requested_by' => getUserPid(),
                ];

                DB::beginTransaction();
                $result = $this->addOrEditItem($data);
                if($result){
                    $items = [] ;
                    $count = count($request->items);
                    if ($count > 0) {
                        for ($i = 0; $i < $count; $i++) {
                            $items[] = [
                                'item_pid' => $request->items[$i]['item_pid'],
                                'quantity' => $request->items[$i]['quantity'],
                                'request_pid' => $result->pid , 
                                // 'region_pid' => getRegionPid() ,
                            ];
                        }

                        RequestItem::where([
                            'request_pid' => $result->pid, 
                            // 'region_pid' => getRegionPid()
                             ])->delete();

                       $result = RequestItem::insert($items);
                       if($result){
                            DB::commit();
                            return pushResponse($result,$request->pid ? 'Request updated' : 'Request Sent');
                       }
                    }
                }
                DB::rollBack();
                return pushResponse($result, 'Failed to send request');

            } catch (\Throwable $e) {
                logError($e->getMessage());
                DB::rollBack();
                return responseMessage(msg: STS_500, status: 204);
            }
        }

        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);

    }

    private function addOrEditItem(array $data){
        try {
            return RequestDetail::updateOrCreate(['pid' => $data['pid']] , $data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }
}
