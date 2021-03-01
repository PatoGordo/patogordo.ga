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
			<img :src="imageSrc" :alt="alt" style="width:100%" class="card-skill-image">
			<h1>{{title}}</h1>
			<p class="description-skill">{{description}}</p>
			<a :href="exemple" target="_blank" rel="noopener noreferrer"><button class="button-card">Exemple project {{obs}}</button></a>
		</div>
	`
})

// Project Card (Projects)

Vue.component('CardProject', {
  data: function () {
    return {
      
    }		
  },
	props: ['imageSrc', 'alt', 'title', 'description', 'source', 'exemple', 'obs'],
	methods:{
		
	},
  template: `
		<a class="card-project" :href="exemple" target="_blank" rel="noopener noreferrer">
			<div class="img-container">
				<img :src="imageSrc" :alt="alt" style="width:100%;">
				<p class="demo-subs">Click to see a demo</p>
			</div>
			<h1 class="project-title" style="align-self: flex-start; margin: 10px;">{{title}}</h1>
			<p class="description-project">{{description}}</p>
			<a :href="source" target="_blank" rel="noopener noreferrer"><button class="button-card">Source code {{obs}}</button></a>
		</a>
	`
})