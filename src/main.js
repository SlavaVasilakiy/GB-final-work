import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from '@/store';
import router from '@/router';


Vue.use(VueRouter, Vuex);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	store: new Vuex.Store(store),
	router,
}).$mount('#app');
