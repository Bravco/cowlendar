<template>
    <section id="profile">
        <div class="wrapper">
            <div class="sidebar">
                <ul>
                    <li v-for="view in views" :key="view.id" :class="{ active: view.id == viewIndex }" @click.prevent="selectViewItem(view.id)">
                        <font-awesome-icon :icon="view.icon"/>
                        <a>{{ view.title }}</a>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-sign-out-alt"/>
                        <a @click="handleSignOut">Logout</a>
                    </li>
                </ul>
            </div>
            <div class="content-wrapper">
                <h1 class="title">{{ views[viewIndex].title }}</h1>

                <div v-if="viewIndex == 0" class="content"><Account/></div>

                <div v-else-if="viewIndex == 1" class="content"><Preferences/></div>

                <div v-else-if="viewIndex == 2" class="content"></div>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<script setup>
    import { ref } from 'vue';
    import { getAuth, signOut } from '@firebase/auth';
    import router from '../router/index.js';

    import Account from "../components/profile/Account.vue";
    import Preferences from "../components/profile/Preferences.vue";
    import Footer from "../components/Footer.vue";

    const views = [
        {
            id: 0,
            icon: "fa-solid fa-user",
            title: "Account",
        },
        {
            id: 1,
            icon: "fa-solid fa-gear",
            title: "Preferences",
        },
        {
            id: 2,
            icon: "fa-solid fa-money-bill-wave",
            title: "Subscription",
        },
    ];

    const viewIndex = ref(0);

    function selectViewItem(id) {
        viewIndex.value = id;
    };

    function handleSignOut() {
        signOut(getAuth()).then(() => {
            router.push("/");
        });
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        padding-top: 6em;
        padding-bottom: 2em;
        display: grid;
        grid-template-columns: 1fr 8fr;
    }

    .sidebar, .content-wrapper {
        padding: 2em 1em;
    }

    .sidebar {
        border-right: solid 2px rgba(0, 0, 0, .1);
        font-family: var(--font-family-outfit);
        font-size: 1.1em;
        font-weight: 500;
    }

    .sidebar ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .sidebar li {
        display: flex;
        align-items: center;
        gap: .5em;
        padding: .4em 1.2em;
        border-radius: .4em;
        transition: background-color 300ms;
    }

    .sidebar li.active, li.active a {
        color: var(--color-primary);
    }

    .sidebar li.active {
        background-color: var(--color-primary-alt);
    }

    .sidebar li:last-child {
        margin-top: auto;
    }

    .content-wrapper {
        max-width: 40em;
    }

    .content {
        display: grid;
        gap: 4em;
    }

    .title {
        font-family: var(--font-family-outfit);
        font-size: 2em;
        margin-bottom: 1em;
    }

    @media screen and (max-width: 1024px) {
        .wrapper {
            padding-top: 4em;
            grid-template-columns: 1fr;
            grid-template-rows: 6em 100%;
        }

        .sidebar {
            border-right: none;
            border-bottom: solid 2px rgba(0, 0, 0, .1);
        }

        .sidebar ul {
            flex-direction: row;
            gap: 2em;
        }
        
        .sidebar li {
            padding: 1em 1.2em;
            display: flex;
            align-items: center;
            gap: .5em;
        }

        .sidebar li:last-child {
            margin-top: 0;
            margin-left: auto;
        }

        .content-wrapper {
            max-width: 100%;
        }
    }
</style>