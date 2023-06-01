<template>
    <div class="section">
        <h3 class="section-title">General</h3>
        <ul class="content-list">
            <li class="toggle">
                <font-awesome-icon icon="fa-solid fa-moon"/>
                <p>Dark mode</p>
                <DarkModeSwitch/>
            </li>
        </ul>
    </div>
    
    <div class="section">
        <h3 class="section-title">Desktop</h3>
    </div>
    
    <div class="section">
        <h3 class="section-title">Mobile</h3>
        <ul class="content-list">
            <li class="toggle">
                <font-awesome-icon icon="fa-solid fa-bell"/>
                <p>Notifications</p>
                <Switch :checked="notifications" :onChange="toggleNotifications"/>
            </li>

            <li>
                <div class="label">
                    <label for="itocDuration">Insemination to Conception duration</label>
                    <div class="help-tip">
                        <p>Preferred time period from insemination to conception. Cow importance is calculated based on this value.</p>
                    </div>
                </div>
                
                <input id="itocDuration" type="range" list="itocMarkers" min="1" max="4" step="1" v-model="conceptionDuration" @change="changeConceptionDuration"/>
                <datalist id="itocMarkers">
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                </datalist>
            </li>

            <li>
                <div class="label">
                    <label for="ctodDuration">Conception to Dry Period duration</label>
                    <div class="help-tip">
                        <p>Preferred time period from conception to dry period. Cow importance is calculated based on this value.</p>
                    </div>
                </div>

                <input id="ctodDuration" type="range" list="ctodMarkers" min="3" max="7" step="1" v-model="dryPeriodDuration" @change="changeDryPeriodDuration"/>
                <datalist id="ctodMarkers">
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                    <option value="6" label="6"></option>
                    <option value="7" label="7"></option>
                </datalist>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { updateDoc, getDoc, onSnapshot } from "firebase/firestore";
    import { userDoc } from "../../firebase/index.js";

    import Switch from '../Switch.vue';
    import DarkModeSwitch from '../DarkModeSwitch.vue';

    const notifications = ref(false);
    const conceptionDuration = ref(2);
    const dryPeriodDuration = ref(5);

    getDoc(userDoc).then((snapshot) => {
        notifications.value = snapshot.data().notifications;
        conceptionDuration.value = snapshot.data().conceptionDuration;
        dryPeriodDuration.value = snapshot.data().dryPeriodDuration;
    });

    onSnapshot(userDoc, (snapshot) => {
        notifications.value = snapshot.data().notifications;
        conceptionDuration.value = snapshot.data().conceptionDuration;
        dryPeriodDuration.value = snapshot.data().dryPeriodDuration;
    });

    function toggleNotifications() {
        getDoc(userDoc).then((snapshot) => {
            let newValue = !snapshot.data().notifications;
            updateDoc(userDoc, {
                "notifications": newValue,
            });
            notifications.value = newValue;
        });
    }

    function changeConceptionDuration() {
        getDoc(userDoc).then(() => {
            updateDoc(userDoc, {
                "conceptionDuration": parseInt(conceptionDuration.value),
            });
        });
    }

    function changeDryPeriodDuration() {
        getDoc(userDoc).then(() => {
            updateDoc(userDoc, {
                "dryPeriodDuration": parseInt(dryPeriodDuration.value),
            });
        });
    }
</script>

<style scoped>
    @import url("../../css/profile.css");

    .content-list {
        display: grid;
        gap: 2em;
    }

    .content-list li {
        font-weight: 500;
        display: grid;
        align-items: center;
        gap: 1em;
    }

    .content-list li.toggle {
        width: fit-content;
        grid-template-columns: 1fr 6fr 2fr;
        gap: .5em;
    }

    .label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 18em;
    }

    .help-tip{
        text-align: center;
        border: 2px solid;
        border-color: var(--text-color);
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1em;
        line-height: 22px;
        cursor: pointer;
    }

    .help-tip:before {
        content:'?';
        font-weight: bold;
        color: var(--text-color);
    }

    .help-tip:hover p {
        display: block;
    }

    .help-tip p {
        width: 16em;
        display: none;
        text-align: left;
        padding: 1em;
        background-color: var(--color-60);
        color: var(--text-color);
        border-radius: 3px;
        box-shadow: var(--box-shadow);
    }

    datalist {
        display: flex;
        justify-content: space-between;
        writing-mode: sideways-lr;
        width: 16rem;
    }

    input[type="range"] {
        width: 16rem;
    }

    @media screen and (max-width: 1024px) {
        .help-tip:hover p {
            transform: translate(-100%);
        }
    }
</style>