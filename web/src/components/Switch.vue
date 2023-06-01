<template>
    <label class="switch">
        <input type="checkbox" :checked="checked" @change="onChange">
        <span class="slider"></span>
    </label>
</template>

<script setup>
    const props = defineProps({
        checked: {
            type: Boolean,
            default: false,
        },
        onChange: {
            type: Function,
            default: () => {},
        },
    });
</script>

<style scoped>
    .switch {
        font-size: 1em;
        position: relative;
        display: inline-block;
        width: 2.5em;
        height: 1.5em;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 1.5em;
        background-color: #ccc;
        transition: 300ms;
    }

    .slider:before {
        content: "";
        position: absolute;
        height: 1em;
        width: 1em;
        left: 4px;
        bottom: 4px;
        border-radius: 100%;
        background-color: var(--color-60);
        transition: 300ms;
    }

    input:checked + .slider {
        background-color: var(--color-primary);
    }

    input:checked + .slider:before {
        transform: translateX(1em);
    }
</style>