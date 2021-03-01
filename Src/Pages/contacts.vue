Vue.component('Contacts', {
  data: function () {
    return {
			title: 'PatoGordo - Contacts',
			buttonState: false,
			returnMessage: 'Fill out the form below and click on "Send"!',
			returnMessageClass: 'warn',
			contact:{
				name: '',
				email: '',
				message: '',
				id: ''
			}
    }		
  },
	created(){
		document.title = this.title
	},
	methods:{
		sendMessage(){
			this.contact.id =  '#'+Math.floor(1000 + Math.random() * 9000)
			this.buttonState = true

			//Send contact using EmailJS
			emailjs.send('service_enfl7lo', 'template_a4eufer', this.contact)
			.then((response) => {
				console.log('Email sended with success')
				console.log('SUCCESS!', response.status, response.text)
			})
			.catch((error) => {
				console.log('Email not sended')
				console.log('FAILED...', error)
				setTimeout(() => {
					console.clear()
				}, 1500)
			})

			//Send contact using Firebase
			contactRef.doc(this.contact.email + ' ' + this.contact.id).set(this.contact)
			.then(() => {
				this.contact.name = ''
				this.contact.email = ''
				this.contact.message = ''
				this.returnMessage = 'Contact sent successfully! I will reply as soon as possible!'
				this.buttonState = false
				this.returnMessageClass = 'success'
				setTimeout(() => { 
					this.returnMessageClass = 'warn'
					this.returnMessage = 'Fill out the form below and click on "Send"!'
					console.clear()
				}, 2000)
			})
			.catch(() => {
				this.buttonState = false
				this.returnMessage = 'Error sending contact! Try again!'	
				this.returnMessageClass = 'error'
				setTimeout(() => { 
					this.returnMessageClass = 'warn'
					this.returnMessage = 'Fill out the form below and click on "Send"!'
				}, 2000)
			})
		}
	},
  template: `
	<div class="div-component contacts">
		<form class="form" @submit.prevent="sendMessage()">
			<h2 class="form-title">Contact me through this form.</h2>
			<p class="message-return":class="returnMessageClass">{{returnMessage}}</p>
			<label class="input-label">
				<ion-icon class="input-icon" name="person-outline"></ion-icon>
				<input class="input-box" type="text" v-model="contact.name" placeholder="Your name..." required />
			</label>

			<label class="input-label">
				<ion-icon class="input-icon" name="mail-outline"></ion-icon>
				<input class="input-box" type="email" v-model="contact.email" placeholder="Your email..." required />
			</label>

			<label class="input-label">
				<ion-icon class="input-icon" name="chatbox-ellipses-outline" style="-webkit-transform: scaleX(-1); transform: scaleX(-1);"></ion-icon>
				<textarea class="input-box" v-model="contact.message" cols="30" rows="5" placeholder="Your message..."></textarea>
			</label>
			<small style="align-self: flex-start; text-align: left;">Or <router-link to="/feedback">Click here</router-link> to send a simple feedback.</small>

			<button class="form-submit en" :disabled="buttonState"><ion-icon name="send-outline"></ion-icon></button>
		</form>
		<a href="https://t.me/PatoGordo" target="_blank" rel="noopener noreferrer" class="contact-telegram">
			<i class="fab fa-telegram"></i>
			Contact me by Telegram
		</a>
		<!--a href="mailto:conversecomicaro@gmail.com?subject=Contact%20made%20by%20the%20contact%20form" class="contact-gmail">
			<ion-icon class="input-icon" name="mail-outline"></ion-icon>
			Contact me by Gmail
		</a-->
	</div>
	`
})

const Contacts = {
	template:`
		<Contacts />
	`
}