<script setup>
 
 import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import { Link,Head } from '@inertiajs/vue3';

    import Modal from '@/Components/Modal.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import TextInput from '@/Components/TextInput.vue';
    import { formatError } from "@/composables/formatError";
import store from '@/store';
    const { transformValidationErrors } = formatError()


    const showModal = ref(false)
    const closeModal = () =>{
        showModal.value = false;
    }
    const form = ref({
        current_password:'',
        password:'',
        password_confirmation:'',
        errors:{}
    });

    function updatePassword() {
        form.value.errors = {}
        store.dispatch('postMethod', { url: '/update-passord', param: form.value }).then((data ) => {
        if (data?.status == 422) {
            form.value.errors = transformValidationErrors(data.data)
        } else if (data?.status == 201) {
            closeModal()
        }
        }).catch(e => {
            console.log(e);
        })
    }

</script>

<template>
<Head>
            <link rel="icon" type="image/png" href="/files/images/momas logo.jpg" />
        </Head>

        
        <Modal :show="showModal" @close="closeModal" max-width="sm" title="Update Password " @submit="updatePassword">
           <form action="" class="px-4 py-2">
                    <div>
                <InputLabel for="current_password" value="Current Password" />

                <TextInput
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    type="password"
                    class="mt-1 block w-full"
                    autocomplete="off"
                    placeholder="current password"
                />

                <InputError :message="form.errors.current_password" class="mt-2" />
            </div>
            <div>
                <InputLabel for="password" value="New Password" />
                <TextInput
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    autocomplete="off"
                    placeholder=" password"
                />
                <InputError :message="form.errors.password" class="mt-2" />
            </div>
            <div>
                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    autocomplete="new-password"
                    placeholder="password confirmation"

                />

                <InputError :message="form.errors.password_confirmation" class="mt-2" />
            </div>

           </form>
        </Modal>
<nav class="sticky top-0 z-20 border-b  bg-[#f1f1f1] backdrop-blur">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-10">
                        <div class="flex">
                            <!-- Logo -->
                              <button class="m-3 block md:hidden" id="toggleSideBar">
                                <font-awesome-icon icon="fa-solid fa-bars items-center"  />
                            </button>
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('dashboard')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </Link>
                            </div>
                           
                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            
                                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ms-6">
                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.email }}

                                                <svg
                                                    class="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <button class="bg-red-300 text-white w-full hover:bg-red-300" @click="showModal = true" type="button" as="button"> Update Password </button>
                                        <DropdownLink class="bg-red-600 text-white  hover:bg-red-600" :href="route('logout')" method="post" as="button">
                                            Log Out
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                   
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                
            </nav>

</template>


<style scoped>
/* .header {
background-color: #333;
color: white;
padding: 1rem;
text-align: center;
} */
</style>

