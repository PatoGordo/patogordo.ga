
Vue.component('Page404', {
  data: function () {
    return {
			title: '404 page not found'
    }		
  },
	methods:{
		
	},
	created(){
		document.title = this.title
	},
  template: `
	<div class="div-component Page404">
		<h2>404</h2>
		<p>Page Not found</p>
		<router-link to="/">Return to home</router-link>
	</div>
	`
})

const Page404 = {
	template:`
		<Page404 />
	`
}