<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head,Link } from '@inertiajs/vue3';
 defineProps({
    lists:Array ,
    summary: Array
 })
</script>

<template>
    <Head title="View Payments" />

    <MainLayout>

        <div class="p-5 bg-gray-100">
            <h1 class="text-xl mb-">
                RRR List
            </h1>

            <div class="overflow-auto rounded-lg shadow">

                <table class="w-full">
                    <thead class="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">S/N</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Account No.</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Names</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">gsm</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Meter type</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">RRR</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Amount</th>
                        
                            <th class="p-3 text-sm font-semibold tracking-wide text-left"> 
                                <i class="fa fa-cog"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white" v-for="(rrr,loop) in lists?.data" :key="loop">
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ loop+1 }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.accountnumber }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.customernames }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.gsm }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.email }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.meter_recomended }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.reference }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.status }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.date }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">{{ rrr.amount }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left">
                                <Link :href="route('preview.rrr',{ rrr: rrr.reference })">
                                             <button class="p-1 oy-1 text-sm bg-green-500 text-white me-2 rounded inline-block">Preview</button>
                                </Link>
                            </td>
                            
                            
                        </tr>
                    </tbody>
                </table>
                
            </div>

            
        </div>

    </MainLayout>
</template>
