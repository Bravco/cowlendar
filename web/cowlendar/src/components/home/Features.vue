<template>
    <section id="desktop">
        <div class="content">
            <div class="img"></div>
            <div class="flex-item">
                <div class="text">
                    <h1 class="content-header">Desktop App</h1>
                    <p class="content-paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                </div>

                <ul class="choices-list">
                    <li v-for="item in desktopItems" :key="item.id" class="choice-item"  :class="{ active: item.id == selectedDesktopId }" @click.prevent="selectDesktopItem(item.id)">
                        <h2 class="choice-title">{{ item.title }}</h2>
                        <p v-if="item.id == selectedDesktopId" class="choice-description">{{ item.description }}</p>
                    </li>
                    <li>
                        <RouterLink to="/app">Go to app →</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section id="mobile">
        <div class="content">
            <div class="img"></div>
            <div class="flex-item">
                <div class="text">
                    <h1 class="content-header">Mobile App</h1>
                    <p class="content-paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                </div>

                <ul class="choices-list">
                    <li v-for="item in mobileItems" :key="item.id" class="choice-item"  :class="{ active: item.id == selectedMobileId }" @click.prevent="selectMobileItem(item.id)">
                        <h2 class="choice-title">{{ item.title }}</h2>
                        <p v-if="item.id == selectedMobileId" class="choice-description">{{ item.description }}</p>
                    </li>
                    <li>
                        <a class="btn btn-apple" href="">App Store</a>
                        <a class="btn btn-google" href="">Google Play</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const selectedDesktopId = ref(0);
    const selectedMobileId = ref(0);
    const desktopItems = [
        {
            id: 0,
            title: "1st choice",
            description: "Short description of the selected choice.",
        },
        {
            id: 1,
            title: "2nd choice",
            description: "Short description of the selected choice.",
        },
        {
            id: 2,
            title: "3rd choice",
            description: "Short description of the selected choice.",
        },
    ];
    const mobileItems = [
        {
            id: 0,
            title: "1st choice",
            description: "Short description of the selected choice.",
        },
        {
            id: 1,
            title: "2nd choice",
            description: "Short description of the selected choice.",
        },
        {
            id: 2,
            title: "3rd choice",
            description: "Short description of the selected choice.",
        },
    ];

    function selectDesktopItem(id) {
        selectedDesktopId.value = id;
    };

    function selectMobileItem(id) {
        selectedMobileId.value = id;
    };
</script>

<style scoped>
    a.btn-google {font-family: var(--font-family-outfit); width: min-content;}
    .btn{padding:10px 16px;margin:5px;font-size:18px;line-height:1.3333333;border: 2px solid var(--color-text);;border-radius:8px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:500;text-decoration:none;display:inline-block}
    .btn{padding:15px 16px 5px 40px;position:relative;font-weight:600}
    .btn:before{content:"";background-size:cover;background-repeat:no-repeat;width:30px;height:30px;position:absolute;left:6px;top:50%;margin-top:-15px}
    .btn:after{position:absolute;top:5px;left:40px;font-size:10px;font-weight:400;}

    .btn-google:before{background-image:url(https://4.bp.blogspot.com/-52U3eP2JDM4/WSkIT1vbUxI/AAAAAAAArQA/iF1BeARv2To-2FGQU7V6UbNPivuv_lccACLcB/s30/nexus2cee_ic_launcher_play_store_new-1.png);}
    .btn-google:after{content:"GET IT ON";}

    .btn-apple:before{background-image:url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiMyZTJlMmUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);}
    .btn-apple:after{content:"Download on the";}

    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        gap: 8em;
        margin: 0 8em;
    }

    .img {
        background-color: var(--color-30);
        width: 100%;
        height: 100%;
    }

    .flex-item {
        display: grid;
        gap: 2em;
    }

    #mobile .flex-item {
        order: -1;
    }

    .text {
        display: grid;
        gap: 1em;
    }

    .choices-list {
        display: grid;
        gap: 1em;
    }

    #desktop .choices-list a {
        text-decoration: underline;
        color: var(--color-primary);
        font-family: var(--font-family-outfit);
        font-weight: 700;
    }

    .choice-item {
        padding: 1em;
        border-radius: 1em;
        cursor: pointer;
        transition: background-color 300ms;
    }

    .choices-list li:last-child {
        display: flex;
        justify-content: flex-end;
    }

    .choice-item.active {
        background-color: var(--color-primary-alt);
        border: 2px solid var(--color-primary);
    }

    .choice-title {
        font-family: var(--font-family-outfit);
        font-size: 1.6em;
    }

    .choice-description {
        font-size: 1.2em;
    }

    @media screen and (max-width: 1488px) {
        .content {
            grid-template-columns: 1fr;
            padding: 4em 0;
        }

        .img {
            width: 50vw;
            height: 50vh;
        }

        .flex-item {
            order: -1;
        }
    }
</style>