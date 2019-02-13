<template>
    <div class="test">
        <div class="content">
            <h1>Simple Query with Fragments</h1>
        </div>
        <People v-bind:items="allPeople" />
    </div>
</template>

<script>
    import People from '../components/People.vue';
    import { SIMPLE_PEOPLE_QUERY_FRAGMENTS } from '../constants/graphql'

    export default {
        name: 'SimpleQueryWithFragmentsPage',
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
                query: SIMPLE_PEOPLE_QUERY_FRAGMENTS,
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
