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

// Default parameters - padrão de parâmetros
function saudacao(nome = "visitante"){ // a prop já recebe um valor padrão caso não for passado nada a prop
    console.log(`Olá ${nome}`)
}
saudacao()
saudacao("Yohran")

// objects literals enhancements - melhorias em literais de objetos
// exemplo: {nome: "exemple"}
// Criar um objeto baseado em variáveis

const nomeNovo = "Irineu"
const idadeNova = 24

const pessoaNova = {nomeNovo, idadeNova}
const pessoaNova1 = {nome: nomeNovo, idade: idadeNova}
console.log(pessoaNova1)


const saudacaoObject = {
    dizerOi(){
        console.log("oi")
    },
    dizerTchau(){
        console.log("tchau")
    }
}
saudacaoObject.dizerTchau()

// classes e heranças
class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){
        console.log(`Olá pessoal meu nome é ${this.nome}`)
    }
}

const joao = new Pessoa("João", 34)
console.log(joao)
joao.falar()

const irineu = new Pessoa("Irineu", 24)

class Funcionario extends Pessoa{ // A class Funcionario herdou todos os métodos de parâmetros da class Pessoa 
    constructor(nome, idade, salario){
        super(nome, idade) // Chamando os parâmetros da Class Pai 'Pessoa'
        this.salario = salario
    }
    falarFuncionario(){
        super.falar()
        console.log(`Eu ganho R$${this.salario}`)
        
    }
}

const Filisteu = new Funcionario("Filisteu", 24, 3200)
console.log(Filisteu)
Filisteu.falar()
Filisteu.falarFuncionario()