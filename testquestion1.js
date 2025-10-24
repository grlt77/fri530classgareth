let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    background("blue")
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}

function draw(){
    background("blue")
    circle(posX,height/2,50)
    constrain(posX,0,600)
    if (posX < 575){
        posX = posX + xSpeed
    }

    
    if (posX === 575 || posX === 0){
        xSpeed = xSpeed * -1
        posX = posX + xSpeed
    }
}