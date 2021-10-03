var setorPara = {
   abrirMenu: document.querySelector("#menu-burguer"),

   fecharMenu: document.querySelector('#fecha-menu-burguer'),
   fecharMenuPorFora: document.querySelector('.fecha-menu-por-fora'),

   alterarBackground: document.querySelector("#button-switch-shadow")
}

var menu = document.querySelector('.lista-projetos')

filtro = {
   header: document.querySelector('.comfort-eyes-header'),
   section: document.querySelector('.comfort-eyes')
}

setorPara.abrirMenu.addEventListener('click', () => {
   menu.classList.add("active")
   setorPara.fecharMenuPorFora.style.display = 'block'
})

setorPara.fecharMenu.addEventListener('click', () => {
   menu.classList.remove("active")
   setorPara.fecharMenuPorFora.style.display = 'none'
})

setorPara.fecharMenuPorFora.addEventListener('click', () => {
   menu.classList.remove('active')
   setorPara.fecharMenuPorFora.style.display = 'none'
})

setorPara.alterarBackground.addEventListener("click", filtroBackground)

function filtroBackground() {
   if (setorPara.alterarBackground.checked) {
      filtro.header.style.display = 'block'
      filtro.section.style.display = 'block'
   }

   else {
      filtro.header.style.display = 'none'
      filtro.section.style.display = 'none'
   }
}