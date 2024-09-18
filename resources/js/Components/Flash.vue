<template>
    <div >
            {{ $page?.props?.flash?.message }}
        <div class="alert" v-if="$page.props.flash && $page.props.flash.message">
            {{ $page.props.flash.message }}
        </div>
        <div class="alert" v-if="$page.props.flash && $page.props.flash.error">
            {{ $page.props.flash.error }}
        </div>
        <div class="alert" v-if="$page.props.flash && $page.props.flash.warning">
            {{ $page.props.flash.warning }}
        </div>
    </div>
</template>

<script setup>
import { usePage } from '@inertiajs/vue3';

const page = usePage();
</script>