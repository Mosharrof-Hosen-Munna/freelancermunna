$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
    })
    // menubar styleMedia
    $(".menu-bar").click(function() {
        $('.navbar .menu').toggleClass("active");
        
    })
    $(".menu-bar2").click(function() {
        $('.navbar2 .menu-skills').toggleClass("active");
        
    })
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    });
    $('.scroll-up-btn').click(function() {
        $("html").animate({scrollTop:0})
    });

    $(".contact .right form .button").click(function() {
        alert("We are not allow any messsage from this site")
    })
    var typed = new Typed('.typing', {
        strings: ["Freelancer","Developer","Youtuber","Designer","Blogger"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
      });
      
    var typed = new Typed('.typing2', {
        strings: ["Freelancer","Developer","Youtuber","Designer","Blogger"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
      });

    
    // carousel sript start
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:false,
            }
        }

    });

// skills page script
    
// typing script


   
   

    
})