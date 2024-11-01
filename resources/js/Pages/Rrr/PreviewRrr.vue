s<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head,Link } from '@inertiajs/vue3';
import { useHelper } from '@/composables/helper';
// MyComponent.vue
import html2pdf from 'html2pdf.js';

const { numberFormat } = useHelper()
const props = defineProps({
    data:Array
 })

 function generatePDF() {
            // Select the content you want to print
            const element = document.getElementById('content');

            // Options for html2pdf
            const opt = {
                margin:       1,
                filename:     props.data.customernames + ' RRR.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            // Generate the PDF
            html2pdf().from(element).set(opt).save();
        }
</script>

<template>
    <Head title="View RRR" />

    <MainLayout>

        <div class="p-5 bg-gray-100">
                
            <div class="overflow-auto rounded-lg shadow">

                
        <div class="card mb-3 p-2">
                   
                    <div class=" p-4"  id="content">
                        <div class="logo-base flex justify-between">
                            <div class="jed">
                                <img src="/files/images/jed logo.png" alt="JED  Logo" class="w-40 logo" id="logo">
                            </div>
                            <div class="momas">
                               <img src="/files/images/momas logo.jpg" class="w-40 rounded-lg" alt="Momas logo">

                            </div>
                        </div>
                        <p class="h2 text-center mb-2">MAP Demand For Payment</p>
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
                        <div class="float-right border m-2">
                    <button class="ms-4 bg-optimal text-white px-4 py-2 rounded mr-2" @click="generatePDF()">Print</button>
                </div>
                    </div>
            </div>
                
            </div>

            
        </div>

    </MainLayout>
</template>
