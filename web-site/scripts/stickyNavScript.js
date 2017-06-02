$(document).ready(function () {

    //remove title from .current link
    $(".current").removeAttr('title');

    // stickyNav
    $(window).scroll(function() {
        var y = $(window).scrollTop();

        if (y > 10) {
            $("header").css({
                "height": "29",
                "border-top": "none",
                "position": "fixed",
                "top": "0",
                "transition": "all .5s linear",
                "z-index": "1"
            });
            $("nav").css({
                "box-shadow": "0 2px 10px #666",
                "background": "none"
            });
            $(".logo").css({
                "background": "url('images/parallaxLogoSm.png') no-repeat",
                "top": "8px",
                "left": "10px",
                "transition": "all .1s linear",
                "z-index": "1"
            });

        } else {
            $("header").css({
                "height": "150px",
                "border-top": "11px solid #ef3e36",
                "position": "relative",
                "transition": "all .5s linear"
            });
            $("nav").css({
                "box-shadow": "none",
                "background": "none"
            });
            $(".logo").css({
                "background": "url('images/parallaxLogo.png') no-repeat",
                "top": "21px",
                "left": "57px",
                "transition": "all .1s linear"
            });
        }
    });
});
