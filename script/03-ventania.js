var menu = {
   abrir: document.querySelector("#menu-burguer"),
   fechar: document.querySelector("#fecha-menu-por-x"),
   fecharPorFora: document.querySelector(".fecha-menu-por-fora")
}

var listaAutores = document.querySelector(".autores")

menu.abrir.addEventListener("click", () => {
   listaAutores.classList.add('active')
   menu.fecharPorFora.style.display = 'block'
})

menu.fechar.addEventListener("click", () => {
   listaAutores.classList.remove("active")
   menu.fecharPorFora.style.display = 'none'
})

menu.fecharPorFora.addEventListener('click', () => {
   listaAutores.classList.toggle("active")
   menu.fecharPorFora.style.display = 'none'
})