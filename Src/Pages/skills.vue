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
	<div class="div-component skills" v-for="lang in languages">
		<h2 style="margin-top: 20px; font-weight: 450;">{{currentLanguage == 'pt-BR'? lang.pt.skills.description : 'Languages, Frameworks, Stacks and other Technologies with which I worked.'}}</h2>
		<h2 style="margin-top: 20px; font-weight: 500;">Stacks</h2>
		<div class="skills-items">
			<CardSkill imageSrc="Src/Images/Stacks/mevn.png" alt="MEVN Stack" title="MEVN" :description="currentLanguage == 'pt-BR'? lang.pt.skills.stacks.mevn : 'MEVN Stack is MongoDB, Express, VueJs and NodeJs. It is becoming my main Stack, soon I will publish some project using this Stack.'" />			
			<CardSkill imageSrc="Src/Images/Stacks/fern.png" alt="FERN Stack" title="FERN" :description="currentLanguage == 'pt-BR'? lang.pt.skills.stacks.fern : 'FERN Stack is Firebase, Express, ReactJs and NodeJs. Currently it is my main Stack, I have done several projects using this Stack.'" exemple="https://luxinhe-bot.ga/#/code" obs="(Pt-br)" />			
		</div>	
		<h2 style="margin-top: 20px; font-weight: 500;">Development languages</h2>	
		<div class="skills-items">	
			<CardSkill imageSrc="Src/Images/Languages/python.png" alt="Python" title="Python" :description="currentLanguage == 'pt-BR'? lang.pt.skills.languages.python : 'I have a few months of experience with python, I developed some projects in Python, using pygame, flask and django, and I am learning Data Science, using Python and Pandas.'" exemple="https://github.com/PatoGordo/contact-me-flask" />
			<CardSkill imageSrc="Src/Images/Languages/javascript.png" alt="Javascript" title="Javascript" :description="currentLanguage == 'pt-BR'? lang.pt.skills.languages.javascript : 'I have about 2 year of experience with JS, I have done several projects using JS, and continue to use it until today, JS is the programming language that I have the most experience with.'" exemple="https://github.com/PatoGordo/conversion-tools" />
			<CardSkill imageSrc="Src/Images/Languages/htmlcss.png" alt="HTML & CSS" title="HTML & CSS" :description="currentLanguage == 'pt-BR'? lang.pt.skills.languages.html_css : 'I use HTML and CSS for about 3 years, I created clone UI projects, I already cloned the UI of Netflix, Spotify, Google and others.'" exemple="https://github.com/PatoGordo/Spotify-web-mobile" />		
		</div>		
		<h2 style="margin-top: 20px; font-weight: 500;">Frameworks</h2>
		<div class="skills-items">
			<CardSkill imageSrc="Src/Images/Frameworks/react.png" alt="ReactJs" title="ReactJs" :description="currentLanguage == 'pt-BR'? lang.pt.skills.frameworks.reactjs : 'I use ReactJs, in several projects of mine for me it is one of the most useful tools in the front-end, I am always learning and surprising myself more and more with ReactJs.'" exemple="https://github.com/PatoGordo/luxinhe-discord-bot-client" obs="(Pt-br)" />
			<CardSkill imageSrc="Src/Images/Frameworks/vue.png" alt="VueJs" title="VueJs" :description="currentLanguage == 'pt-BR'? lang.pt.skills.frameworks.vuejs : 'I am falling in love with Vue Js! I started learning Vue a while ago and I am in love with Vue, I have done several projects including this site using Vue. I am always surprised by Vue and the ease he gives me to make websites.'" exemple="https://github.com/PatoGordo/patogordo.ga-vue" />
		</div>
		<h2 style="margin-top: 20px; font-weight: 500;">Others</h2>
		<div class="skills-items">
			<CardSkill imageSrc="Src/Images/Runtimes/node.png" alt="NodeJs" title="NodeJs" :description="currentLanguage == 'pt-BR'? lang.pt.skills.others.nodejs : 'I started learning NodeJs about 1 year ago, I really like NodeJs because I can create secure APIs and discord bots in an easy way, I have done several projects like discord bots and APIs.'" exemple="https://github.com/PatoGordo/contact-me-express" />		
			<CardSkill imageSrc="Src/Images/Services/firebase.png" alt="Firebase" title="Firebase" :description="currentLanguage == 'pt-BR'? lang.pt.skills.others.firebase : 'I have been using Firebase for a long time, I learned to use Firebase during my ReactJs learning, and from then on I have not stopped using it no matter the framework or language, I always try to use Firebase.'" exemple="https://github.com/PatoGordo/contact-me-express" />
		</div>
	</div>
	`
})

const Skills = {
	template:`
		<Skills />
	`
}