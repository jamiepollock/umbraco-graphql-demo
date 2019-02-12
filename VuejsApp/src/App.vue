<template>
    <div id="app">
        <header class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">GraphQL for Umbraco Demo</h1>
                    <h2 class="subtitle">Featuring VueJS &amp; Apollo!</h2>
                </div>
            </div>
        </header>
        <main class="section">
            <div class="container">
                <Home v-bind:mediaAssetsRootUrl="mediaAssetsRootUrl" />
            </div>
        </main>
        <footer class="footer">
            <div class="container">
                <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
            </div>
        </footer>
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        data() {
            return {
                mediaAssetsRootUrl: process.env.VUE_APP_MEDIA_ASSETS_ROOT_URL
            }
        },
        components: {
            Home
        }
    };
</script>

<style>
</style>
