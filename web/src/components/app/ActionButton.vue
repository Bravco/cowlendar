<template>
    <a :class="['btn', disabled ? 'disabled' : '', selected ? 'selected' : '']" :title="tooltipText" @click.prevent="handleClick">
        <font-awesome-icon :icon="['fa-solid', icon]"/>
    </a>
</template>

<script setup>
    const props = defineProps({
        tooltipText: {
            type: String,
            default: "",
        },
        icon: {
            type: String,
            default: "fa-xmark"
        },
        selected: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        onClick: {
            type: Function,
            default: () => {},
        },
    });

    function handleClick() {
        if (!props.disabled) {
            props.onClick();
        }
    }
</script>

<style scoped>
    .btn {
        width: 2.25em;
        height: 2.25em;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background-color: var(--color-60);
        transition: filter 300ms;
    }

    .disabled {
        pointer-events: none;
        filter: opacity(50%);
    }

    .selected {
        color: var(--color-primary);
    }
</style>