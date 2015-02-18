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
    
    function randomGaussian() {
        return ((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1));
    }
    
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
        ctx.fillStyle = "rgb(200,200,220)";
        ctx.strokeStyle="white";
        ctx.font = "60px Arial";
        ctx.fillText("The Mission:",W/20,H/3);
    }
    loop();
});
