<template>
    <RouterLink to="/" class="logo">
        <img v-if="darkMode" src="../assets/logo_light.svg" alt="logo">
        <img v-else src="../assets/logo_dark.svg" alt="logo">
        <p>Cowlendar</p>
    </RouterLink>
</template>

<script setup>
    import { ref } from 'vue';
    import { getAuth, onAuthStateChanged } from '@firebase/auth';
    import { onSnapshot } from "firebase/firestore";
    import { userDoc } from "../firebase/index.js";

    const darkMode = ref(false);

    onAuthStateChanged(getAuth(), () => {
        if (getAuth().currentUser) {
            onSnapshot(userDoc, (snapshot) => {
                darkMode.value = snapshot.data().darkMode;
            });
        }
    });
</script>

<style scoped>
    .logo {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    .logo:hover {
        filter: opacity(100%);
    }

    .logo img {
        height: 3em;
    }

    .logo p {
        color: var(--color-text);
        font-family: var(--font-family-outfit);
        font-size: 1.5em;
        font-weight: bold;
    }
</style>