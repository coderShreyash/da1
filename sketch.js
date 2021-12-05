function preload(){
    needli = loadImage("1.png");
}
left = 30;

function setup(){
    width = window.outerWidth
    height = window.outerHeight;
canvas = createCanvas(window.outerWidth,window.outerHeight);
start = 360;
time = 0;
p = 1;
}
function draw(){

    background("#add8e6");

    
    fill("rgb(237, 179, 90)");
    strokeWeight(10);
    stroke("#849390");
    ellipse(width/2,height/2,width<height?width/1.5:height/1.5,width<height?width/1.5:height/1.5);
    strokeWeight(5);

    stroke("black");


    strokeWeight(2);

    stroke("black");
    fill("black")
    
    drawSprites();
    textSize(width*30/height)
text("Crack Meter",width/2-(width*90/height),height/7-(width*30/height));
text("Time Left: "+left,width/2-(width*90/height),height/1.25+(width*30/height));


    noFill();
    rect(width/8,height/8,width*6/8,height/10);
    if(p==1){
            if(start!=360){
    arc(width/2,height/2,width<height?width/2:height/2,width<height?width/2:height/2,radians(start)*width/2,radians(360)*width/2);

    }
    for(var i = 0;i<touches.length;i++){
        start-=0.25
        time+=1;

        }
    if(time<=33){
    fill("green");
    }
    else if(time<=66){
        fill("orange");
        }
        else{
            fill("red");
        }
        if(left<=0){
        p = 0;

            alert("Time Over !");
            
    c = confirm("Wanna Play Again ?")
    c?location.reload():window.close();
        }
    if(time>=0&&time<98){
        noStroke();
    rect(width/8,height/8+2,time*width/128,height/11+2);
    }
    else {
    rect(width/8,height/8+2,98*width/128,height/11+2);

        p = 0;
    alert("Dalgona Candy Cracked !");
    c = confirm("Wanna Play Again ?")
    c?location.reload():window.close();

    }
    if((radians(start)*width/2)<=2*width&&start!=360){
p=0;

        a = left;
alert("You Win");
if(localStorage.getItem("tm8")=='null'||localStorage.getItem("tm8")==null){
    localStorage.setItem("tm8",50)
}
alert("Best Time: "+(localStorage.getItem("tm8")<a?a:localStorage.getItem("tm8")));
localStorage.getItem("tm8")<a?localStorage.setItem("tm8",a):localStorage.setItem("tm8",localStorage.getItem("tm8"));
c = confirm("Wanna Play Again ?")
c?location.reload():window.close();
}

}
else{
    fill("red")
    rect(width/8,height/8+2,98*width/128,height/11+2);

}
}
function mouseDragged(){

    start-=0.1;
    time+=1;
}
function touchEnded() {
   time=0
    
  }
setInterval(function(){
    if(p==1){
    left-=1;
    }
},1000)