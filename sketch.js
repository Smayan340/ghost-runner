var tower, towerimg;
var ghost, ghostimg;
var door, doorimg, doorsG;
var climber, climberimg, climbersG;
var gamestate = "play"
var soundl;

function preload(){
  towerimg = loadImage("tower.png");
  ghostimg = loadImage("ghost-standng.png");
  doorimg = loadImage("door.png");
climberimg = loadImage("climber.png");
sound=loadSound("spooky.wav")
}


function setup(){
 createCanvas(500,500) ;
  sound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerimg);
  tower.velocityY=1
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostimg);
  ghost.scale=0.3
  
  
  
  door = createSprite(300,300);
  door.addImage("door",doorimg);
  doorG = new Group();
}

function draw(){
  background(0)
  if(gamestate==="play"){
    
  
  if(tower.y>400){
    tower.y= 300
  }
  
 if(keyDown("left_arrow")){
   ghost = ghost.x-3   
 }   
    
    
 if(keyDown("right_arrow")){
   ghost = ghost.x+3   
 }   

 if(keyDown("space")){
   ghost.velocityY = -5  
 }       
ghost.velocityY = ghost.velocity+0.8
  if(climbersG.isTouching(ghost)){
    ghost.velocityY = 0
    
  }
    
     spawndoors();
    drawSprites();
}
  if(gamestate==="end"){
    stroke("yellow")
  fill("yellow")
    textSize(30)
    text("GAME OVER",200,250)
  }
  }

function spawndoors(){
  if(frameCount%180===0){
door=createSprite(200,-50)
    door.addImage(doorimg)
    climber=createSprite(200,10)
climber.addImage(climberimg)
    door.velocityY=1
    door.x=Math.round(random(120,400));
    climber.velocityY=1
    climber.x = door.x
    door.lifetime=650
    climber.lifetime = 650
    doorsG.add(door)
    climbersG.add(climber)
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1
  }
}












