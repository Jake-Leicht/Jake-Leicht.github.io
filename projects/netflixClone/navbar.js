import {setMovieVars} from "./movieSelection.js";
import {movie} from "./movieSelection.js";
export {filterPage};

$(document).ready(function(){
    /* 
    ? Variables*/
    var navText = $(".navbar-item-text");
    var navItem = $(".navbar-item");
    var navItemIcon = $(".nav-icon");

    /* 
    ? Hidden values*/
    navText.hide();

    navItem.hover(function(){
        navItem.css({
            "width": "300px",
            "text-align": "left"});
        navText.show();
        navText.css({"margin-left": "20px"});
        navItemIcon.css("margin-left", "25px");
        $(this).css({"color":"white"});
        $(this).children(navItemIcon).css({
            "padding-bottom": "4px", 
            "color": "white"});
    }, function(){
        navItem.css({
            "width": "80px",
            "text-align": "center"});
        navText.hide();
        navItemIcon.css("margin-left", "0px");
        $(this).css("color", "gray");
        $(this).children(navText).css({
            "color": "gray"});
    });
});

/* 
    ? Navbar Switching Pages*/
let loadPage = "";
let value = 0;
    
function changePages(loadPage){
    location.replace(loadPage);
}

function filterPage(){
    loadPage ="./filtered.html";
    changePages(loadPage);
}

function homePage(){
    loadPage = "./netflixClone.html";
    changePages(loadPage);
}

$("#search-btn").click(function(){
    loadPage = "./search.html";
    changePages(loadPage);
});

$("#home-btn").click(function(){
    homePage();
});

$(".back-btn").click(function(){
    homePage();
});

$("#surpriseMe-btn").click(function(){
    $.getScript("./movieSelection.js", function(){
        console.log("clicked surprise me btn");
        let rand = Math.floor(Math.random() * 3);
        console.log(rand);
        setMovieVars(movie[rand]);
        let loadPage = "./movieSelection.html";
        changePages(loadPage);
    })
});

$("#newsPopular-btn").click(function(){
    filterPage();
});

$("#tvShows-btn").click(function(){
    filterPage();
})

$("#movies-btn").click(function(){
    filterPage();
})

$("#categories-btn").click(function(){
    loadPage = "./categories.html";
    changePages(loadPage);
});

$("#myList-btn").click(function(){
    filterPage();
});