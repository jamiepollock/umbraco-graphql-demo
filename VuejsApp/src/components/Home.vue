<template>
    <div class="home">
        <h1>{{ msg }}</h1>

        <ul>
            <li v-for="person in allPeople" v-bind:key="person._contentData.id">
                {{person._contentData.name}}
            </li>
        </ul>
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
    </div>
</template>

<script>
    import { SIMPLE_QUERY } from '../constants/graphql'

    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data() {
            return {
                allPeople: [],
                loading: 0
            }
        },
        apollo: {
            allPeople: {
                query: SIMPLE_QUERY,
                update: function (data) {

                    return data.content.byType.People._contentData.children.items;
                    //return data.content.byType.People._contentData.children.map(function (child) {
                    //    return child.node;
                    //});

                    //return data.content.byType.People._contentData.children;
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
