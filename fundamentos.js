// Fundamentos

var minhaVariavel = "Olá JavaScript"

console.log(minhaVariavel) //impressão da Variavel no inspetor (Console) do navegador

// Comentários

/*
Tudo aqui dentro
é uma
Variavel
*/

// Variáveis e tipos de dados
var meuNumero = 10

console.log(meuNumero)
console.log(meuNumero + 5) // Adicionando mais (+) 5 somando com o Nº 10 da variável declarada (MeuNumero)
console.log("10" + 5) // Está juntando os nºs como se fossem letras onde não há possibilidade de somar os nºs como se fossem letras
console.log(typeof meuNumero) // o operador 'typeof' do javaScript serve para saber com que tipo de dado estamos trabalhando exemplo: (Number, boolean, string, object, array, null, undefined)
var booleano = true; //false
console.log(typeof booleano)

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(meuObjeto)
console.log(meuArray)
console.log(meuNull)
console.log(meuUndefined)

// let e const
// novas formas de declarar variáveis
let x = 10
const y = 5
// Operadores aritméticos
console.log(x + y) // Soma
console.log(x - y) // Diminuir
console.log(x * y) // multiplicação
console.log(x / y) // Divisão

// Operadores de comparação

console.log(x == y) // Para comparação se é igual, onde retorna (booleano) true ou false
console.log(x != y) // Para comparação se são diferentes, onde irá dar, true pois não são iguais
console.log("5" == 5) // Para comparação se são iguais, mais não leva em consideração o tipo do dado, aqui ele retorna True pois são o mesmo numero, só que um é string e outro number
console.log("5" === 5) // Para comparação do tipo do dado informado se são iguais, como há um dado string e outro number ele dará false, pois não são do mesmo tipo, teria de ser os dois dados string ou number ambos teriam de ser iguais
console.log("5" !== 5) // Para comparação se o tipo e o dado são diferentes, aqui dá true pois não são iguais, um é string e outro number, e não possuem os mesmos dados pois são tipos diferentes

// Operadores lógicos
// ADN 'e se' ( && )
// OR 'ou' ( || )
console.log( 10 > 5 && 20 > 5) // O && está verificando se ambos os números são verdadeiros, e dará true, pois 10 é maior que 5, e se, 20 é maior que 5.
console.log( 10 > 5 && 20 < 5) // está verificando se 10 é maior que 5, e se, 20 é maior que 5, retornará false pois um é verdadeiro e outro é falso.
console.log( 10 < 5 && 20 < 5) // está verificando se 10 é menor que 5, e se, 20 é menor que 5, são duas situações que dão false, logo então essa verificação retornará false.

console.log( 10 > 5 || 20 > 5) // Com o || está verificando se alguma das opções são verdadeiras, e como são verdadeiras irá retornar true
console.log( 10 > 5 || 20 < 5) // O || irá dar verdadeiro pois há uma verificação que da true, como o 10 é maior que 5
console.log( 10 < 5 || 20 < 5) // Aqui o || dará false, pois está verificando se 10 é menor que 5 e se 20 é menor que 5, com os dois sendo falsos irá retornar false, este é o ÚNICO caso que retornará false usando o || (OR 'ou')

// Conversão de tipos

const meuNumero_2 = "123" // String

const meuNumeroConvertido = Number(meuNumero_2) // Está pegando uma string e transformando em nº 

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido) // o operador 'typeof' do javaScript serve para saber com que tipo de dado estamos trabalhando exemplo: (Number, boolean, string, object, array, null, undefined)

// Estrutura de condição - is, else, else if

const idade = 16 // ou nº 10 para teste desde exemplo da atividade.

if(idade < 13){ // Está verificando se a variável nº 10 é menor que o nº 13, e neste caso irá retornar oque passarmos dentro das chaves {}
    console.log("Criança") // Imprimindo no console do navegador o resultado da verificação se o nº 10 é menor que 13, e retornará true com a mensagem passada no console.log()
}else if(idade < 20){ // Está verificando (e si) a idade nº 16 for menor de nº 20, ele retornará a resposta passada no console.log() 
    console.log("Adolescente")
}else{
    console.log("Adulto") // Como o n° 10 é menor que 13 não irá passar aqui. Caso for um nº maior que 13 neste exemplo retornaria o resultado passado neste console.log()
}
// Observação: pode-se usar quantos ELSE IF quiser, contanto que esteja dentro do IF
if(false){
    console.log("Isso executará")
}else{
    console.log("Agora isso executará")
}
// Switch - Uma outra estrutura condicional

const fruta = "Maça"

switch(fruta){  // Irá pegar o dado passado na variável e passado uma verificação, e se achar a o caso (case) com o valor passado no dado da variável irá retornar o resultado do case e cada caso(case) deve-se ter um stop, como break, para que não execute todas as verificações passadas em casa caso(case)
    case "Banana": // neste caso(case) está vendo se a fruta é BANANA, caso for executará o dado passado no console.log(), como não é o mesmo dado não irá ser exibido essa verificação, e passará para a próxima verificação
        console.log("Banana é a fruta")
        break // o stop para avançar para a próxima verificação 
    case "Maça": // neste caso(case) ira dar o resultado do console.log(), pois são o mesmo dado a ser verificado.
        console.log("Maça é a fruta")
        break

    default: // Serve para quando não for nenhuma das verificações passadas, e será executada a ação passada.
        console.log("Fruta não encontrada")
}

