const quizData = [
    {
        question: "How many days do we have in a week??",
        a: "10",
        b: "8",
        c: "6",
        d: "7",
        correct: "d",
    },
    {
        question: "How many letters are there in the English alphabet?",
        a: "29",
        b: "26",
        c: "30",
        d: "25",
        correct: "b",
    },
    {
        question: " How many sides are there in a triangle?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "a",
    },
    {
        question: "Which month of the year has the least number of days?",
        a: "december",
        b: "february",
        c: "august",
        d: "march",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerWe = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadques()

function loadques() {

    deselect()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselect() {
    answerWe.forEach(answerEl => answerEl.checked = false)
}

function Selected() {
    let answer
    answerWe.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = Selected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadques()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})