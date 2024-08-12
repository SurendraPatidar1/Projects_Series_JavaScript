// Dynamic Render --> questions and Options.
// Chech options is selected or not 
//                --> if No - Warning
//                --> if yes - score nikalo
// Total score after Quiz ..


const quiz = [
{
    question:"Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    ans1text:"Position",
    ans2text:"Window",
    ans3text:"Standard",
    ans4text:"Location",
    answer:"Window",
},
{
    question: "Which of the following scoping type does JavaScript use?",
    ans1text: "Sequential",
    ans2text: "Segmental",
    ans3text: "Standard",
    ans4text: "Lexical",
    answer:   "Lexical",
},
{
    question:"Which of the following methods/operation does javascript use instead of == and !=?",
    ans1text:" JavaScript uses equalto()",
    ans2text:"JavaScript uses equals() and notequals() instead",
    ans3text:"JavaScript uses bitwise checking",
    ans4text:"JavaScript uses === and !== instead",
    answer:"JavaScript uses === and !== instead",
},
{
    question:"Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    ans1text:"Position",
    ans2text:"Window",
    ans3text:"Standard",
    ans4text:"Location",
    answer:"Window",
}
];

const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent);
const option1 = document.getElementById("text_option1");
const option2 = document.getElementById("text_option2");
const option3 = document.getElementById("text_option3");
const option4 = document.getElementById("text_option4");
const answerElement = document.querySelectorAll(".answer");
console.log(option1);
console.log(option2);
console.log(option3);
console.log(option4);
console.log(option1.textContent);
console.log(option2.textContent);
console.log(option3.textContent);
console.log(option4.textContent);

const submit = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option1.textContent = quiz[currentQuestion].ans1text;
option2.textContent = quiz[currentQuestion].ans2text;
option3.textContent = quiz[currentQuestion].ans3text;
option4.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click" , () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if(checkedAns === null){
        alert("Please select an answer");
    }
    else{
        if(checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer)
        {
            score++;
        }

        currentQuestion++;

        if(currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option1.textContent = quiz[currentQuestion].ans1text;
            option2.textContent = quiz[currentQuestion].ans2text;
            option3.textContent = quiz[currentQuestion].ans3text;
            option4.textContent = quiz[currentQuestion].ans4text;

            checkedAns.checked = false;
        }else{
            alert("Your Score is " +  score  + " out of " + quiz.length);
            location.reload();
        }
    }
})