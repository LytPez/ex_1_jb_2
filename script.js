const body=document.body

body.style.backgroundColor='green'

const vermelho=document.getElementById('vermelho')
const verde=document.getElementById('verde')
const azul=document.getElementById('azul')
const amarelo=document.getElementById('amarelo')
const botao=document.querySelectorAll('button')

let btVermelho=botao[0]

function trocaCor(){
  const body=document.getElementsByTagName("body")
     botao[0]=body.style.backgroundColor='green'
    let azulBody=body.style.backgroundColor='green'
    let verdeBody=body.style.backgroundColor='green'
    let amareloBody=body.style.backgroundColor='green'
  
}


btVermelho.addEventListener('click',trocaCor)

let tamanhoArray=botao.length

for(let i=0;i<tamanhoArray;i++){
  console.log(botao[i])
}


botao.addEventListener('click',function(){
  trocaCor(botao[1],azulBody,verdeBody,amareloBody)
})


verde.addEventListener('click',trocaCor)
azul.addEventListener('click',trocaCor)
amarelo.addEventListener('click',trocaCor)