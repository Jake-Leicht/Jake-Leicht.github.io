$(document).ready(function(){
    const asideSocial = $(".asideSocial");
    const socialElement = $(".asideSocial-item");

    const highlight = $(".highlight");
    highlight.hide();
    let _isOffScreen = true;
    let sliderSpeed = 400;

    asideSocial.hover(function(){
        socialElement.hover(function(){
            if(_isOffScreen === true){
                sliderSpeed = 400;
            }
            else{
                sliderSpeed = 100;
            }
            highlight.show();
            if(window.innerWidth >= 767){
                switch($(this).index()){
                    case 0:
                        slider($(this), 275);
                        break;
                    case 1:
                        slider($(this), 209);
                        break;
                    case 2:
                        slider($(this), 143);
                        break;
                    case 3:
                        slider($(this), 77);
                        break;
                }
            }
            else{
                switch($(this).index()){
                    case 0:
                        slider($(this), 235);
                        break;
                    case 1:
                        slider($(this), 180);
                        break;
                    case 2:
                        slider($(this), 125);
                        break;
                    case 3:
                        slider($(this), 72);
                        break;
                }
            }
            _isOffScreen = false;
        }, function(){
            $(this).removeClass("glow");
        });
    }, function(){
        _isOffScreen = true;
        highlight.animate({bottom: "-67px"}, 400, function(){
            highlight.hide();
        });
    });

    function slider(element, input){
        highlight.animate({bottom: input + "px"}, sliderSpeed);
        element.addClass("glow");
    }
});