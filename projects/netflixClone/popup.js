function popUp(element) {
    let popUp = element.querySelector("span");
    popUp.classList.add("show");
}

function popUpClose(element){
    let popUp = element.querySelector("span");
    popUp.classList.remove("show");
}