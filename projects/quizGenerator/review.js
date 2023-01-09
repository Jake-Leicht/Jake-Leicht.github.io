// import {correctAnswersCount} from "./quizPage.js";
import {COLLECTION_COUNT} from "./quizPage.js";
import { answerChart, changePages } from "./index.js";

$(document).ready(function(){

    let i = 0;
    var correctAnswersCount = localStorage.getItem("correctAnswers");
    let percentage = (correctAnswersCount / COLLECTION_COUNT) * 100;
    let phrase;

    $(".return-btn").click(function(){
        changePages("./index.html");
    })

    $(".percentage").html(percentage + "%");
    $(".questions-total").html(correctAnswersCount + "/" + 
    COLLECTION_COUNT + " Questions Correct");

    for (i = COLLECTION_COUNT; i >= 0; i--){
        if(percentage >= answerChart[i].correct){
            phrase = answerChart[i].phrase;
        }
    }

    $(".phrase").html(phrase);
});