const links = document.querySelectorAll('.header-menu a')

links.forEach((link) => {
	const url = location.href
	const href = link.href
	if (url.includes(href)) {
		link.classList.add('active')
	}
})

const parametros = new URLSearchParams(location.search)

parametros.forEach((parameter) => {
	const element = document.getElementById(parameter)
	if (element) {
		element.checked = true
	}
})

const perguntas = document.querySelectorAll('.perguntas button')

perguntas.forEach((pergunta) => {
	pergunta.addEventListener('click', (event) => {
		const pergunta = event.currentTarget
		const controls = pergunta.getAttribute('aria-controls')
		const resposta = document.getElementById(controls)
		resposta.classList.toggle('ativo')
		const togleAria = resposta.classList.contains('ativo')
		pergunta.setAttribute('aria-expanded', togleAria)
	})
})

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

galeria.forEach((img) => {
	img.addEventListener('click', (event) => {
		const img = event.currentTarget
		if (matchMedia('(min-width: 1000px)').matches) {
			galeriaContainer.prepend(img)
		}
	})
})

if (window.SimpleAnime) {
	new SimpleAnime()
}
