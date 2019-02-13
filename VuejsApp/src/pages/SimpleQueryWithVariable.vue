<template>
    <div class="test">
        <h1 class="is-size-1">Simple Query with a Variable</h1>
        <form method="get" v-on:submit.prevent="search">
            <div class="field has-addons">
                <div class="control">
                    <input class="input" type="text" v-model="searchLetter" maxlength="1" placeholder="Enter a letter!">
                </div>
                <div class="control">
                    <button type="submit" class="button is-info">
                        Search
                    </button>
                </div>
            </div>
        </form>
        <People v-bind:items="allPeople" />
    </div>
</template>

<script>
    import People from '../components/People.vue';
    import { SIMPLE_QUERY_WITH_VARIABLE } from '../constants/graphql'

    export default {
        name: 'SimpleQueryWithVariablePage',
        props: {
            mediaAssetsRootUrl: String
        },
        data() {
            return {
                allPeople: [],
                searchLetter: ''
            }
        },
        methods: {
            search: function () {
                const component = this;

                this.$apollo.query({
                    query: SIMPLE_QUERY_WITH_VARIABLE,
                    variables: {
                        searchLetter: component.searchLetter
                    }
                }).then(function (response) {

                    component.allPeople = response.data.content.byType.People._contentData.peopleStartsWithLetter.items.map(function (item) {
                        return {
                            name: item._contentData.name,
                            id: item._contentData.id,
                            photoUrl: component.mediaAssetsRootUrl + item.photo._contentData.url,
                            departments: item.department
                        };
                    });
                });
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
