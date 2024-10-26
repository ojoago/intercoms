<?php

namespace App\Http\Controllers\Staff;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class StaffController extends Controller
{
    //
    public function loadStaff(){
        try {
            $data = UserDetail::with('user')->with('origin')->with('lga')
            // ->where('region_pid',getRegionPid())
            ->get();
            return pushData($data, 'Users loaded');
        } catch (\Throwable $e) {
            logError($e->getMessage());
            
            return responseMessage(status: 204, data: [], msg: STS_500);

        }
    }

    public function createStaff(Request $request){
       
        $validator = Validator::make($request->all(),[
            'email' => 'required|unique:users',
            'firstname' => 'required',
            'lastname' => 'required',
            'username' => 'nullable|unique:user_details',
            'gender' => 'required',
            'role' => 'required',
            // 'religion' => 'required',
            'dob' => 'required',
            'state_of_origin' => 'required',
            'lga_of_origin' => 'required',
            // 'state_of_residence' => 'required',
            // 'lga_of_residence' => 'required',
            'address' => 'required',
            'file' => 'required',
        ]);

        if(!$validator->fails()){

            try {
                $data = [
                    // 'user_pid' =>,
                    'firstname' => $request->firstname ,
                    // 'staff_id',
                    'lastname' => $request->lastname,
                    'othername' => $request->othername ,
                    'username' => $request->username ,
                    'gsm' => $request->gsm ,
                    // 'path',
                    'gender' => $request->gender ,
                    // 'religion' => $request->religion ,
                    'dob' => $request->dob ,
                    'state_of_origin' => $request->state_of_origin ,
                    'lga_of_origin' => $request->lga_of_origin ,
                    // 'state_of_residence' => $request->state_of_residence,
                    // 'lga_of_residence' => $request->lga_of_residence,
                    'address' => $request->address ,
                    // 'region_pid' => getRegionPid() ,
                    'creator' => getUserPid()
                ];

                // 431
                $pwd = randomNumber(6);
                $userdata = [
                    'pid' => $request->pid ?? public_id(),
                    'type' => '431',
                    'email' => $request->email,
                    'password' => $pwd,
                ];
                
                DB::beginTransaction();
                $user = User::updateOrCreate(['pid' => $userdata['pid'] ],$userdata);

                if($user){
                    $mail = [
                        'email' => $userdata['email'],
                        'blade' => 'auth',
                        // 'blade' => 'message' ,
                        // 'username' => $data['username'],
                        'gsm' => $request->gsm ,
                        'password' => $pwd,
                        'subject' => 'Welcome to '. SERVICEPROVIDER
                    ];
                    sendMail($mail);
                }
                // if (!isset($request->pid)) {
                    $user->assignRole($request->role);
                // }

                if ($request->file('file')) {
                    $data['path'] = $request->file('file')->store('files/bio', 'public'); // Store in public/uploads
                }
                $data['user_pid'] = $user->pid;
                $result = UserDetail::updateOrCreate(['user_pid' => $user->pid] , $data);
                Db::commit();
                return pushResponse($result, "Staff Account Added");

            } catch (\Throwable $e) {
                logError($e->getMessage());
                DB::rollBack();
                return responseMessage(status: 204, data: [], msg: STS_500);
            }
        }

        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);

    }



    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'min:5', 'confirmed'],
        ]);

        if (!$validator->fails()) {
            try {
                $user = User::where('pid', getUserPid())->first();
                $user->password = $request->password;
                $result = $user->save();
                return pushResponse($result, "Password Updated");
            } catch (\Throwable $e) {
                logError($e->getMessage());
                return responseMessage(status: 204, data: [], msg: STS_500);
            }
        }
        return responseMessage(data: $validator->errors()->toArray(), status: 422, msg: STS_422);
    }


   
        
}
