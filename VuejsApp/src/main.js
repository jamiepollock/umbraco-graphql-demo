import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Vue from 'vue'

import App from './App.vue';


import VueRouter from 'vue-router'

import VueApollo from 'vue-apollo'



Vue.use(VueRouter);
Vue.use(VueApollo);

Vue.config.productionTip = true;

// 3
const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
})

// 4
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})


const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
})



import HomePage from './pages/Home.vue';
//import Test from './pages/Test.vue';

const mediaAssetsRootUrl = process.env.VUE_APP_MEDIA_ASSETS_ROOT_URL;

const routes = [
    { path: '/', component: HomePage, props: { mediaAssetsRootUrl } }
]

const router = new VueRouter({
    routes
});

new Vue({
    router,
    apolloProvider,
    render: h => h(App)
}).$mount('#app')