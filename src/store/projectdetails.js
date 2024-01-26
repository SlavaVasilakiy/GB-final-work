const state = {
	currentIndex: 0,

	detailsOfProject: [
		{
			id: 1,
			name: 'Minimal Look Bedrooms',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
										vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
										maximus purus posuere in...`,
			imageSrc: './img/projectdetailspage/photo_1.jpg',
		},
		{
			id: 2,
			name: 'PROJETC - 2',
			description: `Далеко-далеко за словесными горами в стране гласных и согласных живут 
										рыбные тексты. Правилами семантика пустился рукопись, гор там проектах ведущими великий.
										Грамматики безопасную, журчит путь сноваподзаголовок однажды лучше ему текст даже!.`,
			imageSrc: './img/projectdetailspage/photo_1.jpg',
		},
		{
			id: 3,
			name: 'PROJETC - 3',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
										vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
										maximus purus posuere in...`,
			imageSrc: './img/projectdetailspage/photo_1.jpg',
		},
		{
			id: 4,
			name: 'PROJETC - 4',
			description: `Далеко-далеко за словесными горами в стране гласных и согласных живут 
										рыбные тексты. Правилами семантика пустился рукопись, гор там проектах ведущими великий.
										Грамматики безопасную, журчит путь сноваподзаголовок однажды лучше ему текст даже!.`,
			imageSrc: './img/projectdetailspage/photo_1.jpg',
		},
		{
			id: 5,
			name: 'PROJETC - 5',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
										vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
										maximus purus posuere in...`,
			imageSrc: './img/projectdetailspage/photo_1.jpg',
		},
	],
};

const mutations = {
	SET_NEXT_PROJECT(state) {
		state.currentIndex =
			(state.currentIndex + 1) % state.detailsOfProject.length;
	},
	SET_PREV_PROJECT(state) {
		state.currentIndex =
			(state.currentIndex - 1 + state.detailsOfProject.length) %
			state.detailsOfProject.length;
	},
	SET_CURRENT_INDEX(state, index) {
		state.currentIndex = index;
	},
};

const actions = {
	nextProject({ commit }) {
		commit('SET_NEXT_PROJECT');
	},
	prevProject({ commit }) {
		commit('SET_PREV_PROJECT');
	},
	selectProject({ commit }, index) {
		commit('SET_CURRENT_INDEX', index);
	},
};

const getters = {
	currentProject(state) {
		return state.detailsOfProject[state.currentIndex] || {};
	},
	// currentIndex(state) {
	// 	return state.currentIndex;
	// },
	currentIndex: () => state => {
		return state.currentIndex;
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
