const options=document.querySelector(".options").children;
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];

const questions=[
    {
        q:"What is the full meaning of HTML?",
        options:["Hypertext Machine Language", "Hypertext Markup Language", "High Text Machine Language", "Highper Text Markup Language"],
        answer:1
    },
    {
        q:"Which year did Nigeria gain independence?",
        options:[1906,1966, 1960, 1963],
        answer:2
    },
    {
        q:"Which year did Nigeria first become a republic?",
        options:[1906, 1966, 1960, 1963],
        answer:3
    },
    {
        q:"What is the Twitter handle of this program?",
        options: ["@stardotng", "@startdotng","@start.ng", "@startng"],
        answer:1
    },
    {
        q:"What is the longest word in any English dictionaries?",
        options: ["pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonoultramiocroscocpicsilicvolcanoconiosis", "pneumonounltramuicroscopicsoilicovolcanoconiosis","pneumonoultramicroscopicosilicovolcanoyconiosis"],
        answer:0
    }
]
//set question and option and answer
totalQuestionSpan.innerHTML=questions.length;
function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
        op1.innerHTML=questions[questionIndex].options[0];
        op2.innerHTML=questions[questionIndex].options[1];
        op3.innerHTML=questions[questionIndex].options[2];
        op4.innerHTML=questions[questionIndex].options[3];
        index++;
}
function check(element){
    if (element.id==questions[questionIndex].answer){
       // element.classList.add("correct");
        //score++;
}
else{
        element.classList.add("wrong");
    }  
    disabledOptions()
} 

function disabledOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
        if (options[i].id==questions[questionIndex].answer){
            options[i].classList.add("correct");
        }
    }
}
function enableOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.remove("disabled","correct","wrong");
        
    }
    
}
function Validate(){
    if  (! options[0].classList.contains("disabled")){
        alert("Pick one answer na!!!")
    }
    else{
        enableOptions();
        randomQuestion();
    }
}
function next(){
    Validate();
}

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0; 
        if (index==questions.lenth){
        quizOver();
    } 
    else{
        if (myArray.length>0){
            for(let i=0; i<myArray.length; i++){
                if(myArray[i]==randomNumber){
                    hitDuplicate=1;
                    break;
                }
             }
             if (hitDuplicate==1){
                 randomQuestion();
             }
             else {
                questionIndex=randomNumber;
                load();
                myArr.push(questionIndex);
             }
        }
        if (myArray.length==0){
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
        }
        myArray.push(randomNumber);
   
     }
}
function quizOver(){
 document.querySelector(".quiz-over").classList.add("show");
 correctAnswerSpan.innerHTML=score;
 totalQuestionSpan2.innerHTML=question.length;
}
function tryAgain(){
    window.location.reload();
}
window.onload=function(){
    randomQuestion();
}