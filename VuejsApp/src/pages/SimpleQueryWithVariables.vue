<template>
    <div class="test">
        <div class="content">
            <h1>Simple Query with a Variable</h1>
        </div>
        <form method="get" v-on:submit.prevent="search">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Search Term</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="text" placeholder="Enter a value!" v-model="searchTerm">
                        </p>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label">Order By</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <label class="radio">
                                <input type="radio" v-model="orderBy" value="name_ASC">
                                Name (ASC)
                            </label>
                            <label class="radio">
                                <input type="radio" v-model="orderBy" value="name_DESC">
                                Name (DESC)
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label">
                    <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-primary" type="submit">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
        <People v-bind:items="allPeople" />
    </div>
</template>

<script>
    import People from '../components/People.vue';
    import { SIMPLE_QUERY_WITH_VARIABLES } from '../constants/graphql'

    export default {
        name: 'SimpleQueryWithVariablesPage',
        props: {
            mediaAssetsRootUrl: String
        },
        data() {
            return {
                allPeople: [],
                searchTerm: '',
                orderBy: 'name_ASC'
            }
        },
        methods: {
            search: function () {
                const component = this;

                if (component.searchTerm.trim().length === 0) {
                    return;
                }

                this.$apollo.query({
                    query: SIMPLE_QUERY_WITH_VARIABLES,
                    variables: {
                        searchTerm: component.searchTerm,
                        orderBy: component.orderBy
                    }
                }).then(function (response) {

                    component.allPeople = response.data.content.byType.People._contentData.peopleContainsSearchTerm.items.map(function (item) {
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
