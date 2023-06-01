<template>
    <section id="plans">
        <div class="content">
            <h1 class="content-header">Purchase a subscription</h1>
            <p class="content-paragraph-alt">Choose a solution that caters your needs.</p>

            <span class="switch">
                <input id="switcher" type="checkbox" v-model="yearlyBilling">
                <label for="switcher"></label>
            </span>
            
            <div class="card-grid">
                <PlanCard
                    title="Free"
                    :yearlyBilling="yearlyBilling"
                    :price="0"
                    :maxCows="20"
                    :notifications="true"
                    :xmlExports="false"
                />
                <PlanCard
                    title="Basic Plan"
                    :yearlyBilling="yearlyBilling"
                    :price="5"
                    :maxCows="100"
                    :notifications="true"
                    :xmlExports="true"
                />
                <PlanCard
                    title="Pro Plan"
                    :yearlyBilling="yearlyBilling"
                    :price="10"
                    :maxCows="500"
                    :notifications="true"
                    :xmlExports="true"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import PlanCard from '../PlanCard.vue';

    const yearlyBilling = ref(true);
</script>

<style scoped>
    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6em;
        margin-top: 4em;
    }

    @media screen and (max-width: 1488px) {
        .card-grid {
            grid-template-columns: 1fr;
            gap: 3em;
        }
    }

    .switch {
        position: relative;
        margin-top: 2em;
        width: 20em;
    }

    .switch, .switch input {
        height: 50px;
        border-radius: 25px;
        cursor: pointer;
    }

    .switch input {
        appearance: none;
        outline: none;
        width: 24em;
        background: var(--color-30);
    }

    .switch input::before,
    .switch input::after {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        font-family: var(--font-family-outfit);
        font-size: 1em;
        font-weight: 700;
        transition: color 500ms;
        z-index: 2;
    }
    
    .switch input::before {
        content: "Yearly Billing";
        left: 2em;
    }

    .switch input::after {
        content: "Monthly Billing";
        right: 2em;
    }

    .switch label {
        position: absolute;
        top: 4px;
        bottom: 4px;
        border-radius: 20px;
        z-index: 1;
    }

    .switch input:checked::before,
    .switch input:not(:checked)::after {
        color: white;
    }


    .switch input+label {
        left: 4px;
        right: 60%;
        background: var(--color-primary);
        transition: left 400ms, right 300ms 200ms;
    }

    .switch input:not(:checked)+label {
        left: 55%;
        right: 4px;
        transition: left 300ms 200ms, right 400ms;
    }
</style>