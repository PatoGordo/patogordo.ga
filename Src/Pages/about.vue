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
	<div class="div-component about">
		<h2 class="about-title">Hello! My name is Icaro, also known as Pato Gordo, I am 16 years old. I am a beginner FullStack Web Developer.</h2>
		<h3 class="about-sub-title">When did I start developing websites?</h3>
		<p class="about-paragraph">I had my first contact with Web Development about 3 years ago(2018-2019), I was introduced to HTML and CSS by <a href="https://www.youtube.com/user/cursosemvideo"> Professor Gustavo Guanabara (Curso em Vídeo) </a> I made some simple sites following the video lessons, however I was frustrated because I couldn't do it interactions with the user using only HTML and CSS, that's when I discovered Javascript...</p>
		<h3 class="about-sub-title">When did I start programming?</h3>
		<p class="about-paragraph">Two years ago(2019-2020) I got to know Javascript, the first programming language I worked with. I learned JS (Javascript) in several ways, with tutorials, courses, documentation and others. It took me a long time to learn JS, it took me about 1 year trying to learn JS, I still don't know everything about JS, but with what I know I can work with and what I don't know I can easily learn by looking at the documentation or in articles on the web. Nowadays JS is the main programming language I work with.</p>
		<h3 class="about-sub-title">What do I do today?</h3>
		<p class="about-paragraph">Today(2021) I'm learning new technologies, updating my knowledge, working on my way of learning things, and I'm focused on learning English, I know how to write, read and understand English, my biggest problem is when it comes to speaking.</p>
		<h4 class="about-sub2-title">It is! This is part of my story. I hope that you enjoyed!</h4>
		
	</div>
	`
})

const About = {
	template:`
		<About />
	`
}