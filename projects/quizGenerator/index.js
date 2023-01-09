export const collection = [{
    question: "How many seasons did 'Twin Peaks' run in the 90s?",   //* {string} w/ question
    option: ["1", "2", "3", "4"],                                   //* {array of strings} possible answers
    answer: 2                                                      //* index of answer
}, {question: "Where is Laura Palmers body found?",
    option: ["The woods", "Her house", "The Beach", "She's alive"],
    answer: 3},
    {question: "What is the name of the local brothel?",
    option: ["Cat's Eye Pub", "One-Eyed Jacks", "Red Curtain", "Slippery Eel"],
    answer: 2},
    {question: "What was Laura's drug of choice?",
    option: ["Cocaine", "Heroin", "Meth", "Crack"],
    answer: 1},
    {question: "What is Margaret Lanterman's nickname?",
    option: ["Bone Lady", "Log Lady", "Heart Lady", "Big Lady"],
    answer: 2}];


export const answerChart = [{
    correct: 100,
    phrase: "Well Done! You are a true 'Twin Peaks' fan! You out class them all!"},
    {correct: 80,
    phrase: "Nearly perfect; a crazed fan without the obsession indeed."},
    {correct: 60,
    phrase: "Adequate fan, you've seen but didn't truly see its greatness"},
    {correct: 40,
    phrase: "Calling yourself a fan seems like a stretch, doesn't it?"},
    {correct: 20,
    phrase: "Have you ever seen the show before?"},
    {correct: 0,
    phrase: "Statistically you were supposed to get one right? What happened??"}];


function changePages(page){
    location.replace(page)
};

export {changePages};