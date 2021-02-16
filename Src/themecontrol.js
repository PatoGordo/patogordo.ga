var theme = 'light'
if (localStorage.getItem('theme') !== null) {
	theme = localStorage.getItem('theme')
} else {
	localStorage.setItem('theme', 'light')
	theme = localStorage.getItem('theme')
}

var link = document.createElement('link') 
link.rel = 'stylesheet/less'
link.type = 'text/css'
link.href = `Src/Styles/ComponentStyles/Themes/${theme}.less`

document.getElementsByTagName('HEAD')[0].appendChild(link)