<script setup>
    import MainLayout from '@/Layouts/MainLayout.vue';
    import store from '@/store';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { ref } from 'vue';
    import Modal from '@/Components/Modal.vue';
    import { Head, Link, useForm } from '@inertiajs/vue3';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import TextInput from '@/Components/TextInput.vue';
    import SelectComponent from '@/Components/Select.vue';
    import { formatError } from "@/composables/formatError";
    const { transformValidationErrors } = formatError()

   

    const showModal = ref(false)
    const closeModal = () =>{
        resetForm()
        showModal.value = false;
    }
    


// status
    const requestForm = ref({
        date: '',
        receiver: '',
        note: '',
        team: '',
        items:[{
            item_pid:'',
            quantity:''
        }],
        errors:{}
    });

    function createItemName() {
        requestForm.errors = {}
        store.dispatch('postMethod', { url: '/request-item', param: requestForm.value }).then((data ) => {
        if (data?.status == 422) {
            requestForm.value.errors = transformValidationErrors(data.data)
        } else if (data?.status == 201) {
            closeModal()
            loadItem()
        }
        }).catch(e => {
            console.log(e);
        })
    }

    const resetForm = () => {
      requestForm.value = {
        state: '',
        region: '',
        errors:{}
      }
    };

   const  approveRequest = (item) => {
      requestForm.value = {
        date: item.date ,
        receiver: item.receiver ,
        team: item.team_pid ,
        items:item.items,
        note:item.note,
        pid:item.pid,
        errors:{}
      }
      showModal.value = true;
    };


    const requests = ref({})
    function loadItem(url = 'load-request-list'){
        store.dispatch('getMethod', { url:url }).then((data) => {
        if (data?.status == 200) {
            requests.value = data.data;
        }
        }).catch(e => {
            console.log(e);
        })
    }
    loadItem()

    
    const teams = ref({})
    function loadTeams() {
        store.dispatch('loadDropdown', 'teams/').then(({ data }) => {
            teams.value = data;
        }).catch(e => {
            console.log(e);
        })
    }

    loadTeams()
    const users = ref({})
    function loadUsers() {
        store.dispatch('loadDropdown', 'users/').then(({ data }) => {
            users.value = data;
        }).catch(e => {
            console.log(e);
        })
    }

    loadUsers()
    const items = ref({})
    function loadItems() {
        store.dispatch('loadDropdown', 'item-quantity').then(({ data }) => {
            items.value = data;
        }).catch(e => {
            console.log(e);
        })
    }

    loadItems()


    
    const addItem = () => {
        requestForm.value.items.push({
            item_pid:'' ,
            quantity:'' ,
        })
    }

    const removeItem = (i) => {
        let len = requestForm.value.items.length;
        if (len === 1) {
            store.commit('notify', { message: 'One Item is required to proceed', type: 'warning' })
            return;
        }
        requestForm.value.items.splice(i, 1);
    }


</script>

<template>
    <Head title="Item Request List"/>
    <MainLayout>
        
         <Modal :show="showModal" @close="closeModal" title="Request Item" @submit="createItemName">
           <form action="" class="px-4 py-2">
           
                    
                <hr class="mt-2">
                
               <div class="" v-for="(item,loop) in requestForm.items" :key="loop">
                     
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <div class="flex flex-col ">
                                    <SelectComponent v-model="item.item_pid" label="Items" placeholder="Select Item"
                                    :options="items"/>
                                <InputError class="mt-2" :message="requestForm.errors.team" />   
                        </div>
                        <div class="flex flex-col ">
                                <InputLabel for="quantity" value="Quantity" />
                                <TextInput
                                    id="date"
                                    type="number" step="0.5"
                                    class="mt-1 block w-full"
                                    v-model="item.quantity"
                                    placeholder="Enter Quantity"
                                    required
                                />
                                <InputError class="mt-2" :message="requestForm.errors.quantity" />       
                        </div>
                    </div>

               </div>

           </form>
        </Modal>
        <div>
            
        </div>

        <div class="overflow-auto rounded-lg shadow mt-3">
                    
                <table class="w-full">
                    <thead class="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th width ="5%" class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">S/N</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Date</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Items</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Team</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Status</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">Receiver</th>
                            <th width ="10%"  class="p-3 text-sm font-semibold tracking-wide text-left table-bordered"> 
                                <font-awesome-icon icon="fa-solid fa fa-cog"/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        <tr class="bg-white" v-for="(item,loop) in requests" :key="loop">
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ loop+1 }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ item.date_requested }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ item.items_count }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ item?.team?.team }}</td>
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ item.request_status }}</td>
                            <!--<td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ item.initiator }}</td> -->
                            <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ item?.collector?.username }}</td>
                            <!--<td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered">{{ item.description }}</td> -->
                           <td class="p-3 text-sm font-semibold tracking-wide text-left table-bordered flex" >
                                <button class="p-1 oy-1 text-sm bg-red-500 text-white me-2 inline-block" @click="rejectRequest(item.pid)">Reject</button>
                                <button class="p-1 oy-1 text-sm bg-optimal text-white me-2 inline-block" @click="approveRequest(item)">Approve</button>
                            </td>
                            


                            
                        </tr>
                    </tbody>
                </table>
                
        </div>
    </MainLayout>
</template>


<style scoped>

</style>