<template>
    <section id="auth">
        <div v-if="forgotPassword">
            <ForgotPassword  :onForgotPasswordToggleClick="toggleForgotPassword"/>
        </div>

        <div v-else>
            <SignUp v-if="signUp" :onAuthToggleClick="toggleAuth"/>
            <SignIn v-else :onAuthToggleClick="toggleAuth" :onForgotPasswordToggleClick="toggleForgotPassword"/>
        </div>
    </section>
    <Footer/>
</template>

<script setup>
    import { ref } from 'vue';

    import SignIn from '../components/auth/SignIn.vue';
    import SignUp from '../components/auth/SignUp.vue';
    import ForgotPassword from '../components/auth/ForgotPassword.vue';
    import Footer from '../components/Footer.vue';
    
    const signUp = ref(false);
    const forgotPassword = ref(false);

    function toggleAuth() {
        signUp.value = !signUp.value;
    };

    function toggleForgotPassword() {
        forgotPassword.value = !forgotPassword.value;
    }
</script>