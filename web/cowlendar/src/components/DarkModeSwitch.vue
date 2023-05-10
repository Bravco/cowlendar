<template>
    <Switch :checked="darkMode" :onChange="toggleDarkMode"/>
</template>

<script setup>
    import { ref } from 'vue';
    import { updateDoc, getDoc, onSnapshot } from "firebase/firestore";
    import { userDoc } from "../firebase/index.js";
    import Switch from './Switch.vue';

    const darkMode = ref(false);

    getDoc(userDoc).then((snapshot) => {
        darkMode.value = snapshot.data().darkMode;
    });

    onSnapshot(userDoc, (snapshot) => {
        darkMode.value = snapshot.data().darkMode;
    });

    function toggleDarkMode() {
        getDoc(userDoc).then((snapshot) => {
            let newValue = !snapshot.data().darkMode;
            updateDoc(userDoc, {
                "darkMode": newValue,
            });
            darkMode.value = newValue;
        });
    }
</script>