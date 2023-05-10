<template>
    <div class="container">
        <div>
            <h3 class="subtitle">Reset password!</h3>
            <h1 class="title">Password recovery</h1>
        </div>

        <form id="form" @submit.prevent="resetPassword">
            <div class="inputfield">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" v-model="email" required>
            </div>
            
            <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
            <p v-if="successMsg" class="success">{{ successMsg }}</p>

            <div class="btn-wrapper">
                <button type="submit">Reset Password</button>
                <p>Password recovered? <a @click.prevent="onForgotPasswordToggleClick">Sign In</a></p>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

    const props = defineProps({
        onForgotPasswordToggleClick: {
            type: Function,
            default: () => {},
        },
    });

    const email = ref("");
    const successMsg = ref("");
    const errorMsg = ref("");

    function resetPassword() {
        sendPasswordResetEmail(getAuth(), email.value).then(() => {
            successMsg.value = "Password recovery email was sent";
        }).catch((error) => {
            switch (error.code) {
                case "auth/invalid-email":
                    errorMsg.value = "Invalid email";
                    break;
                
                case "auth/user-not-found":
                    errorMsg.value = "No account with that email was found";
                    break;

                default:
                    errorMsg.value = "Something went wrong";
                    break;
            }
        });
    };
</script>

<style scoped>
    @import url("../../css/form.css");
</style>