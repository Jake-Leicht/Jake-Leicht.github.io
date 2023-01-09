import {movie} from "./movieSelection.js";
export const movieCover = $(".group");

$(document).ready(function(){
    let j = 0;

    for(let i = 0; i < movieCover.length; i++){
        // ? Assign class
        movieCover[i].classList.add(movie[j].className);

        // ? Detect class
        if(movieCover[i].classList.contains("peakyBlinders")){
            movieCover[i].style.backgroundImage = movie[0].image;
        }
        else if(movieCover[i].classList.contains("bojackHorseman")){
            movieCover[i].style.backgroundImage = movie[1].image;
        }
        else if(movieCover[i].classList.contains("umbrellaAcademy")){
            movieCover[i].style.backgroundImage = movie[2].image;
        }

        // ? movie counter/reset
        if (j === movie.length - 1){
            j = 0;
        }
        else{
            j++;
        }
    }

    // *Calls on page load
    initialHeaderSet();

    function initialHeaderSet(){
        setHeader(movie[0]);
    }

    function setHeader(movie){
        $(".filmType").html(movie.filmType);
        $(".title").html(movie.title);
        $(".description").html(movie.description);
        $(".rating").html(movie.rating);
        $(".releaseYear").html(movie.releaseYear);
        $(".movieRating").html(movie.movieRating);
        $(".movieDuration").html(movie.movieDuration);
        $(".header-image").css("background-image", movie.image);
    }

    movieCover.hover(function(){
        if($(this).hasClass("peakyBlinders")){
            setHeader(movie[0]);
        }
        else if($(this).hasClass("bojackHorseman")){
            setHeader(movie[1]);
        }
        else if($(this).hasClass("umbrellaAcademy")){
            setHeader(movie[2]);
        }
    });
});