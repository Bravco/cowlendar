<template>
    <section class="error">
        <div class="page-error">
            <h1 class="content-header">App not loaded</h1>
            <p>Error 108 - Need more width.<br>Try using computer or resize window.</p>
        </div>
    </section>

    <div class="navbar-backdrop"></div>

    <div class="container">
        <div class="hierarchy">
            <div class="search-container">
                <font-awesome-icon class="search-icon" icon="fa-solid fa-search"/>
                <input type="text" placeholder="Search..." v-model="searchQuery">
            </div>
            <ul class="tree">
                <li>
                    <details open>
                        <summary @click="clearSelection()">Farms</summary>
                        <ul>
                            <li v-for="farm in filteredFarms"
                                :key="farm.id"
                                :class="['farm', farm.id == selectedFarmId ? 'active' : '']"
                            >
                                <details>
                                    <summary @click="selectFarmItem(farm.id)">{{ farm["name"] }}</summary>
                                    <ul>
                                        <li v-for="cow in farm['cows']"
                                            :key="cow.id"
                                            :class="['cow', cow.isMale ? 'male' : 'female', cow.id == selectedCowId ? 'active': '']"
                                            @click="selectCowItem(cow.id)"
                                        >{{ (cow.countryCode === undefined ? "" : cow.countryCode) + " " + cow.number }}</li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>

        <div class="main">
            <component
                v-if="selectedFarmId != null"
                :is="views[selectedViewId].component"
                :farmId="selectedFarmId"
                :cowId="selectedCowId"
                :farm="selectedFarm"
            ></component>
        </div>

        <div class="tools">
            <ul class="btn-list">
                <li><ActionButton icon="fa-arrow-down" tooltip-text="Flow" :disabled="selectedFarmId == null"/></li>
                <li><ActionButton icon="fa-file-arrow-down" tooltip-text="Edit / view flow" :disabled="selectedFarmId == null"/></li>
                <li><ActionButton icon="fa-arrow-up" tooltip-text="Retraction" :disabled="selectedFarmId == null"/></li>
                <li><ActionButton  icon="fa-file-arrow-up" tooltip-text="Edit / view retraction" :disabled="selectedFarmId == null"/></li>
                <hr>
                <li><ActionButton icon="fa-info" tooltip-text="Basic information" @click="selectView('info')" :selected="selectedViewId === 'info'" :disabled="selectedFarmId == null && selectedCowId == null"/></li>
                <li><ActionButton icon="fa-arrow-right-arrow-left" tooltip-text="Movements" @click="selectView('movements')" :selected="selectedViewId === 'movements'" :disabled="selectedFarmId == null && selectedCowId == null"/></li>
                <li><ActionButton icon="fa-cow" tooltip-text="Cows" @click="selectView('cows')" :selected="selectedViewId === 'cows'" :disabled="selectedFarmId == null"/></li>
                <li><ActionButton icon="fa-folder-open" tooltip-text="Individual register" @click="selectView('individualRegister')" :selected="selectedViewId === 'individualRegister'" :disabled="selectedFarmId == null"/></li>
                <hr>
                <li><ActionButton icon="fa-file-pdf" tooltip-text="Current to PDF" :disabled="selectedFarmId == null"/></li>
                <li><ActionButton icon="fa-bullhorn" tooltip-text="Report changes" :disabled="selectedFarmId == null"/></li>
                <li><ActionButton icon="fa-file-contract" tooltip-text="Document of relocation" :disabled="selectedFarmId == null"/></li>
            </ul>
        </div>

        <div class="bottom-row">
            <hr>
            <div class="content">
                <p>Farm cow count: {{ selectedFarm != null ? selectedFarm.cows.length : "-" }}</p>
            </div>
            <hr>
        </div>
    </div>
    
    <Footer/>
</template>

