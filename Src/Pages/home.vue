Vue.component('Home', {
  data: function () {
    return {
			title: 'PatoGrdo - Home'
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
	<div class="div-component home" v-for="lang in languages">
		<div class="header">
			<img class="headerItem image" src="Src/Images/duck.svg" />
			<h2 class="headerItem name">Pato Gordo</h2>
			<p class="headerItem description">{{currentLanguage == 'pt-BR'? lang.pt.home.description : 'Hello, I am Pato Gordo a beginner FullStack Web Developer.'}}</p>
		</div>
		<Card :name="currentLanguage == 'pt-BR'? lang.pt.home.cards.first.title : 'My github'" target="_blank" rel="noopener noreferrer" :description="currentLanguage == 'pt-BR'? lang.pt.home.cards.first.description : 'There are some repositories with my open source projects.'" redirect="https://github.com/PatoGordo" />
		<Card :name="currentLanguage == 'pt-BR'? lang.pt.home.cards.second.title : 'My repl.it'" target="_blank" rel="noopener noreferrer" :description="currentLanguage == 'pt-BR'? lang.pt.home.cards.second.description : 'I use this Web Code Editor to create and test my projects.'" redirect="https://repl.it/@PatoGordo/" />
		<Card :name="currentLanguage == 'pt-BR'? lang.pt.home.cards.third.title : 'My skills'" :description="currentLanguage == 'pt-BR'? lang.pt.home.cards.third.description : 'I will show you tools, languages, frameworks and other things that I use in my projects.'" redirect="/#/skills" />
		
		<div class="footer">
			<a href="https://github.com/PatoGordo" target="_blank" rel="noopener noreferrer" class="footerItem">
				<i class="fab fa-github"></i>
			</a>
			<a href="https://www.linkedin.com/in/icaro-miguel-0879521bb/" target="_blank" rel="noopener noreferrer" class="footerItem">
				<i class="fab fa-linkedin-in"></i>
			</a>
			<a href="https://t.me/PatoGordo" target="_blank" rel="noopener noreferrer" class="footerItem">
				<i class="fab fa-telegram"></i>          
			</a>
		</div>
	</div>`
})



const Home = {
	template:`
		<Home />
	`
}