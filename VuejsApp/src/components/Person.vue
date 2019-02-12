<template>
    <p>{{name}} <img v-bind:src="photoUrl" alt="Photo" /></p>
</template>

<script>
    export default {
        name: 'Person',
        props: {
            name: String,
            photoUrl: String
        }
    };
</script>

<style scoped>
</style>