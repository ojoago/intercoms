<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import Select1 from '@/Components/Select.vue';
let phase = [
    {"id": "Single Phase", "text": "Single Phase"},
    {"id": "3 phase", "text": "Three Phase"},
]

const form = useForm({
    phase: '',
    price: '',
});

const submit = () => {
    form.post(route('set.price'), {
        onFinish: () => form.reset(),
    });
};

defineProps({
    data:Array
})
</script>

<template>
    <MainLayout>
        <Head title="Set Price" />
        <div class="max-w-7xl mxauto px-4 sm:px-6 lg:px-8">
           <div class="flex justify-around items-start md:items-center p-2">
                    <h2 class="text-2xl font-semibold">Set Meter Price</h2>
                </div>
            <div class="flex ">
                 <form @submit.prevent="submit" class="w-1/2">
                  
                    <div class="mt-4 flex flex-col ">
                       <Select1 label="Meter Type" placeholder="Select Option"
                        v-model="form.phase" :options="phase" required/>

                        <InputError class="mt-2" :message="form.errors.phase" />
                    </div>

                    <div class="mt-4">
                        <InputLabel for="price" value="Price" />

                        <TextInput
                            type="number" step="0.1"
                            class="mt-1 block w-full"
                            v-model="form.price"
                            placeholder="e.g 112000"
                            required
                        />

                        <InputError class="mt-2" :message="form.errors.price" />
                    </div>


                    <div class="flex items-center justify-end mt-4">

                        <button class="ms-4 layout primary" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Submit
                        </button>
                    </div>
                </form>
               <div class="w-1/2">
                 <table class="w-full m-4">
                    <thead class="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">S/N</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">TYPE</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">&#8358; PRICE</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white" v-for="(rrr,loop) in data" :key="loop">
                            <td class="p-3 text-sm font-semibold tracking-wide text-left border border-gray-400 px-4 py-2">{{ loop+1 }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left border border-gray-400 px-4 py-2">{{ rrr.phase }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left border border-gray-400 px-4 py-2">{{ rrr.price }}</td>
                        </tr>
                    </tbody>
                </table>
               </div>
                
            </div>
            </div>
        
    </MainLayout>
</template>

<style scoped>

.layout{
        @apply  flex  justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2   ;
    }
    .primary{
        @apply bg-indigo-600 text-white  hover:bg-indigo-500 focus-visible:outline-indigo-600;
    }
    .secondary{
        @apply bg-gray-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600;
    }
    .bordered{
        @apply bg-white text-indigo-800 border border-indigo-500 hover:bg-gray-50 focus-visible:outline-indigo-600;
    }
    .danger{
        @apply bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600;
    }
    .success{
        @apply bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600
    }

</style>
