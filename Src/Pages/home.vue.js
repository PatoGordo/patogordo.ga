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
	<div class="div-component home">
		<div class="header">
			<img class="headerItem image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Carrier.svg/800px-Carrier.svg.png" />
			<h2 class="headerItem name">Pato Gordo</h2>
			<p class="headerItem description">Hello, I am the Pato Gordo a beginner FullStack Web Developer.</p>
		</div>
		<Card name="My github" target="_blank" rel="noopener noreferrer" description="There are some repositories with my open source projects." redirect="https://github.com/PatoGordo" />
		<Card name="My repl.it" target="_blank" rel="noopener noreferrer" description="I use this Web Code Editor to create and test my projects." redirect="https://repl.it/@PatoGordo/" />
		<Card name="My skills" description="I'll show you tools, languages, frameworks and other things that I use in my projects." redirect="/#/skills" />
		
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
			<a href="https://twitter.com/patogordoo" target="_blank" rel="noopener noreferrer" class="footerItem">
				<i class="fab fa-twitter"></i>
			</a>
		</div>
	</div>`
})



const Home = {
	template:`
		<Home />
	`
}