<script setup>
    import { ref, shallowRef, computed } from "vue";
    import { getDocs, onSnapshot } from "firebase/firestore";
    import { farmsQuery, cowsQuery } from "../firebase/index.js";

    import ActionButton from "../components/app/ActionButton.vue";
    import InfoFarm from "../components/app/InfoFarm.vue";
    import InfoCow from "../components/app/InfoCow.vue";
    import MovementsFarm from "../components/app/MovementsFarm.vue";
    import MovementsCow from "../components/app/MovementsCow.vue";
    import Cows from "../components/app/Cows.vue";
    import IndividualRegister from "../components/app/IndividualRegister.vue";
    import Footer from "../components/Footer.vue";

    const farms = ref([]);
    const selectedFarmId = ref(null);
    const selectedCowId = ref(null);
    const searchQuery = ref("");
    const selectedViewId = shallowRef("info");

    const views = computed(() => {
        return {
            "info": {
                id: "info",
                component: selectedCowId.value != null ? InfoCow : InfoFarm,
            },
            "movements": {
                id: "movements",
                component: selectedCowId.value != null ? MovementsCow : MovementsFarm,
            },
            "cows": {
                id: "cows",
                component: Cows,
            },
            "individualRegister": {
                id: "individualRegister",
                component: IndividualRegister,
            },
        };
    });

    const filteredFarms = computed(() => {
        const details = document.querySelectorAll("details");
        let filteredFarms = farms.value;

        if (searchQuery.value) {
            details.forEach((targetDetail) => {
                targetDetail.setAttribute("open", "");
            });

            filteredFarms = filteredFarms.filter(farm => {
                return farm.cows.some(cow => {
                    return cow.number.toLowerCase().includes(searchQuery.value.toLowerCase());
                });
            }).map(farm => {
                const filteredCows = farm.cows.filter(cow => {
                    return cow.number.toLowerCase().includes(searchQuery.value.toLowerCase());
                });
                return {...farm, cows: filteredCows};
            });
        }

        return filteredFarms;
    });

    const selectedFarm = computed(() => {
        if (selectedFarmId.value != null) {
            return farms.value.find((farm) => farm.id === selectedFarmId.value);
        } else {
            return null;
        }
    });

    const selectedCow = computed(() => {
        if (selectedFarm.value != null) {
            let cow = selectedFarm.value.cows.find((cow) => cow.id === selectedCowId.value);
            if (cow === undefined) {
                return null;
            } else {
                return cow;
            }
        } else {
            return null;
        }
    });

    onSnapshot(farmsQuery, farmsSnapshot => {
        farmsSnapshot.forEach(farmDoc => {
            onSnapshot(cowsQuery(farmDoc.data().id), () => {
                loadFarmData();
            });
        });
    });

    function loadFarmData() {
        getDocs(farmsQuery).then(farmsSnapshot => {
            let tmpFarms = [];
            farmsSnapshot.docs.forEach(farmDoc => {
                getDocs(cowsQuery(farmDoc.data().id)).then(cowsSnapshot => {
                    let tmpCows = [];
                    cowsSnapshot.docs.forEach(cowDoc => {
                        tmpCows.push(cowDoc.data());
                    });
                    let tmpFarm = farmDoc.data();
                    tmpFarm.cows = tmpCows;
                    tmpFarms.push(tmpFarm);
                    if (tmpFarms.length === farmsSnapshot.docs.length) {
                        farms.value = tmpFarms;
                    }
                }).catch(error => {
                    console.log(error);
                });
            });
        });
    }


    function selectView(id) {
        selectedViewId.value = id;
    }

    function clearSelection() {
        selectedFarmId.value = null;
        selectedCowId.value = null;
    }

    function selectFarmItem(id) {
        if (selectedFarmId.value != null) {
            selectedCowId.value = null;
        }

        selectedFarmId.value = id;

        const details = document.querySelectorAll(".farm details");
        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
                });
            });
        });
    };

    function selectCowItem(id) {
        selectedCowId.value = id;
    }
