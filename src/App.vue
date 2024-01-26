<template>
	<div>
		<HeaderComponent />
		<router-view></router-view>
		<FooterComponent />
	</div>
</template>

<script>
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
export default {
	name: 'App',
	components: {
		FooterComponent,
		HeaderComponent,
	},
};
</script>

<style lang="sass">
*, ::after, ::before
	margin: 0
	padding: 0
	box-sizing: border-box

html
	font-size: 62.5%

body
	margin: 0 auto
	padding: 0 36rem
	max-width: 192rem

a
	text-decoration: none
</style>
