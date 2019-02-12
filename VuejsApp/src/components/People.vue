<template>
    <section class="people">
        <ul v-if="items.length > 0">
            <li v-for="person in items" v-bind:key="person._contentData.id">
                {{person._contentData.name}}
            </li>
        </ul>
        <p v-if="!items">Nobody here!</p>
    </section>
</template>

<script>
    export default {
        name: 'People',
        props: {
            items: Array
        }
    };
</script>

<style scoped>
</style>