// DOM - Document Object Model, eventos de DOM

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