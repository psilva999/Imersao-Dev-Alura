var setorPara = {
   ativarConversorTemperaturas: document.querySelector('#ativa-conversor-temperatura'),
   ativarConversorMoedas: document.querySelector('#ativa-conversor-moedas'),

   converterMoeda: document.querySelector('#converter-moeda'),
   converterTemperatura: document.querySelector('#converter-temperatura'),
}

var articleDas = {
   moedas: document.querySelector('.moedas'),
   temperaturas: document.querySelector('.temperaturas')
}

var mexePara = {
   pegarMoedaInserida: document.querySelector('#valor-moeda-a-converter'),
   pegarTemperaturaInserida: document.querySelector('#temperatura-a-converter'),

   escolherMoedaInicial: document.querySelector('#moeda-inicial'),
   escolherTemperaturaInicial: document.querySelector('#temperatura-inicial'),

   limparResultadoMoedas: document.querySelector('.limpar-resultado-moeda'),
   limparResultadoTemperatura: document.querySelector('.limpar-resultado-temperatura')
}

var altera = {
   realFinal: document.querySelector('.real-final'),
   dolarFinal: document.querySelector('.dolar-final'),
   euroFinal: document.querySelector('.euro-final'),

   bitcoinFinal: document.querySelector('.bitcoin-final'),
   ethereumFinal: document.querySelector('.ethereum-final'),
   todasAsMoedas: document.querySelector('.todas-as-moedas'),

   fahrenheitFinal: document.querySelector('.fahrenheit-final'),
   celsiusFinal: document.querySelector('.celsius-final'),
   kelvinFinal: document.querySelector('.kelvin-final'),
   todasAsTemperaturas: document.querySelector('.todas-as-temperaturas')
}

mexePara.escolherTemperaturaInicial.addEventListener("change", () => {
   var temperaturaInicial = document.querySelector('#temperatura-inicial').value
   var temperaturaFinal = document.querySelector('#temperatura-final')

   if (temperaturaInicial == 'celsius') {
      ativaFahFinal()
      ativaKelvinFinal()
      altera.celsiusFinal.style.display = 'none'

      if (temperaturaFinal.value != 'celsius') {
         selectFahFinal()
         selectKelvinFinal()
         selectTodasAsTemperaturas()
      }

      else {
         temperaturaFinal.value = 'fahrenheit'
      }
   }

   else if (temperaturaInicial == 'fahrenheit') {
      ativaCelsiusFinal()
      ativaKelvinFinal()
      altera.fahrenheitFinal.style.display = 'none'

      if (temperaturaFinal.value != 'fahrenheit') {
         selectCelsiusFinal()
         selectKelvinFinal()
         selectTodasAsTemperaturas()
      }

      else {
         temperaturaFinal.value = 'celsius'
      }
   }

   else if (temperaturaInicial == 'kelvin') {
      ativaFahFinal()
      ativaCelsiusFinal()
      altera.kelvinFinal.style.display = 'none'

      if (temperaturaFinal.value != 'kelvin') {
         selectCelsiusFinal()
         selectFahFinal()
         selectTodasAsTemperaturas()
      }

      else {
         temperaturaFinal.value = 'celsius'
      }
   }

   function selectCelsiusFinal() { if (temperaturaFinal.value == 'celsius') { temperaturaFinal.value = 'celsius' }}
   function selectFahFinal() { if (temperaturaFinal.value == 'fahrenheit') { temperaturaFinal.value = 'fahrenheit' }}

   function selectKelvinFinal() { if (temperaturaFinal.value == 'kelvin') { temperaturaFinal.value = 'kelvin' }}
   function selectTodasAsTemperaturas() { if (temperaturaFinal.value == 'todas-as-temperaturas') { temperaturaFinal.value = 'todas-as-temperaturas' }}
})

