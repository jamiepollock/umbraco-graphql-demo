<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img v-bind:src="photoUrl" alt="Photo image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{name}}</p>
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
            photoUrl: String
        }
    };
</script>

<style scoped>
</style>