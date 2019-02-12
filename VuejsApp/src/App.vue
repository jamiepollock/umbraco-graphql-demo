<template>
    <div id="app">
        <Home msg="People" v-bind:mediaAssetsRootUrl="mediaAssetsRootUrl" />
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
