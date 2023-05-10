<template>
    <div class="section">
        <h3 class="section-title">Email verification</h3>
        <p>If you want to access our app you will need to verify your email address. To verify your email address click the button below and we will send you a verification email.</p>
        <p v-if="getAuth().currentUser.emailVerified" class="success">Your email address is already verified</p>
        <Button :disabled="getAuth().currentUser.emailVerified" label="Send verification email" :onClick="emailVerification"/>
    </div>

    <div class="section">
        <h3 class="section-title">Change password</h3>
        <form id="form" @submit.prevent="changePassword">
            <div class="inputfield">
                <label for="password">New Password</label>
                <input id="password" name="password" :type="passwordVisible ? 'text' : 'password'" v-model="state.password" required>
                <a :style="{ 'transform': submitted && v$.password.minLength.$invalid ? 'translate(0, -50%)' : 'translate(0, 0)' }" @click.prevent="togglePasswordVisibility">
                    <font-awesome-icon :icon="passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"/>
                </a>

                <div v-if="submitted" class="validation">
                    <span v-if="v$.password.minLength.$invalid">At least 6 characters</span>
                </div>
            </div>

            <div class="inputfield">
                <label for="confirmPassword">Repeat Password</label>
                <input id="confirmPassword" name="confirmPassword" :type="passwordVisible ? 'text' : 'password'" v-model="state.confirmPassword" required>
                <a :style="{ 'transform': submitted && v$.confirmPassword.sameAsPassword.$invalid ? 'translate(0, -50%)' : 'translate(0, 0)' }" @click.prevent="togglePasswordVisibility">
                    <font-awesome-icon :icon="passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"/>
                </a>

                <div v-if="submitted" class="validation">
                    <span v-if="v$.confirmPassword.sameAsPassword.$invalid">Not equal to new password</span>
                </div>
            </div>

            <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
            <p v-if="successMsg" class="success">{{ successMsg }}</p>

            <div class="btn-wrapper">
                <button type="submit">Change Password</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref, reactive, computed } from 'vue';
    import { getAuth, signOut, updatePassword, sendEmailVerification } from '@firebase/auth';
    import { useVuelidate } from '@vuelidate/core';
    import { required, minLength, sameAs } from '@vuelidate/validators';
    import router from '../../router/index.js';

    import Button from '../../components/Button.vue';

    const submitted = ref(false);
    const passwordVisible = ref(false);
    const errorMsg = ref("");
    const successMsg = ref("");

    const state = reactive({
        password: "",
        confirmPassword: "",
    });

    const rules = computed(() => {
        return {
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs(state.password) },
        }
    });

    const v$ = useVuelidate(rules, state);

    async function changePassword() {
        const result = await v$.value.$validate();
        submitted.value = true;
        
        if (result) {
            if (getAuth().currentUser) {
                signOut(getAuth());
            }
            updatePassword(getAuth().currentUser, state.password).then(() => {
                successMsg.value = "Password successfully changed";
                router.push("/auth");
            }).catch((error) => {
                errorMsg.value = error.code;
            });
        }
    };

    function togglePasswordVisibility() {
        passwordVisible.value = !passwordVisible.value;
    };

    function emailVerification() {
        sendEmailVerification(getAuth().currentUser).then(() => {
            console.log("sent");
        });
    }
</script>

<style scoped>
    @import url("../../css/form.css");
    @import url("../../css/profile.css");

    form {
        display: grid;
        gap: 2em;
        font-family: var(--font-family-outfit);
    }

    label::after {
        content: " *";
        color: var(--color-red);
    }

    button {
        width: fit-content;
    }
</style>