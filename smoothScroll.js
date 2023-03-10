// *all sections w/ an defined ID
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
            let offset = window.innerHeight * 0.5;
            let adjustedHeight = scrollY + offset;
            let selectedSection;

            if (adjustedHeight < 987){
                // console.log("Home section present");
                // console.log("Y: " + scrollY + " offset: " + offset + " total: " + adjustedHeight);
                fixArrow(adjustedHeight);
                homePage.animate({opacity: 1}, 500);
            }
            else if(adjustedHeight >= 987 && adjustedHeight <= 1948){
                // console.log("About me section present");
                fixArrow(adjustedHeight);
                aboutMePage.animate({opacity: 1}, 500);
            }
            else if(adjustedHeight >= 1948 && adjustedHeight <= 2909){
                // console.log("Work section present");
                fixArrow(adjustedHeight);
                workPage.animate({opacity: 1}, 500);
            }
            else if(adjustedHeight > 2909){
                // console.log("Contact section present");
                fixArrow(adjustedHeight);
                contactPage.animate({opacity: 1}, 500);
            }
            _isLocked = false;
        }, 100);
    }
};

function fixArrow(height){
    // console.log(arrow);
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