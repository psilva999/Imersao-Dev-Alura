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

var resultadoDa = {
   moedaConvertida: document.querySelector(".resultado-moeda"),
   temperaturaConvertida: document.querySelector(".resultado-temperatura")
}

setorPara.converterMoeda.addEventListener('click', () => {
   var moeda = {
      inicial: document.querySelector('#moeda-inicial').value,
      final: document.querySelector('#moeda-final').value
   }

   var inputMoeda = document.querySelector('#valor-moeda-a-converter').value

   if (inputMoeda == '') { 
      resultadoDa.moedaConvertida.innerHTML = 'Que vazio 😗' 
   }

   else if (inputMoeda <= 0) { 
      resultadoDa.moedaConvertida.innerHTML = 'Não quero converter com zero 😑' 
   }

   else if (inputMoeda > 0) {
      if (moeda.inicial == 'real') {

         if (moeda.final == 'dolar') { 
            var convertePraDolar = (inputMoeda / 5.38).toFixed(2)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `$${convertePraDolar}`
         }

         else if (moeda.final == 'euro') { 
            var convertePraEuro = (inputMoeda / 6.3).toFixed(2)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `&euro;${convertePraEuro}`
         }

         else if (moeda.final == 'bitcoin') { 
            var convertePraBtc = (inputMoeda / 229572.71).toFixed(8)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `&#x20BF; ${convertePraBtc}`
         }

         else if (moeda.final == 'ethereum') {
            var convertePraEth = (inputMoeda / 15871.7).toFixed(8)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `ETH ${convertePraEth}`
         }
      }

      else if (moeda.inicial == 'dolar') {
         if (moeda.final == 'real') { 
            var convertePraReal = (inputMoeda * 5.38).toFixed(2)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `R$${convertePraReal}`
         }

         else if (moeda.final == 'euro') { 
            var convertePraEuro = (inputMoeda * 0.855).toFixed(2)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `&euro;${convertePraEuro}`
         }

         else if (moeda.final == 'bitcoin') { 
            var convertePraBtc = (inputMoeda * 0.000024).toFixed(6)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `&#x20BF; ${convertePraBtc}`
         }

         else if (moeda.final == 'ethereum') { 
            var convertePraEth = (inputMoeda * 0.000341).toFixed(6)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `ETH ${convertePraEth}`
         }
      }

      else if (moeda.inicial == 'euro') {
         if (moeda.final == 'real') { 
            var convertePraReal = (inputMoeda * 6.3).toFixed(2)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `R$${convertePraReal}`
         }

         else if (moeda.final == 'dolar') { 
            var convertePraDolar = (inputMoeda * 1.1693).toFixed(2)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `$${convertePraDolar}`
         }

         else if (moeda.final == 'bitcoin') {
            var convertePraBtc = (inputMoeda * 0.00002761).toFixed(8)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `&#x20BF; ${convertePraBtc}` 
         }

         else if (moeda.final == 'ethereum') { 
            var convertePraEth = (inputMoeda * 0.00040008).toFixed(8)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `ETH ${convertePraEth}`
         }
      }

      else if (moeda.inicial == 'bitcoin') {
         if (moeda.final == 'dolar') { 
            var convertePraDolar = (inputMoeda * 42250.44).toFixed(6)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `$${convertePraDolar}`
         }

         else if (moeda.final == 'euro') { 
            var convertePraEuro = (inputMoeda * 36279.28).toFixed(6)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `&euro;${convertePraEuro}`
         }

         else if (moeda.final == 'real') { 
            var convertePraReal = (inputMoeda * 228655.16).toFixed(6)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `R$${convertePraReal}`
         }

         else if (moeda.final == 'ethereum') { 
            var convertePraEth = (inputMoeda * 14.44).toFixed(4)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `ETH ${convertePraEth}`
         }
      }

      else if (moeda.inicial == 'ethereum') {
         if (moeda.final == 'dolar') { 
            var convertePraDolar = (inputMoeda * 2931.57).toFixed(4)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `$${convertePraDolar}`
         }

         else if (moeda.final == 'euro') { 
            var convertePraEuro = (inputMoeda * 2522.86).toFixed(4)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `&euro;${convertePraEuro}`
         }

         else if (moeda.final == 'bitcoin') { 
            var convertePraBtc = (inputMoeda * 0.069399).toFixed(6)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `&#x20BF; ${convertePraBtc}`
         }

         else if (moeda.final == 'real') { 
            var convertePraReal = (inputMoeda * 15795).toFixed(4)

            colorBlack()
            resultadoDa.moedaConvertida.innerHTML = `R$${convertePraReal}`
         }
      }

      colocaLixeiraDasMoedas()
   }

   function colorBlack() { resultadoDa.moedaConvertida.style.color = 'black' }
})

