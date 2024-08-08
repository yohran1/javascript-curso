// Seleção dos elementos
const display = document.querySelector("#displayInput")
const botaoIgual = document.querySelector(".igual")
const botaoPonto = document.querySelector(".ponto")
const botoesNumeros = document.querySelectorAll(".num")
const botoesOperadores = document.querySelectorAll(".operador")

// variáveis globais
let operacaoAtual = "" // Oque está sendo executado no momento
let operador = null // Operadores sendo selecionados
let valorAnterior = "" // O valor que foi calculado anteriormente
let calculando = false // Se está calculando o resultado da operação

// Eventos
botaoPonto.addEventListener("click", inserePonto)
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumeros))
botoesOperadores.forEach((botao)=> botao.addEventListener("click", insereOperador))
botaoIgual.addEventListener("click", calcula)

// Funções
function atualizarDisplay(){
    display.value = operacaoAtual
}
function insereNumeros(event){

    if(calculando){
        operacaoAtual = event.target.textContent
        calculando = false // Se não estiver mais calculando retornará falso
    }else{
        operacaoAtual += event.target.textContent // se não estiver calculando tera uma concatenação (+=)
    }
    atualizarDisplay()
}
function inserePonto(){
    if(operacaoAtual.indexOf(".") === -1 ){ // Vai identificar se há um ponto"." na operação atual, .indexOf para ver se encontra algum índice de ponto"." na string, e quando não houver o ponto". " e quando não tiver nenhum elemento que corresponde, estará colocando -1
        operacaoAtual += "." // Caso a verificação não tiver ponto".", irá ser concatenado um ponto"." na operação
        atualizarDisplay()
    }
}
function insereOperador(event){
    if(operacaoAtual !== ""){ // Se não houver nenhum número no display
        if(!calculando){ // Se estiver calculando
            if(operador !== null){ // se o operador é diferente de nulo ira ser calculado o valor
                calcula()
            }
            valorAnterior = operacaoAtual // Se o operador for nulo, vai receber a operação atual 
            operacaoAtual = "" // vai iniciar o valor de uma nova operação
        }
        operador = event.target.textContent // se estiver calculando será posto o operador
    }
}

function calcula(){
    let resultado = null
    const operandoAnterior = parseFloat(valorAnterior) // converter para numero, pois valor dos inputs vem como string
    const operandoAtual = parseFloat(operacaoAtual) // o valor atual que está na tela

    switch(operador){
        case "+":
            resultado = operandoAnterior + operandoAtual
        break
        case "-":
            resultado = operandoAnterior - operandoAtual
        break
        case "*":
            resultado = operandoAnterior * operandoAtual
        break
        case "/":
            resultado = operandoAnterior / operandoAtual
        break
    }
    operacaoAtual = String(resultado)
    valorAnterior = operacaoAtual
    calculando = true
    atualizarDisplay()
}


