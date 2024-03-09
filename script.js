const questions =[
    {
        question: "Which is the largest animal in the  world?",
        answers:[
            {text:"shark", correct: false},
            {text:"Blue Whale", correct: true},
            {text:"elephant", correct: false},
            {text:"Giraffe", correct: false}
        ]
    },
    {
        question: "What company makes the Xperia model of smartphone?",
        answers:[
            {text:"Samsung", correct: false},
            {text:"Nokia ", correct: false},
            {text:"Sony", correct: true},
            {text:"Apple", correct: false}
        ]
    },
    {
        question: " Which city is home to the Brandenburg Gate?",
        answers:[
            {text:"shViennaark", correct: false},
            {text:"Zurich", correct: false},
            {text:"Delhi", correct: false},
            {text:"Berlin", correct: true}
        ]
    },
    {
        question: "Who is generally considered the inventor of the motor car??",
        answers:[
            {text:"Karl Benz", correct: true},
            {text:"Henry Ford", correct: false},
            {text:"Henry M. Leland", correct: false},
            {text:"Robert Plant", correct: false}
        ]
    }
    
];
const questionElemnt=document.getElementById("question")
const answerButtons=document.getElementById("answer-Buttons")
const nxtButton=document.getElementById("nxtBtn")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nxtButton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion=questions[currentQuestionIndex];
    let qnsNo=currentQuestionIndex+1;
    questionElemnt.innerHTML=qnsNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
};

function resetState(){
    nxtButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("Correct");
        score++;
    }
    else{
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("Correct")
        }
        button.disabled=true
    });
    nxtButton.style.display="block";
}
function showScore(){
    resetState()
    questionElemnt.innerHTML=`You Scored ${score} out of ${questions.length}!!`
    nxtButton.innerHTML="Play Again"
    nxtButton.style.display= "block"
}
function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }
    else{
        showScore();
    }
}

nxtButton.addEventListener("click", ()=>{
    if (currentQuestionIndex<questions.length){
        handleNextBtn()
    }
    else{
        startQuiz()
    }
})
startQuiz();