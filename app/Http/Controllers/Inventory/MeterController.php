<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Imports\ImportMeterList;
use App\Models\Installation\Installation;
use App\Models\Inventory\MeterList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class MeterController extends Controller
{
    // names of t7 item
    public function index(){
        try {
            $data = MeterList::whereIn('status',[1,2])->paginate(20);
            return Inertia::render('Inventory/MeterList',['data' => $data]);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return pushData([],ERR_EMT);
        }
    }

  
    public function addMeterList(Request $request){
        $request->validate([
            'file' => 'required|mimes:xlsx,xls,csv',
        ]);
        try {
            Excel::import(new ImportMeterList,$request->file('file'));
            return back()->with('message', 'File imported successfully!');
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return back()->with('error', 'Failed to import file!');
        }
    }

    public function installedList(){
        try {
            

            $data = Installation::with('origin')->with('feeder11kv')->with('feeder33kv')->latest()->limit(100)->get();
            return pushData($data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return pushData([],STS_500);
        }
    }

    public function RecordForm(Request $request){
        $validator = Validator::make($request->all(),[
            'meter_number' => 'required' ,
            'preload' => 'required' ,
            'state' => 'required',
            'doi' => 'nullable|date',
            'dt_name' => 'required',
            'dt_code' => 'required',
            'dt_type' => 'required',
            'upriser' => 'required|numeric',
            'pole' => 'required|numeric',
            'tariff' => 'required',
            'advtariff' => 'required',
            'fullname' => 'required',
            'gsm' => 'required|digits:11',
            'email' => 'nullable',
            'premises' => 'required',
            'phase' => 'required',
            'address' => 'required',
            'remark' => 'required',
            'feeder_33kv' => 'required',
            'feeder_11kv' => 'required',
            'meter_type' => 'required',
            'meter_brand' => 'required',
            // 'meter_tech' => 'required',
            'estimated' => 'required',
            'account_no' => 'required',
            'business_unit' => 'required',
            'x_cordinate' => 'required',
            'y_cordinate' => 'required',
            // 'installer' => 'required',
            'seal' => 'required|numeric',
        ]);



        if (!$validator->fails()) {
            try {
                $data  = [
                    'pid' => $request->pid ?? public_id(),
                    'meter_number' => $request->meter_number ,
                    'preload' => $request->preload ,
                    'state' => $request->state ,
                    'doi' => $request->doi ?? justDate() ,
                    'dt_name' => $request->dt_name ,
                    'dt_type' => $request->dt_type ,
                    'upriser' => $request->upriser ,
                    'pole' => $request->pole ,
                    'tariff' => $request->tariff ,
                    'advtariff' => $request->advtariff ,
                    'fullname' => $request->fullname ,
                    'gsm' => $request->gsm ,
                    'email' => $request->email ,
                    'premises' => $request->premises ,
                    'phase' => $request->phase ,
                    'address' => $request->address ,
                    'remark' => $request->remark ,
                    'feeder_33kv' => $request->feeder_33kv ,
                    'feeder_11kv' => $request->feeder_11kv ,
                    'meter_type' => $request->meter_type ,
                    'meter_brand' => $request->meter_brand ,
                    'meter_tech' => $request->meter_tech ,
                    'estimated' => $request->estimated ,
                    'account_no' => $request->account_no ,
                    'business_unit' => $request->business_unit ,
                    'x_cordinate' => $request->x_cordinate ,
                    'y_cordinate' => $request->y_cordinate ,
                    'installer' => $request->installer ?? 'i' ,
                    // 'supervisor',
                    // 'rf_channel',
                    // 'din',
                    'seal' => $request->seal ,
                    'dt_code' => $request->dt_code ,
                    'creator' => getUserPid() 
                ];
                DB::beginTransaction();
                MeterList::where('meter_number',$request->meter_number)->update(['status' => 3]);

                $result = $this->addOrEditRecord($data);
                if($result){
                    DB::commit();
                    return pushResponse($result, $request->pid ? 'Record updated' : "Form recorded");
                }
                DB::rollBack();
                return pushResponse($result, $request->pid ? 'Record updated' : "Form recorded");
                
            } catch (\Throwable $e) {
                logError($e->getMessage());
                DB::rollBack();
                return responseMessage(status: 204, data: [], msg: STS_500);
            }
        }
        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);
    }

    
    private function addOrEditRecord(array $data){

        try {
            return Installation::updateOrCreate(['pid' => $data['pid']] ,$data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }

}
