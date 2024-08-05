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