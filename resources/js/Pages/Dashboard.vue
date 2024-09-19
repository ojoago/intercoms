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

        <div class="py-12">
             {{ data }}
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
