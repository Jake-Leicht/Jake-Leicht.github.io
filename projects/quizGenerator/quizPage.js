import {collection} from "./index.js";
import {changePages} from "./index.js";

export var correctAnswersCount = 0;
export const COLLECTION_COUNT = collection.length;

$(document).ready(function(){
    let container = $(".answer-container");
    let box = $(".answer-box");
    let nextBtn = $(".next-btn");
    let answerPick;
    const ANSWER_CONTAINER_COUNT = container.children().length;
    var questionIndex = 0;
    var questionCount = 1;
    var _selectionTime = true;
    let nextCount = 0;
    let initialLoad = true;

    if(initialLoad === true){
        initialLoad = false;
        loadQuestion();
    }

    function loadQuestion(){
        $("#question-txt").html(collection[questionIndex].question);
        $(".question-count").html("Question: " + questionCount 
            + "/" + COLLECTION_COUNT);

        let i = 0;
        for(i = 0; i < ANSWER_CONTAINER_COUNT; i++){
            let selected = container.children().children("button")[i];
            selected.innerHTML = collection[questionIndex].option[i];
        }
        resetBox();
    }

    $(".back-btn").click(function(){
        changePages("./index.html");
    });

    box.click(function(){
        if(_selectionTime === true){
            resetBox();
            $(this).css({"border": "2px solid var(--outline)",
            "background-color": "var(--standOutBack)"});
            $(this).children("span").css("border-right", "2px solid var(--outline)");
            answerPick = $(this);
        }
    });

    nextBtn.click(function(){
        if(answerPick !== undefined){
            _selectionTime = false;
            nextCount++;
            if(questionCount === COLLECTION_COUNT){
                if(_isCorrect(answerPick) === true){
                    correctAnswersCount++;
                }
                localStorage.setItem("correctAnswers", correctAnswersCount);
                changePages("./review.html");
            }
            if(nextCount === 2){
                questionIndex++;
                questionCount++;
                _selectionTime = true;
                nextCount = 0;
                loadQuestion();
            }
            else if(_isCorrect(answerPick) === true){
                correctAnswersCount++;
                answerPick.css({
                    "border": "2px solid var(--correct)",
                    "color": "var(--correct)"
                });
                answerPick.children("span").css("border-right", "2px solid var(--correct)");
            }
            else{
                showAnswer();
            }
        }
    });

    function _isCorrect(answer){
        if (answer.index() === collection[questionIndex].answer - 1){
            return true;
        }
    }

    function showAnswer(){
        box.css({
                "border": "2px solid var(--wrong)",
                "color": "var(--wrong)"
            });
        let index = collection[questionIndex].answer - 1;
        $(container.children()[index]).css({
                "border": "2px solid var(--correct)",
                "color": "var(--correct)"
            });
    }

    function resetBox(){
        console.log("reset called()");
        box.css({
                "border": "2px solid var(--standOut)",
                "color": "black",
                "background-color": "transparent"
            });
        box.children("span").css("border-right", "2px solid var(--standOut)");
    }
});