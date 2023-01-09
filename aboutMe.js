/*Initial Load*/
$("body").removeClass("preload");

const tab = $(".header-tab");
const textTab = $(".content-tab");
const selectionBar = $(".header-selection-bar");
const emphasizeText = $(".emphasize");
var tabClickCount = 0;

textTab.not(textTab.eq(0)).hide();

tab.click(function(){
    tabClickCount++;
    let childNum = $(this).index();

    if(tabClickCount === 1){
        tab.removeClass("active");
        $(this).addClass("active");

        //todo: Fade out bugs (being called multiple times)
        textTab.fadeOut(function(){
            console.log("fade out called");
            emphasizeText.removeClass("emphasized");
                textTab.eq(childNum).delay(400).fadeIn(function(){
                    emphasizeText.addClass("emphasized");
            });
        });

        switch(childNum){
            case 0:
                selectionBar.css("margin-left", "calc((5%) + ((var(--tabWidth) / 4) * 1) + ((var(--tabWidth)) * 0) + (var(--tabWidth)) * 0.165)");
                break;
            case 1:
                selectionBar.css("margin-left", "calc((5%) + ((var(--tabWidth) / 4) * 2) + ((var(--tabWidth)) * 1) + (var(--tabWidth)) * 0.165)");
                break;
            case 2:
                selectionBar.css("margin-left", "calc((5%) + ((var(--tabWidth) / 4) * 3) + ((var(--tabWidth)) * 2) + (var(--tabWidth)) * 0.165)");
                break;
        }
        let timeOut = setTimeout(function(){
            console.log("timeout over");
            tabClickCount = 0;
        }, 800);
    }
});