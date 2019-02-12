<template>
    <div class="home">
        <h1 class="is-size-1">Home</h1>
        <People v-bind:items="allPeople" />
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
    </div>
</template>

<script>
    import People from './People.vue';
    import { SIMPLE_QUERY } from '../constants/graphql'

    export default {
        name: 'Home',
        props: {
            mediaAssetsRootUrl: String
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
                    const component = this;

                    return data.content.byType.People._contentData.children.items.map(function (item) {
                        return {
                            name: item._contentData.name,
                            id: item._contentData.id,
                            photoUrl: component.mediaAssetsRootUrl + item.photo._contentData.url
                        };
                    });
                }
            }
        },
        components: {
            People
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
