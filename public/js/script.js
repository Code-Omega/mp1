function navibarUtil(){var a=0;document.addEventListener("mousemove",function(b){a=b.clientY}),window.addEventListener("scroll",function(){var b=window.pageYOffset||document.documentElement.scrollTop,c=60,d=document.getElementById("navibar"),e=document.getElementById("naviball"),f=document.getElementById("naviitem");b>c?"large"==d.className&&(d.className="small",e.className="showball",f.className="itemsmall",setTimeout(function(){window.pageYOffset||document.documentElement.scrollTop>60?a>51&&(d.className+=" hide"):(d.className="large",e.className="",f.className="itemlarge")},1e3)):("small hide"==d.className&&(d.className="reset"),setTimeout(function(){(window.pageYOffset||document.documentElement.scrollTop<=c)&&(d.className="large",f.className="itemlarge",e.className="")},1))})}window.onload=navibarUtil(),$(document).ready(function(){$(".modal").hide();var a=function(){{var a=$(window).width();$(window).height()}$(".sections").css({top:.56*a}),$("#nav_padding_content").css({height:.56*a}),$("#nav_padding_screen").css({height:.56*a}),$(".inkdrop").css({height:.37*a}),$("#siteinfo").css({top:0}),$("#siteinfo").css({top:$(document).height()}),$("#nav_padding_screen_doodle").css({"font-size":$("#nav_padding_screen_doodle").width()/16}),$(".blueprint_doodle").css({"font-size":$("#nav_padding_screen_doodle").width()/13}),$(".c2").css({"font-size":$("#nav_padding_screen_doodle").width()/37}),canvas.width=$("#aboutSection").innerWidth(),canvas.height=$("#aboutSection").innerHeight()};a(),$(window).resize(function(){a()}),$("#naviball, #navibar").on("mouseenter",function(){$(document).scrollTop()>=50&&$("#navibar").attr("class","small")}),$("#naviball, #navibar").on("mouseleave",function(){$(document).scrollTop()>=50&&$("#navibar").addClass("hide")});var b=0,c=0;$(window).scroll(function(){b+=120*Math.round(($(document).scrollTop()-c)/50),$(".sketchlist").css({"-webkit-transform":"rotateY("+b+"deg)","-moz-transform":"rotateY("+b+"deg)","-o-transform":"rotateY("+b+"deg)",transform:"rotateY("+b+"deg)"}),$(document).scrollTop()<$("#sketchSection").offset().top&&($("#section1").css("font-size","150%"),$("#navilineInd").css({left:"0%"}),$("#section1").text("Welcome")),$(document).scrollTop()>=$("#sketchSection").offset().top&&($("#section1").css("font-size","100%"),$("#section1").text("back to top")),$(document).scrollTop()>=$("#sketchSection").offset().top&&$(document).scrollTop()<$("#aboutSection").offset().top&&($("#section4").css("font-size","150%"),$("#navilineInd").css({left:"25%"})),($(document).scrollTop()<$("#sketchSection").offset().top||$(document).scrollTop()>=$("#aboutSection").offset().top)&&$("#section4").css("font-size","100%"),$(document).scrollTop()>=$("#aboutSection").offset().top&&$(document).scrollTop()<$("#contactSection").offset().top&&($("#section3").css("font-size","150%"),$("#navilineInd").css({left:"50%"})),($(document).scrollTop()<$("#aboutSection").offset().top||$(document).scrollTop()>=$("#contactSection").offset().top)&&$("#section3").css("font-size","100%"),$(document).scrollTop()+$(window).height()>=$("#aboutSection").offset().top&&$("#inkdrop").attr("class","inkdropped"),$(document).scrollTop()+$(window).height()<$("#aboutSection").offset().top&&$("#inkdrop").attr("class",""),$(document).scrollTop()>=$("#contactSection").offset().top&&($("#section2").css("font-size","150%"),$("#navilineInd").css({left:"75%"})),$(document).scrollTop()<$("#contactSection").offset().top&&$("#section2").css("font-size","100%"),$(document).scrollTop()-50>=$("#contactSection").offset().top&&$(document).scrollTop()>c&&$(".modal").show(200),c=$(document).scrollTop()}),$("#section4").click(function(){$("html, body").animate({scrollTop:$("#sketchSection").offset().top+1},1e3)}),$("#section3").click(function(){$("html, body").animate({scrollTop:$("#aboutSection").offset().top+1},1e3)}),$("#section2").click(function(){$("html, body").animate({scrollTop:$("#contactSection").offset().top+1},1e3)}),$("#section1").click(function(){$("html, body").animate({scrollTop:0},1e3)}),$(".fa-arrow-circle-o-down").click(function(){$("html, body").animate({scrollTop:$("#sketchSection").offset().top+1},1e3)}),setInterval(function(){$(".fa").toggleClass("glow")},600),$(".fa-times-circle").click(function(){$(".modal").hide(200)}),$(".fa-twitter").click(function(){window.open("https://www.twitter.com","","")}),$(".fa-github").click(function(){window.open("https://github.com/Code-Omega","","")}),$(".fa-linkedin").click(function(){window.open("https://www.linkedin.com/in/zehuali/en","","")})}),$(document).ready(function(){function a(){d(),requestAnimFrame(a),e+=1}function b(){return 2*Math.random()-1+(2*Math.random()-1)+(2*Math.random()-1)}function c(a){this.x=Math.random()*h,this.y=Math.random()*i,this.speed=-1+2*Math.random()*Math.random()*5,this.direction=-1+2*Math.random()*Math.random()*Math.PI,this.radius=5*Math.random()*Math.random(),this.energy=50,this.color="white",this.type=a,this.draw=function(){0==this.type&&(this.color="rgba("+this.energy+",50,50,0.6)"),1==this.type&&(this.color="rgba(50,"+this.energy+",50,0.6)"),2==this.type&&(this.color="rgba(50,50,"+this.energy+",0.6)"),g.fillStyle=this.color,g.beginPath(),g.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),g.fill()},this.update=function(){this.radius=this.energy/8,this.direction+=.1*b(),this.speed=(285-this.energy)/20,this.x+=this.speed*Math.cos(this.direction),this.y+=this.speed*Math.sin(this.direction),this.energy=this.energy-8<0?0:this.energy-8},this.wrap=function(){this.x-this.radius>h?this.x=0-this.radius:this.x+this.radius<0&&(this.x=h+this.radius),this.y-this.radius>i?this.y=0-this.radius:this.y+this.radius<0&&(this.y=i+this.radius)}}function d(){h=canvas.width=$("#aboutSection").innerWidth(),i=canvas.height=$("#aboutSection").innerHeight(),g.fillStyle="#300E42",g.fillRect(0,0,h,i);for(var a=0,b=0,c=0,d=0,e=0;e<k.length;e++){n=k[e],n.update(),n.wrap();for(var f=0,j=0;j<k.length;j++)if(e!=j){n1=k[j];var l=Math.pow(n1.x-n.x,2)+Math.pow(n1.y-n.y,2);if(l<Math.pow(150,2)){g.beginPath(),g.strokeStyle="rgba(255,255,255,"+1*Math.sqrt(l)/h+")",g.moveTo(n.x,n.y),g.lineTo(n1.x,n1.y),g.stroke(),g.closePath();var m=Math.round((150-Math.sqrt(l))/30);n.energy=n.energy+m>230?230:n.energy+m,f+=1}}f>15?(g.font="10px Arial",g.fillText(n.energy+", ("+n.x+" ,"+n.y+")",n.x,n.y),d+=1):f>5&&100>d&&(g.font="10px Arial",g.fillText(n.energy,n.x,n.y),d+=1),n.draw(),f>5&&0==a?(a=1,g.strokeStyle="white",g.font="50px Arial",g.fillText("Collecting Information",n.x,n.y)):f>9&&0==b?(b=1,g.strokeStyle="white",g.font="50px Arial",g.fillText("Finding Correlation",n.x,n.y)):f>12&&0==c&&(c=1,g.strokeStyle="white",g.font="50px Arial",g.fillText("Forming Representation",n.x,n.y))}g.fillStyle="rgb(200,200,220)",g.strokeStyle="white",g.font="60px Arial",g.fillText("The Mission:",h/20,i/3)}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();for(var e=0,f=document.getElementById("canvas"),g=f.getContext("2d"),h=canvas.width=$("#aboutSection").innerWidth(),i=canvas.height=$("#aboutSection").innerHeight(),j=i*h/4e4,k=[],l=0;j>l;l++)k.push(new c(0)),k.push(new c(1)),k.push(new c(2));a()});