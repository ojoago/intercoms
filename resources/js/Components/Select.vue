<template>
        <InputLabel :for="label" :value="label" />
        <select :name="label" :id="label" @change="emit('update:model-value', $event.target.value);" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" :class="error ? 'is-invalid' : ''">
            <option value="" selected>{{ placeholder }}</option>
            <option v-for="(option,loop) in options" :key="loop" :value="option.id" :v-if="option.id === modelValue ? 'selected' : ''" >{{
                    option.name
                }}
            </option>
        </select>
</template>

<script setup>
import InputLabel from '@/Components/InputLabel.vue';

defineProps({
    label: String,
    placeholder: String,
    options: Object,
    error: String,
    modelValue: String,
});

let emit = defineEmits(['update:model-value']);
</script>