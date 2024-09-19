
<script setup>

  
  // const bottomMenu = [
  //   {
  //     title:'Settings',
  //     icon:'uil:setting',
  //     link:'/business/settings'
  //   },
  //   {
  //     title:'Help',
  //     icon:'ic:round-help',
  //     link:'/business/help'
  //   },
  //   {
  //     title:'Logout',
  //     icon:'uil:exit',
  //     click: () => logout()
  //   },
  // ]

 
  //  const logout =() =>{
  //   alert('you get mind want logout ')
  // }

import { Link } from '@inertiajs/vue3';
// import NavLink from '@/Components/NavLink.vue';


</script>

<template>
<aside class="hidden md:flex w-72 h-full">
  <div class="flex h-full w-full flex-col overflow-y-auto rounded-md border bg-card pb-5">
      <ul>
      <li>
        <a href="#">
        <i class="fa fa-home" aria-hidden="true"></i>
        <Link :href="route('dashboard')">
          Dashboard

        </Link>
      </a>
    </li>

      <li>
        <a href="#">
        <i class="fa fa-home" aria-hidden="true"></i>
        <Link :href="route('payment')">
          Payments

        </Link>
      </a>
    </li>
    
      <li>
        <a href="#">
        <i class="fa fa-home" aria-hidden="true"></i>
        <Link :href="route('rrr')">
          View RRR

        </Link>
      </a>

    </li>
      <li>
        <a href="#">
        <i class="fa fa-home" aria-hidden="true"></i>
        <Link :href="route('generate')">
          Generate RRR

        </Link>
      </a>
    </li>
   
      <li>
        <a href="#">
        <i class="fa fa-home" aria-hidden="true"></i>
        <Link :href="route('set.price')">
          Set Price

        </Link>
      </a>
    </li>

      </ul>
      
      <div class="mt-auto border-t mb-8">
       <ul>
      
      <li><a href="#">Update Password</a></li>
      <li><Link :ref="route('logout')">Logout</Link></li>
      </ul>

      </div>
    </div>

</aside>
</template>


<style scoped>


.sidebar .nav-links li i {
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    transition: all .3s ease;
    cursor: pointer;
}


 li a {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.sidebar .nav-links li a .link-name {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
}


.nav-link i {
    min-width: 30px !important;
    height: 30px !important;
    line-height: 25px !important;
    font-size: 15px !important;
}


</style>