var numero = {
  zero: document.querySelector('.zero'),
  um: document.querySelector('.um'),
  dois: document.querySelector('.dois'),
  tres: document.querySelector('.tres'),
  
  quatro: document.querySelector('.quatro'),
  cinco: document.querySelector('.cinco'),
  seis: document.querySelector('.seis'),
  
  sete: document.querySelector('.sete'),
  oito: document.querySelector('.oito'),
  nove: document.querySelector('.nove')
}

var clicaPara = {
  somar: document.querySelector('.somar'),
  botarVirgula: document.querySelector('.virgula'),
  
  apagarCaractere: document.querySelector('.apagar'),
  apagarTudo: document.querySelector('.repetir'),
  
  mostrarResultado: document.querySelector('.media')
}

var mostraRetira = {
  maisApagado: document.querySelector('.mais-apagado'),
  virgulaApagada: document.querySelector('.virgula-apagada')
}

var mostraNumeros = document.querySelector('#aquecimento-resultado')

numero.zero.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 0
})

numero.um.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 1
})

numero.dois.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 2
})

numero.tres.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 3
})

numero.quatro.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 4
})

numero.cinco.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 5
})

numero.seis.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 6
})

numero.sete.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 7
})

numero.oito.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 8
})

numero.nove.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += 9
})

clicaPara.somar.addEventListener('click', () => {
  retiraBotaoDeSoma()
  diminuirFonte()
  
  mostraNumeros.value += '+'
  botaoDeVirgulaActive()
})

clicaPara.botarVirgula.addEventListener('click', () => {
  colocaBotaoDeSoma()
  diminuirFonte()
  mostraNumeros.value += ','
  
  clicaPara.botarVirgula.classList.remove('active')
  mostraRetira.virgulaApagada.classList.add('active')
})

clicaPara.apagarCaractere.addEventListener('click', () => {
  diminuirFonte()
  
  if (mostraNumeros.value.slice(-1) == ',') {
    mostraRetira.virgulaApagada.classList.add('ativa-virgula')
  }
  
  else if (mostraNumeros.value.slice(-1) == '+') {
    if (clicaPara.botarVirgula.classList.contains('active')) {
      
      clicaPara.botarVirgula.classList.remove('active')
      mostraRetira.virgulaApagada.classList.add('active') 
    }
  }
  
  if (mostraNumeros.value.length) {
    mostraNumeros.value = mostraNumeros.value.substr(0, mostraNumeros.value.length - 1)
    mostraNumeros.focus()
    
    if (mostraRetira.virgulaApagada.classList.contains('ativa-virgula')) {
      botaoDeVirgulaActive()
      mostraRetira.virgulaApagada.classList.remove('ativa-virgula')
    }
  }
  
  if (mostraNumeros.value.length == 0) {
    retiraBotaoDeSoma() 
    
    botaoDeVirgulaActive()
  }
  
  else if (mostraNumeros.value.length >= 1) {
    colocaBotaoDeSoma()
  }
})

clicaPara.apagarTudo.addEventListener('click', () => {
  if (clicaPara.somar.classList.contains('active')) {
    retiraBotaoDeSoma()
  }
  
  if (window.innerWidth > 380) {
    mostraNumeros.style.fontSize = '40px'
  }
  
  else if (window.innerWidth <= 380) {
    mostraNumeros.style.fontSize = '30px'
  }
 
  botaoDeVirgulaActive()
  diminuirFonte()
  mostraNumeros.value = ''
})

function colocaBotaoDeSoma() {
  if (mostraNumeros.value.length == 0 || mostraRetira.maisApagado.classList.contains('active')) {
    mostraRetira.maisApagado.classList.remove('active')
    
    clicaPara.somar.classList.add('active')
  }
}

function retiraBotaoDeSoma() {
  clicaPara.somar.classList.remove('active')

  mostraRetira.maisApagado.classList.add('active')
}

function botaoDeVirgulaActive() {
  if (mostraRetira.virgulaApagada.classList.contains('active')) {
    
    mostraRetira.virgulaApagada.classList.remove('active')
    clicaPara.botarVirgula.classList.add('active')
  }
}

function diminuirFonte() {
  if (mostraNumeros.value.length == 12 && window.innerWidth > 380) {
    mostraNumeros.style.fontSize = '40px'
  }
  
  else if (window.innerWidth > 380 && mostraNumeros.value.length == 13  || mostraNumeros.value.length == 25 && window.innerWidth > 380) {
    mostraNumeros.style.fontSize = '20px'
  } 
  
  else if (mostraNumeros.value.length == 26 && window.innerWidth > 380) {
    mostraNumeros.style.fontSize = '11px'
  }
  
  else if (window.innerWidth <= 380 && mostraNumeros.value.length == 11) {
    mostraNumeros.style.fontSize = '30px'
  }
  
  else if (window.innerWidth <= 380 && mostraNumeros.value.length == 12 || window.innerWidth <= 380 && mostraNumeros.value.length == 23) {
    mostraNumeros.style.fontSize = '15px'
  }
  
  else if (window.innerWidth <= 380 && mostraNumeros.value.length == 24) {
    mostraNumeros.style.fontSize = '10px'
  }
}