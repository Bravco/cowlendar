<template>
    <footer>
        <div class="main">
            <div class="top">
                <div class="grid-item">
                    <Logo/>
                    <p>We can help you manage your farm, so you don't have to work as hard.</p>
                </div>
                <div class="grid-item">
                    <h2>Browse</h2>
                    <ul>
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/#plans">Plans</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/#desktop">Desktop</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/#mobile">Mobile</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="grid-item">
                    <h2>Services</h2>
                    <ul>
                        <li>
                            <RouterLink to="/app">Web App</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/#mobile">Mobile App</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="grid-item">
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <p>mhbravco@gmail.com</p>
                        </li>
                        <li>
                            <p>+421 949 725 726</p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="bottom">
                <p>Copyright 2023 &copy; Cowlendar | Made in Slovakia</p>
                <div class="links">
                    <a>Terms of Service</a>
                    <a>Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import Logo from './Logo.vue';
</script>

<style scoped>
    p, a {
        color: var(--color-text-alt);
        font-weight: 600;
        font-family: var(--font-family-outfit);
    }

    .main {
        padding: 2em 10%;
        background-color: var(--color-30);
    }
    
    .top, .bottom {
        padding: 1em 5%;
    }

    .top {
        display: grid;
        grid-template-columns: 2fr repeat(3, 1fr);
    }

    .grid-item:first-child {
        max-width: 50%;
    }

    .grid-item {
        display: grid;
        grid-template-rows: 1fr 2fr;
        gap: 1em;
    }

    .grid-item ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: .4em;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        font-size: .8em;
    }

    .bottom .links {
        display: flex;
        gap: 1em;
    }

    @media screen and (max-width: 1024px) {
        .top {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1em;
        }

        .grid-item:first-child {
            max-width: 100%;
        }
    }
</style>