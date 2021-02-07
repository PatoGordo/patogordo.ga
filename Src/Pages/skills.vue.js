Vue.component('Skills', {
  data: function () {
    return {
			title: 'PatoGordo - Skills'
    }
  },
	created(){
		document.title = this.title
	},
	methods:{
		
	},
  template: `
	<div class="div-component skills">
		<h2 style="margin-top: 20px; font-weight: 450;">Languages, Frameworks, Stacks and other Technologies with which I worked.</h2>
		<h2 style="margin-top: 20px; font-weight: 500;">Stacks</h2>
		<div class="skills-items">
			<CardSkill imageSrc="Src/Images/Stacks/ffvp.png" alt="FFVP Stack" title="FFVP" description="FFVP Stack is Firebase, Flask, VueJs and Python. It is becoming my main Stack, soon I will publish some project using this Stack." exemple="" />			
			<CardSkill imageSrc="Src/Images/Stacks/fern.png" alt="FERN Stack" title="FERN" description="FERN Stack is Firebase, Express, ReactJs and NodeJs. Currently it's my main Stack, I've done several projects using this Stack." exemple="https://luxinhe-bot.ga/#/code" obs="(Pt-br)" />			
		</div>	
		<h2 style="margin-top: 20px; font-weight: 500;">Programming Languages</h2>	
		<div class="skills-items">	
			<CardSkill imageSrc="Src/Images/Languages/python.png" alt="Python" title="Python" description="I have a few months of experience with python, I developed some projects in Python, using pygame, flask and django, and I am learning task automation using Python and Robot." exemple="https://github.com/PatoGordo/contact-me-flask" />
			<CardSkill imageSrc="Src/Images/Languages/javascript.png" alt="Javascript" title="Javascript" description="I have about 2 year of experience with JS, I've done several projects using JS, and continue to use it until today, JS is the programming language that I have the most experience with." exemple="https://github.com/PatoGordo/conversion-tools" />
			<CardSkill imageSrc="Src/Images/Languages/htmlcss.png" alt="HTML & CSS" title="HTML & CSS" description="I use HTML and CSS for about 3 years, I created clone UI projects, I already cloned the UI of Netflix, Spotify, Google and others." exemple="https://github.com/PatoGordo/Spotify-web-mobile" />		
		</div>		
		<h2 style="margin-top: 20px; font-weight: 500;">Frameworks</h2>
		<div class="skills-items">
			<CardSkill imageSrc="Src/Images/Frameworks/react.png" alt="ReactJs" title="ReactJs" description="I use ReactJs, in several projects of mine for me it is one of the most useful tools in the front-end, I am always learning and surprising myself more and more with ReactJs." exemple="https://github.com/PatoGordo/luxinhe-discord-bot-client" obs="(Pt-br)" />
			<CardSkill imageSrc="Src/Images/Frameworks/vue.png" alt="VueJs" title="VueJS" description="I'm falling in love with Vue Js! I started learning Vue a while ago and I'm in love with Vue, I've done several projects including this site using Vue. I am always surprised by Vue and the ease he gives me to make websites." exemple="https://github.com/PatoGordo/patogordo.ga-vue" />
		</div>
		<h2 style="margin-top: 20px; font-weight: 500;">Others</h2>
		<div class="skills-items">
			<CardSkill imageSrc="Src/Images/Runtimes/node.png" alt="NodeJs" title="NodeJs" description="I started learning NodeJs about 1 year ago, I really like NodeJs because I can create secure APIs and discord bots in an easy way, I've done several projects like discord bots and APIs." exemple="https://github.com/PatoGordo/contact-me-express" />		
			<CardSkill imageSrc="Src/Images/Services/firebase.png" alt="Firebase" title="Firebase" description="I have been using Firebase for a long time, I learned to use Firebase during my ReactJs learning, and from then on I have not stopped using it no matter the framework or language, I always try to use Firebase." exemple="https://github.com/PatoGordo/contact-me-express" />
		</div>
	</div>
	`
})

const Skills = {
	template:`
		<Skills />
	`
}