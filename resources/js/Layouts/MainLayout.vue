<script setup>
    import SideBar from '@/Components/SideBar.vue';
    import Footer from '@/Components/Footer.vue';
    import AuthHeader from '@/Components/AuthHeader.vue';
    import Flash from '@/Components/Flash.vue';
    import SpinnerLoader from '@/components/SpinnerLoader.vue';
    import { onMounted } from 'vue';

    
    onMounted(() => {
        let navName = document.querySelectorAll(".nav-link");
        for (let i = 0; i < navName.length; i++) {
            navName[i].addEventListener("click", () => {
                if(window.innerWidth < 756){
                    sideBar.classList.toggle('showSidebar')
                }
            })
        }
        let sidebarBtn = document.querySelector('#toggleSideBar')
        let sideBar = document.querySelector('.sideBar')
        sidebarBtn.addEventListener('click', () => {
            sideBar.classList.toggle('showSidebar')
        })
    })

</script>

<template>
    <!-- component -->
    <div class="flex h-screen">
        <div class="flex-1 flex flex-col overflow-hidden">
           
            <AuthHeader/>

            <div class="flex h-full  bg-[#f1f1f1] relative">
                <SideBar/>
                <main class="flex min-h-[90vh] flex-col w-full overflow-x-hidden overflow-y-auto mb-14">
                    <div class="flex w-full mx-auto px-6 py-1">
                        <div class="flex flex-col w-full h-full">
                            <Flash/>
                            <SpinnerLoader/>
                            <slot/>
                        </div>
                    </div>
                    <Footer class="mt-auto"/>
                </main>

                 <!-- <nav class="flex w-72 h-full bg-yellow-400">
                    <div class="w-full flex mx-auto px-6 py-8">
                        <div
                            class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                            Rightbar</div>
                    </div>
                </nav>  -->
            </div>
        </div>
    </div>

   
</template>



<style scoped>
 ::-webkit-scrollbar {
     width: 5px;
     height: 5px;
 }

 ::-webkit-scrollbar-thumb {
     background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);
     border-radius: 10px;
 }

 ::-webkit-scrollbar-thumb:hover {
     background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);
 }

 ::-webkit-scrollbar-track {
     background: #ffffff;
     border-radius: 10px;
     box-shadow: inset 7px 10px 12px #f0f0f0;
 }
</style>