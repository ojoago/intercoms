<script setup>

    import MainLayout from '@/Layouts/MainLayout.vue';
    import { Head } from '@inertiajs/vue3';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import TextInput from '@/Components/TextInput.vue';
    import SelectComponent from '@/Components/Select.vue';
    import store from '@/store';
    import { ref } from 'vue';
        import Modal from '@/Components/Modal.vue';
   
  import { formatError } from "@/composables/formatError";
    const { transformValidationErrors } = formatError()

    const showModal = ref(false)
    const closeModal = () => {
        showModal.value = false;
        resetForm()
    }
    const genders = [
        {"id":  "Female", "text": "Female"},
        {"id": "Male", "text": "Male"},
    ]
    const status = [
        {"id":  "Single", "text": "Single"},
        {"id": "Married", "text": "Married"},
    ]
    const religion = [
        {"id":  "Islam", "text": "Islam"},
        {"id": "Christainity", "text": "Christainity"},
        {"id": "Other", "text": "Other"},
    ]
    const staffForm = ref({
        firstname:'', 
        lastname:'' , 
        othername:'' , 
        file:'' , 
        gender:'', 
        religion:'' , 
        role:'' , 
        dob:'' , 
        gsm:'' , 
        username:'' , 
        state_of_origin:'' ,
        lga_of_origin:'' , 
        address:'',
        errors:{}
    })

    loadState()
     const states = ref({})
    function loadState() {
        store.dispatch('loadDropdown', 'states').then(({ data }) => {
            states.value = data;
        }).catch(e => {
            console.log(e);
        })
    }

    const origin_lgas = ref({})
    function originLga(id) {
        store.dispatch('loadDropdown', 'state-lga/'+id).then(({ data }) => {
            origin_lgas.value = data;
        }).catch(e => {
            console.log(e);
        })
    }

    const residenceLga = ref({})
    function loadResidentLga(id) {
        store.dispatch('loadDropdown', 'state-lga/'+id).then(({ data }) => {
            residenceLga.value = data;
        }).catch(e => {
            console.log(e);
        })
    }

    const roles = ref({})
    function loadRoles() {
        store.dispatch('loadDropdown', 'roles/').then(({ data }) => {
            roles.value = data;
        }).catch(e => {
            console.log(e);
        })
    }
    loadRoles()

     function createStaff() {
        staffForm.value.errors = {}
        let headers = {
                        'Content-Type': 'multipart/form-data',
                    }
        store.dispatch('postMethod', { url: '/staff', param: staffForm.value ,headers:headers}).then((data ) => {
        if (data?.status == 422) {
            staffForm.value.errors = transformValidationErrors(data.data)
        } else if (data?.status == 201) {
            loadStaff()
            closeModal()
        }
        }).catch(e => {
            console.log(e);
        })
    }

    const resetForm = () => {
      staffForm.value = {
        firstname:'', 
        // 'staff_id' ,
        lastname:'' , 
        othername:'' , 
        file:'' , 
        gender:'', 
        religion:'' , 
        role:'' , 
        dob:'' , 
        state_of_origin:'' ,
        lga_of_origin:'' , 
        state_of_residence:'' , 
        lga_of_residence: '', 
        address:'',
        errors:{}
      }
    };

    const updateUser = (user) => {
        originLga(user?.origin?.id)
      staffForm.value = {
        firstname:user.firstname, 
        lastname:user.lastname , 
        othername:user.othername , 
        username:user.username , 
        file:'' , 
        gender:user.gender, 
        dob:user.dob, 
        gsm:user.gsm, 
        email:user?.user?.email ,
        state_of_origin:user?.origin?.id ,
        lga_of_origin:user?.lga?.id , 
        address:user.address,
        errors:{}
      }
        showModal.value = true;

    };
//        marital_status
// gender
// religion
// pob
// dob
// state_of_origin
// lga_of_origin
// state_of_residence
// lga_of_residence
// address   

    const staff = ref({})
    function loadStaff(url = 'load-staff'){
        store.dispatch('getMethod', { url:url }).then((data) => {
        if (data?.status == 200) {
            staff.value = data.data;
        }
        }).catch(e => {
            console.log(e);
        })
    }
    loadStaff()
    let count = 0;

