<template>
    <section class="people">
        <div class="columns is-multiline" v-if="items.length > 0">
            <div class="column is-half" v-for="person in items" v-bind:key="person.id">
                <Person v-bind:name="person.name" v-bind:photoUrl="person.photoUrl" />
            </div>
        </div>
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