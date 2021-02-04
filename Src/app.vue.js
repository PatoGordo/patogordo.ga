const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/contacts', component: Contacts }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
	router,
	el: "#app",
	data: {

	},
	template: `
		<div id="app">
			<app-navbar />
			<router-view></router-view>
		</div>
	`
}).$mount("#app")