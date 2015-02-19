
// This function deals with the navigation bar.
// It is the first function written for this website, and is done in regular js.
function navibarUtil() {
    // mouse location for judging if the bar should be hidden.
    var mouseY = 0;
    document.addEventListener('mousemove', function(e){mouseY=e.clientY;});
    
    // morph the navigation bar on scroll.
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            navibarThresh = 60,
            header = document.getElementById("navibar"),
            ball = document.getElementById("naviball"),
            item = document.getElementById("naviitem");
        if ((distanceY > navibarThresh)) {
            // shrinke
            if (header.className == "large") {
                header.className = "small";
                ball.className = "showball";
                item.className = "itemsmall";
                setTimeout(function () {
                    // hide if user is not interacting with it
                    if (window.pageYOffset || document.documentElement.scrollTop > 60) {
                        if (mouseY > 51){header.className += " hide";}
                    }else{
                        // user might have scrolled back to the top
                        header.className = "large"; 
                        ball.className = "";
                        item.className = "itemlarge";
                    }
                },1000);
            }
        } else {
            // reset the header so it can elegantly come down from the top when scrolled to the top of page
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

// This portion contains all other functions (except the canvas ones) which are written in JQuery.
$(document).ready(function(){
    $('.modal').hide();
    
    // resizes key elements on resizing the window
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
    
    // activate hidden navigation bar when cursor is in range
    $("#naviball, #navibar").on("mouseenter", 
        function(){if ($(document).scrollTop() >= 50){$("#navibar").attr('class',"small");}
    });
    $("#naviball, #navibar").on("mouseleave", 
        function(){if ($(document).scrollTop() >= 50){$("#navibar").addClass("hide");}
    });
    
    
    // carousel, auto scrolling, and position indication (carousel movement is controlled by scrolling)
    var rotation = 0,
        scrollstat = 0;
    $( window ).scroll(function() {
        {rotation += 120*Math.round(($(document).scrollTop()-scrollstat)/50);}
        
        $(".sketchlist").css({
            "-webkit-transform": "rotateY("+rotation+"deg)",
            "-moz-transform": "rotateY("+rotation+"deg)",
            "-o-transform": "rotateY("+rotation+"deg)",
            "transform": "rotateY("+rotation+"deg)"
        });
        // all the position indication conditions
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
        if ($(document).scrollTop() >= $('#contactSection').offset().top) 
            {$("#section2").css("font-size", "150%");
            $('#navilineInd').css({left:75+'%'});}
        if ($(document).scrollTop() < $('#contactSection').offset().top)
            {$("#section2").css("font-size", "100%");}
        
        // shows modal when scrolled to the bottom
        if (($(document).scrollTop()-50 >= $('#contactSection').offset().top) && ($(document).scrollTop() > scrollstat))
            {$('.modal').show(200);}
        
        // update scroll position
        scrollstat = $(document).scrollTop();
    });
    
    // auto scrolling for navigation bar
    $("#section4").click(function() {$('html, body').animate({scrollTop: $("#sketchSection").offset().top+1}, 1000);});
    $("#section3").click(function() {$('html, body').animate({scrollTop: $("#aboutSection").offset().top+1}, 1000);});
    $("#section2").click(function() {$('html, body').animate({scrollTop: $("#contactSection").offset().top+1}, 1000);});
    $("#section1").click(function() {$('html, body').animate({scrollTop: 0}, 1000);});
    // scrolling for the icon below the title
    $(".fa-arrow-circle-o-down").click(function() {$('html, body').animate({scrollTop: $("#sketchSection").offset().top+1}, 1000);});
    setInterval(function(){
        $(".fa").toggleClass('glow');
    }, 600);
    // icon for closing modal
    $(".fa-times-circle").click(function() {$('.modal').hide(200);});
    // icon for social media interactions
    $('.fa-twitter').click(function(){window.open('https://www.twitter.com', '', '');});
    $('.fa-github').click(function(){window.open('https://github.com/Code-Omega', '', '');});
    $('.fa-linkedin').click(function(){window.open('https://www.linkedin.com/in/zehuali/en', '', '');});
});

// this part deals with the canvas. I got addicited to it and wanted to do something. 
// I tried to follow the structure of processing.js as it was clear, but some ordering had to be done in a less readable way.
$(document).ready(function(){
    // animation setup
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame     ||
        window.webkitRequestAnimationFrame    ||
        window.mozRequestAnimationFrame       ||
        window.oRequestAnimationFrame         ||
        window.msRequestAnimationFrame        ||
        function( callback ){
        window.setTimeout(callback, 1000/60);
      };
    })();
    var frameCount = 0;
    function loop() {
        draw();
        requestAnimFrame(loop);
        frameCount += 1;
    }
    
    // canvas setup
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var W = canvas.width = $("#aboutSection").innerWidth();
    var H = canvas.height = $("#aboutSection").innerHeight();
    
    // gaussian distribution
    function randomGaussian() {
        return ((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1));
    }
    
    // Node "class"
    function Node(_type) {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.speed = -1 + Math.random() * (Math.random() * 2 * 5);
        this.direction = -1 + Math.random() * (Math.random() * 2 * Math.PI);
        this.radius = Math.random() * (Math.random() * 5);
        this.energy = 50;
        this.color = "white";
        this.type = _type;
        this.draw = function() {
            //ctx.fillStyle = "#"+this.energy;
            //ctx.fillStyle = "rgba("+this.energy+","+this.energy*0.3+","+this.energy*0.4+",2200)";
            if (this.type == 0) this.color = "rgba("+this.energy+",50,50,0.6)";
            if (this.type == 1) this.color = "rgba(50,"+this.energy+",50,0.6)";
            if (this.type == 2) this.color = "rgba(50,50,"+this.energy+",0.6)";
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        }
        this.update = function() {
            this.radius = this.energy/8;
            this.direction += 0.1*randomGaussian();
            this.speed = (285-this.energy)/20;
            this.x += this.speed*Math.cos(this.direction);
            this.y += this.speed*Math.sin(this.direction);
            this.energy = this.energy - 8 < 0 ? 0 : this.energy - 8;
        }
        this.wrap = function() {
            if(this.x - this.radius > W) this.x = 0-this.radius;
            else if(this.x + this.radius < 0) this.x = W + this.radius;
            if(this.y - this.radius > H) this.y = 0-this.radius;
            else if(this.y + this.radius < 0) this.y = H + this.radius;
        }
    }
    
    // preparation conditions (initializations)
    var Nnum = H*W/40000;
    var Nodes = [];
    for(var i = 0; i < Nnum; i++) {
        Nodes.push(new Node(0));
        Nodes.push(new Node(1));
        Nodes.push(new Node(2));
    }
    // canvas setup done

    function draw() {
        // set canvas
        W = canvas.width = $("#aboutSection").innerWidth();
        H = canvas.height = $("#aboutSection").innerHeight();
        ctx.fillStyle = "#300E42";
        ctx.fillRect(0,0,W,H);
        // show about
            var string1 = 0;
            var string2 = 0;
            var string3 = 0;
        // draw
        var dataNum = 0;
        for (var i = 0; i < Nodes.length; i++) {
            n = Nodes[i];
            n.update();
            n.wrap();
            var concentraction = 0;
            for (var j = 0; j < Nodes.length; j++) {
                if (i != j) {
                    n1 = Nodes[j];
                    var distsq = Math.pow(n1.x-n.x,2)+Math.pow(n1.y-n.y,2);
                    // updates energy with respect to the node's interactions
                    if (distsq<Math.pow(150,2)) {
                        ctx.beginPath();
                        ctx.strokeStyle = "rgba(255,255,255,"+ (1.0*Math.sqrt(distsq)/W) +")";
                        ctx.moveTo(n.x, n.y);
                        ctx.lineTo(n1.x, n1.y);
                        ctx.stroke();
                        ctx.closePath();
                        //Math.round(Math.sqrt(distsq))
                        var incrementation = Math.round((150-Math.sqrt(distsq))/30);
                        n.energy = (n.energy + incrementation) > 230 ? 230 : n.energy+incrementation;
                        concentraction += 1;
                    }
                    /*if (frameCount> 100 && n.color==n1.color && distsq>Math.pow(50,2) && distsq<Math.pow(300,2)) {
                        ctx.beginPath();
                        //ctx.strokeStyle = n.color.substr(0, -5)+(1.0*Math.sqrt(distsq)/W) +")";
                        ctx.strokeStyle = n.color;
                        ctx.moveTo(n.x, n.y);
                        ctx.lineTo(n1.x, n1.y);
                        ctx.stroke();
                        ctx.closePath();
                    }*/
                }
            }
            // display some texts to spice things up 
            if (concentraction > 15){
                ctx.font = "10px Arial";
                ctx.fillText(n.energy+", ("+n.x+" ,"+n.y+")",n.x,n.y);
                dataNum+=1;
            }
            else if (concentraction > 5 && dataNum < 100){
                ctx.font = "10px Arial";
                ctx.fillText(n.energy,n.x,n.y);
                dataNum+=1;
            }
            n.draw();
            if (concentraction > 5 && string1 == 0){
                string1=1;
                ctx.strokeStyle="white";
                ctx.font = "50px Arial";
                ctx.fillText("Collecting Information",n.x,n.y);
            }
            else if (concentraction > 9 && string2 == 0){
                string2=1;
                ctx.strokeStyle="white";
                ctx.font = "50px Arial";
                ctx.fillText("Finding Correlation",n.x,n.y);
            }
            else if (concentraction > 12 && string3 == 0){
                string3=1;
                ctx.strokeStyle="white";
                ctx.font = "50px Arial";
                ctx.fillText("Forming Representation",n.x,n.y);
            }
        }
        // this text is not dynamic
        ctx.fillStyle = "rgb(200,200,220)";
        ctx.strokeStyle="white";
        ctx.font = "60px Arial";
        ctx.fillText("The Mission:",W/20,H/3);
    }
    loop();
});
