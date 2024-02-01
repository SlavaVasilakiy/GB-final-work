const state = {
	projects: [
		{
			id: 1,
			title: 'Minimal Bedroom',
			category: 'Decor / Architecture',
			imageUrl: '/img/projectpage/project_1.jpg',
			categoryTag: 'Bedroom',
		},
		{
			id: 2,
			title: 'Minimal Bedroom',
			category: 'Decor / Architecture',
			imageUrl: '/img/projectpage/project_3.jpg',
			categoryTag: 'Bedroom',
		},
		{
			id: 3,
			title: 'Minimal Bedroom',
			category: 'Decor / Architecture',
			imageUrl: '/img/projectpage/project_5.jpg',
			categoryTag: 'Bedroom',
		},
		{
			id: 4,
			title: 'Minimal Bedroom',
			category: 'Decor / Architecture',
			imageUrl: '/img/projectpage/project_7.jpg',
			categoryTag: 'Bedroom',
		},
		{
			id: 5,
			title: 'Minimal Bedroom',
			category: 'Decor / Architecture',
			imageUrl: '/img/projectpage/project_2.jpg',
			categoryTag: 'Bedroom',
		},
		{
			id: 6,
			title: 'Minimal Bedroom',
			category: 'Decor / Architecture',
			imageUrl: '/img/projectpage/project_4.jpg',
			categoryTag: 'Bedroom',
		},
		{
			id: 7,
			title: 'Minimal Bedroom',
			category: 'Decor / Architecture',
			imageUrl: '/img/projectpage/project_6.jpg',
			categoryTag: 'Bedroom',
		},
		{
			id: 8,
			title: 'Minimal Bedroom',
			category: 'Decor / Architecture',
			imageUrl: '/img/projectpage/project_8.jpg',
			categoryTag: 'Bedroom',
		},
	],
	selectedCategory: null,
};

const mutations = {
	setCategory(state, categoryTag) {
		state.selectedCategory = categoryTag;
	},
};

const actions = {
	setCategory({ commit }, categoryTag) {
		commit('setCategory', categoryTag);
	},
};

const getters = {
	filteredProjects: state => {
		return state.selectedCategory
			? state.projects.filter(
					project => project.categoryTag === state.selectedCategory
			  )
			: state.projects;
	},
	selectedCategory: state => state.selectedCategory,
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
