<template>
  <div v-if="notification.status" id="toastNotifcation" class="fixed max-w-[400px] top-[60px] right-1  py-2 px-4 text-white animate-fade-in-down" :class="notification.type">
      {{ notification.message }}
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store';

  const store = useStore();

 defineProps({
        bg:{
            type: String ,
            default:'success' ,
            validator: prop =>['primary','secondary','bordered','danger','success','warning'].includes(prop)
        }
    })
  const notification = computed(() => store?.notification);

//   if(store.notification.status){
//     setTimeout(() => {
//         store.notification.status = false;
//     }, 10000)
//   }
   

//     let timer;
//     let remainingTime = 5000; // 5 seconds
//     let startTime;

// function startTimer() {
//     startTime = Date.now();
//     timer = setTimeout(() => {
//         store.notification.status = false;
//     }, remainingTime);
// }

// function pauseTimer() {
//     clearTimeout(timer);
//     remainingTime -= Date.now() - startTime;
// }
// onMounted(() => {
//     document.addEventListener('DOMContentLoaded', () => {
//     const element = document.getElementById('toastNotifcation');
//     if (element) {
//         element.addEventListener('mouseover', pauseTimer);
//         element.addEventListener('mouseout', startTimer);
//         }
//     });
// })


// // Start the timer initially
// startTimer();
    
</script>

<style scoped>
  
    .primary{
        @apply bg-indigo-600 text-white  hover:bg-indigo-500 focus-visible:outline-indigo-600;
    }
    .secondary{
        @apply bg-gray-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600;
    }
    .bordered{
        @apply bg-white text-indigo-800 border border-indigo-500 hover:bg-gray-50 focus-visible:outline-indigo-600;
    }
    .warning{
        @apply bg-yellow-400 text-white hover:bg-red-500 focus-visible:outline-red-600;
    }
    .danger{
        @apply bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600;
    }
    .success{
        @apply bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600
    }
</style>