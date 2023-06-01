<template>
    <nav id="navbar" class="navbar">
        <Logo/>
        <div class="nav-links-wrapper">
            <ul class="nav-links">
                <li class="nav-link">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="nav-link">
                    <RouterLink to="/#plans">Plans</RouterLink>
                </li>
                <li class="nav-link">
                    <RouterLink to="/#desktop">Desktop</RouterLink>
                </li>
                <li class="nav-link">
                    <RouterLink to="/#mobile">Mobile</RouterLink>
                </li>
            </ul>

            <div v-if="isLoggedIn" class="dropdown">
                <div @click="toggleDropdown" class="dropdown-btn">
                    <font-awesome-icon icon="fa-solid fa-circle-user" size="2x" style="pointer-events: none;"/>
                </div>
                <ul id="dropdown" class="dropdown-content">
                    <li>
                        <div>
                            <p class="label">Logged as</p>
                            <p>{{ getAuth().currentUser.email }}</p>
                        </div>
                        <p class="plan-type">Free</p>
                    </li>
                    <hr>
                    <li style="color: var(--color-primary)">
                        <font-awesome-icon icon="fa-solid fa-cow"/>
                        <RouterLink to="/app" style="color: var(--color-primary)">Go to app →</RouterLink>
                    </li>
                    <hr>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-user"/>
                        <RouterLink to="/profile">Profile</RouterLink>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-money-bill-wave"/>
                        <a>Subscription</a>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-moon"/>
                        <p>Dark mode</p>
                        <DarkModeSwitch/>
                    </li>
                    <hr>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-sign-out-alt"/>
                        <a @click.prevent="handleSignOut">Logout</a>
                    </li>
                </ul>
            </div>

            <Button v-else label="Sign In" :onClick="navigateToAuth"/>

            <button class="hamburger" v-on:click="toggleHamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
</template>

<script setup>
    import { getAuth } from '@firebase/auth';
    import router from "../router/index.js";

    import Logo from './Logo.vue';
    import Button from './Button.vue';
    import DarkModeSwitch from './DarkModeSwitch.vue';

    const props = defineProps({
        isLoggedIn: {
            type: Boolean,
            required: true,
        },
        handleSignOut: {
            type: Function,
            default: () => {},
        },
    });

    function toggleHamburger() {
        const hamburger = document.querySelector('.hamburger');
        const nav_links = document.querySelector('.nav-links');
        
        hamburger.classList.toggle("active");
        nav_links.classList.toggle("active");
    };

    function toggleDropdown() {
        document.getElementById("dropdown").classList.toggle("show");
    }
    
    function navigateToAuth() {
        router.push('/auth');
    };

    window.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            let dropdown = document.getElementById("dropdown");
            if (dropdown) {
                if (dropdown.classList.contains("show")) {
                    dropdown.classList.remove("show");
                }
            }
        }
    });

    window.addEventListener("scroll", function() {
        let navbar = this.document.getElementById("navbar")
        
        if (this.document.body.scrollTop >= 200 || this.document.documentElement.scrollTop >= 200) {
            navbar.classList.add("navbar-colored");
        } else {
            navbar.classList.remove("navbar-colored");
        }
    });
</script>

<style scoped>
    .navbar-colored {
        background-color: var(--color-60);
    }

    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: .5em 8%;
        transition: background-color 300ms;
        z-index: 100;
    }

    .nav-links-wrapper {
        display: flex;
        flex-direction: row;
        gap: 4em;
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 4em;
        font-size: 1.1em;
        font-family: var(--font-family-outfit);
        font-weight: 600;
        text-transform: uppercase;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-btn {
        color: var(--color-primary);
        transition: filter 300ms;
        cursor: pointer;
    }

    .dropdown-btn:hover {
        filter: opacity(50%);
    }

    .dropdown-content {
        display: none;
        gap: 1em;
        padding: 1.5em 0;
        position: absolute;
        right: 0;
        margin-top: .5em;
        font-family: var(--font-family-outfit);
        font-size: 1.1em;
        font-weight: 500;
        background-color: var(--color-60);
        border-radius: 1em;
        box-shadow: var(--box-shadow);
        min-width: 16em;
    }
    
    .dropdown-content.show {
        display: grid;
    }

    .dropdown-content li {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 6fr 2fr;
        gap: .5em;
        padding: 0 1em;
    }

    .dropdown-content li:first-child {
        grid-template-columns: 3fr 1fr;
    }

    .label {
        color: var(--color-text-alt);
        font-size: .8em;
    }

    .plan-type {
        padding: .2em .75em;
        border-radius: 1em;
        text-align: center;
        background-color: var(--color-primary-alt);
    }

    .hamburger {
        display: none;
    }

    @media screen and (max-width: 1024px) {
        .nav-links-wrapper {
            gap: 2em;
        }

        .nav-links {
            position: fixed;
            top: 0;
            left: 100%;
            flex-direction: column;
            justify-content: center;
            gap: 4em;
            
            width: 100%;
            height: 100%;
            backdrop-filter: blur(1em);
            transition: 300ms;
        }

        .nav-links.active {
            left: 0;
        }

        .nav-link {
            font-size: 2em;
        }

        .hamburger {
            position: relative;
            display: block;

            background: none;
            appearance: none;
            border: none;
            outline: none;
            cursor: pointer;

            user-select: none;
            z-index: 1;
        }

        .hamburger span {
            position: relative;
            display: block;

            width: 2.4em;
            height: 3px;
            margin: 6px 0;
            transform-origin: 0 0;

            background-color: var(--color-text);
            border-radius: 8px;
            transition: 300ms;

            z-index: 1;
        }

        .hamburger.active span:nth-child(2) {
            background: var(--color-primary);
            transform: translateX(10px);
        }
    }
</style>