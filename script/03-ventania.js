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

var seta = {
   esquerda: document.querySelector("#seta-esquerda"),
   direita:document.querySelector("#seta-direita"),

   desativada: document.querySelector("#seta-esquerda-desativada")
}

seta.direita.addEventListener("click", () => {
   
})

menu.abrir.addEventListener("click", () => {
   retiraSetas()

   container.autores.classList.add('active')
   menu.fecharPorFora.style.display = 'block'
})

menu.fechar.addEventListener("click", () => {
   fechaMenu() 
   colocaSetas()
})

menu.fecharPorFora.addEventListener('click', () => {
   fechaMenu() 
   colocaSetas()
})

function fechaMenu() {
   container.autores.classList.toggle("active")
   menu.fecharPorFora.style.display = 'none'
}

function retiraSetas() {
   seta.direita.style.display = 'none'
   seta.desativada.style.display = 'none'

   if (seta.esquerda.classList.contains("active")) {
      seta.esquerda.style.display = 'none'
   }
}

function colocaSetas() {
   seta.direita.style.display = 'flex'
   seta.desativada.style.display = 'flex'

   if (seta.esquerda.classList.contains("active")) {
      seta.esquerda.style.display = 'flex'
   }
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