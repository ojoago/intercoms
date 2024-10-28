<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head,Link } from '@inertiajs/vue3';
import { useHelper } from '@/composables/helper';
const { numberFormat } = useHelper()
 defineProps({
    data:Array
 })
</script>

<template>
    <Head title="View RRR" />

    <MainLayout>

        <div class="p-5 bg-gray-100">
            <h1 class="text-xl text-center">
                MAP Demand
            </h1>
        <!-- <div class="float-end border m-2">
                        <button class="btn btn-primary" onclick="generatePDF()">Print</button>
                    </div>
                -->
            <div class="overflow-auto rounded-lg shadow">

                
        <div class="card mb-3 p-2">
                   
                    <div class="card-body"  id="content">
                        <div class="logo-base flex justify-between">
                            <div class="jed">
                                <img src="/files/images/jed logo.png" alt="JED  Logo" class="w-40 logo" id="logo">
                            </div>
                            <div class="t7">
                               <img src="/files/images/momas logo.jpg" class="w-40 rounded-lg" alt="Momas logo">

                            </div>
                        </div>
                        <p class="h2 text-center">MAP Demand For Payment</p>
                        <hr>
                        Account No.: {{data.accountnumber}} <br>
                        Account Name: {{data.customernames}} <br>
                        Address : {{data.address}} <br>

                        Meter Type: {{data.meter_recomended}} <br>
                        You are hereby required to pay the sum of <b>₦ {{numberFormat(data.price)}}</b> for the meter. <br>
                       
                        Remita Reference (RR) No.:  
                        <strong>{{data.reference}}</strong> <br>
                        Bank: Any Bank <br>
                        Branch: Any Branch <br>

                        <div class="text-center text-danger">
                            Please Note that, this RRR will expire on <b>{{ data.expiry_date }}</b>
                        </div>
                    </div>
                    <div class="card-footer text-danger">
                    </div>
            </div>
                
            </div>

            
        </div>

    </MainLayout>
</template>
