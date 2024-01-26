<template>
	<div>
		<main>
			<div class="banner">
				<div class="banner__heading">
					<h2 class="banner__heading_h2">Our Project</h2>
					<p class="banner__heading_p">Home / Project</p>
				</div>
			</div>
			<section class="navigation_center">
				<div class="navigation">
					<nav class="projects-nav">
						<label class="projects-list" :class="{ selected: selectedCategory === 'Bathroom' }">
							Bathroom
							<input type="radio" v-model="selectedCategory" value="Bathroom" />
						</label>
						<label class="projects-list" :class="{ selected: selectedCategory === 'Bedroom' }">
							Bed&nbsp;Room
							<input type="radio" v-model="selectedCategory" value="Bedroom" />
						</label>
						<label class="projects-list" :class="{ selected: selectedCategory === 'Kitchan' }">
							Kitchan
							<input type="radio" v-model="selectedCategory" value="Kitchan" />
						</label>
						<label class="projects-list" :class="{ selected: selectedCategory === 'Living Area' }">
							Living&nbsp;Area
							<input type="radio" v-model="selectedCategory" value="Living Area" />
						</label>
					</nav>
				</div>
			</section>
			<section class="projects">
				<div v-for="project in filteredProjects" :key="project.id" class="project-box">
					<img :src="project.imageUrl" :alt="project.title" class="project-box__img" />
					<div class="project-box__description">
						<div>
							<h4>{{ project.title }}</h4>
							<p>{{ project.category }}</p>
						</div>
						<buttonToProjectDetails />
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import buttonToProjectDetails from '../components/buttonToProjectDetails';
import { mapGetters, mapActions } from 'vuex';

export default {
	components: { buttonToProjectDetails: buttonToProjectDetails },
	name: 'ProjectPage',

	methods: {
		...mapActions('projects', ['setCategory', 'filterProjects']),
	},

	computed: {
		...mapGetters('projects', [
			'filteredProjects',
			'categories',
			'selectedCategory',
		]),

		selectedCategory: {
			get() {
				return this.$store.state.projects.selectedCategory;
			},
			set(category) {
				this.setCategory(category);
			},
		},
		categories() {
			return [
				...new Set(
					this.$store.state.projects.projects.map(project => project.category)
				),
			];
		},
	},
	mounted() {
		this.setCategory('Bedroom');
	},
};
</script>

<style lang="sass" scoped>
.banner
	background: url(../assets/img/projectPage/top_banner.jpg), lightgray 50% / cover no-repeat
	height: 35rem
	background-size: 192rem
	margin: 0 -36rem
	margin-bottom: 20rem
	display: flex
	justify-content: center
	align-items: flex-end

	&__heading
		display: flex
		flex-direction: column
		justify-content: center
		text-align: center
		width: 50rem
		height: 18rem
		background: white
		border-radius: 5rem 5rem 0rem 0rem

		&_h2
			color: #292F36
			font-family: DM Serif Display
			font-size: 5rem
			font-style: normal
			font-weight: 400
			line-height: 125%

		&_p
			color: #4D5053
			font-family: Jost
			font-size: 2.2rem
			font-style: normal
			font-weight: 400
			line-height: 150%
			letter-spacing: .022rem

.navigation
	display: flex
	justify-content: center
	border-radius: 1.8rem
	border: .01rem solid #CDA274
	margin-bottom: 6rem
	width: 88rem

	&_center
		width: 100%
		display: flex
		justify-content: center

.projects-nav
	height: 7.5rem
	gap: 1rem
	display: flex
	justify-content: center
	align-items: center
	color: #292F36
	text-align: center
	font-family: Jost
	font-size: 1.8rem
	font-style: normal
	font-weight: 600
	line-height: 125%
	letter-spacing: .036rem

.projects-list input
	display: none

.projects-list
	cursor: pointer
	padding: 2.6rem 6.6rem
	border-radius: 1.8rem

.selected
	background-color: #CDA274
	color: #FFF

.projects
	margin-bottom: 20rem
	column-count: 2
.project-box
	display: inline-block
	margin-bottom: 3rem

	&__img
		padding-bottom: 2.4rem

	&__description
		display: flex
		justify-content: space-between

	&__description h4
		color: #292F36
		font-family: DM Serif Display
		font-size: 2.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .05rem

	&__description p
		color: #4D5053
		font-family: Jost
		font-size: 22px
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: 0.22px
</style>
