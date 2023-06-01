<template>
    <EasyDataTable
        :headers="headers"
        :items="formattedCows"
        theme-color="#5A6BFF"
        show-index
        table-class-name="table"
        header-text-direction="center"
        body-text-direction="center"
        buttons-pagination
        no-hover
    >
        <template #expand="cow">
            <div class="breed-composition">
                <ul>
                    <li v-for="breed in cow.breedComposition">{{ `(${breed.id}) ${breeds[breed.id].name} = ${breed.percentage}%` }}</li>
                    <li v-if="!cow.breedComposition">(F) Free = 100%</li>
                </ul>
                <GChart type="PieChart" :data="chartData(cow)" :options="chartOptions"/>
            </div>
        </template>
    </EasyDataTable>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { onSnapshot } from "firebase/firestore";
    import { breedsCollection } from '../../firebase';

    const props = defineProps({
        farm: {
            default: null,
        },
    });

    const breeds = ref({});

    const headers = ref([
        { text: "Cow Country Code", value: "countryCode", sortable: true },
        { text: "Cow Number", value: "number", sortable: true },
        { text: "Original Country Code", value: "originalCountryCode", sortable: true },
        { text: "Original Number", value: "originalNumber", sortable: true },
        { text: "Birthdate (yyyy-mm-dd)", value: "birthdate", sortable: true },
        { text: "Deathdate (yyyy-mm-dd)", value: "deathdate", sortable: true },
        { text: "Coloration", value: "coloration", sortable: true },
        { text: "Gender", value: "male", sortable: true },
        { text: "Utility Focus", value: "lactating", sortable: true },
        { text: "Father Line", value: "fatherLine", sortable: true },
        { text: "Father Register", value: "fatherRegister", sortable: true },
        { text: "Mother Country Code", value: "motherCountryCode", sortable: true },
        { text: "Mother Number", value: "motherNumber", sortable: true },
        { text: "Donor Country Code", value: "donorCountryCode", sortable: true },
        { text: "Donor Number", value: "donorNumber", sortable: true },
    ]);

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

    const formattedCows = computed(() => {
        let tmp = props.farm.cows;

        tmp.map(cow => {
            if (cow.male !== undefined) cow.male = cow.male === true ? "Male" : "Female";
            if (cow.lactating !== undefined) cow.lactating = cow.lactating === true ? "Lactating Cow" : "Dairy Cow";
            if (cow.coloration !== undefined) {
                switch (cow.coloration) {
                    case "0":
                        cow.coloration = "Black";
                        break;
                    
                    case "1":
                        cow.coloration = "Red";
                        break;
                
                    case "2":
                        cow.coloration = "Yellow-spotted";
                        break;
                
                    case "3":
                        cow.coloration = "Brown";
                        break;

                    case "4":
                        cow.coloration = "Other";
                        break;
                
                    default:
                        break;
                }
            }
        });

        return tmp;
    })

    onSnapshot(breedsCollection, snapshot => {
        snapshot.docs.forEach(doc => {
            breeds.value[doc.data().id] = doc.data();
        });
    });

    function chartData(cow) {
        let data = [
            ["Breed Id", "Percentage"],
            ["Free", chartFreePercentage(cow)],
        ];
        if (cow.breedComposition) {
            data.push(...cow.breedComposition.map(breed => [breed.id, breed.percentage]));
        }
        return data;
    };

    function chartFreePercentage(cow) {
        let freePercentage = 100;
        if (cow.breedComposition) {
            cow.breedComposition.map(breed => freePercentage -= breed.percentage);
        }
        return freePercentage;
    };
</script>

<style scoped>
    .table {
        --easy-table-border: none;
        --easy-table-buttons-pagination-border: none;
        --easy-table-row-border: 1px solid var(--color-text-alt);

        --easy-table-header-background-color: transparent;
        --easy-table-header-font-color: var(--color-text);
        --easy-table-header-font-size: .8em;

        
        --easy-table-body-row-background-color: transparent;
        --easy-table-body-row-font-color: var(--color-text);
        --easy-table-body-row-font-size: .9em;

        --easy-table-footer-background-color: transparent;
        --easy-table-footer-font-color: var(--color-text);
    }

    .breed-composition {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 2em;
    }

    .breed-composition ul {
        display: grid;
        gap: .5em;
        font-size: 1.2em;
    }

    .breed-composition ul::before {
        content: "Breed Composition:";
        margin-bottom: 1em;
        color: var(--color-primary);
        font-family: var(--font-family-outfit);
        font-size: 1.3em;
        font-weight: 600;
    }
</style>