const currentLanguage = navigator.language

const languages = [
	{
		'pt': {
			'home': {
				'description': 'Olá meu nome é Icaro conhecido como Pato, um Desenvolvedor Web FullStack com foco no Front-end.',
				'cards': {
					'first': {
						'title': 'Meu github',
						'description': 'Aqui tem alguns repositorios com meus projetos open source.'
					},
					'second': {
						'title': 'Meu repl.it',
						'description': 'Eu uso esse editor de códigos online para criar e testar meus projetos.'
					},
					'third': {
						'title': 'Minhas skills',
						'description': 'Vou te mostrar ferramentas, linguagens, frameworks, e outras coisa que eu uso em meus projetos.'
					}
				}
			},
			'about': {
				'description': 'Olá, meu nome é Ícaro também conhecido como Pato Gordo, Eu tenho 16 anos de idade, e sou um Desenvolvedor Web FullStack iniciante com o foco no Front-end',
				'first_paragraph': {
					'title': 'Quando eu comecei a desenvolver sites?',
					'description': 'Eu tive meu primeiro contato com o Desenvolvimento Web a mais ou menos 3 anos atrás(2018-2019), Eu fui introduzido ao HTML e CSS pelo Professor Gustavo Guanabara (Curso em Vídeo) eu fiz alguns sites simples, seguindo as video aulas, porém eu fiquei frustado, porque eu não conseguia fazer interações com o usuário usando apenas HTML e CSS, foi ai que eu descobri o Javascript...'
				},
				'second_paragraph': {
					'title': 'Quando eu comecei a programar?',
					'description': 'Dois anos atrás(2019-2020) eu conheci o Javascript, a primeira linguagem de programação com que eu trabalhei, eu aprendi JS(Javascript) de diversas formas, com tutoriais, coursos, documentação e de outras formas, eu demorei muito para aprender JS, eu demorei cerca de 1 ano tentando aprender JS, eu ainda não sei tudo sobre JS, porém com oque eu sei eu consigo trabalhar e oque eu não sei posso aprender facilmente olhando a documentação ou em artigos na internet, Atualmente JS é a principal linguagem de programação com que trabalho.'
				},
				'third_paragraph': {
					'title': 'Oque eu faço hoje?',
					'description': 'Hoje(2021) eu estou aprendendo novas tecnologias, atualizando meu conhecimento, trabalhando na minha forma de aprender coisas, e estou focado em aprender inglês, eu sei escrever, ler, e entender inglês, meu maior problema é quando se trata de falar.'
				},
				'completion': 'É isso! Essa é uma parte da minha história. Eu espero que tenha gostado!'
			},
			'skills': {
				'description': 'Linguagens, Frameworks, Stacks e outras tecnologias com que trabalho.',
				'stacks': {
					'mevn': 'MEVN é o combo de MongoDB, Express, VueJs e NodeJs. Está de se tornando minha Stack principal, em breve vou publicar algum projeto usando essa Stack.',
					'fern': 'FERN Stack é o combo de Firebase, Express, ReactJs e NodeJs. Atualmente é minha Stack principal, Já fiz diversos projetos usando está Stack.'
				},
				'languages': {
					'python': 'Eu tenho alguns meses de experiencia com Python, I desenvolvi alguns projetos em Python, usando pygame, flask e django, e eu estou aprendendo ciência de dados usando Python e Pandas.',
					'javascript': 'Eu tenho mais ou menos 2 anos de experiencia com JS, eu tenho diversos projetos usando JS, e eu continuo a usá-lo atualmente, JS é a linguagem de programação que tenho mais experiencia.',
					'html_css': 'Eu uso HTML e CSS por mais ou menos 3 anos, eu criei projetos de UI clone, eu já clonei a UI do Netflix, Spotify, Google e outros.'
				},
				'frameworks': {
					'reactjs': 'Eu uso ReactJs em diversos projetos meus, para mim ele é uma das ferramentas mais uteis no Front-end, eu sempre estou aprendendo e me surpreendendo mais e mais com o ReactJs.',
					'vuejs': 'Eu estou amando o VueJs, eu comecei a aprender Vue a pouco tempo e eu estou amando Vue, já fiz diversos projetos incluindo esse site, usando Vue. Eu estou sempre surpreso com Vue e com a facilidade que ele me da para fazer websites.'
				},
				'others': {
					'nodejs': 'Eu comecei a aprender NodeJs a mais ou menos 1 ano atrás, Eu gosto muito do NodeJs porque eu consigo criar APIs e bots do discord de uma maneira fácil e segura, já fiz diversos projetos como bots do discord e APIs.',
					'firebase': 'Eu uso Firebase a muito tempo, eu aprendi a usá-lo durante meu aprendizado de ReactJs, e daí em diante eu não parei de usá-lo não importa o framework ou a linguagem eu sempre tento usar o Firebase.'
				}
			},
			'projects': {
				'title': 'Meus projetos',
				'luxinhebot': 'Esse é um projeto FullStack, eu usei a FERN Stack e o discord.js para criar o bot.',
				'devfinances': 'Esse projeto foi feito seguindo os videos da Maratona Discover (RocketSeat / Mayk Brito), eu fiz esse projeto usando VueJs e Less.',
				'rocketlaunches': 'Esse projeto foi feito para você se informar sobre os proximos lançamentos de foguete, feito usando VueJs e Less, e com a API feita em NextJs.',
				'myportfolio': 'Esse projeto é esse site! Ele é meu portifólio, aqui eu vou te mostar uma parte da minha historia como Desenvolvedor Web, projetos, skills e outras coisas.',
				'todo': 'Um app de To Do para você organizar suas tarefas e aumentar sua produtividade, feito usando VueJs e Less.',
				'colorgenerator': 'Um simples gerador de esquema de cores, para pessoas como eu que não tem muita criatividade com cores.',
				'conversiontools': 'Eu fiz esse projeto suando apenas meu celular, é um projeto muito simples, eu usei apenas HTML, CSS e JS para fazer ele.',
				'pomodoro': 'Um simples timer para te manter focado em sua tarefa e aumentar sua produtividade.'
			}
		}
	}
]