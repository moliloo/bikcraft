const links = document.querySelectorAll('.header-menu a')

function activateLink(link) {
	const url = location.href
	const href = link.href
	if (url.includes(href)) {
		link.classList.add('active')
	}
}

links.forEach(activateLink)

const parametros = new URLSearchParams(location.search)

function activateProduct(parameter) {
	const element = document.getElementById(parameter)
	if (element) {
		element.checked = true
	}
}

parametros.forEach(activateProduct)

const perguntas = document.querySelectorAll('.perguntas button')

function clickFaq(event) {
	const pergunta = event.currentTarget
	const controls = pergunta.getAttribute('aria-controls')
	const resposta = document.getElementById(controls)
	resposta.classList.toggle('ativo')
	const togleAria = resposta.classList.contains('ativo')
	pergunta.setAttribute('aria-expanded', togleAria)
}

function clickExpand(pergunta) {
	pergunta.addEventListener('click', clickFaq)
}

perguntas.forEach(clickExpand)
