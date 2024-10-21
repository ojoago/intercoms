<?php

namespace App\Http\Controllers\Dependency;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Region\Schedule;
use Illuminate\Validation\Rule;
use App\Imports\ImportScheduleList;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Admin\Meter\MeterType;
use App\Models\Admin\Meter\MeterBrand;
use App\Models\Admin\Feeder\TradingZone;
use Illuminate\Support\Facades\Validator;

class DependencyController extends Controller
{
    //

    public function index()
    {

        try {
            return Inertia::render('Admin/Dependency');
        } catch (\Throwable $e) {
            logError($e->getMessage());
        }
    }

    public function schedules()
    {

        try {
            $data = Schedule::
            // where('region_pid', getRegionPid())->
            paginate(20);
            return Inertia::render('Region/Schedule', ['data' => $data]);
        } catch (\Throwable $e) {
            logError($e->getMessage());
        }
    }

    public function scheduleList()
    {

        try {
            $data = Schedule::
            // where('region_pid', getRegionPid())->
            limit(50)->get();
            return pushData($data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
        }
    }
    public function searchScheduleList($query)
    {

        try {
            $data = Schedule::where('account_number', 'like', '%'.$query.'%')
            ->orWhere('account_name', 'like', '%'.$query.'%')
            ->orWhere('contact', 'like', '%'.$query.'%')->limit(15)->get();

            return pushData($data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
        }
    }

    public function uploadSchedule(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,xls,csv',
        ]);
        try {
            Excel::import(new ImportScheduleList, $request->file('file'));
            return back()->with('message', 'File imported successfully!');
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return back()->with('error', 'Failed to import file!');
        }
    }


    public function loadTradingZone()
    {

        try {
            $data = TradingZone::with('state')->get();
            return pushData($data, 'Zones loaded');
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return pushData([], STS_500);
        }
    }

    public function loadMeterTypes()
    {

        try {
            $data = MeterType::get();
            return pushData($data, 'Zones loaded');
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return pushData([], STS_500);
        }
    }

    public function loadMeterBrands()
    {

        try {
            $data = MeterBrand::get();
            return pushData($data, 'Zones loaded');
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return pushData([], STS_500);
        }
    }

    public function createTradingZone(Request $request)
    {

        $validator =  Validator::make($request->all(), [
            'state_id' => 'required',
            'zone' => ['required', 'string', Rule::unique('trading_zones')->where(function ($q) use ($request) {
                $q->where('pid', '<>', $request->pid);
            })],
        ]);

        if (!$validator->fails()) {
            try {
                $data = [
                    'zone' => $request->zone,
                    'state_id' => $request->state_id,
                    'pid' => $request->pid ?? public_id(),
                ];
                $result = $this->addOrEditZone($data);
                return pushResponse($result, $request->pid ? 'Trading Zone Updated' : 'Trading Zone Added');
            } catch (\Throwable $e) {
                logError($e->getMessage());
                return responseMessage(status: 204, data: [], msg: STS_500);
            }
        }
        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);
    }

    public function createMeterBrand(Request $request)
    {

        $validator =  Validator::make($request->all(), [
            'brand' => ['required', 'string', Rule::unique('meter_brands')->where(function ($q) use ($request) {
                $q->where('id', '<>', $request->id);
            })],
        ]);

        if (!$validator->fails()) {
            try {
                $data = [
                    'brand' => strtoupper($request->brand),
                    'id' => $request->id ?? null,
                ];
                $result = $this->addOrEditBrand($data);
                return pushResponse($result, $request->pid ? 'Meter Brand Updated' : 'Meter Brand Added');
            } catch (\Throwable $e) {
                logError($e->getMessage());
                return responseMessage(status: 204, data: [], msg: STS_500);
            }
        }
        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);
    }

    public function createMeterType(Request $request)
    {

        $validator =  Validator::make($request->all(), [
            'type' => ['required', 'string', Rule::unique('meter_types')->where(function ($q) use ($request) {
                $q->where('id', '<>', $request->id);
            })],
        ]);

        if (!$validator->fails()) {
            try {
                $data = [
                    'type' => strtoupper($request->type),
                    'id' => $request->id ?? null,
                ];
                $result = $this->addOrEditType($data);
                return pushResponse($result, $request->pid ? 'Meter Type Updated' : 'Meter Type Added');
            } catch (\Throwable $e) {
                logError($e->getMessage());
                return responseMessage(status: 204, data: [], msg: STS_500);
            }
        }
        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);
    }


    private function addOrEditZone(array $data)
    {
        try {
            return TradingZone::updateOrCreate(['pid' => $data['pid']], $data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }

    private function addOrEditBrand(array $data)
    {
        try {
            return MeterBrand::updateOrCreate(['id' => $data['id']], $data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }

    private function addOrEditType(array $data)
    {
        try {
            return MeterType::updateOrCreate(['id' => $data['id']], $data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }

}
