<template>
    <div class="container">
        <div>
            <h3 class="subtitle">Welcome back!</h3>
            <h1 class="title">Sign in to your account</h1>
        </div>

        <form id="form" @submit.prevent="login">
            <div class="inputfield">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" v-model="email" required>
            </div>

            <div class="inputfield">
                <label for="password">Password</label>
                <input id="password" name="password" :type="passwordVisible ? 'text' : 'password'" v-model="password" required>
                <div class="input-after">
                    <a @click.prevent="togglePasswordVisibility">
                        <font-awesome-icon :icon="passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"/>
                    </a>
                </div>
            </div>

            <a class="toggle" @click.prevent="onForgotPasswordToggleClick">Forgot Password</a>

            <p v-if="errorMsg" class="error">{{ errorMsg }}</p>

            <div class="btn-wrapper">
                <button type="submit">Sign In</button>
                <p>Not a member? <a @click.prevent="onAuthToggleClick">Create an account</a></p>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
    import router from "../../router/index.js";

    const props = defineProps({
        onAuthToggleClick: {
            type: Function,
            default: () => {},
        },
        onForgotPasswordToggleClick: {
            type: Function,
            default: () => {},
        },
    });

    const passwordVisible = ref(false);
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");
    
    function login() {
        if (getAuth().currentUser) {
            signOut(getAuth());
        }

        signInWithEmailAndPassword(getAuth(), email.value, password.value).then(() => {
            router.push("/app");
        }).catch((error) => {
            switch (error.code) {
                case "auth/invalid-email":
                    errorMsg.value = "Invalid email";
                    break;
                
                case "auth/user-not-found":
                    errorMsg.value = "No account with that email was found";
                    break;
            
                case "auth/wrong-password":
                    errorMsg.value = "Incorrect password";
                    break;

                default:
                    errorMsg.value = "Email or password was incorrect";
                    break;
            }
        });
    };
    
    function togglePasswordVisibility() {
        passwordVisible.value = !passwordVisible.value;
    };
</script>

<style scoped>
    @import url("../../css/form.css");
</style>