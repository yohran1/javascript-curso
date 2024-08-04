 
 // Manipulação de arrays
 const frutas = ["Maçã", "Laranja"]

 frutas.unshift("Acerola")
 console.log(frutas)
 
 frutas.shift()
 console.log(frutas)
 
 // map, filter, reduce => arrow function
 
 const numeros = [1, 2, 3, 4, 5, 6]
 // find => retorna o primeiro dado do critério
 const numeroPar = numeros.find((numeroAtual) => {
     return numeroAtual % 2 === 0
 })
 console.log(numeroPar)
 // filter => retorna todos os dados que batem com o critério
 const numerosPares = numeros.filter((numerosAtual) => {
     return numerosAtual % 2 === 0
 })
 console.log(numerosPares)
 
 // Manipulação de strings
 const frase = " Olá mundo! " // Frase com espaços na string, pode ocorrer de retornar com espaços em inputs
 // com o trim() é possível remover os espaços de strings, com o split(" ") ele pega cada palavra e coloca separadamente em um array
 const palavra = frase.trim().split(" ")

 console.log(frase)
 console.log(palavra)

 const frase_2 = "javaScript é incrível!"
// Método de identificação de strings
 console.log(frase_2.startsWith("java")) // Identifica a primeira palavra da string e retorna um boolean (true, false), no caso desta retornará true
 console.log(frase_2. endsWith("!")) // Identifica a ultima palavra da frase string, e retornará um boolean false.

 // Exceções e tratamentos de erros
 const idade = 15
/*
 if( idade < 18){
    throw new Error("Você deve ter pelo menos 18 anos!") // criando uma nova instancia de erro e com o throw executará oque lhe foi passado, e se houver algum erro ira parar a aplicação.
 }
 */
// Para o tratamento de erro try, catch irá executar o erro porem não irá parar o programa, podendo pegar o erro e joga para o usuário ou para o dev e tratar/corrigir o erro.
 try {
    const idade = 15
    if( idade < 18){
    throw new Error("Você deve ter pelo menos 18 anos!") // criando uma nova instancia de erro e com o throw executará oque lhe foi passado, e se houver algum erro ira parar a aplicação.
 }
 } catch (error) {
    console.log(error.message)
 }
 console.log("Continuando programa!")

 // callBack => função que executa dentro de uma outra função

 function cumprimentar(nome, callback){
    console.log("Olá " + nome)
    callback()
 }
 function mostrarSaudacao(){
    console.log("Como você está?")
 }
cumprimentar("['Name']", mostrarSaudacao)
// outra alternativa
cumprimentar("['Name']", function(){
    console.log("Como você está?")
})

// setTimeout => adicionará um timer para executar a função/método ou tratamento de erros, abrange muitas possibilidades.
function mostrarMensagem(){
    console.log("Esse mensagem será exibida após 2 segundos!")
}
/*
setTimeout(mostrarMensagem, 2000)

setTimeout(function(){
    console.log("Oi")
}, 1000)
*/
// Promises - Recebe em callback com duas propriedades, onde se passa a condição e com if e else funcionará quase como um try, catch
const promessa = new Promise((resolve, reject) => {
    const condicao = false
    if(condicao){
        resolve("A condição é verdadeira!")
    }else{
        reject("A condição é falsa")
    }
})
// then pegará o retorno que vier de resposta/verdadeira da promise 
promessa.then((mensagem) => {
    console.log(mensagem)
}).catch((error) => { // catch irá retornar o reject/erro da promise 
    console.log(error)
})

// obs: Bibliotecas feitas que são "promise based"
// Usar/executar todas Promises com método .all
const promise_1 = Promise.resolve(3)
const promise_2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1500, "Testando")
})

Promise.all([promise_1, promise_2]).then(valores => console.log(valores))

// Async Await - a função só irá ser executada quando retornar uma resposta vindo de API, Banco de dados ao realizar um fetch
async function obterValor(){
    const promessa = new Promise((resolve, reject)=>{
        setTimeout(() => resolve("Valor obtido"), 2000) // com o resolve no async await ele funciona como then() da promise pega o valor e retorna ele
    })
    const valor = await promessa
    console.log(valor)
}
obterValor()

// com o reject ele funciona como o catch da promise, pega o erro da promise
async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve, reject)=>{
            setTimeout(() => reject("Valor com erro"), 2000)
        })
        const valor = await promessa
        console.log(valor)  
    } catch (error) {
        console.log(error)
    }
}
obterValorComErro()