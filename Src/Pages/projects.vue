Vue.component('Projects', {
  data: function () {
    return {
			title: 'PatoGordo - Projects'
    }		
  },
	methods:{
		
	},
	created(){
		document.title = this.title
	},
  template: `
	<div class="div-component projects" v-for="lang in languages">
		<h1>{{currentLanguage == 'pt-BR'? lang.pt.projects.title : 'My projects'}}</h1>
		<div class="cards">
			<CardProject imageSrc="Src/Images/ProjectExemples/luxinheBot.png" alt="Luxinhe Discord Bot" title="Luxinhe Discord Bot" :description="currentLanguage == 'pt-BR'? lang.pt.projects.luxinhebot : 'This is a full stack project, I used the FERN stack and Discord.js to create the bot.'" exemple="https://luxinhe-bot.ga/#/" source="https://luxinhe-bot.ga/#/code" obs="(Pt-br)" />
			<CardProject imageSrc="Src/Images/ProjectExemples/devFinances.png" alt="Dev Finances" title="Dev Finances(PWA)" :description="currentLanguage == 'pt-BR'? lang.pt.projects.devfinances : 'This project was done following the videos of the Maratona Discover (RocketSeat / Mayk Brito), I did it using VueJs and Less.'" exemple="https://devfinances.tk/#/" source="https://github.com/PatoGordo/DevFinances" />
			<CardProject imageSrc="Src/Images/ProjectExemples/RocketLaunches.png" alt="Rocket Launches" title="Rocket Launches(PWA)" :description="currentLanguage == 'pt-BR'? lang.pt.projects.rocketlaunches : 'This project was made to you inform your self about next rocket launches, made using VueJs and Less, and with a API made using NextJs.'" exemple="https://rocketlaunches.ga/#/" source="https://github.com/PatoGordo/Rocket-Launches" />
			<CardProject imageSrc="Src/Images/ProjectExemples/patogordoga.png" alt="My Portfolio" title="My Portfolio" :description="currentLanguage == 'pt-BR'? lang.pt.projects.myportfolio : 'This project is this website! This is my portfolio here to show you a part of my history as a web developer, projects, skills and other things.'" exemple="https://patogordo.ga/#/" source="https://github.com/PatoGordo/patogordo.ga" />
			<CardProject imageSrc="Src/Images/ProjectExemples/ToDo.png" alt="To Do" title="To Do" :description="currentLanguage == 'pt-BR'? lang.pt.projects.todo : 'A To Do app for you to organize your tasks and increase your productivity, made using VueJs and Less.'" exemple="https://patogordo.github.io/Your-Organizer/#/" source="https://github.com/PatoGordo/your-organizer" />
			<CardProject imageSrc="Src/Images/ProjectExemples/colorScheme.png" alt="Color Scheme Generator" title="Color Scheme Generator" :description="currentLanguage == 'pt-BR'? lang.pt.projects.colorgenerator : 'A simple color scheme generator, for people like me, who do not have much creativity with colors.'" exemple="https://patogordo.github.io/Color-Scheme-Generator/#/" source="https://github.com/PatoGordo/Color-Scheme-Generator" />
			<CardProject imageSrc="Src/Images/ProjectExemples/conversionTools.png" alt="Conversion Tools" title="Conversion Tools" :description="currentLanguage == 'pt-BR'? lang.pt.projects.conversiontools : 'I did this project using only my cell phone, it is a very simple project, I used only HTML, CSS and JS to do it.'" exemple="https://conversion.ml/" source="https://github.com/PatoGordo/conversion-tools" obs="(Interrupted)" />
			<CardProject imageSrc="Src/Images/ProjectExemples/pomodoro.png" alt="Pomodoro Timer" title="Pomodoro Timer" :description="currentLanguage == 'pt-BR'? lang.pt.projects.pomodoro : 'A simple timer to stay focused on your task and increase your productivity.'" exemple="https://patogordo.github.io/Pomodoro-Timer/#/" source="https://github.com/PatoGordo/Pomodoro-Timer" />
		<div>
	</div>
	`
})

const Projects = {
	template:`
		<Projects />
	`
}