// Estrutura de repetição chamado de laços
/*Onde executaremos um loop 1,2,3,4,5,6... => dependendo de uma condição*/

// Contador, condição de limite, incremento
// geralmente começa com uma variável no zero 0 que seria de onde começaria, depois a se passa até aonde tem que chegar(condição limite), depois por final passa-se o incremento, para que se continue a contagem ou dado passado até chegar na condição limite passada. 
for(let i = 0; i < 5; i++){
    //Concatenação, junta tudo em STRING
    console.log("O valor de i é: " + i)
}

// while
// Passe no while apenas a condição de fim/condição limite, e no fim do while dentro de chaves {} use o incremento para fazer a contagem, passando item por item ou dado por dado até chegar onde foi passado na condição limite
let k = 0;
while(k < 5){
    console.log("O valor de K é: " + k)
    k++
}

// do while  - no do é o verbo fazer, onde vc passará os comandos para oque se fazer com os dados, e no while a condição limite, e para colocar o incremento dentro do 'do' onde deverá passar por cada dado e iniciar a contagem

let j = 0

do{
    console.log("O valor de [J] é: " + j)
    j++
}while(j < 5);

// funções - serve para armazenar um trecho do código para ser usado/executado varias vezes
// function nomeDaFunção(argumento_1, argumento_2) {corpo}

function cumprimentar(nome){
    console.log("Olá! " + nome)
}
// Invocação - deve-se usar o nome da function e executar com ()
cumprimentar("Yohran")

// escopo de variáveis - variável fora de chaves {} é considerado global, já variável dentro de chaves é variável de escopo
let cor = "azul"


function mostrarCor(){
    let cor = "Verde"
    console.log(cor)
}

console.log(cor)
mostrarCor()

// hoisting = içamento - onde vc pode executar a função antes de onde ela foi feita, pro javaScript a função estará no inicio do script, como se estivesse na linha 1 do código
testeHoisting()

function testeHoisting(){
    console.log("Deu certo!")
}

// arrow function - nome da função é dado na variável, e depois usa-se a arrow => com as chaves {}

const testeArrow = () => {
    console.log("Isso também é uma função")
}
testeArrow()

// truthy e falsy - o javaScript considera que se tiver algum dado sendo passado na variável já se torna true(verdadeiro) 

const minhaVariavel_1 = "" // falsy - por não possuir nada sendo passado já é considerado falso (boolean)
const minhaVariavel_2 = "Algum texto" // truthy - por ter dados sendo passados dentro de "" já é considerado verdadeiro (boolean)

if(minhaVariavel_1){
    console.log("É verdadeiro!" )
}else{
    console.log("É falso")
}

if(minhaVariavel_2){
    console.log("É verdadeiro! 2")
}else{
    console.log("É falso 2")
}

// Array, listas []- com o array é possível acessar os dados dentro dela por loops de repetição(laços), até mesmo de um array vindo do banco de dados 
// pode-se acessar um dado do array com o índice, o array começa na contagem zero 0, e vc só quer ver oque está no segundo item do array, deve-se usar assim 'numero[1]' 

const numeros = [1,2,3,4,5]

console.log(numeros)
// Acessando array pelo índice
console.log(numeros[2])
//array.push() - com o push vc adiciona um dado no ultimo item do array 
numeros.push(6)
console.log(numeros)
//array.pop() - com o pop ele retira o último elemento do Array
numeros.pop()
console.log(numeros)
// array.unshift() - com o unshift ele adiciona um dado no primeiro item da lista
numeros.unshift(0)
console.log(numeros)
// array.shift() - com o shift ele retira o primeiro item do array
numeros.shift()
console.log(numeros)
// Acessar a quantidade de caracteres com '.length'
console.log(numeros.length)

// strings
const minhaStringNova = "Olá mundo"
//concatenação = +
const minhaString_3 = minhaStringNova + " Como você está?"
console.log(minhaString_3)
// interpolação
const minhaString_4 = `${minhaStringNova} Como você está`
console.log(minhaString_4)
// Acessar a quantidade de caracteres com '.length'
console.log(minhaString_4.length)
// separa cada frase em nºs 
console.log(minhaString_4.split(" ")) //obs: precisa colocar um espaço, pois ai o split vai separar cada palavra da frase
// Acessando string pelo índice
console.log(minhaString_4[5])
// Deixar qualquer texto em caixa alta
console.log(minhaString_4.toLocaleUpperCase())

// Data e Hora
const agora = Date() // pegando a data de agora
console.log(agora)
// pegar uma data específica - primeiro o se passa no Date o ano, depois o mes, e dia, porem o mes é contado como array, começa no zero
const natal = new Date(2024, 11, 25)
console.log(natal)

// Math - serve para operações matemáticas

console.log(Math.PI) // Pegando o valor de PI
console.log(Math.round(3.5)) // Arredonda o nº passado para cima, caso ele for maior que 'Nº.5', caso for 'Nº.4' ele mantém o mesmo Nº
console.log(Math.sqrt(16)) // Pegando o valor da raiz quadrada de 16
console.log(Math.pow(2, 3)) // calcular o valor da potencia, primeiro passa o Nº base, depois o Nº expoente











