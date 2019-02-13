<template>
    <section class="people">
        <div class="content">
            <h2>People</h2>
        </div>
        <div class="columns is-multiline" v-if="items.length > 0">
            <div class="column is-half" v-for="person in items" v-bind:key="person.id">
                <Person v-bind:name="person.name" v-bind:photoUrl="person.photoUrl" v-bind:departments="person.departments" />
            </div>
        </div>
        <article class="message" v-if="!items || items.length === 0">
            <div class="message-body">
                Looks like nobody is here :(
            </div>
        </article>
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