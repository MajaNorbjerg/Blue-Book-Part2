let textArticle = document.querySelectorAll(".textArticle")[0];

let question = [];
let answer = [];

function init(){
addAnswers();
writeTextToDOM();
}

init();

function addAnswers(){

question.push("Age");
answer.push("23");

question.push("Previous education");
answer.push("Multimediadesign at EAAA");

question.push("The current background on my computer screen");
answer.push("A picture of me and some highschool friends.");

question.push("The previous background on my computer screen");
answer.push("A picture of a duck.");

question.push("Where do I live – how far from the Academy");
answer.push("Aarhus C, 4,5 km from EAAA.");

question.push("Siblings");
answer.push("1 amazing smaller sister.");

question.push("Cousins");
answer.push("12 pieces");

question.push("What can I do today that I were not capable of a year ago");
answer.push("I can make a badass website and use Javascript.");

question.push("If I had not chosen to study web development I would then have chosen");
answer.push("I would have chosen Digital concept development on EAAA.");

question.push("Why did I choose to study web development");
answer.push("I looked on the webpage for web development and found all the subjects very interesting.");

question.push("If I got a gift certificate for 5.000 kr. And it had to be used today, but I could choose any shop to use it in I would buy");
answer.push("A new TV that fits my new TV stand.");

question.push("My definition of being wealthy and why");
answer.push("That you can buy everything you want, at any time. Also to have something to spare after that.");
}


function writeTextToDOM(){
    textArticle.innerHTML = "";
    for (let i = 0; i < question.length; i++) {
            textArticle.innerHTML += /*html*/ `
    <h2><strong>${question[i]}:</strong> ${answer[i]}</h2> 
    `}
}




