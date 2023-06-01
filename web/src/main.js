import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

import { firebaseApp } from "./firebase/index.js";
import { VueFire, VueFireAuth } from 'vuefire'

import { GChart } from "vue-google-charts";

import Vue3EasyDataTable from "vue3-easy-data-table";
import 'vue3-easy-data-table/dist/style.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faXmark, faEye, faEyeSlash, faUser, faMoneyBillWave, faSignOutAlt, faMoon, faCow, faCircleUser, faGear, faBell, faSearch, faArrowDown, faArrowUp, faFileArrowDown, faFileArrowUp, faInfo, faArrowRightArrowLeft, faBullhorn, faFileContract, faFolderOpen, faFilePdf, faAngleDown, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faXmark, faEye, faEyeSlash, faUser, faMoneyBillWave, faSignOutAlt, faMoon, faCow, faCircleUser, faGear, faBell, faSearch, faArrowDown, faArrowUp, faFileArrowDown, faFileArrowUp, faInfo, faArrowRightArrowLeft, faBullhorn, faFileContract, faFolderOpen, faFilePdf, faAngleDown, faPlus, faTrashCan);

const app = createApp(App);

app.use(router);
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
});
app.component("GChart", GChart);
app.component("EasyDataTable", Vue3EasyDataTable);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');