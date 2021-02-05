Vue.component('Contacts', {
  data: function () {
    return {
			title: 'PatoGordo - Contacts',
			buttonState: false,
			returnMessage: 'Fill out the form below and click on "Send Message"!',
			returnMessageClass: 'warn',
			contact:{
				name: '',
				email: '',
				message: ''
			}
    }		
  },
	created(){
		document.title = this.title
	},
	methods:{
		sendMessage(){
			this.buttonState = true
			contactRef.doc(this.contact.email).set(this.contact)
			.then(() => {
				console.log("Data added")
				this.contact.name = ''
				this.contact.email = ''
				this.contact.message = ''
				this.returnMessage = 'Contact sent successfully! I will reply as soon as possible!'
				this.buttonState = false
				this.returnMessageClass = 'success'
				setTimeout(() => { 
					this.returnMessageClass = 'warn'
					this.returnMessage = 'Fill out the form below and click on "Send Message"!'
				}, 4000)
			})
			.catch(() => {
				this.buttonState = false
				this.returnMessage = 'Error sending contact! Try again!'	
				this.returnMessageClass = 'error'
				setTimeout(() => { 
					this.returnMessageClass = 'warn'
					this.returnMessage = 'Fill out the form below and click on "Send Message"!'
				}, 4000)
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
				<textarea class="input-box" v-model="contact.message" cols="30" rows="7" placeholder="Your message"></textarea>
			</label>

			<button class="form-submit" :disabled="buttonState"><ion-icon name="send-outline"></ion-icon></button>
		</form>
		<a href="https://t.me/PatoGordo" target="_blank" rel="noopener noreferrer" class="contact-telegram">
			<i class="fab fa-telegram"></i>
			Contact me by Telegram
		</a>
		<a href="mailto:conversecomicaro@gmail.com?subject=Contact%20made%20by%20the%20contact%20form" class="contact-gmail">
			<ion-icon class="input-icon" name="mail-outline"></ion-icon>
			Contact me by Gmail
		</a>
	</div>
	`
})

const Contacts = {
	template:`
		<Contacts />
	`
}