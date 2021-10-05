var menu = {
   abrir: document.querySelector("#menu-burguer"),
   fechar: document.querySelector("#fecha-menu-por-x"),
   fecharPorFora: document.querySelector(".fecha-menu-por-fora")
}

var container = {
   autores: document.querySelector(".autores"),
   fonteImagens: document.querySelector(".mantem-fontes-abertas")
}

var fonte = {
   abre: document.querySelector('#fontes-imagens-site'),

   fecha: document.querySelector('.fecha-por-x-fontes'),
   fechaPorFora: document.querySelector('#container-fonte-imagens')
} 

menu.abrir.addEventListener("click", () => {
   container.autores.classList.add('active')
   menu.fecharPorFora.style.display = 'block'
})
menu.fechar.addEventListener("click", fechaMenu)
menu.fecharPorFora.addEventListener('click', fechaMenu)

function fechaMenu() {
   container.autores.classList.toggle("active")
   menu.fecharPorFora.style.display = 'none'
}

fonte.abre.addEventListener("click", () => {
   fonte.fechaPorFora.style.display = 'block'
   container.fonteImagens.style.display = 'block'
})
fonte.fecha.addEventListener("click", fechaFontes)
fonte.fechaPorFora.addEventListener("click", fechaFontes)

function fechaFontes() {
   fonte.fechaPorFora.style.display = 'none'
   container.fonteImagens.style.display = 'none'
}