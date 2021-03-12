Vue.component('app-navbar', {
  data: function () {
    return {
      clicked: false,
			isDark: false,
			modalState: false
    }		
  },
	methods:{
		handleClick(){
			window.scrollTo({ top: 0, behavior: 'smooth' })
			this.clicked = !this.clicked
		},
		goToHome(){
			window.scrollTo({ top: 0, behavior: 'smooth' })
			window.location.href = '/'
		},
		changeTheme(){
			if(localStorage.getItem('theme') == 'dark'){
				localStorage.setItem('theme', 'default')
				document.body.classList.toggle('dark')
				this.isDark = false
			}else{
				localStorage.setItem('theme', 'dark')
				document.body.classList.toggle('dark')
				this.isDark = true
			}
		},
		openModal(){
			this.modalState = true
		},
		closeModal(){
			this.modalState = false
		}
	},
	created(){
		if(localStorage.getItem('theme') == 'dark'){
			this.isDark = true
		}else{
			this.isDark = false
		}
	},
  template: `
		<nav class="navbar">
			<label class="logo"><router-link to="/">Pato Gordo</router-link></label>
			<label class="navbar-button" @click="handleClick()">
				<ion-icon :name="clicked ? 'close-outline' : 'menu-outline'"></ion-icon>
			</label>
			<ul @click="handleClick()" class="navbar-items":class="clicked ? 'active' : 'none'">
				<label class="navbar-item"><router-link class="navbar-link" to="/">Home</router-link></label>
				<label class="navbar-item"><router-link class="navbar-link" to="/about">{{currentLanguage == 'pt-BR'? 'Sobre' : 'About'}}</router-link></label>
				<label class="navbar-item"><router-link class="navbar-link" to="/skills">Skills</router-link></label>
				<label class="navbar-item"><router-link class="navbar-link" to="/projects">{{currentLanguage == 'pt-BR'? 'Projetos' : 'Projects'}}</router-link></label>
				<label class="navbar-item"><router-link class="navbar-link" to="/contacts">{{currentLanguage == 'pt-BR'? 'Contatos' : 'Contacts'}}</router-link></label>
				<button class="navbar-button-modal" @click="openModal()">{{currentLanguage == 'pt-BR'? 'Trocar de tema' : 'Change theme'}}</button>
			</ul>
			<div id="myModal" class="modal" :style="modalState ? 'display: block;' : 'display: none;'" @click="closeModal()">
				<div class="modal-content">
					<span class="close" @click="closeModal()">&times;</span>
					<p>Dark mode</p>
					<p>Click to {{isDark ? 'disable' : 'enable'}}.</p>
					<label class="switch">
						<input id="switch_theme" type="checkbox" @click="changeTheme" :checked="isDark">
						<span class="slider round"></span>
					</label>
				</div>
			</div>
		</nav>
	`
})