<template>
	<router-link to="project" class="buttonToProject"
		><svg
			width="70"
			height="70"
			viewBox="0 0 70 70"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="35" cy="35" r="35" fill="#F4F0EC" />
			<path
				d="M32 44L40 35L32 26"
				stroke="#292F36"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/></svg
	></router-link>
</template>

<script>
export default {
	name: 'buttonToProject',
	data() {
		return {};
	},
	computed: {},
	props: {},
};
</script>

<style scoped lang="sass">
.buttonToProject
	cursor: pointer
	transition: all .3s
.buttonToProject:hover
	filter: contrast(70%) drop-shadow(3px 4px 6px rgba(0, 0, 0, 0.4))
	transition: all .3s
</style>
