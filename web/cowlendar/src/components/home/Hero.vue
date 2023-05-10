<template>
    <section id="hero">
        <div class="content">
            <div class="flex-item">
                <div class="slogan-col">
                    <h1 class="content-header">Moo-ving towards smarter farming</h1>
                    <p class="content-paragraph-alt">Keep your herd productive and grow with ease.</p>
                </div>
                <div class="btn-row">
                    <Button label="Get Started" fSize="1.2em" @click="scrollTo('plans')"/>
                    <Button label="Learn More" fSize="1.2em" :isOutlined="true" @click="scrollTo('about')"/>
                </div>
            </div>

            <div class="flex-item">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path class="shape-fill" d="M28.2,-47.9C39.4,-42.3,53.5,-40.6,65.8,-33.3C78.2,-26,88.9,-13,89.4,0.3C89.8,13.5,80,27,68.3,35.5C56.6,44,43.1,47.6,31.4,53.9C19.7,60.3,9.8,69.6,0,69.6C-9.9,69.6,-19.7,60.4,-34,55.5C-48.3,50.6,-67,50.1,-73.4,41.5C-79.8,33,-73.8,16.5,-67.3,3.8C-60.8,-9,-53.7,-18,-47.1,-26.1C-40.5,-34.2,-34.4,-41.5,-26.6,-49.1C-18.8,-56.7,-9.4,-64.6,-0.5,-63.7C8.5,-62.9,16.9,-53.5,28.2,-47.9Z" transform="translate(100 100)" />
                </svg>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#5A6BFF" d="M37.2,-67.8C45.2,-59.9,46.6,-43.8,54.4,-31.1C62.3,-18.4,76.7,-9.2,81.2,2.6C85.7,14.4,80.3,28.8,69.7,36.9C59.2,45,43.6,46.8,31.2,53.2C18.7,59.6,9.4,70.6,-1,72.3C-11.3,73.9,-22.5,66.2,-29.9,56.9C-37.2,47.5,-40.6,36.5,-48.1,26.7C-55.5,17,-67,8.5,-72,-2.9C-77.1,-14.3,-75.7,-28.6,-67,-36.2C-58.4,-43.8,-42.4,-44.8,-30,-50.1C-17.6,-55.4,-8.8,-65.2,2.9,-70.3C14.6,-75.3,29.2,-75.7,37.2,-67.8Z" transform="translate(100 100)" />
                </svg>
                <img src="../../assets/hero_cow.png" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>
    import Button from '../Button.vue';

    function scrollTo(hash) {
        let element = document.getElementById(hash);
        element.scrollIntoView();
    };
</script>

<style scoped>
    .content-header {
        inline-size: 75%;
    }

    section {
        max-width: 90%;
        margin: 0 16em 0 8em;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .flex-item:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 3em;
    }

    .slogan-col {
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    .btn-row {
        display: flex;
        gap: 2em;
    }

    .flex-item:nth-child(2) {
        display: grid;
        place-items: center;
    }

    .flex-item:nth-child(2) {
        max-width: 30%;
    }

    .flex-item:nth-child(2) img {
        max-width: 100%;
    }

    .flex-item:nth-child(2) svg {
        filter: opacity(50%);
        position: absolute;
        scale: .8;
        z-index: -1;
    }

    .flex-item:nth-child(2) svg:nth-child(1) .shape-fill {
        fill: var(--color-text-alt);
    }

    @media screen and (max-width: 1024px) {
        .content-header {
            inline-size: auto;
        }

        section {
            margin: 8em 1em 0 1em;
        }

        .content {
            flex-direction: column-reverse;
            gap: 5em;
        }

        .flex-item:nth-child(2) {
            max-width: 50%;
        }
    }
</style>