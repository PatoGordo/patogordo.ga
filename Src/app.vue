const app = new Vue({
	router,
	el: "#app",
	data: {

	},
	mounted(){
		
	},
	template: `
		<div id="app">
			<app-navbar />
			<router-view></router-view>
		</div>
	`
}).$mount("#app")