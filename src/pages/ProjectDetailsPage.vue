<template>
	<div>
		<div class="banner"></div>
		<section class="description">
			<h2>{{ currentProject.name || '' }}</h2>
			<p>{{ currentProject.description || '' }}</p>
		</section>
		<section class="slider">
			<img :src="currentProject.imageSrc" alt="Project Image" />
			<div class="slider__buttons">
				<svg
					@click="prevProject"
					xmlns="http://www.w3.org/2000/svg"
					height="16"
					width="14"
					viewBox="0 0 448 512"
				>
					<path
						d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
					/>
				</svg>

				<svg
					@click="nextProject"
					xmlns="http://www.w3.org/2000/svg"
					height="16"
					width="14"
					viewBox="0 0 448 512"
				>
					<path
						d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
					/>
				</svg>
			</div>
			<div class="slider__pagination">
				<div
					v-for="(project, index) in currentProject"
					:key="index"
					@click="selectProject(index)"
					class="pagination-dot"
					:class="{ active: index === currentIndex }"
				>
					<div v-if="index === currentIndex" class="inner-dot"></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'ProjectDetailsPage',

	computed: {
		...mapGetters('detailsOfProject', [
			'currentProject',
			'currentIndex',
		]),
	},

	methods: {
		...mapActions('detailsOfProject', [
			'nextProject',
			'prevProject',
			'selectProject',
		]),
	},
};
</script>

<style lang="sass" scoped>
.banner
	background: url(../assets/img/projectdetailspage/top_banner.jpg), lightgray 50% / cover no-repeat
	height: 35rem
	background-size: 192rem
	margin: 0 -36rem
	margin-bottom: 20rem

.description
	max-width: 66rem
	margin: 0 auto
	padding-bottom: 20rem

	& h2
		color: #292F36
		font-family: DM Serif Display
		font-size: 5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .01rem
		margin-bottom: 1.1rem

	& p
		color: #4D5053
		font-family: Jost
		font-size: 2.2rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .022rem

.slider
	margin-bottom: 20rem
	display: flex
	flex-direction: column

	&__buttons
		display: flex
		justify-content: space-evenly

		& svg
			cursor: pointer

.slider img
	border-radius: 7rem
	margin-bottom: 5rem
</style>