mexePara.escolherMoedaInicial.addEventListener('change', () => {
   var moedaInicial = document.querySelector('#moeda-inicial').value
   var moedaFinal = document.querySelector('#moeda-final')

   if (moedaInicial == 'real') {
      ativaDolarFinal()
      ativaEuroFinal()

      ativaBtcFinal()
      ativaEthFinal()
      altera.realFinal.style.display = 'none'

      if (moedaFinal.value == 'todas-as-moedas') {
         moedaFinal.value = 'todas-as-moedas'
      }

      else if (moedaFinal.value == 'real') {
         moedaFinal.value = 'dolar'
      }

      else {
         dolarValorFinal()
         euroValorFinal()
         bitcoinValorFinal()
         ethereumValorFinal()
      }
   }

   else if (moedaInicial == 'dolar') {
      ativaRealFinal()
      ativaEuroFinal()

      ativaBtcFinal()
      ativaEthFinal()
      altera.dolarFinal.style.display = 'none'

      if (moedaFinal.value != 'todas-as-moedas' && moedaFinal.value != 'real' && moedaFinal.value != 'dolar') {
         euroValorFinal()
         bitcoinValorFinal()
         ethereumValorFinal()
      }

      else if (moedaFinal.value == 'dolar') {
         moedaFinal.value = 'real'
      }

      else { selecionaTodasOuSomenteReal() }
   }

   else if (moedaInicial == 'euro') {
      ativaRealFinal()
      ativaDolarFinal()

      ativaBtcFinal()
      ativaEthFinal()
      altera.euroFinal.style.display = 'none'

      if (moedaFinal.value != 'todas-as-moedas' && moedaFinal.value != 'real' && moedaFinal.value != 'euro') {
         dolarValorFinal()
         bitcoinValorFinal()
         ethereumValorFinal()
      }

      else if (moedaFinal.value == 'euro') {
         moedaFinal.value = 'real'
      }

      else { selecionaTodasOuSomenteReal() }
   }

   else if (moedaInicial == 'bitcoin') {
      ativaRealFinal()
      ativaDolarFinal()
      ativaEuroFinal()

      ativaEthFinal()
      altera.bitcoinFinal.style.display = 'none'

      if (moedaFinal.value != 'todas-as-moedas' && moedaFinal.value != 'real' && moedaFinal.value != 'bitcoin') {
         dolarValorFinal()
         euroValorFinal()
         ethereumValorFinal()
      }

      else if (moedaFinal.value == 'bitcoin') {
         moedaFinal.value = 'real'
      }

      else { selecionaTodasOuSomenteReal() }
   }

   else if (moedaInicial == 'ethereum') {
      ativaRealFinal()
      ativaDolarFinal()
      ativaEuroFinal()

      ativaBtcFinal()
      altera.ethereumFinal.style.display = 'none'

      if (moedaFinal.value != 'todas-as-moedas' && moedaFinal.value != 'real' && moedaFinal.value != 'ethereum') {
         dolarValorFinal()
         euroValorFinal()
         bitcoinValorFinal()
      }

      else if (moedaFinal.value == 'ethereum') {
         moedaFinal.value = 'real'
      }

      else { selecionaTodasOuSomenteReal() }
   }

   function selecionaTodasOuSomenteReal() {
      if (moedaFinal.value == 'todas-as-moedas') { moedaFinal.value = 'todas-as-moedas' }
      else { moedaFinal.value = 'real' } 
   }

   function dolarValorFinal() { if (moedaFinal.value == 'dolar' ) { moedaFinal.value = 'dolar' }}
   function euroValorFinal() { if (moedaFinal.value == 'euro' ) { moedaFinal.value = 'euro' }}

   function bitcoinValorFinal() {  if (moedaFinal.value == 'bitcoin' ) { moedaFinal.value = 'bitcoin' } }
   function ethereumValorFinal() {  if (moedaFinal.value == 'ethereum' ) { moedaFinal.value = 'ethereum' } }
})

mexePara.pegarMoedaInserida.addEventListener('keypress', function(pressionaTecla) {
   if (pressionaTecla.key == '-' || pressionaTecla.key == '+' || pressionaTecla.key == '/' || pressionaTecla.key == '*' || pressionaTecla.key == '!' || pressionaTecla.key == '%' || pressionaTecla.key == '(' || pressionaTecla.key == ')' || pressionaTecla.key == ':' || pressionaTecla.key == ',') {
      pressionaTecla.preventDefault()
   }
})

mexePara.pegarMoedaInserida.addEventListener('paste', function(desabilitaColar) {
   desabilitaColar.preventDefault()
})

mexePara.pegarTemperaturaInserida.addEventListener('keypress', function(insereTemperatura) {
   var inputTemperaturaInicial = document.querySelector('#temperatura-a-converter')

   if (insereTemperatura.key == '/' || insereTemperatura.key == '*' || insereTemperatura.key == '!' || insereTemperatura.key == '%' || insereTemperatura.key == '(' || insereTemperatura.key == ')' || insereTemperatura.key == ':' || insereTemperatura.key == ',' || insereTemperatura.key == '+') {
      insereTemperatura.preventDefault()
   }
   
   else if (inputTemperaturaInicial.value.length > 0 && insereTemperatura.key == '-') {
      insereTemperatura.preventDefault()
   }
})

