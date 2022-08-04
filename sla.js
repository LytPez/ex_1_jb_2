
const botaoVermelho=document.getElementById('vermelho')
const botaoVerde=document.getElementById('verde')
const botaoAzul=document.getElementById('azul')
const botaoAmarelo=document.getElementById('amarelo')
let body=document.body

function trocaVermelho(){
  body.style.backgroundColor='red'
}
function trocaVerde(){
  body.style.backgroundColor='green'
}
function trocaAzul(){
  body.style.backgroundColor='blue'
}
function trocaAmarelo(){
  body.style.backgroundColor='yellow'
}

botaoVermelho.addEventListener('click',trocaVermelho)
botaoVerde.addEventListener('click',trocaVerde)
botaoAzul.addEventListener('click',trocaAzul)
botaoAmarelo.addEventListener('click',trocaAmarelo)