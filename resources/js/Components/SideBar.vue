
<script setup>

import store from '@/store';
import { Link,usePage } from '@inertiajs/vue3';
   const { url } = usePage();
   import { computed, onMounted } from "vue";
    const toggleSidebar = computed(() => store?.state?.toggleSidebar);
 
    const activeRoute = (routeName) => {
        const furl = `${window.location.origin}${url}`;
        return furl === route(routeName);
    };

    
    onMounted(() => {
    
        if(window.innerWidth < 756){
            // sidebar.classList.toggle('close')
        }
    
   
})


</script>

<template>
<aside class="z-100  absolute hidden w-72 h-full bg-[#f1f1f1] sideBar md:z-auto md:flex sm:static" id="sideBar">
  <div class="flex h-full w-full flex-col overflow-y-auto rounded-md border bg-card pb-5">
      <ul class="pl-2">
     
        <Link :href="route('dashboard')" class="flex nav-link" :class="activeRoute('dashboard') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-gauge " class="facon pt-1" />
          Dashboard
        </Link>
     
        <Link :href="route('payment')" class="flex nav-link" :class="activeRoute('payment') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-money-bill " class="facon pt-1" />
          Payments
        </Link>
   
        <Link :href="route('rrr')" class="flex nav-link" :class="activeRoute('rrr') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-list-ol " class="facon pt-1" />
          View RRR
        </Link>
   
        <Link :href="route('generate')" class="flex nav-link" :class="activeRoute('generate') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-clipboard-list " class="facon pt-1" />
          Generate RRR
        </Link>
    
        

        <div v-if="$page.props.auth.role.includes('admin')">
            <Link :href="route('set.price')" class="flex nav-link" :class="activeRoute('set.price') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-cog " class="facon pt-1" />
          Set Price
        </Link>
            <Link :href="route('dependency')" class="flex nav-link" :class="activeRoute('dependency') ? ' text-optimal font-bold' : 'text-gray-700'">
                <font-awesome-icon icon="fa-solid fa-cog " class="facon pt-1" />
                <span class="nav-name">Dependency </span>
            </Link>
            <Link :href="route('feeders')" class="flex nav-link hover:text-optimal" :class="activeRoute('feeders') ? ' text-optimal font-bold' : 'text-gray-700'">
                <font-awesome-icon icon="fa-solid fa-outdent " class="facon pt-1" />
                <span class="nav-name">Feeders </span>
            </Link>
            <Link :href="route('create.staff')" class="flex nav-link hover:text-optimal" :class="activeRoute('create.staff') ? ' text-optimal font-bold' : 'text-gray-700'">
                <font-awesome-icon icon="fa-solid fa-indent " class="facon pt-1" />
                <span class="nav-name">Staff </span>
            </Link>
            <Link :href="route('schedules')" class="flex nav-link hover:text-optimal" :class="activeRoute('schedules') ? ' text-optimal font-bold' : 'text-gray-700'">
                <font-awesome-icon icon="fa-solid fa-cog " class="facon pt-1" />
                <span class="nav-name">Schedules </span>
            </Link>
            <Link :href="route('meter.list')" class="flex nav-link hover:text-optimal" :class="activeRoute('meter.list') ? ' text-optimal font-bold' : 'text-gray-700'">
                <font-awesome-icon icon="fa-solid fa-list-ul " class="facon pt-1" />
                <span class="nav-name">Meter List </span>
            </Link>
            
        
        <Link :href="route('inventory.list')" class="flex nav-link hover:text-optimal" :class="activeRoute('inventory.list') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-warehouse " class="facon pt-1" />
            <span class="nav-name">Inventory Item </span>
        </Link>
<!--
        <Link :href="route('damage.item')" class="flex nav-link hover:text-optimal" :class="activeRoute('damage.item') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-keyboard " class="facon pt-1" />
            <span class="nav-name">Damaged Item </span>
        </Link>

    -->

        <Link :href="route('teams')" class="flex nav-link hover:text-optimal" :class="activeRoute('teams') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-people-group " class="facon pt-1" />
            
            <span class="nav-name">Teams </span>
        </Link>

        </div>
        
        <!-- 
        <Link :href="route('assigned.meters')" class="flex nav-link hover:text-optimal" :class="activeRoute('assigned.meters') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-cube " class="facon pt-1" />
            
            <span class="nav-name">Assigned Meter </span>
        </Link>
    -->


        <Link :href="route('installations')" class="flex nav-link hover:text-optimal " :class="activeRoute('installations') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-book-open " class="facon pt-1" />
            
            <span class="nav-name">Installations </span>
        </Link>

         <Link :href="route('request')" class="flex nav-link hover:text-optimal" :class="activeRoute('request') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-braille " class="facon pt-1" />
            
            <span class="nav-name">Request </span>
        </Link>
         <Link :href="route('request.list')" class="flex nav-link hover:text-optimal" :class="activeRoute('request.list') ? ' text-optimal font-bold' : 'text-gray-700'">
            <font-awesome-icon icon="fa-solid fa-braille " class="facon pt-1" />
            
            <span class="nav-name">Request List </span>
        </Link>
                

      </ul>
      
      <div class="mt-auto border-t mb-8">
       <ul>
      
      </ul>

      </div>
    </div>

</aside>
</template>


<style scoped>


body {
    font-family: "Open Sans", sans-serif;
    position: relative;
}

.nav-link{
    gap: 10px;
    padding: 8px 4px ;
    border-radius: 8px;
    /* color: #000; */
    /* background-color: #8c8888; */
    margin-bottom: 2px;
}
/* .link:hover{
    background-color: #f1f1f1;
} */

/* link:active{
    background-color: #f1f1f1 !important;
} */


.facon {
    font-size: 12px !important;
}


.side-bottom img {
    height: auto;
    width: 100px;
    object-fit: cover;
    border-radius: 16px;
    /* margin: 0 20px 0 20px; */
    background: #f1f1f1;
    transition: all .5s ease;
    padding: 10px;
    border: solid #3bb3c2 2.5px;
}

.showSidebar{
    display:  block !important;
}

</style>