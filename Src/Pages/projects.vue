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
	<div class="div-component projects">
		<h1>My projects</h1>
		<div class="cards">
			<CardProject imageSrc="Src/Images/ProjectExemples/luxinheBot.png" alt="Luxinhe Discord Bot" title="Luxinhe Discord Bot" description="This is a full stack project, I used the FERN stack and Discord.js to create the bot." exemple="https://luxinhe-bot.ga/#/" source="https://luxinhe-bot.ga/#/code" obs="(Pt-br)" />
			<CardProject imageSrc="Src/Images/ProjectExemples/patogordoga.png" alt="My Portfolio" title="My Portfolio" description="This project is this website! This is my portfolio here to show you a part of my history as a web developer, projects, skills and others." exemple="https://patogordo.ga/#/" source="https://github.com/PatoGordo/patogordo.ga" />
			<CardProject imageSrc="Src/Images/ProjectExemples/ToDo.png" alt="To Do" title="To Do" description="A To Do app for you to organize your tasks and increase your productivity." exemple="https://patogordo.github.io/Your-Organizer/#/" source="https://github.com/PatoGordo/your-organizer" />
			<CardProject imageSrc="Src/Images/ProjectExemples/colorScheme.png" alt="Color Scheme Generator" title="Color Scheme Generator" description="A simple color scheme generator, for people like me, who don't have much creativity with colors." exemple="https://patogordo.github.io/Color-Scheme-Generator/#/" source="https://github.com/PatoGordo/Color-Scheme-Generator" />
			<CardProject imageSrc="Src/Images/ProjectExemples/conversionTools.png" alt="Conversion Tools" title="Conversion Tools" description="I did this project using only my cell phone, it is a very simple project, I used only HTML, CSS and JS to do it." exemple="https://conversion.ml/" source="https://github.com/PatoGordo/conversion-tools" obs="(Interrupted)" />
			<CardProject imageSrc="Src/Images/ProjectExemples/pomodoro.png" alt="Pomodoro Timer" title="Pomodoro Timer" description="A simple timer to stay focused on your task and increase your productivity." exemple="https://patogordo.github.io/Pomodoro-Timer/#/" source="https://github.com/PatoGordo/Pomodoro-Timer" />
		<div>
	</div>
	`
})

const Projects = {
	template:`
		<Projects />
	`
}