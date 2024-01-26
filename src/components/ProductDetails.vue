<template>
	<div>
		<div v-if="products.length > 0">
			<div class="product" v-for="product in products" :key="product.id">
				<h2>{{ product.name }}</h2>
				<!-- <p>Price: <ProductDetailsPrice :product="product" /></p> -->
				<p>Price: {{ formattedPrice(product) }}</p>
				<p>Status: {{ product.available ? 'Available' : 'Out of stock' }}</p>
			</div>
		</div>
		<div v-else>
			<p>Loading...</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import ProductDetailsPrice from './ProductDetailsPrice.vue';

export default {
	name: 'ProductDetails',

	mounted() {
		this.fetchProductsData();
	},
	methods: {
		...mapActions(['fetchProductsData']),
	},
	computed: {
		...mapGetters(['allProducts', 'formattedPrice']),
		products() {
			return this.allProducts;
		},
	},
	// components: { ProductDetailsPrice },
};
</script>

<style lang="sass" scoped>
*
	font-size: 120%

.product
	margin: 5rem
</style>
