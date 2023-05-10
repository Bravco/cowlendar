<template>
    <section>
        <div class="page-error">
            <h1 class="content-header">Page not found</h1>
            <p>Error 404 - Page was not found.<br>Sorry we can't find page you are looking for.</p>
        </div>
    </section>
    <Footer/>
</template>

<script setup>
    import Footer from "../components/Footer.vue";
</script>

<style scoped>
    @import url(../css/page-error.css);
</style>