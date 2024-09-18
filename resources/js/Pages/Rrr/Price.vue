<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import Select1 from '@/Components/Select.vue';
let phase = [
    {"id": "Single Phase", "name": "Single Phase"},
    {"id": "3 phase", "name": "Three Phase"},
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
</script>

<template>
    <MainLayout>
        <Head title="Set Price" />
        <div class="max-w-7xl mxauto px-4 sm:px-6 lg:px-8">
           
            <div class="flex items-center justify-center">
                 <form @submit.prevent="submit" class="w-1/2">
                  <div class="flex justify-around items-start md:items-center p-2">
                    <h2 class="text-2xl font-semibold">Set Meter Price</h2>
                </div>
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

                        <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
        
    </MainLayout>
</template>
