const Feedback = Vue.component('Feedback', {
  data: function () {
    return {
			lang: 'en',
			title: 'PatoGordo - Feedback',
			buttonState: false,
			returnMessage: 'Fill out the form below and click on "Send"!',
			returnMessageClass: 'warn',
			feedback:{
				name: '',
				message: '',
				id: ''
			}
    }		
  },
	created(){
		document.title = this.title
		if(this.$route.query.lang == '' || this.$route.query.lang == null){
			this.lang = 'en'
			console.log(this.lang)
		}else if(this.$route.query.lang == 'pt'){
			this.lang = 'pt'
			console.log(this.lang)
		}else{
			this.lang = 'en'
			console.log(this.lang)
		}

		if(this.lang == 'pt'){
			this.returnMessage = 'Preencha os campos do formulario abaixo e clique em "Enviar"!'
		}
	},
	methods:{
		sendMessage(){
			this.feedback.id =  '#'+Math.floor(1000 + Math.random() * 9000)
			this.buttonState = true

			//Send feedback using Firebase
			feedbackRef.doc(this.feedback.name + ' ' + this.feedback.id).set(this.feedback)
			.then(() => {
				this.feedback.name = ''
				this.feedback.message = ''
				this.returnMessage = this.lang == 'pt' ? 'Feedback enviado com succeso! Obrigado por envia-lo!' : 'feedback sent successfully! Thanks to sent it!'
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
				this.returnMessage = this.lang == 'pt' ? 'Erro ao enviar Feedback! Tente de novo!' : 'Error sending feedback! Try again!'	
				this.returnMessageClass = 'error'
				setTimeout(() => { 
					this.returnMessageClass = 'warn'
					this.returnMessage = this.lang == 'pt' ? 'Preencha os campos do formulario abaixo e clique em "Enviar"!' : 'Fill out the form below and click on "Send"!'
				}, 2000)
			})
		}
	},
  template: `
	<div class="div-component feedback">
		<form class="form" @submit.prevent="sendMessage()">
			<h2 class="form-title">{{lang == 'pt' ? 'Me de seu feedback através deste formulário.' : 'Feedback me through this form.'}}</h2>
			<p class="message-return":class="returnMessageClass">{{returnMessage}}</p>
			<label class="input-label">
				<ion-icon class="input-icon" name="person-outline"></ion-icon>
				<input class="input-box" type="text" v-model="feedback.name" :placeholder="lang == 'pt' ? 'Seu nome...' : 'Your name...'" required />
			</label>

			<label class="input-label">
				<ion-icon class="input-icon" name="chatbox-ellipses-outline" style="-webkit-transform: scaleX(-1); transform: scaleX(-1);"></ion-icon>
				<textarea class="input-box" v-model="feedback.message" cols="30" rows="5" :placeholder="lang == 'pt' ? 'Sua mensagem...' : 'Your message...'"></textarea>
			</label>
			<small style="align-self: flex-start; text-align: left;">{{lang == 'pt' ? 'Se você deseja receber atualizações sobre seu feedback, coloque seu email no final da mensagem.' : 'If you want to receive news about your feedback, put your email at the end of the message.'}}</small>

			<button :class="lang == 'pt' ? 'form-submit pt' : 'form-submit en'" :disabled="buttonState"><ion-icon name="send-outline"></ion-icon></button>
		</form>
	</div>
	`
})