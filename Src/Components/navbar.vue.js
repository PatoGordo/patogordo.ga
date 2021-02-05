Vue.component('app-navbar', {
  data: function () {
    return {
      clicked: false
    }		
  },
	methods:{
		handleClick(){
			window.scrollTo({ top: 0, behavior: 'smooth' })
			this.clicked = !this.clicked
		},
		goToHome(){
			window.scrollTo({ top: 0, behavior: 'smooth' })
			window.location.href = "/#/"
		}
	},
  template: `
		<nav class="navbar">
			<label class="logo" @click="goToHome()">PatoGordo</label>
			<label class="navbar-button" @click="handleClick()">
				<ion-icon :name="clicked ? 'close-outline' : 'menu-outline'"></ion-icon>
			</label>
			<ul @click="handleClick()" class="navbar-items":class="clicked ? 'active' : 'none'">
				<label class="navbar-item"><router-link class="navbar-link" to="/">Home</router-link></label>
				<label class="navbar-item"><router-link class="navbar-link" to="/about">About</router-link></label>
				<label class="navbar-item"><router-link class="navbar-link" to="/skills">Skills</router-link></label>
				<label class="navbar-item"><router-link class="navbar-link" to="/contacts">Contacts</router-link></label>
			</ul>
		</nav>
	`
})
