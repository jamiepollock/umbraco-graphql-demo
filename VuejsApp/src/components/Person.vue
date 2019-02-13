<template>
    <div class="card">
        <div class="card-image" v-if="photoUrl">
            <figure class="image is-4by3">
                <img v-bind:src="photoUrl" alt="Photo image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{name}}</p>
                    <ul v-if="departments && departments.length > 0">
                        <li v-for="(item, index) in departments" :key="`department-${index}`">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Person',
        props: {
            name: String,
            photoUrl: String,
            departments: Array
        }
    };
</script>

<style scoped>
</style>