<template>
    <p>{{name}}</p>
</template>

<script>
    export default {
        name: 'Person',
        props: {
            name: String
        }
    };
</script>

<style scoped>
</style>