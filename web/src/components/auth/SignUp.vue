<template>
    <div class="container">
        <div>
            <h3 class="subtitle">Try for free!</h3>
            <h1 class="title">Create an account</h1>
        </div>

        <form id="form" @submit.prevent="register">
            <div class="inputfield">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" v-model="state.email" required>

                <div v-if="submitted" class="validation">
                    <span v-if="v$.email.email.$invalid">Not a valid email address</span>
                </div>
            </div>

            <div class="inputfield">
                <label for="password">Password</label>
                <input id="password" name="password" :type="passwordVisible ? 'text' : 'password'" v-model="state.password" required>

                <div class="input-after">
                    <a :style="{ 'transform': submitted && v$.password.minLength.$invalid ? 'translate(0, -50%)' : 'translate(0, 0)' }" @click.prevent="togglePasswordVisibility">
                        <font-awesome-icon :icon="passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"/>
                    </a>
                </div>

                <div v-if="submitted" class="validation">
                    <span v-if="v$.password.minLength.$invalid">At least 6 characters</span>
                </div>
            </div>

            <div class="inputfield">
                <label for="confirmPassword">Repeat Password</label>
                <input id="confirmPassword" name="confirmPassword" :type="passwordVisible ? 'text' : 'password'" v-model="state.confirmPassword" required>
            
                <div class="input-after">
                    <a :style="{ 'transform': submitted && v$.confirmPassword.sameAsPassword.$invalid ? 'translate(0, -50%)' : 'translate(0, 0)' }" @click.prevent="togglePasswordVisibility">
                        <font-awesome-icon :icon="passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"/>
                    </a>
                </div>

                <div v-if="submitted" class="validation">
                    <span v-if="v$.confirmPassword.sameAsPassword.$invalid">Not equal to password</span>
                </div>
            </div>

            <p v-if="errorMsg" class="error">{{ errorMsg }}</p>

            <div class="btn-wrapper">
                <button type="submit">Sign Up</button>
                <p>Already have an account? <a @click.prevent="onAuthToggleClick">Log In</a></p>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref, reactive, computed } from 'vue';
    import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
    import { setDoc } from "firebase/firestore";
    import { userDoc } from "../../firebase/index.js";
    import { useVuelidate } from '@vuelidate/core';
    import { required, email, minLength, sameAs } from '@vuelidate/validators';
    import router from "../../router/index.js";
    
    const props = defineProps({
        onAuthToggleClick: {
            type: Function,
            default: () => {},
        },
    });

    const submitted = ref(false);
    const passwordVisible = ref(false);
    const errorMsg = ref("");

    const state = reactive({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const rules = computed(() => {
        return {
            email: { required, email },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs(state.password) },
        }
    });

    const v$ = useVuelidate(rules, state);

    async function register() {
        const result = await v$.value.$validate();
        submitted.value = true;
        
        if (result) {
            if (getAuth().currentUser) {
                signOut(getAuth());
            }
            createUserWithEmailAndPassword(getAuth(), state.email, state.password).then(() => {
                router.push("/app");
                
                setDoc(userDoc, {
                    "id": getAuth().currentUser.uid,
                    "email": getAuth().currentUser.email,
                    "darkMode": false,
                    "notifications": true,
                    "conceptionDuration": 2,
                    "dryPeriodDuration": 5,
                });
            }).catch((error) => {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        errorMsg.value = "This email is already in use";
                        break;

                    default:
                        errorMsg.value = "Something went wrong";
                        break;
                }
            });
        }
    };

    function togglePasswordVisibility() {
        passwordVisible.value = !passwordVisible.value;
    };
</script>

<style scoped>
    @import url("../../css/form.css");

    label::after {
        content: " *";
        color: var(--color-red);
    }
</style>