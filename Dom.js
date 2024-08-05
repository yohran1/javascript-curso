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
