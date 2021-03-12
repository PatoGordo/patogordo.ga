Vue.component('Contacts', {
  data: function () {
    return {
			title: 'PatoGordo - Contacts',
			buttonState: false,
			lang: 'en',
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
		if(currentLanguage != 'pt-BR'){
			this.lang = 'en'
		}else if(currentLanguage == 'pt-BR'){
			this.lang = 'pt'
		}else{
			this.lang = 'en'
		}
		
		if(this.lang == 'pt'){
			this.returnMessage = 'Preencha os campos do formulario abaixo e clique em "Enviar"!'
		}
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
				this.returnMessage = this.lang == 'pt' ? 'Contato enviado com sucesso! Vou te responder o mais rapido possivel!' : 'Contact sent successfully! I will reply as soon as possible!'
				this.buttonState = false
				this.returnMessageClass = 'success'
				setTimeout(() => { 
					this.returnMessageClass = 'warn'
					this.returnMessage = this.lang == 'pt' ? 'Preencha os campos do formulario abaixo e clique em "Enviar"!' : 'Fill out the form below and click on "Send"!'
					console.clear()
				}, 2000)
			})
			.catch(() => {
				this.buttonState = false
				this.returnMessage = this.lang == 'pt' ? 'Erro ao enviar seu contato! Tente novamente!' : 'Error sending contact! Try again!'	
				this.returnMessageClass = 'error'
				setTimeout(() => { 
					this.returnMessageClass = 'warn'
						this.returnMessage = this.lang == 'pt' ? 'Preencha os campos do formulario abaixo e clique em "Enviar"!' : 'Fill out the form below and click on "Send"!'
				}, 2000)
			})
		}
	},
  template: `
	<div class="div-component contacts">
		<form class="form" @submit.prevent="sendMessage()">
			<h2 class="form-title">{{lang == 'pt'? 'Me contate através desse formulario.' : 'Contact me through this form.'}}</h2>
			<p class="message-return":class="returnMessageClass">{{returnMessage}}</p>
			<label class="input-label">
				<ion-icon class="input-icon" name="person-outline"></ion-icon>
				<input class="input-box" type="text" v-model="contact.name" :placeholder="lang == 'pt' ? 'Seu nome...' : 'Your name...'" required />
			</label>

			<label class="input-label">
				<ion-icon class="input-icon" name="mail-outline"></ion-icon>
				<input class="input-box" type="email" v-model="contact.email" :placeholder="lang == 'pt' ? 'Seu email...' : 'Your email...'" required />
			</label>

			<label class="input-label">
				<ion-icon class="input-icon" name="chatbox-ellipses-outline" style="-webkit-transform: scaleX(-1); transform: scaleX(-1);"></ion-icon>
				<textarea class="input-box" v-model="contact.message" cols="30" rows="5" :placeholder="lang == 'pt' ? 'Sua mensagem...' : 'Your message...'"></textarea>
			</label>
			<small style="align-self: flex-start; text-align: left;">{{lang == 'pt'? 'Ou' : 'Or'}} <router-link to="/feedback">{{lang == 'pt'? 'Clique aqui' : 'Click here'}}</router-link> {{lang == 'pt'? 'para enviar um simples feedback.' : 'to send a simple feedback.'}}</small>

			<button class="form-submit":class="lang" :disabled="buttonState"><ion-icon name="send-outline"></ion-icon></button>
		</form>
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