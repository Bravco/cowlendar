<template>
    <Navbar :isLoggedIn="isLoggedIn" :handleSignOut="handleSignOut"/>
    <RouterView/>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
    import { onSnapshot } from "firebase/firestore";
    import { userDoc } from "./firebase/index.js";
    import router from "./router/index.js";

    import { RouterView } from 'vue-router';
    import Navbar from './components/Navbar.vue';

    const isLoggedIn = ref(false);

    let auth;
    onMounted(() => {
        auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value = true;
            } else {
                isLoggedIn.value = false;
            }

            if (isLoggedIn.value === true) {
                onSnapshot(userDoc, (snapshot) => {
                    let html = document.querySelector("html");
                    
                    if (snapshot.data().darkMode) {
                        html.classList.add("dark");
                    } else {
                        html.classList.remove("dark");
                    }
                });
            }
        });
    });

    function handleSignOut() {
        signOut(auth).then(() => {
            router.push("/auth");
        });
    };
</script>