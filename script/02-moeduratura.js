var setorPara = {
   ativarConversorTemperaturas: document.querySelector('#ativa-conversor-temperatura'),
   ativarConversorMoedas: document.querySelector('#ativa-conversor-moedas')
}

var articleDas = {
   moedas: document.querySelector('.moedas'),
   temperaturas: document.querySelector('.temperaturas')
}

setorPara.ativarConversorTemperaturas.addEventListener('click', () => {
   articleDas.moedas.classList.remove('active')

   articleDas.temperaturas.classList.add('active')
})

setorPara.ativarConversorMoedas.addEventListener('click', () => {
   articleDas.temperaturas.classList.remove("active")

   articleDas.moedas.classList.add("active")
})