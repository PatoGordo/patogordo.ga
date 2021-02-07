// Information Card (Home)

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

// Skill Card (Skills)

Vue.component('CardSkill', {
  data: function () {
    return {
      
    }		
  },
	props: ['imageSrc', 'alt', 'title', 'description', 'exemple', 'obs'],
	methods:{
		
	},
  template: `
		<div class="card-skill">
			<img :src="imageSrc" :alt="alt" style="width:100%">
			<h1>{{title}}</h1>
			<p class="description-skill">{{description}}</p>
			<a :href="exemple" target="_blank" rel="noopener noreferrer"><button class="button-card">Exemple project {{obs}}</button></a>
		</div>
	`
})