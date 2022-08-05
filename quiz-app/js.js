let d_text = document.getElementById('d_text')
let c_text = document.getElementById('c_text')
let b_text = document.getElementById('b_text')
let a_text = document.getElementById('a_text')
let question = document.getElementById('question')
let submit = document.getElementById('submit')
let choices = document.querySelectorAll('#quiz input')
let quiz = document.getElementById('quiz')


const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
    
];



let currentActiveQuestion =0


let renderNewQuestion = (Question) =>{

    d_text.innerHTML = Question.d
    c_text.innerHTML = Question.c
    b_text.innerHTML = Question.b
    a_text.innerHTML = Question.a
    question.innerHTML = Question.question
    
}

renderNewQuestion(quizData[currentActiveQuestion])


let score = 0

let newTest = ['hossien', 'alies', 'alaa', 'boshraa']


submit.addEventListener('click',e => {
    choices.forEach(choice => {
        if(choice.checked){
            if(choice.id === quizData[currentActiveQuestion].correct){
                score ++
                console.log('Congrats ...')
            }
            currentActiveQuestion++
            if(currentActiveQuestion < quizData.length ){
                renderNewQuestion(quizData[currentActiveQuestion])
                choice.checked = false
            }else{
                quiz.innerHTML = `
                ${(score===quizData.length) ? (
                    "<h2>Congrats you answer them all</h2>"
                ) : (
                    `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`
                )
                }


                ${
                    quizData.map(item => `<span>${item.question}</span>`).join(`<br/>`)
                }
                
                <button onclick="location.reload()">Reload</button>

                `
            }

        }
    })
})


