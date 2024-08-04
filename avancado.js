 
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