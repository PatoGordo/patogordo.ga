Vue.component('Card', {
  data: function () {
    return {
      
    }		
  },
	props: ['name', 'redirect', 'description'],
	methods:{
		
	},
  template: `
		<a class="card" :href="redirect">
			<h1 class="cardItem name">{{name}}</h1>
			<p class="cardItem description">{{description}}</p>
		</a>
	`
})

Vue.component('CardSkill', {
  data: function () {
    return {
      
    }		
  },
	props: ['imageSrc', 'alt', 'title', 'description', 'exemple'],
	methods:{
		
	},
  template: `
		<div class="card-skill">
			<img :src="imageSrc" :alt="alt" style="width:100%">
			<h1>{{title}}</h1>
			<p class="description-skill">{{description}}</p>
			<a :href="exemple"><button class="button-card">Exemple project</button></a>
		</div>
	`
})




Vue.component('app-navbar', {
  data: function () {
    return {
      clicked: false
    }		
  },
	methods:{
		handleClick(){
			this.clicked = !this.clicked
		},
		goToHome(){
			window.location.href = "/#/"
		}
	},
  template: `
		<nav class="navbar">
			<label class="logo" @click="goToHome()">PatoGordo</label>
			<label class="navbar-button" @click="handleClick()">
				<ion-icon :name="clicked ? 'close-outline' : 'menu-outline'"></ion-icon>
			</label>
			<ul class="navbar-items":class="clicked ? 'active' : 'none'">
				<label @click="handleClick()" class="navbar-item"><router-link class="navbar-link" to="/">Home</router-link></label>
				<label @click="handleClick()" class="navbar-item"><router-link class="navbar-link" to="/about">About</router-link></label>
				<label @click="handleClick()" class="navbar-item"><router-link class="navbar-link" to="/skills">Skills</router-link></label>
				<label @click="handleClick()" class="navbar-item"><router-link class="navbar-link" to="/projects">Projects</router-link></label>
				<label @click="handleClick()" class="navbar-item"><router-link class="navbar-link" to="/contacts">Contacts</router-link></label>
			</ul>
		</nav>
	`
})