setorPara.converterTemperatura.addEventListener("click", () => {
   var inputTemperatura = document.querySelector('#temperatura-a-converter')

   if (inputTemperatura.value == '' || inputTemperatura.value == '--' || inputTemperatura.value == '-' || inputTemperatura.value < 0 && inputTemperatura.value > -0.1) {
      resultadoDa.temperaturaConvertida.innerHTML = 'Melhor tentarmos com outro valor 🙄'
   }

   else {
      colocaLixeiraDaTemperatura()
   }
})

mexePara.limparResultadoMoedas.addEventListener('click', () => {
   var inputMoeda = document.querySelector('#valor-moeda-a-converter')

   retiraLixeiraDasMoedas()
   inputMoeda.value = ''

   resultadoDa.moedaConvertida.style.color = 'rgba(0,0,0,.5)'
   resultadoDa.moedaConvertida.innerHTML = 'Aconchego do resultado 😊'

   if (window.innerWidth > 700 && inputMoeda.value.length == 0) {
      inputMoeda.style.fontSize = '17px'
   }

   else if (window.innerWidth <= 700 && inputMoeda.value.length == 0) {
      inputMoeda.style.fontSize = '16px'
   }
})

mexePara.limparResultadoTemperatura.addEventListener('click', () => {
   var inputTemperatura = document.querySelector('#temperatura-a-converter')

   retiraLixeiraDaTemperatura()
   inputTemperatura.value = ''
   
   resultadoDa.temperaturaConvertida.style.color = 'rgba(0,0,0,.5)'
   resultadoDa.temperaturaConvertida.innerHTML = 'Aconchego do resultado 😊'

   if (window.innerWidth > 700 && inputTemperatura.value.length == 0) {
      inputTemperatura.style.fontSize = '17px'
   }

   else if (window.innerWidth <= 700 && inputTemperatura.value.length == 0) {
      inputTemperatura.style.fontSize = '16px'
   }
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

   function selectCelsiusFinal() { if (temperaturaFinal.value == 'celsius') { temperaturaFinal.value = 'celsius' } }
   function selectFahFinal() { if (temperaturaFinal.value == 'fahrenheit') { temperaturaFinal.value = 'fahrenheit' } }

   function selectKelvinFinal() { if (temperaturaFinal.value == 'kelvin') { temperaturaFinal.value = 'kelvin' } }
   function selectTodasAsTemperaturas() { if (temperaturaFinal.value == 'todas-as-temperaturas') { temperaturaFinal.value = 'todas-as-temperaturas' } }
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

mexePara.pegarTemperaturaInserida.addEventListener('keydown', alterarFonte)
mexePara.pegarMoedaInserida.addEventListener('keydown', alterarFonte)

function alterarFonte() {
   var moedaInserida = document.querySelector('#valor-moeda-a-converter')
   var temperaturaInserida = document.querySelector("#temperatura-a-converter")

   if (moedaInserida.value.length <= 14 && window.innerWidth > 700 || moedaInserida.value.length == 0) {
      moedaInserida.style.fontSize = '17px'
   }

   else if (moedaInserida.value.length <= 14 && window.innerWidth <= 700 || moedaInserida.value.length == 0) {
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