function navibarUtil() {
    var mouseY = 0;
    document.addEventListener('mousemove', function(e){mouseY=e.clientY;});
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            navibarThresh = 60,
            header = document.getElementById("navibar"),
            ball = document.getElementById("naviball"),
            item = document.getElementById("naviitem");
        if ((distanceY > navibarThresh)) {
            if (header.className == "large") {
                header.className = "small";
                ball.className = "showball";
                item.className = "itemsmall";
                setTimeout(function () {
                    if (window.pageYOffset || document.documentElement.scrollTop > 60) {
                        if (mouseY > 51){header.className += " hide";}
                    }else{
                        header.className = "large"; 
                        ball.className = "";
                        item.className = "itemlarge";
                    }
                },1000);
            }
        } else {
            if(header.className == "small hide") header.className = "reset";
            setTimeout(function(){
                    if (window.pageYOffset || document.documentElement.scrollTop <= navibarThresh){
                                header.className = "large";
                                item.className = "itemlarge";
                                ball.className = "";
                    }
            },0001);  
        }
    });
}
window.onload = navibarUtil();


$(document).ready(function(){
    $('.modal').hide();
    
    var everything_resize = function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $('.sections').css({'top':windowWidth*0.56});
        $('#nav_padding_content').css({'height':windowWidth*0.56});
        $('#nav_padding_screen').css({'height':windowWidth*0.56});
        $('.inkdrop').css({'height':windowWidth*0.37});
        $('#siteinfo').css({'top':0});
        $('#siteinfo').css({'top':$(document).height()});
        $('#nav_padding_screen_doodle').css({'font-size':$('#nav_padding_screen_doodle').width()/16});
        $('.blueprint_doodle').css({'font-size':$('#nav_padding_screen_doodle').width()/13});
        $('.c2').css({'font-size':$('#nav_padding_screen_doodle').width()/37});
        
        canvas.width = $("#aboutSection").innerWidth();
        canvas.height = $("#aboutSection").innerHeight();
    }
    everything_resize();
    $( window ).resize(function() {
        everything_resize();
    });
    
    /*console.log($(document).scrollTop());*/
    $("#naviball, #navibar").on("mouseenter", 
        function(){if ($(document).scrollTop() >= 50){$("#navibar").attr('class',"small");}
    });
    $("#naviball, #navibar").on("mouseleave", 
        function(){if ($(document).scrollTop() >= 50){$("#navibar").addClass("hide");}
    });
    
    var rotation = 0,
        scrollstat = 0;
    $( window ).scroll(function() {
        //if (scrollstat > $(document).scrollTop())
        {rotation += 120*Math.round(($(document).scrollTop()-scrollstat)/50);}
        //else {rotation -= 120;}
        
        $(".sketchlist").css({
            "-webkit-transform": "rotateY("+rotation+"deg)",
            "-moz-transform": "rotateY("+rotation+"deg)",
            "-o-transform": "rotateY("+rotation+"deg)",
            "transform": "rotateY("+rotation+"deg)"
        });
        /*console.log("ds"+$(document).scrollTop());
        console.log("sp"+$('#sketchSection').offset().top);
        console.log("ap"+$('#aboutSection').offset().top);*/
        if ($(document).scrollTop() < $('#sketchSection').offset().top) 
            {$("#section1").css("font-size", "150%");
             $('#navilineInd').css({left:0+'%'});
            $("#section1").text("Welcome");}
        if ($(document).scrollTop() >= $('#sketchSection').offset().top)
            {$("#section1").css("font-size", "100%");
            $("#section1").text("back to top");}
        if ($(document).scrollTop() >= $('#sketchSection').offset().top && $(document).scrollTop() < $('#aboutSection').offset().top) 
            {$("#section4").css("font-size", "150%");
            $('#navilineInd').css({left:25+'%'});}
        if ($(document).scrollTop() < $('#sketchSection').offset().top || $(document).scrollTop() >= $('#aboutSection').offset().top)
            {$("#section4").css("font-size", "100%");}
        if ($(document).scrollTop() >= $('#aboutSection').offset().top && $(document).scrollTop() < $('#contactSection').offset().top) 
            {$("#section3").css("font-size", "150%");
            $('#navilineInd').css({left:50+'%'});}
        if ($(document).scrollTop() < $('#aboutSection').offset().top || $(document).scrollTop() >= $('#contactSection').offset().top)
            {$("#section3").css("font-size", "100%");}
        if (($(document).scrollTop() + $(window).height()) >= $('#aboutSection').offset().top) 
            {$("#inkdrop").attr('class',"inkdropped");}
        if (($(document).scrollTop() + $(window).height()) < $('#aboutSection').offset().top)
            {$("#inkdrop").attr('class',"");}
        /*if (($(document).scrollTop() + 100) >= $('#aboutSection').offset().top && $(document).scrollTop() < $('#contactSection').offset().top) 
            {$("#section3").css("font-size", "200%");}
        if (($(document).scrollTop() + 100) < $('#aboutSection').offset().top || $(document).scrollTop() >= $('#contactSection').offset().top)
            {$("#section3").css("font-size", "100%");}*/
        if ($(document).scrollTop() >= $('#contactSection').offset().top) 
            {$("#section2").css("font-size", "150%");
            $('#navilineInd').css({left:75+'%'});}
        if ($(document).scrollTop() < $('#contactSection').offset().top)
            {$("#section2").css("font-size", "100%");}
        
        if (($(document).scrollTop()-50 >= $('#contactSection').offset().top) && ($(document).scrollTop() > scrollstat))
            {$('.modal').show(200);}
        
        scrollstat = $(document).scrollTop();
    });
    
    $("#section4").click(function() {$('html, body').animate({scrollTop: $("#sketchSection").offset().top+1}, 1000);});
    $("#section3").click(function() {$('html, body').animate({scrollTop: $("#aboutSection").offset().top+1}, 1000);});
    $("#section2").click(function() {$('html, body').animate({scrollTop: $("#contactSection").offset().top+1}, 1000);});
    $("#section1").click(function() {$('html, body').animate({scrollTop: 0}, 1000);});
    $(".fa-arrow-circle-o-down").click(function() {$('html, body').animate({scrollTop: $("#sketchSection").offset().top+1}, 1000);});
    setInterval(function(){
        $(".fa").toggleClass('glow');
    }, 600);
    
    
    /*$("#section3").click(function() {$('.modal').show(200);});
    $("#aboutSection").click(function() {$('.modal').show(200);});*/
    $(".fa-times-circle").click(function() {$('.modal').hide(200);});
    
    
    $('.fa-twitter').click(function(){window.open('https://www.twitter.com', '', '');});
    $('.fa-github').click(function(){window.open('https://github.com/Code-Omega', '', '');});
    $('.fa-linkedin').click(function(){window.open('https://www.linkedin.com/in/zehuali/en', '', '');});

    /*$("#section4").click(function() {$('html, body').animate({scrollTop: $("#sketchSection").offset().top}, 2000);});*/
    
    /*$(".blueprint").on("mouseenter", function(){
        if(window.mouseXPos < $(window).width()*0.3){
               rotation = rotation - 60;
                      $(".sketchlist").css({
                            "-webkit-transform": "rotateY("+rotation+"deg)",
                            "-moz-transform": "rotateY("+rotation+"deg)",
                            "-o-transform": "rotateY("+rotation+"deg)",
                            "transform": "rotateY("+rotation+"deg)"
                        });
        }
        else if(window.mouseXPos > $(window).width()*0.7){
                rotation = rotation + 60;
                      $(".sketchlist").css({
                            "-webkit-transform": "rotateY("+rotation+"deg)",
                            "-moz-transform": "rotateY("+rotation+"deg)",
                            "transform": "rotateY("+rotation+"deg)"
                        });
        }
    });*/
    /*$(".sketch").on("mouseleave", 
        function(){{$(this).addClass("");}
    });*/
    
    
    
});