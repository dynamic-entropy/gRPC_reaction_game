var start = 0;
var bestTime = Number.MAX_SAFE_INTEGER;
var base_size = 100;

function newShape(){
    var top = Math.random()*300;
    var left = Math.random()*1000;
    var size = Math.random()*base_size + 100;

    console.log(top, left);
    shape = document.getElementById("shape");
    if(Math.random() > 0.5){
        shape.style.borderRadius = "50%";
    }
    else{
        shape.style.borderRadius = "0";
    }

    shape.style.height = size+"px";
    shape.style.width = size+"px";
    shape.style.top = top+"px";
    shape.style.left = left+"px";
    shape.style.display = "block";
    shape.style.backgroundColor = getColor();
    start = new Date().getTime();
}

function getColor(){
    colors = ["red", "green", "blue", "yellow"];
    return colors[Math.floor(Math.random()*4)];
}

function delayAppear(){
    setTimeout(newShape, Math.random()*2000);
}

delayAppear();
document.getElementById("shape").onclick  = () => {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end-start)/1000;
    document.getElementById("currentTime").innerHTML = timeTaken;
    if (timeTaken<bestTime){
        bestTime = timeTaken;
        document.getElementById("bestTime").innerHTML = bestTime;
    }
    delayAppear();
}