<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import TextInput from '@/Components/TextInput.vue';

import { Head,Link } from '@inertiajs/vue3';
import { ref } from 'vue';
    import store from '@/store';

 defineProps({
    lists:Array ,
    summary: Array
 })
 
 const lists = ref({})
 function loadItem(url = 'load-payment'){
        store.dispatch('getMethod', { url:url }).then((data) => {
        if (data?.status == 200) {
            lists.value = data.data;
        }
        }).catch(e => {
            console.log(e);
        })
    }
    loadItem()
</script>

<template>
    <Head title="View Payments" />

    <MainLayout>

        <div class="p-5 bg-gray-100">
            <h1 class="text-xl mb-">
                RRR List
            </h1>
            

            <div class="overflow-auto rounded-lg shadow">
              <!--  <div class="flex flex-row gap-1">
                    <div class="flex-1">
                        <TextInput
                        id="email"
                        type="text"
                        class="mt-1 block w-full"
                        placeholder="Account Number, Name, Phone number, RRR"
                        required
                    />
                    </div>
                    <div class="flex-1">
                        <TextInput
                        id="email"
                        type="date"
                        class="mt-1 block w-full"
                        placeholder="Account Number, Name, Phone number, RRR"
                        required
                    />
                    </div>
                    <div class="flex-1">
                        <TextInput
                        id="email"
                        type="date"
                        class="mt-1 block w-full"
                        placeholder="Account Number, Name, Phone number, RRR"
                        required
                    />
                    </div>
                   
                </div> -->
                <table class="w-full">
                    <thead class="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">S/N</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Account No.</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Names</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">PHone Number</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Email</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Meter type</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">RRR</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Status</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Date</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Amount</th>
                        
                           <!--<th class="p-3 text-sm font-semibold tracking-wide text-left  table-bordered"> 
                                 <font-awesome-icon class="fa-solid fas fa-cog"/>
                            </th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white" v-for="(rrr,loop) in lists?.data" :key="loop">
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ loop+1 }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.accountnumber }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.customernames }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.gsm }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.email }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.meter_recomended }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.reference }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.status }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.date }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ rrr.amount }}</td>
                            <!-- <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">
                                <Link :href="route('preview.rrr',{ rrr: rrr.reference })">
                                             <button class="p-1 oy-1 text-sm bg-green-500 text-white me-2 rounded inline-block">Preview</button>
                                </Link> 
                            </td> -->
                            
                            
                        </tr>
                    </tbody>
                </table>
                
            </div>

            
        </div>

    </MainLayout>
</template>
