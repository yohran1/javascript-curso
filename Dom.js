// DOM - Document Object Model, eventos de DOM - tudo haver com o document.

// Selecionar elementos
const elementoPorID = document.getElementById("meuId")
console.log(elementoPorID)

const elementoPorID2 = document.querySelector("#meuId")
console.log(elementoPorID2)

const elementoPorID3 = document.getElementsByClassName("minhaClasse")
console.log(elementoPorID3)

// Manipular conteúdo de texto
const elementoDeTexto = document.querySelector("#meuId")

console.log(elementoDeTexto.textContent)
setTimeout(()=>{
    elementoDeTexto.textContent = "Mudei de texto"
}, 1000)

// Trabalhando com atributos
const link = document.querySelector("a") // Selecionando pela TAG, os events de dom, sempre pegarão a primeira TAG do HTML
link.setAttribute("href", "https://horadecodar.com.br/curso") // Passar um atributo/propriedade e depois o caminho/conteúdo/link etc..
console.log(link)

console.log(link.getAttribute("href")) // verifica se há atributo passado, e mostra o conteúdo passado no atributo
console.log(link.hasAttribute("target")) // verifica se há atributo passado e retorna um Boolean, true or false
link.removeAttribute("target") // remove o atributo especificado
console.log(link)

// Manipulação de classes de CSS
const elementoDeClasse = document.querySelector("#meuId")

elementoDeClasse.classList.add("novaClasse") // Adiciona uma classe a TAG
elementoDeClasse.classList.remove("minhaClasse") // Remove a classe da TAG
elementoDeClasse.classList.toggle("outraClasse") // se a TAG tiver uma classe o .classList.toggle remove e adiciona uma classe com o nome passado ao método, caso não tenha uma class sendo passada ele passa o nome da class
// elementoDeClasse.classList.toggle("outraClasse")
console.log(elementoDeClasse)

// Manipular o CSS
const elemento3 = document.querySelector("#meuId")
elemento3.style.color = "blue"
// elemento3.style.backgroundColor = "red"

// Navegação entre nós - elemento pai body, section, nav, footer, div etc.. são filhas do body
const elemento4 = document.querySelector("#meuInput")
const pai = elemento4.parentNode // Com .parentNode você pega o elemento pai do elemento em questão.

console.log(elemento4)
console.log(pai)

// Obter o primeiro Filho do elemento do pai
const primeiroFilho = pai.firstChild
console.log(primeiroFilho)

// Obter o ultimo filho do elemento pai
const ultimoFilho = pai.lastChild
console.log(ultimoFilho)

// Manipulação de estrutura do DOM
const novoELemento = document.createElement("div") // Criando um elemento div com javaScript
console.log(novoELemento)

novoELemento.textContent = "Minha div de Javascript" // Adicionado texto a div
document.body.appendChild(novoELemento) // Colocando a div no HTML

document.body.insertBefore(novoELemento, pai) // Com .insertBefore está sendo passado a div criada no JS na posição antes do elemento passado depois da virgula

// document.body.removeChild(elementoPorID) // Removendo um elemento do HTML

// Eventos

//click
const botao = document.querySelector("button")

botao.addEventListener("click", ()=>{ // .addEventListener Adiciona um evento ao elemento, e uma callback para executar o evento
    console.log("Botão clicado")
})

// mouse
const elemento5 = document.querySelector("#meuFormulario")
elemento5.addEventListener("mouseover", ()=>{
    console.log("O mouse passou aqui")
})

// teclado
const campoInput = document.querySelector("#meuInput")
campoInput.addEventListener("keydown", ()=>{
    console.log("Tecla pressionada")
})

// formulário
const form = document.querySelector("form")

form.addEventListener("submit", function(event){ // o evento de submit é quando o formulário é enviado
    event.preventDefault() // com preventDefault é retirado o recarregamento da página ao enviar o formulário

    console.log("Formulário enviado")
})

// Propagação de eventos - eventos do elemento pai propagam no elemento filho OBS: Sempre que disparar um elemento pai, também vai disparar o evento no filho. 
document.querySelector("#elementoPai").addEventListener("click", ()=>{
    console.log("Clique capturado no pai")
})
document.querySelector("#elementoFilho").addEventListener("click", (event)=>{ // O elemento filho ao executar o evento, também irá executar o evento do pai, podendo da dor de cabeça
    event.stopPropagation() // Com .stopPropagation só é executado o evento do elemento em questão.
    console.log("Elemento Filho")
})
