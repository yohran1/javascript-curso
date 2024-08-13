const questions = [
    {
      question: "Qual é a capital do Brasil?",
      choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Qual é a capital da Argentina?",
      choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
      answer: "Buenos Aires",
    },
    {
      question: "Qual é a capital da França?",
      choices: ["Roma", "Madri", "Paris", "Londres"],
      answer: "Paris",
    },
    {
      question: "Qual é a capital da Espanha?",
      choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
      answer: "Madri",
    },
    {
      question: "Qual é a capital da Itália?",
      choices: ["Veneza", "Milão", "Roma", "Nápoles"],
      answer: "Roma",
    },
    {
      question: "Qual é a capital do Canadá?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Qual é a capital dos Estados Unidos?",
      choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Qual é a capital do Reino Unido?",
      choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
      answer: "Londres",
    },
  ];

  const questionElement = document.querySelector("#question")
  const choiceElements = document.querySelectorAll(".choice")
  const nextButton = document.querySelector("#next")
  const scoreElement = document.querySelector("#score")
  const WrongElement = document.querySelector("#wrong")

  let currentQuestion = 0 // Salvar em qual pergunta está atualmente
  let score = 0 // Pontuação inicial
  let wrong = 0 // Pontuação inicial
  let answerChosen = false // Boolean para verificar se a pergunta já foi respondida

  function loadQuestion(){ // Função para carregar a pergunta
    const currentQuestionData = questions[currentQuestion] // Pegando o índice das questões
    questionElement.innerText = currentQuestionData.question // Passando a questão para o HTML ser mostrado na tela

    const choices = shuffleArray(currentQuestionData.choices) // Pegando as respostas

    for(let i = 0; i < choiceElements.length; i++){ // Percorrendo os botões das respostas
        if(i < choices.length){ // Verificação se houver mais perguntas que os botões na tela
        choiceElements[i].innerText = choices[i] // inserindo as respostas nos botões
        }else{
            choiceElements[i].innerText = "" // Limpa os botões extras, se houver
        }
    }
    answerChosen = false // zerar a pergunta quando já escolhida, reset pra cada pergunta,

  }
  // Reordenação das perguntas
  function shuffleArray(array){
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while(0 !== currentIndex){ // enquanto o 0 for diferente do currentIndex, vai garantir que percorra todas perguntas, vai diminuído a cada loop
        randomIndex = Math.floor(Math.random() * currentIndex) // numero aleatório com base nos que já possui no array
        currentIndex -= 1 // cada loop vai ter um índice a menos, mais a as perguntas serão realocadas

        temporaryValue = array[currentIndex] 
        array[currentIndex] = array[randomIndex] // pegando o índice do array passado, e vai colocar uma resposta aleatória no lugar, Reatribuindo as resposta de um das posições pela resposta aleatória 
        array[randomIndex] = temporaryValue // todo array a ser percorrido, os índices vão recebendo respostas aleatórias
    }
    return array // e no final recebe o array recebido.
  }
// Escolhendo a resposta - vai identificar se a resposta é a correta
  function checkAnswer(event){
    if(answerChosen) return // vai fazer uma checagem se a pergunta foi escolhida e retorna, se não foi escolhida a resposta, retorne falso

    answerChosen = true // se foi escolhida a resposta verdadeira, de verdadeiro

    if(event.target.innerText === questions[currentQuestion].answer){ // vai verificar se o evento do botão da resposta é igual a resposta do array atual
        score++ // si for a resposta correta, é adicionado um valor ao score
        scoreElement.innerText = `Pontuação: ${score}`
        alert("Correto!")
    }else{
        wrong++ // se não for a resposta correta, adiciona um valor aos erros
        WrongElement.innerText = `Erros: ${wrong}`
        alert(`Errado! A resposta correta é: ${questions[currentQuestion].answer}`)
    }
  }
// Adicionando evento nos botões de respostas
  choiceElements.forEach((btn)=>{
    btn.addEventListener("click", checkAnswer) // passado a checagem das respostas
  }) 
// Adicionando evento no botão de próxima pergunta 
  nextButton.addEventListener("click", ()=>{
    if(!answerChosen){ // Se não foi escolhido uma resposta para a pergunta
        alert("Por favor, responda a pergunta!")
        return
    }
    currentQuestion++ // se a resposta for respondida, vai atualizar o currentQuestion(em qual pergunta está) para o índice mudar para a próxima pergunta
    if(currentQuestion < questions.length){ // se a pergunta atual for menor que as perguntas restantes
        loadQuestion() // vai carregar a pergunta
    }else{
        alert(`Fim de jogo!, você acertou ${score} de ${questions.length} perguntas.`)
        restartQuiz()
    }
    
  })

  function restartQuiz(){
    currentQuestion = 0
    score = 0
    wrong = 0
    scoreElement.innerText = `Pontuação: 0`
    WrongElement.innerText = `Errors: 0`
    loadQuestion() // vai iniciar a primeira pergunta
  }

  loadQuestion()