</script>

<style scoped>
    @import url(../css/page-error.css);
    .navbar-backdrop {
        width: 100%;
        height: 4em;
        background-color: var(--color-30);
    }

    .error {
        display: none;
    }

    .container {
        min-height: calc(100vh - 4em);
        display: grid;
        grid-template-columns: 1fr 6fr 0fr;
        grid-template-rows: auto 1fr auto;
    }

    .main, .hierarchy, .tools {
        width: 100%;
        height: 100%;
        padding: .5em 0;
    }

    .main {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        background-color: var(--color-60);
    }

    .hierarchy {
        grid-row: 2 / 3;
        background-color: var(--color-30);
    }

    .search-container {
        position: relative;
        display: block;
        margin: 0 1em;
    }

    .search-icon {
        position: absolute;
        top: 50%;
        left: 1em;
        transform: translateY(-50%);
    }

    .search-container input {
        width: 100%;
        height: 2.5em;
        padding: 0 2.5em;
        border-radius: 2em;
        background-color: var(--color-60);
        font-size: 1em;
        border: none;
        outline: none;
    }

    .tree {
        --spacing: 1.5rem;
        --radius: 10px;
        padding-top: 1em;
        overflow-y: auto;
    }

    .tree ul {
        margin-left: calc(var(--radius) - var(--spacing));
        padding-left: 0;
    }

    .tree ul li {
        border-left: 2px solid #ccc;
    }

    .tree ul li:last-child {
        border-color: transparent;
    }

    .tree ul li::before {
        content: "";
        display: block;
        position: absolute;
        top: calc(var(--spacing) / -2);
        left: -2px;
        width: calc(var(--spacing) + 2px);
        height: calc(var(--spacing) + 1px);
        border: solid #ccc;
        border-width: 0 0 2px 2px;
    }

    .tree li {
        display: block;
        position: relative;
        padding-left: calc(2 * var(--spacing) - var(--radius) - 2px);
    }

    .tree li,
    .tree summary {
        padding-bottom: .5em;
    }
    
    .tree summary {
        display: block;
        cursor: pointer;
    }

    .tree .farm.active summary,
    .tree .cow.active {
        color: var(--color-primary);
    }

    .tree summary::marker,
    .tree summary::-webkit-details-marker {
        display: none;
    }

    .tree summary:focus {
        outline: none;
    }

    .tree summary::before,
    .tree .cow::after {
        content: "";
        width: calc(2 * var(--radius));
        height: calc(2 * var(--radius));
        display: block;
        position: absolute;
        top: calc(var(--spacing) / 2 - var(--radius));
        left: calc(var(--spacing) - var(--radius) - 1px);
        border-radius: 50%;
        text-align: center;
        font-weight: bold;
        z-index: 1;
    }

    .tree summary::before {
        content: "+";
        background-color: var(--color-primary);
        color: white;
    }

    .tree .cow {
        cursor: pointer;
    }

    .tree .cow.male::after {
        background-color: var(--color-blue);
    }

    .tree .cow.female::after {
        background-color: var(--color-red);
    }

    .tree details[open] > summary::before {
        content : "-";
    }

    .tools {
        width: min-content;
        grid-row: 2 / 3;
        background-color: var(--color-30);
    }

    .tools .btn-list {
        display: grid;
        gap: .5em;
        padding: 0 1em;
    }

    .tools .btn-list hr {
        margin: 1em 0;
        background-color: var(--color-text-alt);
    }

    .bottom-row {
        grid-column: 1 / 4;
        grid-row: 3 / 4;
        background-color: var(--color-30);
        color: var(--color-text-alt);
    }

    .bottom-row .content {
        padding: 0 1em;
    }

    @media screen and (max-width: 1024px) {
        .error {
            display: grid;
        }

        .container {
            display: none;
        }
    }
</style>