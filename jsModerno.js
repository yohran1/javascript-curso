// ES6 + => versão do JS

//Arrow function
const soma = (a, b) => a + b
console.log(soma(10, 20))

const quadrado = (numero) => numero * numero
console.log(quadrado(4))

const cumprimento = (nome)=> {
    const mensagem = `Olá ${nome}`
    return mensagem
}
console.log(cumprimento('Yohran'))

// template literals
const nome = "Maria"
const idade = 22

console.log(`Meu nome é ${nome} e tenho ${idade}`)

// desestruturação - Destructuring
const pessoa = {nome: "João", idade: 40, profissao: "Programador"}

const {nome: nome2, idade: idade2, profissao} = pessoa

console.log(nome2, profissao)
console.log(pessoa)

const numeros = [1, 2, 3, 4]
const [primeiro, segundo, terceiro] = numeros

console.log(primeiro, segundo, terceiro)

// Spread operator => espelhamento
const array1 = [1,2,3]
const array2 = [...array1, 4,5,6]
console.log(array2)

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0)

console.log(soma2(1,2,3,4,5,6,7))