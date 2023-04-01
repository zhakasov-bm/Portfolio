$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        $('a[href^="#"]').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.header').addClass("sticky");
        }else{
            $('.header').removeClass("sticky");
            $('.menu a[href^="#"]').removeClass('active'); 
        }
    });

    $('.menu-btn').click(function(){
        $('.header .menu').toggleClass("active-btn");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Student", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

function load(){
    $(".text-1").animate({opacity: '1'}, 1000);
    $(".text-2").animate({opacity: '1'}, 3000);
    $(".text-3").animate({opacity: '1'}, 5000);
    $(".scroll-down").animate({opacity: '1'}, 5000);
}

