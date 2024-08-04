// Exercícios de fundamentos
// Exercício 1: Olá Mundo!
// crie um script que imprima "Olá mundo" no console

console.log("Olá mundo")

// Exercício 2: conversão de tipos
// Dado o valor de uma string "1234", converta-o em um número  e exiba o tipo da variável no console.

const numerosString = "1234"
const numeros = Number(numerosString)

console.log(typeof numeros)

// Exercício 3: Manipulação de string
// dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.

const string = "JavaScript é incrível"
const caracteresString = string.length
const palavrasString = string.split(" ").length

console.log(`O nº de caracteres é: ${caracteresString}`)
console.log(`O nº de palavras é: ${palavrasString}`)

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. use um loop for para imprimir cada nome no console
const turma = ["Fulano", "Ciclano", "Deltrano", "Natano", "Beltrano"]

for(let i = 0; i < turma.length; i++){
    console.log(turma[i])
}

// Exercício 5: Funções, strings e Math
// crie uma função que aceita uma string representando um horário no formato de 24hrs por exemplo ("14:30"). 
//A função, ela deve retornar uma string que converta o horário para o formato de 12hrs por exemplo ("2:30")
//use o objeto Math para auxiliar nesta conversão. 
//certifique-se de que sua função lida corretamente com horários da meia noite e meio dia
const agora = new Date()
const hora = `${agora.getHours()}:${agora.getMinutes()}`

function converterHorario(horario24){

    // const hora = horario24.split(":")[0]
    // const minutos = horario24.split(":")[1]

    const [hora, minutos] = horario24.split(":")
    //  falsy - está pegando a hora passada da variável e fazendo uma divisão da hora por 12, exemplo digamos que é 15hrs ele vai ser dividido por 12 que dará 3hrs formatou nº de 24hrs em 12hrs, caso for dividir 12 por 12 o resultado da divisão é zero(0) se tornará falsy e passará para o or (||) que é o nº 12 definido padrão de horas.
    const hora12 = hora % 12 || 12

    let periodo = "AM"
    if(hora < 12){
        periodo = "PM"
    }

    console.log(`${hora12}:${minutos} (${periodo})`)
}
converterHorario("13:13")