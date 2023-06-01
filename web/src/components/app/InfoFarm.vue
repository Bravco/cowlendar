<template>
    <form id="form" @submit.prevent="updateFarm()">
        <div>
            <h3>Basic information - farm</h3>
            <div class="row">
                <div class="inputfield">
                    <label for="farm-register-id">Farm Register ID</label>
                    <input v-model="farm.registerId" type="text" name="farm-register-id">
                </div>

                <div class="inputfield">
                    <label for="farm-name">Farm Name</label>
                    <input v-model="farm.name" type="text" name="farm-name">
                </div>
            </div>

            <div class="row">
                <div class="inputfield">
                    <label for="state">State</label>
                    <input v-model="farm.state" type="text" name="state">
                </div>

                <div class="inputfield">
                    <label for="city">City</label>
                    <input v-model="farm.city" type="text" name="city">
                </div>

                <div class="inputfield">
                    <label for="postal-code">Postal Code</label>
                    <input v-model="farm.postalCode" type="text" name="postal-code">
                </div>
            </div>

            <div class="row">
                <div class="inputfield">
                    <label for="street">Street</label>
                    <input v-model="farm.street" type="text" name="street">
                </div>
            </div>
        </div>


        <div>
            <h3>Person in possession</h3>
            <div class="radios">
                <div class="choice">
                    <input v-model="farm.possession" type="radio" id="legal" name="person" value="legal" checked>
                    <label for="legal">Legal Person</label>
                </div>

                <div class="choice">
                    <input v-model="farm.possession" type="radio" id="natural" name="person" value="natural">
                    <label for="natural">Natural Person</label>
                </div>
            </div>
            
            <div v-if="farm.possession === 'legal'" class="row">
                <div class="inputfield">
                    <label for="business-id">Business ID</label>
                    <input v-model="farm.legalBusinessId" type="text" name="business-id">
                </div>

                <div class="inputfield">
                    <label for="business-name">Business Name</label>
                    <input v-model="farm.legalBusinessName" type="text" name="business-name">
                </div>
            </div>

            <div v-if="farm.possession === 'natural'">
                <div class="row">
                    <div class="inputfield">
                        <label for="degree-before">Degree Before</label>
                        <input v-model="farm.naturalDegreeBefore" type="text" name="degree-before">
                    </div>

                    <div class="inputfield">
                        <label for="firstname">First Name</label>
                        <input v-model="farm.naturalFirstName" type="text" name="firstname">
                    </div>

                    <div class="inputfield">
                        <label for="lastname">Last Name</label>
                        <input v-model="farm.naturalLastName" type="text" name="lastname">
                    </div>

                    <div class="inputfield">
                        <label for="degree-after">Degree After</label>
                        <input v-model="farm.naturalDegreeAfter" type="text" name="degree-after">
                    </div>
                </div>

                <div class="row">
                    <div class="inputfield">
                        <label for="birthdate">Birthdate</label>
                        <input v-model="farm.naturalBirthdate" type="date" name="birthdate">
                    </div>
                </div>
            </div>

            <h3>Person in possession address</h3>

            <div class="row">
                <div class="inputfield">
                    <label for="state">State</label>
                    <input v-model="farm.possessionState" type="text" name="state">
                </div>

                <div class="inputfield">
                    <label for="city">City</label>
                    <input v-model="farm.possessionCity" type="text" name="city">
                </div>

                <div class="inputfield">
                    <label for="postal-code">Postal Code</label>
                    <input v-model="farm.possessionPostalCode" type="text" name="postal-code">
                </div>
            </div>

            <div class="row">
                <div class="inputfield">
                    <label for="street">Street</label>
                    <input v-model="farm.possessionStreet" type="text" name="street">
                </div>
            </div>
        </div>

        <button type="submit">Update</button>
    </form>
</template>

<script setup>
    import { ref, computed, watch } from 'vue';
    import { getDoc, onSnapshot, updateDoc } from '@firebase/firestore';
    import { farmDoc } from '../../firebase';

    const props = defineProps({
        farmId: {
            String,
            default: null,
        },
    });

    const farm = ref({
        registerId: null,
        name: null,
        state: null,
        city: null,
        postalCode: null,
        street: null,
        possession: "legal",

        legalBusinessId: null,
        legalBusinessName: null,

        naturalDegreeBefore: null,
        naturalDegreeAfter: null,
        naturalFirstName: null,
        naturalLastName: null,
        naturalBirthdate: null,

        possessionState: null,
        possessionCity: null,
        possessionPostalCode: null,
        possessionStreet: null,
    });

    const farmData = computed(() => {
        let tmp = {};

        for (const key in farm.value) {
            if (farm.value[key] !== undefined) {
                if (farm.value[key] === "") {
                    tmp[key] = null;
                } else {
                    tmp[key] = farm.value[key];
                }
            }
        }

        return tmp;
    });

    watch(() => props.farmId, () => {
        getDoc(farmDoc(props.farmId)).then(snapshot => {
            for (const key in farm.value) {
                farm.value[key] = snapshot.data()[key];
            }
        });
    });

    onSnapshot(farmDoc(props.farmId), (snapshot) => {
        for (const key in farm.value) {
            farm.value[key] = snapshot.data()[key];
        }
    });

    function updateFarm() {
        updateDoc(farmDoc(props.farmId), farmData.value);
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