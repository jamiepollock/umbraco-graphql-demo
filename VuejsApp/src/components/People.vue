<template>
    <section class="people">
        <ul v-if="items.length > 0">
            <li v-for="person in items" v-bind:key="person.id">
                <Person v-bind:name="person.name" v-bind:photoUrl="person.photoUrl" />
            </li>
        </ul>
        <p v-if="!items">Nobody here!</p>
    </section>
</template>

<script>
    import Person from './Person.vue';

    export default {
        name: 'People',
        props: {
            items: Array
        },
        components: {
            Person
        }
    };
</script>

<style scoped>
</style>