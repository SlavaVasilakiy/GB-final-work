<template>
	<span>
		{{ formattedPrice }}
	</span>
</template>

<script>
export default {
	name: 'ProductDetailsPrice',

	props: {
		product: Object,
	},

	computed: {
		formattedPrice() {
			return `$${this.product.price}`;
		},
	},
};
</script>

<style lang="scss" scoped></style>
