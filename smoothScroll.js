// *all sections w/ a defined ID
const sections = document.querySelectorAll(".page-section");
var _isLocked = false;
const arrow = $(".indicator");
const menuItems = $(".menu-items > ul");
const checkbox = $("#nav-container-checkbox");
const returnToTopBtn = $("#returnToTop-btn");

var homePage = $("#home").css("opacity", "0");
var aboutMePage = $("#about").css("opacity", "0");
var workPage = $("#work").css("opacity", "0");
var contactPage = $("#page-section-contact").css("opacity", "0");

// ? Initial Loading section
homePage.animate({opacity: 1}, 200);

sections.forEach(element => {
    window.addEventListener("scroll", 
    () => runOnScroll(element), 
    { passive: true });
});

// todo: Adjust fade in measurements/speed
function runOnScroll(element) {
    if(_isLocked === false){
        _isLocked = true;
        setTimeout(function(){
            let scrollY = window.pageYOffset;
            let sectionTop = (element.getBoundingClientRect().top + window.pageYOffset) - 50;
            let offset = window.innerHeight * 0.6;
            let adjustedHeight = scrollY + offset;

            if (adjustedHeight < screen.availHeight){
                fixArrow(adjustedHeight);
                homePage.animate({opacity: 1}, 500);
            }
            else if(adjustedHeight >= screen.availHeight && adjustedHeight <= (screen.availHeight * 2)){
                fixArrow(adjustedHeight);
                aboutMePage.animate({opacity: 1}, 500);
            }
            else if(adjustedHeight >= (screen.availHeight * 2) && adjustedHeight <= (screen.availHeight * 3)){
                fixArrow(adjustedHeight);
                workPage.animate({opacity: 1}, 500);
            }
            else if(adjustedHeight > (screen.availHeight * 3)){
                fixArrow(adjustedHeight);
                contactPage.animate({opacity: 1}, 500);
            }
            _isLocked = false;
        }, 100);
    }
};

function fixArrow(height){
    if(height >= 2909){
        arrow.removeClass("indicator-down");
        arrow.addClass("indicator-up");
    }
    else{
        arrow.removeClass("indicator-up");
        arrow.addClass("indicator-down");
    }
}

menuItems.children().click(function(){
    console.log("called");
    let selectedSection = 0;
    switch($(this).attr("id")){
        case "menu-item-home":
            selectedSection = document.getElementById("home");
            scrollToSection(selectedSection);
            break;
        case "menu-item-about":
            selectedSection = document.getElementById("about");
            scrollToSection(selectedSection);
            break;
        case "menu-item-work":
            selectedSection = document.getElementById("work");
            scrollToSection(selectedSection);
            break;
        case "menu-item-contact":
            selectedSection = document.getElementById("page-section-contact");
            scrollToSection(selectedSection);
            break;
    }
});

function scrollToSection(section){
    checkbox.prop("checked", false);
    console.log("scrollToSection() called");
    setTimeout(function(){
        section.scrollIntoView(true);
    }, 100);
}

returnToTopBtn.click(function(){
    console.log("btn clicked");
    let selectedSection = document.getElementById("home");
    scrollToSection(selectedSection);
});