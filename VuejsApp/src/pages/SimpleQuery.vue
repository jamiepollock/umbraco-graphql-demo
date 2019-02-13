<template>
    <div class="home">
        <div class="content">
            <h1>Simple Query</h1>
            <p>A simple example of pulling people back from Umbraco.</p>
        </div>
        <People v-bind:items="allPeople" />
    </div>
</template>

<script>
    import People from '../components/People.vue';
    import { SIMPLE_PEOPLE_QUERY } from '../constants/graphql'

    export default {
        name: 'HomePage',
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
                query: SIMPLE_PEOPLE_QUERY,
                update: function (data) {
                    const component = this;

                    return data.content.byType.People._contentData.children.items.map(function (item) {
                        return {
                            name: item._contentData.name,
                            id: item._contentData.id,
                            photoUrl: component.mediaAssetsRootUrl + item.photo._contentData.url,
                            departments: item.department
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
