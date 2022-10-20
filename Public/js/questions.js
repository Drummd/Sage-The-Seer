///after sign in they are brought these questions before there prophecy

const { User } = require("../../Models");

//const Prophecy = require('./prophecy');
let index = 0;
let questions = [
    {
        question: "What do you feel to be your spirit animal?",
        choices: ["forward", "left", "right", "backward"]
    },
    {
        question: "Visualize yourself holding a weapon... What is your weapon of choice.",
        choices: ["forward", "left", "right", "backward"]
    },
    {
        questions: "Visualize a crossroads.... Which direction will you take?",
        choices: ["forward", "left", "right", "backward"]
    },
    {
        questions: "What time of day do you feel most at peace?",
        choices: ["morning", "afternoon", "evening", "night"]
    },
    //the only question we need results from our database
    {
        questions: "Emotions hold a large core of self doubt and self love... What emotion do you hold most.",
        choices: ["angry", "sad", "afraid", "happy", "excited"]
    }
]
//rendered in controller
function checkButton() {
    index++
    displayQuestion()
    if(index === questions[questions.length-1]) {

        this.dataset.value
    }
}

function displayQuestion() {
    var el = document.getElementById("questions")
    el.textContent = questions[index].question
   for(var i = 0; i < questions[index].choices.length; i++) {
    var button = document.createElement('button')
    button.setAttribute("data-value", questions[index].choices[i] )
    button.textContent = questions[index].choices[i]
    button.addEventListener("click", checkButton)
    "div".appendChild(button)

   }
}    
async function prophecyChoice(event) {
    const prophecyChoice = event.target.innerHTML;


    const response = await fetch(`/api/prophecy/${prophecyChoice}`, {
        method: 'GET',
        body: JSON.stringify({
            prophecy: prophecyChoice
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('Prophecy completed')
        //  document.location.replace('/prophecy');

    } else {
        alert(response.statusText);
    }



}

function 

//function to display questions
//click event for the last question, trigger prophecyChoice func