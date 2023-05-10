<template>
    <form id="form" @submit.prevent="updateCow()">
        <div>
            <h3>Basic information - cow</h3>
            <div class="row">
                <div class="inputfield">
                    <label for="country-code">Cow Country Code</label>
                    <input v-model="cow.countryCode" type="text" name="country-code">
                </div>

                <div class="inputfield">
                    <label for="number">Cow ID</label>
                    <input v-model="cow.number" type="text" name="number">
                </div>
            </div>

            <div class="row">
                <div class="inputfield">
                    <label for="country-code-original">Original Cow Country Code</label>
                    <input v-model="cow.originalCountryCode" type="text" name="country-code-original">
                </div>

                <div class="inputfield">
                    <label for="number-original">Original Cow ID</label>
                    <input v-model="cow.originalNumber" type="text" name="number-original">
                </div>
            </div>

            <div class="row">
                <div class="inputfield">
                    <label for="birthdate">Birthdate</label>
                    <input v-model="cow.birthdate" type="date" name="birthdate">
                </div>
                
                <div class="inputfield">
                    <label for="deathdate">Deathdate</label>
                    <input v-model="cow.deathdate" type="date" name="deathdate">
                </div>
            </div>

            <div class="inputfield">
                <label for="coloration">Coloration ID</label>
                <input v-model="cow.coloration" type="text" name="coloration" list="colorations">
                <datalist id="colorations">
                    <option v-for="coloration in colorations" :value="coloration['id']">{{ coloration["color"] }}</option>
                </datalist>

                <div class="input-after" style="pointer-events: none;">
                    <font-awesome-icon icon="fas fa-angle-down"/>
                </div>
            </div>

            <div style="padding-top: 1em;">
                <h3>Gender</h3>
                <div class="radios">
                    <div class="choice">
                        <input v-model="cow.male" type="radio" id="male" name="gender" :value="true">
                        <label for="male">Male</label>
                    </div>

                    <div class="choice">
                        <input v-model="cow.male" type="radio" id="female" name="gender" :value="false">
                        <label for="female">Female</label>
                    </div>
                </div>

                <div v-if="cow.male === false" class="radios">
                    <h3>Utility Focus</h3>
                    <div class="choice">
                        <input v-model="cow.lactating" type="radio" id="dairy" name="utilityFocus" :value="false">
                        <label for="dairy">Dairy Cow</label>
                    </div>

                    <div class="choice">
                        <input v-model="cow.lactating" type="radio" id="lactating" name="utilityFocus" :value="true">
                        <label for="lactating">Lactating Cow</label>
                    </div>

                    <div class="choice">
                        <input v-model="cow.lactating" type="radio" id="undefined" name="utilityFocus" :value="null">
                        <label for="undefined">Undefined</label>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h3>Genealogy</h3>
            <div class="row">
                <div class="inputfield">
                    <label for="father-line">Father Line</label>
                    <input v-model="cow.fatherLine" type="text" name="father-line">
                </div>

                <div class="inputfield">
                    <label for="father-register">Father Register</label>
                    <input v-model="cow.fatherRegister" type="text" name="father-register">
                </div>
            </div>

            <div class="row">
                <div class="inputfield">
                    <label for="mother-country-code">Mother Country Code</label>
                    <input v-model="cow.motherCountryCode" type="text" name="mother-country-code">
                </div>

                <div class="inputfield">
                    <label for="mother-number">Mother ID</label>
                    <input v-model="cow.motherNumber" type="text" name="mother-number">
                </div>
            </div>

            <div class="row">
                <div class="inputfield">
                    <label for="donor-country-code">Donor Country Code</label>
                    <input v-model="cow.donorCountryCode" type="text" name="donor-country-code">
                </div>

                <div class="inputfield">
                    <label for="donor-number">Donor ID</label>
                    <input v-model="cow.donorNumber" type="text" name="donor-number">
                </div>
            </div>
        </div>

        <div>
            <h3>Breed composition</h3>
            <div class="row">
                <GChart type="PieChart" :data="chartData" :options="chartOptions"/>
                <div class="breeds-col">
                    <div v-for="breed in cow.breedComposition" class="row">
                        <div class="inputfield">
                            <label for="breed-id">Breed ID</label>
                            <input v-model="breed.id" type="text" name="breed-id" list="breeds">
                            <datalist id="breeds">
                                <option v-for="breed in breeds" :value="breed['id']">{{ breed["name"] }}</option>
                            </datalist>

                            <div class="input-after" style="pointer-events: none;">
                                <font-awesome-icon icon="fas fa-angle-down"/>
                            </div>
                        </div>
                        <div class="inputfield">
                            <label for="breed-percentage">Percentage</label>
                            <input v-model="breed.percentage" type="number" min="0" :max="chartFreePercentage + breed.percentage" name="breed-percentage">
                            <div class="input-after" style="pointer-events: none;">
                                <p>%</p>
                            </div>
                        </div>
                        <a @click="deleteBreed(breed.id)" class="delete"><font-awesome-icon icon="fas fa-trash-can"/></a>
                    </div>
                    <a v-if="!cow.breedComposition || (cow.breedComposition && cow.breedComposition.length < 5)" @click="addBreed()" class="row"><font-awesome-icon icon="fas fa-plus"/></a>
                </div>
            </div>
        </div>

        <button type="submit">Update</button>
    </form>
