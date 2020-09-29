$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });
});
