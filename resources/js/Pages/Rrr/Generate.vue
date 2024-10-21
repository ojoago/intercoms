<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Select1 from '@/Components/Select.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

let regions = [
    {"id":  "Jos Metro", "text": "Jos Metro"},
    {"id": "Gombe", "text": "Gombe"},
    {"id": "Bukuru", "text": "Bukuru"},
    {"id": "Bauchi", "text": "Bauchi"},
    {"id": "Azare", "text": "Azare"},
    {"id": "Makurdi", "text": "Makurdi"},
    {"id": "Otukpo", "text": "Otukpo"},
    {"id": "Gboko", "text": "Gboko"},
]

let phase = [
    {"id": "Single Phase", "text": "Single Phase"},
    {"id": "3 phase", "text": "Three Phase"},
]


const form = useForm({
    accountnumber:'',
    cust_names:'',
    gsm:'',
    email:'',
    meter_recomended:'',
    region:'',
    address:'',
});

const submit = () => {
    form.errors = {}
    form.post(route('generate'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <Head title="Generate RRR" />

    <MainLayout>

        <div class="py-4">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
             
        <form @submit.prevent="submit">
            <div class="flex justify-around items-start md:items-center p-2">
                <h2 class="text-2xl font-semibold">Generate RRR</h2>
            </div>
    
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4 md:py-8 md:px-8 text-sm">
              <div class="flex flex-col ">
                    <InputLabel for="accountnumber" value="Account Number" />
                    <TextInput
                        id="accountnumber"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.accountnumber"
                        placeholder="Account Number"
                        required
                    />
                    <InputError class="mt-2" :message="form.errors.accountnumber" />
              </div>

              <div class="flex flex-col ">
                 <InputLabel for="cust_names" value="Account Name" />
                    <TextInput
                        id="cust_names"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.cust_names"
                        placeholder="Account Name"
                        required
                    />
                    <InputError class="mt-2" :message="form.errors.cust_names" />
              </div>

              <div class="flex flex-col ">
                
                <InputLabel for="gsm" value="Phone Number" />
                    <TextInput
                        id="gsm"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.gsm"
                        placeholder="Phone Number"
                        required
                    />
                    <InputError class="mt-2" :message="form.errors.gsm" />
              </div>

              <div class="flex flex-col ">
                    <InputLabel for="email" value="Email address" />
                    <TextInput
                        id="email"
                        type="email"
                        class="mt-1 block w-full"
                        v-model="form.email"
                        placeholder="Email address"
                        required
                    />
                    <InputError class="mt-2" :message="form.errors.email" />       
              </div>
              <div class="flex flex-col ">
                    <Select1 label="Meter Recomended" placeholder="Select Option"
                        v-model="form.meter_recomended" :options="phase"/>
                          <InputError class="mt-2" :message="form.errors.meter_recomended" />   
              </div>

              <div class="flex flex-col ">
                 <Select1 label="Region" placeholder="Select Region"
                        v-model="form.region" :options="regions"/>
                          <InputError class="mt-2" :message="form.errors.region" />   
              </div>
		

		</div>

        <div class="flex flex-col gap-4  px-4 md:px-8 text-sm">
            <InputLabel for="email" value="Address" />
            
             <textarea class="form-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"  v-model="form.address" placeholder="Address"></textarea>
             <InputError class="mt-2" :message="form.errors.address" />
        </div>
            

            <div class="gap-4 py-4 px-4">
                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Submit
                </PrimaryButton>
            </div>

        </form>

            </div>
        </div>
    </MainLayout>
</template>
