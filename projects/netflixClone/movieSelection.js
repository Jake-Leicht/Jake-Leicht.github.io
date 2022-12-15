/*
    console.log()
    ? Summary
    ! Error
    & console.log() (Outputs/logs)
    ^ params/function explanation
    * Notes
    ~ Purple
    todo Feature to add/edit
*/

//    ? Imports/Exports
import {movieCover} from "./netflixClone.js";
export default {movie};
export {imageList};
export {genreList};

// ? Class & Objects Holding movies
class Movie{
    constructor(title, description, rating, releaseYear, movieRating, movieDuration, filmType, director, cast, genre, image, className){
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.releaseYear = releaseYear;
        this.movieRating = movieRating;
        this.movieDuration = movieDuration;
        this.filmType = filmType;
        this.director = director;
        this.cast = cast;
        this.genre = genre;
        this.image = image;
        this.className = className;
    }
}

var genreList = ["Action", "Adventure", "Comedy", "Crime", "Documentaries", "Drama", "Historical", "Horror", "Musical", "Sci-Fi", 
                "War", "western", "Thriller", "Animation", "Adult-Animation", "Sports"];
                
var imageList = ["url(./images/PB.jpg)", "url(./images/BH.jpg)", "url(./images/UA.jpg)"];

export var movie = [new Movie("Peaky Blinders", "Peaky Blinders is a British crime drama Netflix TV series created by Steven Knight. Netflix had acquired the rights to air Peaky Blinders in U.S.A & around the world&#44 under the deal with Weinstein Company and Endemol",
            "100% Match", "2022", "<i class='fa-solid fa-r'></i>", "6 Seasons", "series", "Steven Knight", "Cillian Murphy Tom Hardy Helen McCrory", "Crime British Period-Piece", "url(./images/PB.jpg)", "peakyBlinders"),
            new Movie("Bojack Horseman", "Meet the most beloved sitcom horse of the &#39 90s 20 years later. He&#39;s a curmudgeon with a heart of...not quite gold...but something like gold. Copper?",
            "99% Match", "2020", "<i class='fa-solid fa-r'></i>", "6 Seasons", "series", "Raphael Bob-Waksberg", "Will Arnett Aaron Paul Amy Sedarie", "Sitcom Comedy Adult-Animation", "url(./images/BH.jpg)", "bojackHorseman"),
            new Movie("Umbrella Academy", "Reunited by their father&#39s death&#44 estranged siblings with extraordinary powers uncover shocking family secrets -- and a looming threat to humanity.",
            "98% Match", "2022", "PG-13", "3 Seasons", "series", "Steve Blackman", "Elliot Page Tom Hopper Aidan Gallagher", "Sci-Fi Comics", "url(./images/UA.jpg)", "umbrellaAcademy")];

function changePages(loadPage){
    location.replace(loadPage);
}
// ? Selecting Movie
movieCover.click(function(){
    console.log("movieCover clicked");
    selectedMovie($(this));
});

export function selectedMovie(movieLink){
    console.log("selectedMovie() called");
    let loadPage = "./movieSelection.html";

    if(movieLink.hasClass("peakyBlinders")){
        console.log("selectedMovie() > peakyBlinders");
        setMovieVars(movie[0]);
        changePages(loadPage);
    }
    else if(movieLink.hasClass("bojackHorseman")){
        setMovieVars(movie[1]);
        changePages(loadPage);
    }
    else if(movieLink.hasClass("umbrellaAcademy")){
        setMovieVars(movie[2]);
        changePages(loadPage);
    }
}

// ? Saving Movie info in local Storage

export function setMovieVars(movie){
    localStorage.setItem("title", movie.title);
    localStorage.setItem("description", movie.description);
    localStorage.setItem("rating", movie.rating);
    localStorage.setItem("releaseYear", movie.releaseYear);
    localStorage.setItem("movieRating", movie.movieRating);
    localStorage.setItem("movieDuration", movie.movieDuration);
    localStorage.setItem("filmType", movie.filmType);
    localStorage.setItem("director", movie.director);
    localStorage.setItem("cast", movie.cast);
    localStorage.setItem("genre", movie.genre);
    localStorage.setItem("image", movie.image);
    localStorage.setItem("className", movie.className);
}

// ?Setting Movie info from local Storage

export function fillPage() {
    console.log("fillPage()");
    $(".filmType").html(localStorage.getItem('filmType'));
    $(".title").html(localStorage.getItem('title'));
    $(".description").html(localStorage.getItem('description'));
    $(".rating").html(localStorage.getItem('rating'));
    $(".releaseYear").html(localStorage.getItem('releaseYear'));
    $(".movieRating").html(localStorage.getItem('movieRating'));
    $(".movieDuration").html(localStorage.getItem('movieDuration'));
    $(".img-container").css({"background-image": localStorage.getItem("image")});
    $(".director-input").html(localStorage.getItem("director"));
    $(".cast-input").html(localStorage.getItem("cast"));
    $(".genres-input").html(localStorage.getItem("genre"));
}