import Vue from "vue";
import Vuex from "vuex";
import projects from "./projects";
import detailsOfProject from './projectdetails';

Vue.use(Vuex);

export default {
	state: {
		products: [],
	},

	actions: {
		fetchProductsData({ commit }) {
			setTimeout(() => {
				commit('SET_PRODUCTS', [
					{
						id: 1,
						name: 'Product name 1',
						price: 10.99,
						available: true,
					},
					{
						id: 2,
						name: 'Product name 2',
						price: 13.99,
						available: true,
					},
					{
						id: 3,
						name: 'Product name 3',
						price: 3.99,
						available: false,
					},
					{
						id: 4,
						name: 'Product name 4',
						price: 35.99,
						available: true,
					},
					{
						id: 5,
						name: 'Product name 5',
						price: 1.99,
						available: false,
					},
				]);
			}, 2000);
		},
	},

	getters: {
		allProducts(state) {
			return state.products;
		},

		formattedPrice: () => product => {
			return `$${product.price}`;
		},
	},

	mutations: {
		SET_PRODUCTS(state, productsList) {
			state.products = productsList;
		},
	},

	modules: {
		projects,
		detailsOfProject,
	},
};