</script>

<template>
    <MainLayout>
        <div class="px-4 py-2">

        <Modal :show="showModal" @close="closeModal" max-width="4xl" title="Staff Bio Data" @submit="createStaff">
           <div class="px-4 py-2">
            <form >
                           
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 px-4 md:py-8 md:px-8 text-sm">
                                <div class="flex flex-col ">
                                    <InputLabel for="first_name" value="First Name" />
                                        <TextInput
                                            id="first_name"
                                            type="text"
                                            class="mt-1 block w-full"
                                            v-model="staffForm.firstname"
                                            placeholder="First Name"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.firstname" />
                                </div>
                                
                                <div class="flex flex-col ">
                                    <InputLabel for="last_name" value="Last Name" />
                                        <TextInput
                                            id="last_name"
                                            type="text"
                                            class="mt-1 block w-full"
                                            v-model="staffForm.lastname"
                                            placeholder="Last Name"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.lastname" />
                                </div>

                                <div class="flex flex-col ">
                                        <InputLabel for="nin" value="Othername" />
                                        <TextInput
                                            id="nin"
                                            type="text"
                                            class="mt-1 block w-full"
                                            v-model="staffForm.othername"
                                            placeholder="othername"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.othername" />
                                </div>

                                <div class="flex flex-col ">
                                        <InputLabel for="email" value="Email address" />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            class="mt-1 block w-full"
                                            v-model="staffForm.email"
                                            placeholder="Email address"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.email" />       
                                </div>

                                <div class="flex flex-col ">
                                        <InputLabel for="email" value="Username" />
                                        <TextInput
                                            id="username"
                                            type="text"
                                            class="mt-1 block w-full"
                                            v-model="staffForm.username"
                                            placeholder="e.g Yemi"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.username" />       
                                </div>

                                

                                <div class="flex flex-col ">
                                        <InputLabel for="gsm" value="Phone Number" />
                                        <TextInput
                                            id="gsm"
                                            type="text"
                                            class="mt-1 block w-full"
                                            v-model="staffForm.gsm"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.gsm" />       
                                </div>

                                <div class="flex flex-col ">
                                            <SelectComponent v-model="staffForm.gender" label="Select Gender" placeholder="Select Gender"
                                         :options="genders"/>
                                        <InputError class="mt-2" :message="staffForm.errors.gender" />   
                                </div>
                               

                                <div class="flex flex-col ">
                                        <InputLabel for="dob" value="Date of Birth" />
                                        <TextInput
                                            id="dob"
                                            type="date"
                                            class="mt-1 block w-full"
                                            v-model="staffForm.dob"
                                            placeholder="Date of Birth"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.dob" />       
                                </div>

                                <div class="flex flex-col ">
                                        <InputLabel for="image" value="Image" />
                                        <TextInput
                                            id="image"
                                            type="file"
                                            class="mt-1 block w-full"
                                            @input="staffForm.file = $event.target.files[0]"
                                            placeholder="Date of Birth"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.file" />       
                                </div>

                                <div class="flex flex-col ">
                                    <InputLabel for="dob" value="State of Origin" />  
                                     <select v-model="staffForm.state_of_origin" @change="originLga($event.target.value)" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                        <option value="" selected>Choose State</option>
                                        <option v-for="option in states" :key="option.id" :value="option.id">
                                            {{ option.text }}
                                        </option>
                                    </select> 
                                    <InputError class="mt-2" :message="staffForm.errors.state_of_origin" />  
                                </div>

                                <div class="flex flex-col ">
                                    
                                    <SelectComponent v-model="staffForm.lga_of_origin" label="Select LGA of Origin" placeholder="Select Option"
                                         :options="origin_lgas"/>
                                            <InputError class="mt-2" :message="staffForm.errors.lga_of_origin" />   
                                </div>
                                <div class="flex flex-col ">
                                    
                                    <SelectComponent v-model="staffForm.role" label="Select Staff Role" placeholder="Select Role"
                                         :options="roles"/>
                                            <InputError class="mt-2" :message="staffForm.errors.role" />   
                                </div>

                        </div>

                        <!--
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4  px-4 md:px-8 text-sm">
                            

                            <div class="flex flex-col ">
                                <InputLabel for="dob" value="State of Residence" />
                                <select v-model="staffForm.state_of_residence" @change="loadResidentLga($event.target.value)" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" >
                                    <option value="" selected>Choose State</option>
                                    <option v-for="option in states" :key="option.id" :value="option.id">
                                        {{ option.text }}
                                    </option>
                                </select> 
                                <InputError class="mt-2" :message="staffForm.errors.state_of_residence" />   
                            </div>

                            <div class="flex flex-col ">
                               
                                <SelectComponent v-model="staffForm.lga_of_residence" label="Residence LGA" placeholder="Select Residence LGA"
                                         :options="residenceLga"/>
                                        <InputError class="mt-2" :message="staffForm.errors.lga_of_residence" />   
                            </div>
                       
                             <div class="flex flex-col ">
                                        <InputLabel for="dob" value="Passport" />
                                        <TextInput
                                            id="dob"
                                            type="file"
                                            class="mt-1 block w-full"
                                            @input="staffForm.passport = $event.target.files[0]"
                                            placeholder="Date of Birth"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.passport" />       
                                </div>
                                 <div class="flex flex-col ">
                                        <InputLabel for="dob" value="NIN Image" />
                                        <TextInput
                                            id="dob"
                                            type="file"
                                            class="mt-1 block w-full"
                                            @input="staffForm.nin_path = $event.target.files[0]"
                                            placeholder="Date of Birth"
                                            required
                                        />
                                        <InputError class="mt-2" :message="staffForm.errors.nin_path" />       
                                </div> 
                            </div>
                        -->

                        <div class="flex flex-col gap-4  px-4 md:px-8 text-sm">
                            <InputLabel for="email" value="Contact Address" />
                            
                            <textarea class="staffForm-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"  v-model="staffForm.address" placeholder="Address"></textarea>
                            <InputError class="mt-2" :message="staffForm.errors.address" />
                        </div>
                            
                        <!--
                            <div class="gap-4 py-4 px-4">
                                <button type="submit" class="ms-4 flex justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 
                                            focus-visible:outline-offset-2  bg-indigo-600  hover:bg-indigo-500 focus-visible:outline-indigo-600" :class="{ 'opacity-25': staffForm.processing }" :disabled="staffForm.processing">
                                    Submit
                                </button>
                            </div> -->

                </form>

           </div>
        </Modal>
        
        <button @click="showModal = true " class="bg-optimal text-white p-1 mb-2 rounded">Add Staff</button>

                 <div class="overflow-auto rounded-lg shadow ">
                <table class="w-full ">
                    <thead class="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th width ="5%" class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">S/N</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Names </th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Email</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Username</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Role</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Phone Number</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Gender</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Date Of Birth</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">State </th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">LGA </th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Addrees </th>
                            <th width ="5%"  class="p-3 text-sm font-semibold tracking-wide text-left table-bordered"> 
                                <font-awesome-icon icon="fa-solid fa fa-gear"/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr class="bg-white" v-for="(list,loop) in staff" :key="loop">
                            
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ loop+1 }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list.lastname }} {{ list.firstname }} {{ list.othername }} </td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list?.user?.email }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list.username }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list?.user?.roles[0]?.name  }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list.gsm }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list.gender }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list.date }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list.origin?.state }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list.lga?.lga }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ list.address }}</td>
                           <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered " >
                            <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded text-sm" @click="updateUser(list)">
                                Edit
                            </button>

                            </td>
                        </tr>
                    </tbody>
                </table>
               
                
        </div>
        </div>
    </MainLayout>
</template>


<style  scoped>

</style>