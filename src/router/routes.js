const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				component: () => import('pages/IndexPage.vue'),
				meta: {
					title: 'Главная',
					requiresAuth: true
				}
			},
			{
				path: 'certificates',
				component: () => import('pages/Certificates.vue'),
				meta: {
					title: 'Сертификаты',
					requiresAuth: true
				}
			},
			{
				path: 'promocodes',
				component: () => import('pages/PromoCodes.vue'),
				meta: {
					title: 'Промокоды',
					requiresAuth: true
				}
			},
		]
	},

	{
		path: '/',
		component: () => import('layouts/AuthLayout.vue'), // Регистрация 
		children: [
			{
				path: '/login',
				component: () => import('pages/AuthComp.vue'),
				meta: {
					title: 'Вход'
				}
			},
		]
	},
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue') // 404 page
	}
]

export default routes
