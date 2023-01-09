/*Initial Load*/
$("body").removeClass("preload");

const card = $(".workCard");
var hoverCount = 0;

card.hover(function(){
    if(window.innerWidth >= 767){
        hoverCount++;
        // console.log("hover: " + hoverCount);
        let image = $(this).children("img");
        let caption = $(this).children("figcaption");

        if(hoverCount === 1){
            $(this).addClass("animate");

            caption.delay("slow").fadeIn();
            card.not(this).css("opacity", "0.3");

            (this).addEventListener("mousemove", function(event){
                let rect = event.target.getBoundingClientRect();
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;

                if(x >= ((this).offsetWidth)){
                    image.attr("src", idCheck(this.id)[1]);
                }
                else{
                    image.attr("src", idCheck(this.id)[2]);
                }
            });
            
            let timeOut = setTimeout(function(){
                console.log("timeout over");
                hoverCount = 0;
                $(this).removeClass("animate");
        }, 500);
        }
    }
}, function(){
    let image = $(this).children("img");
    let caption = $(this).children("figcaption");

    image.attr("src", idCheck(this.id)[0]);
    caption.delay("fast").fadeOut();
    card.css("opacity", "1.0");
});

card.click(function(){
    switch($(this).attr("id")){
        case "squabbleClone":
            window.location.href = "./projects/squabbleClone/index.html";
            break;
        case "netflixClone":
            window.location.href = "./projects/netflixClone/netflixClone.html";
            break;
        case "twinPeaksQuiz":
            window.location.href = "./projects/quizGenerator/index.html";
    }
});

function idCheck(id){
    let imageSrc = [];

    switch(id){
        case "squabbleClone":
            imageSrc = ["./images/squabble-favicon.jpeg",
            "./images/Web capture_13-11-2022_192620_127.0.0.1.jpeg",
            "./images/Web capture_13-11-2022_19260_127.0.0.1.jpeg"];
            break;
        case "netflixClone":
            imageSrc = ["./images/OIP (19).jpg",
            "./images/Web capture_14-11-2022_13210_127.0.0.1.jpeg",
            "./images/Web capture_14-11-2022_132154_127.0.0.1.jpeg"];
            break;
        case "react-notes-app":
            imageSrc = ["./images/Web capture_2-1-2023_142813_localhost.jpeg",
            "./images/Web capture_2-1-2023_14267_localhost.jpeg",
            "./images/Web capture_2-1-2023_142524_localhost.jpeg"];
            break;
        case "react-expense-budget-app":
            imageSrc = ["./images/Web capture_2-1-2023_143257_localhost.jpeg",
            "./images/Web capture_2-1-2023_14310_localhost.jpeg",
            "./images/Web capture_2-1-2023_143159_localhost.jpeg"];
            break;
        case "twinPeaksQuiz":
            imageSrc = ["./images/Web capture_8-1-2023_17210_127.0.0.1.jpeg",
            "./images/Web capture_8-1-2023_17230_127.0.0.1.jpeg",
            "./images/Web capture_8-1-2023_17254_127.0.0.1.jpeg"];
    }

    return imageSrc;
}