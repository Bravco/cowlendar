<template>
    <div class="card">
        <div>
            <h2 class="card-title">{{ title }}</h2>
            <h1 v-if="yearlyBilling" class="card-price">€{{ price*10 }} <span>/ year</span></h1>
            <h1 v-else class="card-price">€{{ price }} <span>/ month</span></h1>
        </div>
        <Button :label="price == 0 ? 'Try for free' : 'Subscribe'"/>
        <ul class="features-list">
            <li class="feature-item">
                <p class="label">Max Cows</p>
                <div class="value">{{ maxCows }}</div>
            </li>
            <li class="feature-item">
                <p class="label">Notifications</p>

                <div v-if="notifications" class="value active">
                    <font-awesome-icon icon="fa-solid fa-check"/>
                </div>
                <div v-else class="value inactive">
                    <font-awesome-icon icon="fa-solid fa-xmark"/>
                </div>
            </li>
            <li class="feature-item">
                <p class="label">XML Exports</p>
                
                <div v-if="xmlExports" class="value active">
                    <font-awesome-icon icon="fa-solid fa-check"/>
                </div>
                <div v-else class="value inactive">
                    <font-awesome-icon icon="fa-solid fa-xmark"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import Button from './Button.vue';

    const props = defineProps({
        title: {
            type: String,
            default: "Title",
        },
        yearlyBilling: {
            type: Boolean,
            default: false,
        },
        price: {
            type: Number,
            default: 0,
        },
        maxCows: {
            type: Number,
            default: 0,
        },
        notifications: {
            type: Boolean,
            default: false,
        },
        xmlExports: {
            type: Boolean,
            default: false,
        },
    });
</script>

<style scoped>
    .card {
        display: grid;
        gap: 2em;
        background-color: var(--color-30);
        padding: 3em 2em 4em 2em;
        border-radius: 1em;
    }

    .card Button {
        padding: 1em 6em;
    }

    .card-title {
        font-size: 1.8em;
    }

    .card-price {
        font-family: var(--font-family-outfit);
        font-size: 2.6em;
    }

    .card-price span {
        filter: opacity(50%);
        font-size: .5em;
    }

    .features-list {
        display: grid;
        gap: 1em;
    }

    .feature-item {
        display: flex;
        justify-content: space-between;
        padding: .5em 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }

    .feature-item:last-child {
        border: none;
    }

    .value {
        font-size: 1.2em;
        font-weight: 700;
    }

    .value.active {
        color: var(--color-green);
    }

    .value.inactive {
        color: var(--color-red);
    }
</style>