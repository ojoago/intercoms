<template>
  <div>
    <div class="modal-overlay" v-if="spin.status">
          <div calss="spinner flex flex-col  bg-indigo-600">
            <span class="loader"></span>
            <div id="spinner-text">{{spin.message}}</div> 
          </div>
      </div>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store';
  const store = useStore();
  const spin = computed(() => store?.spin);
  // const spin = store.spin

</script>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999;
}



.spinner {
    display: block;
    margin-top:50% !important;
    margin-left:50% !important;
    float: center;
    width: 150px;
    background-color: black;
  }


/* 
 .loader {
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  display: block;
  margin: -50px auto 0;
  position: relative;
  color: #795959;
  transform: translateY(30px);
  box-sizing: border-box;
  animation: animloader 2s ease infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  color: #c78484;
  position: absolute;
  left: 30px;
  top: 0;
  animation: animloader 2s 0.2s ease infinite;
}
.loader::before {
  animation-delay: 0.4s;
  left: 60px;
}

@keyframes animloader {
  0% {
    top: 0;
    color: rgb(135, 126, 126);
  }
  50% {
    top: 30px;
    color: rgba(255, 255, 255, 0.2);
  }
  100% {
    top: 0;
    color: rgb(124, 81, 81);
  }
}  */
    
    /* circle */

    .loader {
        font-size:60px;
        color: #a78383;
        width: 1em;
        height: 1em;
        box-sizing: border-box;
        background-color: currentcolor;
        position: relative;
        border-radius: 50%;
        transform: rotateX(-60deg) perspective(1000px);
      }
      .loader:before,
      .loader:after {
        content: '';
        display: block;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        animation: flowerFlow 1s ease-out infinite;
      }
      .loader:after {
        animation-delay: .4s;
      }

      @keyframes flowerFlow {
        0% {
          opacity: 1;
          transform: rotate(0deg);
          box-shadow: 0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor;
        }
        100% {
          opacity: 0;
          transform: rotate(180deg);
          box-shadow: -1em -1em 0 -.35em currentcolor,
          0 -1.5em 0 -.35em currentcolor,
          1em -1em 0 -.35em currentcolor,
          -1.5em 0 0 -.35em currentcolor,
          1.5em -0 0 -.35em currentcolor,
          -1em 1em 0 -.35em currentcolor,
          0 1.5em 0 -.35em currentcolor,
          1em 1em 0 -.35em currentcolor;
        }
      }
      
</style>