const quizData = [
    {
        question: "which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "what does CSS stand for?",
        a: "Central style sheets",
        b: "Cascading style sheets",
        c: "Cascading simple sheets",
        d: "Cars SUVs sailboats",
        correct: "b",
    },
    {
        question: "The HTML attribute used to define the inline styles is?",
        a: "style",
        b: "styles",
        c: "class",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "what does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Machine Language",
        c: "HyperText and links Markup Language",
        d: "None of these",
        correct: "a",
    },
    {
        question: "what year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    if (currentQuiz < quizData.length) {
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer = null;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer !== null) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                            <button onclick="location.reload()">Reload</button>`;
        }
    }
    
});

