import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Vue from 'vue';


import VueApollo from 'vue-apollo'

import App from './App.vue';

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

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
})


new Vue({
    apolloProvider,
    render: h => h(App)
}).$mount('#app');
