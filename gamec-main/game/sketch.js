

var bow , arrow,  background1, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage,germ1, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, boyy, boyx;
function preload(){
  
  backgroundImage = loadImage("image/bg1.png");
  boyy = loadImage("image/boy2.png");
  boyy2 = loadImage("image/boyy.png");
  arrowImage = loadImage("image/arrow0.png");
  bowImage = loadImage("image/bow0.png"); 

  germ1 = loadAnimation("image/virus1.png","image/virus2.png")
  germ2 = loadAnimation("image/virus2-1.png","image/virus2-2.png","image/virus2-3.png")
  germ3 = loadImage("image/virus.png")

 // red_balloonImage = loadImage("image/red_balloon0.png");
 // green_balloonImage = loadImage("image/green_balloon0.png");
 // pink_balloonImage = loadImage("image/pink_balloon0.png");
 // blue_balloonImage = loadImage("image/blue_balloon0.png");
  
}
function setup() {
  createCanvas(displayWidth,displayHeight-150); 
  //creating background
  background1 = createSprite(800,250);
  background1.addImage(backgroundImage);
  //background1.scale = 1.8
    // creating bow to shoot arrow change the sketch.js   acording to the scripts you have to rewrite until 50 
 //bow = createSprite(480,220,20,50);
 // bow.addImage(bowImage); 
 // bow.scale = 1;
  boyx = createSprite(200,220,20,50);
  boyx2 = createSprite(500,220,20,50);
boyx.addImage(boyy)
boyx2.addImage(boyy)
boyx.scale=0.5
boyx2.scale=0.5
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group(); 
}

function draw() {
background("yellow")
  // moving ground
    background1.velocityX = -3 

    if (background1.x < 400){
      background1.x = 850;
    }
  
  //moving bow
 
  boyx.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
 if (frameCount % 60 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
 }
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

  
  drawSprites();
    text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(windowWidth-4,Math.round(random(windowWidth-10, 50+ windowHeight/1.8)));
 red.addAnimation("g",germ1);
  red.velocityX =- 5;
  red.lifetime = 500;
  red.scale = 0.18;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(windowWidth-8,Math.round(random(windowWidth-10,50+windowHeight/1.8)));
blue.addAnimation("a",germ2);
 blue.velocityX =-6;
  blue.lifetime = 500;
  blue.scale = 0.25;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(windowWidth-5,Math.round(random(windowWidth-10, 50+ windowHeight/1.8)));
green.addAnimation("g",germ1);
  green.velocityX =- 7;
  green.lifetime = 500;
  green.scale = 0.2;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(windowWidth-2,Math.round(random(windowWidth-10,50+  windowHeight/1.8)));
 pink.addAnimation("a",germ2);
  pink.velocityX =-4;
  pink.lifetime = 500;
  pink.scale = 0.3
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
 arrow.y=boyx.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
