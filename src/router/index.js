import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomePage from '@/pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		// component: HomePage,
		component: () => import('@/pages/HomePage.vue'), // для оптимизации трафика, компонент будет загружаться только в момент обращения к нему.
	},
	{
		path: '/blog_details',
		name: 'blog_details',
		component: () => import('@/pages/BlogDetailsPage.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/pages/BlogPage.vue')
	},
	{
		path: '/project',
		name: 'project',
		component: () => import('@/pages/ProjectPage.vue')
	},
	{
		path: '/project_details',
		name: 'project_details',
		component: () => import('@/pages/ProjectDetailsPage.vue')
	},
	{
		path: '*',
		name: 'notFound',
		component: () => import('@/pages/NotFoundPage.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