</template>

<script setup>
    import { ref, computed, watch } from 'vue';
    import { getDoc, onSnapshot, updateDoc } from "firebase/firestore";
    import { breedsCollection, colorationsCollection, cowDoc } from '../../firebase';

    const props = defineProps({
        farmId: {
            String,
            default: null,
        },
        cowId: {
            String,
            default: null,
        },
    });

    const cow = ref({
        countryCode: null,
        number: null,
        originalCountryCode: null,
        originalNumber: null,
        birthdate: null,
        deathdate: null,
        coloration: null,
        male: null,
        lactating: null,

        fatherLine: null,
        fatherRegister: null,
        motherCountryCode: null,
        motherNumber: null,
        donorCountryCode: null,
        donorNumber: null,

        breedComposition: null,
    });

    const breeds = ref([]);
    const colorations = ref([]);
    const chartOptions = ref({
        width: 500,
        height: 300,
        backgroundColor: "transparent",
        pieSliceBorderColor: "transparent",
        slices: {
          0: { color: "#ccc" },
        },
        legend: {
            position: "labeled",
            textStyle: {
                color: "#888",
                fontName: "Outfit",
                fontSize: 12,
                bold: true,
            },
        },
        pieSliceText: "none",
        tooltip: {
            text: "percentage",
        },
    });

    const chartData = computed(() => {
        let data = [
            ["Breed Id", "Percentage"],
            ["Free", chartFreePercentage.value],
        ];
        if (cow.value.breedComposition) {
            data.push(...cow.value.breedComposition.map(breed => [breed.id, breed.percentage]));
        }
        return data;
    });

    const cowData = computed(() => {
        let tmp = {};

        for (const key in cow.value) {
            if (cow.value[key] !== undefined) {
                if (cow.value[key] === "") {
                    tmp[key] = null;
                } else {
                    tmp[key] = cow.value[key];
                }
            }
        }

        return tmp;
    });

    const chartFreePercentage = computed(() => {
        let freePercentage = 100;
        if (cow.value.breedComposition) {
            cow.value.breedComposition.map(breed => freePercentage -= breed.percentage);
        }
        return freePercentage;
    });

    watch(() => props.cowId, () => {
        getDoc(cowDoc(props.farmId, props.cowId)).then(snapshot => {
            for (const key in cow.value) {
                cow.value[key] = snapshot.data()[key];
            }
        });
    });

    onSnapshot(breedsCollection, snapshot => {
        snapshot.docs.forEach(doc => {
            breeds.value.push(doc.data());
        });
    });

    onSnapshot(colorationsCollection, snapshot => {
        snapshot.docs.forEach(doc => {
            colorations.value.push(doc.data());
        });
    });

    onSnapshot(cowDoc(props.farmId, props.cowId), (snapshot) => {
        for (const key in cow.value) {
            cow.value[key] = snapshot.data()[key];
        };
    });

    function updateCow() {
        updateDoc(cowDoc(props.farmId, props.cowId), cowData.value);
    }

    function addBreed() {
        if (!cow.value.breedComposition) {
            cow.value.breedComposition = [{"id": breeds.value[0].id , "percentage": 0}];
        } else {
            if (cow.value.breedComposition.length < 5) {
                cow.value.breedComposition.push({"id": breeds.value[0].id , "percentage": 0});
            }
        }
    }

    function deleteBreed(id) {
        if (cow.value.breedComposition.length > 1) {
            let index = cow.value.breedComposition.findIndex(breed => breed.id === id);
            if (index > -1) {
                cow.value.breedComposition.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    @import url("../../css/form.css");

    form {
        margin: 0 1em;
    }

    form h3 {
        margin: .5em 0;
        font-family: var(--font-family-outfit);
    }

    button {
        width: 10%;
        align-self: flex-end;
    }

    .row {
        display: flex;
        gap: 1em;
    }

    .delete {
        align-self: flex-end;
        margin-bottom: 1em;
        color: var(--color-red);
    }

    .breeds-col {
        min-width: 24em;
    }

    .breeds-col .row:last-child {
        justify-content: center;
        margin-top: 1em;
    }

    .inputfield {
        width: 100%;
    }

    .radios {
        display: grid;
        gap: .5em;
        margin-bottom: 1em;
    }

    .radios .choice {
        display: flex;
        gap: .5em;
    }
</style>