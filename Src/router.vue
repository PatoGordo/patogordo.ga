const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name: 'about' },
  { path: '/skills', component: Skills, name: 'skills' },
  { path: '/contacts', component: Contacts, name: 'contacts' },
  { path: '/projects', component: Projects, name: 'projects' },
	{ path: '/feedback', component: Feedback, name: 'feedback' },

  { path: '/*', component: Page404, name: '404' }
]

const router = new VueRouter({
  routes,
	mode: 'hash'
	/*-----------*/
	// ToDo
	// I couldn't use mode: history,
	// if you know how to make that please makes a PULL REQUEST.
	// Thanks!
	/*-----------*/
})
