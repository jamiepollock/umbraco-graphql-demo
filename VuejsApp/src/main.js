import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueApollo);

Vue.config.productionTip = true;

const httpLink = new HttpLink({
    uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
});

import HomePage from './pages/Home.vue';
import SimpleQueryPage from './pages/SimpleQuery.vue';
import SimpleQueryWithFragmentsPage from './pages/SimpleQueryWithFragments.vue';
import SimpleQueryWithVariablePage from './pages/SimpleQueryWithVariable.vue';
import SimpleQueryWithVariablesPage from './pages/SimpleQueryWithVariables.vue';

const props = {
    mediaAssetsRootUrl: process.env.VUE_APP_MEDIA_ASSETS_ROOT_URL
};

const routes = [
    { path: '/', component: HomePage },
    { path: '/SimpleQuery', component: SimpleQueryPage, props },
    { path: '/Fragments', component: SimpleQueryWithFragmentsPage, props },
    { path: '/SimpleQueryWithVariable', component: SimpleQueryWithVariablePage, props },
    { path: '/SimpleQueryWithVariables', component: SimpleQueryWithVariablesPage, props }
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    apolloProvider,
    render: h => h(App)
}).$mount('#app');