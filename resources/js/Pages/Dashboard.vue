<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
defineProps({
    data:Array
})
</script>

<template>
    <Head title="Dashboard" />

    <MainLayout>
         
        <div class="py-2 pt-4 bg-white">
                 <h1 class="px-6 py-2 rounded-lg text-xl m-4 border">
                Dashboard
            </h1>
             <div class="grid grid-cols-1  md:grid-cols-4 gap-1">

                <div class="p-3 m-1 shadow-md rounded-md border ">
                    <h2 class="text-xl font-bold text-center text-gray-800">Today</h2>
                    <div class="mt-4 flex justify-between text-gray-600">
                        <div class="flex flex-col">
                            <h3 class="text-sm font-semibold text-gray-800">RRR</h3>
                            <strong class="text-lg font-bold text-gray-900"># {{ data.todayRRR }}</strong>
                        </div>
                        <div class="flex flex-col">
                            <h3 class="text-sm font-semibold text-gray-800">Payment</h3>
                             <strong class="text-lg font-bold text-gray-900"># {{ data.todayPayment }}</strong>
                             <strong class="text-sm text-optimal font-bold">Amount: {{ data.paidTodayAmount }}</strong>
                        </div>
                    </div>

                   <!-- <div class="mt-4">
                    <a href="#" class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700">
                        Learn More
                    </a>
                    </div> -->
                </div>
                <div class="p-3 m-1 shadow-md rounded-md border ">
                    <h2 class="text-xl font-bold text-center text-gray-800">This Month</h2>
                    <div class="mt-4 flex justify-between text-gray-600">
                        <div class="flex flex-col">
                            <h3 class="text-sm font-semibold text-gray-800">RRR</h3>
                            <strong class="text-lg font-bold text-gray-900"># {{ data.rrrCurrentMonth }}</strong>
                        </div>
                        <div class="flex flex-col">
                            <h3 class="text-sm font-semibold text-gray-800">Payment</h3>
                            <strong class="text-sm font-bold text-gray-900"># {{ data.paidCurrentMonth }}</strong>
                            <strong class="text-sm text-optimal font-bold">Amount: {{ data.paidCurrentMonthAmount }}</strong>

                        </div>
                    </div>
                </div>
                <div class="p-3 m-1 shadow-md rounded-md  border">
                    <h2 class="text-xl font-bold text-center text-gray-800">All</h2>
                    <div class="mt-4 flex justify-between text-gray-600">
                        <div class="flex flex-col">
                            <h3 class="text-sm font-semibold text-gray-800">RRR</h3>
                            <strong class="text-lg font-bold text-gray-900"># {{ data.all_rrr }}</strong>
                        </div>
                        <div class="flex flex-col">
                            <h3 class="text-sm font-semibold text-gray-800">Payment</h3>
                             <strong class="text-lg font-bold text-gray-900"># {{ data.all_paid }}</strong>
                             <strong class="text-sm text-optimal font-bold ">Amount: {{ data.allPaidAmount }}</strong>
                        </div>
                    </div>
                </div>
                <div class="p-3 m-1 shadow-md rounded-md  border">
                    <h2 class="text-xl font-bold text-center text-gray-800">Meter</h2>
                    <div class="mt-4 flex justify-between text-gray-600">
                        <div class="flex flex-col">
                            <h3 class="text-sm font-semibold text-gray-800">Single Phase</h3>
                            <strong class="text-lg font-bold text-gray-900"># {{ data._1q_count }}</strong>
                            <strong class="text-sm text-optimal font-bold">Amount: {{ data._1q_amount }}</strong>
                        </div>
                        <div class="flex flex-col">
                            <h3 class="text-sm font-semibold text-gray-800">3 Phase</h3>
                             <strong class="text-lg font-bold text-gray-900"># {{ data._3q_count }}</strong>
                             <strong class="text-sm text-optimal font-bold">Amount: {{ data._3q_amount }}</strong>
                        </div>
                    </div>
                </div>
                <div class="p-3 m-1 shadow-md rounded-md border ">
                    <h2 class="text-xl font-bold text-gray-800">Card Title</h2>
                    <p class="mt-2 text-gray-600">
                    This is a basic card component built using Tailwind CSS. You can add text, images, and buttons here to create a useful UI element.
                    </p>

                    <div class="mt-4">
                    <a href="#" class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700">
                        Learn More
                    </a>
                    </div>
                </div>
                <div class="p-3 m-1 shadow-md rounded-md  ">
                    <h2 class="text-xl font-bold text-gray-800">Card Title</h2>
                    <p class="mt-2 text-gray-600">
                    This is a basic card component built using Tailwind CSS. You can add text, images, and buttons here to create a useful UI element.
                    </p>

                    <div class="mt-4">
                    <a href="#" class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700">
                        Learn More
                    </a>
                    </div>
                </div>

             </div>
            

        </div>
    </MainLayout>
</template>
