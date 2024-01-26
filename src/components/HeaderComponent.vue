<template>
	<header class="header">
		<router-link to="/">
			<div class="header__logoAndName">
				<img
					class="interno-logo"
					src="../assets/logo/header_logo.svg"
					alt="Interno logo"
				/>
				<h1 class="header__heading">Interno</h1>
			</div>
		</router-link>

		<nav class="header__nav">
			<router-link to="/">Home</router-link>
			<router-link to="project">Project</router-link>
			<router-link to="blog">Blog</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data() {
		return {};
	},
	computed: {},
	props: {},
};
</script>

<style scoped lang="sass">
.header
	display: flex
	align-items: center
	justify-content: space-between
	margin-top: 5.2rem
	margin-bottom: 6rem

	&__logoAndName
		display: flex
		gap: 1rem

	&__heading
		color: #292f36
		font-family: DM Serif Display
		font-size: 4rem
		font-style: normal
		font-weight: 400
		line-height: 125%

	&__nav
		display: flex
		gap: 4.2rem

	&__nav a
		color: #292F36
		font-family: Jost
		font-size: 2rem
		font-style: normal
		font-weight: 400
		line-height: 125%
</style>
