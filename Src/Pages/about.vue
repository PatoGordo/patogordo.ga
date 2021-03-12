Vue.component('About', {
  data: function () {
    return {
			title: 'PatoGordo - About'
    }		
  },
	methods:{
		
	},
	created(){
		document.title = this.title
	},
  template: `
	<div class="div-component about" v-for="lang in languages">
		<h2 class="about-title">{{currentLanguage == 'pt-BR'? lang.pt.about.description : 'Hello! My name is Ícaro, also known as Pato Gordo, I am 16 years old. I am a beginner FullStack Web Developer.'}}</h2>
		<h3 class="about-sub-title">{{currentLanguage == 'pt-BR'? lang.pt.about.first_paragraph.title : 'When did I start developing websites?'}}</h3>
		<p class="about-paragraph">{{currentLanguage == 'pt-BR'? lang.pt.about.first_paragraph.description : 'I had my first contact with Web Development about 3 years ago(2018-2019), I was introduced to HTML and CSS by Professor Gustavo Guanabara (Curso em Vídeo) I made some simple sites following the video lessons, however I was frustrated because I could not do it interactions with the user using only HTML and CSS, that is when I discovered Javascript...'}}</p>
		<h3 class="about-sub-title">{{currentLanguage == 'pt-BR'? lang.pt.about.second_paragraph.title : 'When did I start programming?'}}</h3>
		<p class="about-paragraph">{{currentLanguage == 'pt-BR'? lang.pt.about.second_paragraph.description : 'Two years ago(2019-2020) I got to know Javascript, the first programming language I worked with. I learned JS (Javascript) in several ways, with tutorials, courses, documentation and others. It took me a long time to learn JS, it took me about 1 year trying to learn JS, I still dont know everything about JS, but with what I know I can work with and what I do not know I can easily learn by looking at the documentation or in articles on the web. Nowadays JS is the main programming language I work with.'}}</p>
		<h3 class="about-sub-title">{{currentLanguage == 'pt-BR'? lang.pt.about.third_paragraph.title : 'What do I do today?'}}</h3>
		<p class="about-paragraph">{{currentLanguage == 'pt-BR'? lang.pt.about.third_paragraph.description : 'Today(2021) I am learning new technologies, updating my knowledge, working on my way of learning things, and I am focused on learning English, I know how to write, read and understand English, my biggest problem is when it comes to speaking.'}}</p>
		<h4 class="about-sub2-title">{{currentLanguage == 'pt-BR'? lang.pt.about.completion : 'It is! This is part of my story. I hope that you enjoyed!'}}</h4>
		
	</div>
	`
})

const About = {
	template:`
		<About />
	`
}