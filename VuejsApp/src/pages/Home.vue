﻿<template>
    <div class="home">
        <div class="content">
            <h1>Home</h1>
            <ul>
                <li><router-link to="/SimpleQuery">Simple Query</router-link></li>
                <li><router-link to="/Fragments">Simple Query (with Fragments)</router-link></li>
                <li><router-link to="/SimpleQueryWithVariable">Simple Query (with Variable)</router-link></li>
                <li><router-link to="/SimpleQueryWithVariables">Simple Query (with Variables)</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePage'
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
