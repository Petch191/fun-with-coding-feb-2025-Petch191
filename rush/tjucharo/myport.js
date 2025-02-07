$(document).ready(function(){
    $("nav ul li a").click(function(e){
        e.preventDefault();
        let target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top -50
        }, 1000);
    });
}); 