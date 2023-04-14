const quizData = [
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        
        correct: "a",
    },
    {
        question: "What is the highest mountain in the world?",
        a: "Everest",  
        b: "K2",
        c: "Kilimanjaro",

        correct: "a",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Pacific Ocean", 

        correct: "c",
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Saturn",
        b: "Jupiter",  
        c: "Mars",

        correct: "b",
    },
    {
        question: "What is the currency of Japan?",
        a: "Euro",
        b: "Dollar",
        c: "Yen",  
        
        correct: "c",
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
  
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `
                <h2>You got ${score}/${quizData.length} out of 5</h2>
                <button onclick="location.reload()">Attempt Quiz Again</button>
            `
        }
    }
})
