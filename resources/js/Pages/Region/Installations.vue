<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';

// import InstallationFormTab from '@/Components/Tabs/InstallationFormTab.vue';
import InstallationListTab from '@/Components/Tabs/InstallationListTab.vue';
import InstalledTab from '@/Components/Tabs/InstalledTab.vue';

const tab = ref(1);
const currentTab = (tabNumber) => (tab.value = tabNumber);

</script>

<template>
    
     <Head title="Installations record" />
    <MainLayout>
        <div class="container mx-auto">
            <fieldset class="m-4 pb-4 border bg-gray-100 rounded-lg">
                <nav class=" text-sm flex justify-center bg-gray-200">
                    <a @click="currentTab(1)" class="inline-block px-4 py-2 cursor-pointer" :class="tab  === 1 && `active`" >Record From Schedule</a>
                    <a @click="currentTab(2)" class="inline-block px-4 py-2 cursor-pointer" :class="tab  === 2 && `active`">Installed</a>
                   <!--- <a @click="currentTab(2)" class="inline-block px-4 py-2 cursor-pointer" :class="tab  === 2 && `active`">Record Direct</a> -->
                </nav>

            
            <div class="p-3  bg-gra-200 ">

                <div v-if="tab === 1">
                    <fieldset class="border border-gray-300 rounded-lg p-4">
                        <legend class="text-lg font-medium text-left px-2">Schedule List</legend>
                        <InstallationListTab/>
    
                    </fieldset>
                </div>

                <!-- step 2 education -->
                <div v-if="tab === 2">
                    
                    <fieldset class="border border-gray-300 rounded-lg py-4 px-2">
                        <legend class="text-lg font-medium text-left px-1">Form</legend>
                        <InstalledTab/>
                    </fieldset>

                </div>
               
                
                </div>
           
            </fieldset>
            
        </div>
    </MainLayout>
</template>



<style  scoped>
 .active{
        @apply  border-optimal text-optimal font-bold border-b-2  bg-gray-100;    
    }
    .btn-sm{
        @apply   text-white font-bold py-1 px-2 rounded text-sm
    }
</style>