mexePara.pegarTemperaturaInserida.addEventListener('paste', function(desabilitaColarNaTemperatura) {
   desabilitaColarNaTemperatura.preventDefault()
})

setorPara.ativarConversorTemperaturas.addEventListener('click', () => {
   articleDas.moedas.classList.remove('active')

   articleDas.temperaturas.classList.add('active')
})

setorPara.ativarConversorMoedas.addEventListener('click', () => {
   articleDas.temperaturas.classList.remove("active")

   articleDas.moedas.classList.add("active")
})

setorPara.converterMoeda.addEventListener('click', () => {
   colocaLixeiraDasMoedas()
})

setorPara.converterTemperatura.addEventListener("click", () => {
   colocaLixeiraDaTemperatura()
})

mexePara.limparResultadoMoedas.addEventListener('click', () => {
   retiraLixeiraDasMoedas()
})

mexePara.limparResultadoTemperatura.addEventListener('click', () => {
   retiraLixeiraDaTemperatura()
})

mexePara.pegarTemperaturaInserida.addEventListener('keydown', alterarFonte)
mexePara.pegarMoedaInserida.addEventListener('keydown', alterarFonte)

function alterarFonte() {
   var moedaInserida = document.querySelector('#valor-moeda-a-converter')
   var temperaturaInserida = document.querySelector("#temperatura-a-converter")

   if (moedaInserida.value.length <= 14 && window.innerWidth > 700) {
      moedaInserida.style.fontSize = '17px'
   }

   else if (moedaInserida.value.length <= 14 && window.innerWidth <= 700) {
      moedaInserida.style.fontSize = '16px'
   }

   else if (moedaInserida.value.length >= 15 && moedaInserida.value.length <= 23) {
      moedaInserida.style.fontSize = '10px'
   }

   else if (moedaInserida.value.length >= 24 && moedaInserida.value.length <= 40) {
      moedaInserida.style.fontSize = '8px'
   }

   /*Tenho muito que aprender*/
   if (temperaturaInserida.value.length <= 14 && window.innerWidth > 700) {
      temperaturaInserida.style.fontSize = '17px'
   }

   else if (temperaturaInserida.value.length <= 14 && window.innerWidth <= 700) {
      temperaturaInserida.style.fontSize = '16px'
   }

   else if (temperaturaInserida.value.length >= 15 && temperaturaInserida.value.length <= 23) {
      temperaturaInserida.style.fontSize = '10px'
   }

   else if (temperaturaInserida.value.length >= 24 && temperaturaInserida.value.length <= 40) {
      temperaturaInserida.style.fontSize = '8px'
   }
}

function colocaLixeiraDasMoedas() {
   if (mexePara.limparResultadoMoedas.classList.contains('desativado')) {
      mexePara.limparResultadoMoedas.classList.toggle('desativado')

      mexePara.limparResultadoMoedas.classList.toggle('active')
   }
}

function colocaLixeiraDaTemperatura() {
   if (mexePara.limparResultadoTemperatura.classList.contains('desativado')) {
      mexePara.limparResultadoTemperatura.classList.toggle('desativado')

      mexePara.limparResultadoTemperatura.classList.toggle('active')
   }
}

function retiraLixeiraDasMoedas() {
   mexePara.limparResultadoMoedas.classList.toggle('active')

   mexePara.limparResultadoMoedas.classList.toggle('desativado')
}

function retiraLixeiraDaTemperatura() {
   mexePara.limparResultadoTemperatura.classList.toggle('active')

   mexePara.limparResultadoTemperatura.classList.toggle('desativado')
}

function ativaRealFinal() { altera.realFinal.style.display = 'block' }
function ativaDolarFinal() { altera.dolarFinal.style.display = 'block' }
function ativaEuroFinal() { altera.euroFinal.style.display = 'block' }
function ativaBtcFinal() { altera.bitcoinFinal.style.display = 'block' }
function ativaEthFinal() { altera.ethereumFinal.style.display = 'block' }

function ativaFahFinal() { altera.fahrenheitFinal.style.display = 'block' }
function ativaCelsiusFinal() { altera.celsiusFinal.style.display = 'block' }
function ativaKelvinFinal() { altera.kelvinFinal.style.display = 'block' }