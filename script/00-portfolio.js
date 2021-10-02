var setorPara = {
   abrirMenu: document.querySelector("#menu-burguer"),

   fecharMenu: document.querySelector('#fecha-menu-burguer'),
   fecharMenuPorFora: document.querySelector('.fecha-menu-por-fora')
}

var menu = document.querySelector('.lista-projetos')

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