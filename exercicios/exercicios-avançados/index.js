// Exercícios de manipulação de array
/*
Crie uma lista de compras que é inicialmente vazia.
Adicione 5 itens á lista usando push().
Remova o primeiro item da lista usando shift().
Imprima a lista final no console
*/

const compras = []
compras.push("Banana", "Maçã", "Cenoura", "Tomate", "Alho")
compras.shift()

console.log(compras)

// Exercícios de manipulação de array - find()
/*
Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]
Use o método find() para encontrar o primeiro número que
 é divisível por 7 e maior que 10
*/
const numeros = [3, 7, 14, 21, 29, 36, 42]

const metodoFind = numeros.find(numero=> numero > 10 && numero % 7 === 0)
console.log(metodoFind)

// Exercícios de manipulação de array - filter()
/*
Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40]
Use a função filter() para criar um novo array que contenha apenas os números
Que são maiores que 20
*/
const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40]

const filtrados = numeros2.filter( numero => numero > 20)

console.log(filtrados)

// Exercícios de manipulação de string - split(), trim()
/*
Dada a string: " Bom dia, Mundo "
Remova os espaços em branco no início e no final da string
em seguida, divida a string em palavras
*/
const string = " Bom dia, Mundo "

const stringLimpa = string.trim().split(" ")

console.log(string)
console.log(stringLimpa)

// Exercício de manipulação de string - startsWith(), endsWith()
// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com com a palavra "Roma"
const palavra = "O rato roeu a roupa do rei de Roma"

console.log(palavra.startsWith("O"))
console.log(palavra.endsWith("Roma"))





