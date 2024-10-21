<?php

namespace App\Http\Controllers\Region;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Admin\Feeder\Feeder11;
use App\Models\Admin\Feeder\Feeder33;
use Illuminate\Support\Facades\Validator;

class FeederController extends Controller
{
    //

    public function index(){

        return Inertia::render('Admin/Feeders');

    }

    
    public function load33kvFeeder(){

        try {
            $data = Feeder33::with('zone')->get();
            return pushData($data, '33 kv feeders loaded');
        } catch (\Throwable $th) {
            //throw $th;
        }

    }
    
    public function load11kvFeeder(){

        try {
            $data = Feeder11::with('zone')->with('feeder')->get();
            return pushData($data, '11 kv feeders loaded');
        } catch (\Throwable $th) {
            //throw $th;
        }

    }


    public function create33kvFeeder(Request $request){

        $validator =  Validator::make($request->all(), [
            'state' => 'required',
            'region' => 'required',
            'feeder.*.name' => 'required|string',
        ]);

        if (!$validator->fails()) {
            try {
                $result = false;
                $count = count($request->feeder);
                if ($count > 0) {
                    for ($i = 0; $i < $count; $i++) {
                        $data  = [
                            'name' => $request->feeder[$i]['name'],
                            'id' => $request->feeder[$i]['id'] ?? null ,
                            'pid' => public_id(),
                            'creator' => getUserPid(),
                            'zone_pid' => $request->region,
                        ];
                        $result = $this->addOrEditFeeder33($data);
                    }
                }
                return pushResponse($result, "Feeder(s) Added");
            } catch (\Throwable $e) {
                logError($e->getMessage());
                return responseMessage(status: 204, data: [], msg: STS_500);
            }
        }
        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);
    }

    public function create11kvFeeder(Request $request){

        $validator =  Validator::make($request->all(), [
            'state_id' => 'required',
            'feeder33' => 'required',
            'zone_pid' => 'required',
            'feeder.*.name' => 'required|string',
        ]);

        if (!$validator->fails()) {
            try {
              $result = false;
                $count = count($request->feeder);
                if ($count > 0) {
                    for ($i = 0; $i < $count; $i++) {
                        $data  = [
                            'name' => $request->feeder[$i]['name'],
                            'pid' => $request->feeder[$i]['pid'] ?? public_id(),
                            'creator' => getUserPid(),
                            'zone_pid' => $request->zone_pid,
                            'state_id' => $request->state_id,
                            'feeder_33_pid' => $request->feeder33,
                        ];
                        $result = $this->addOrEditFeeder11($data);
                    }
                }
                return pushResponse($result, "Feeder(s) Added");
            } catch (\Throwable $e) {
                logError($e->getMessage());
                return responseMessage(status: 204, data: [], msg: STS_500);
            }
        }
        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);
    }


    private function addOrEditFeeder11(array $data){
        try {
            return Feeder11::updateOrCreate(['pid' => $data['pid']], $data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }
    private function addOrEditFeeder33(array $data){
        try {
            return Feeder33::updateOrCreate(['id' => $data['id']], $data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }

}
