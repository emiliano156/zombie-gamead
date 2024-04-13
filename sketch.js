var background_img

var wood
var table
var chair
var bed
var wood1
var wood2
var wood3
var wood4
var bench1
var bench2
var bench3
var bench4
var bench5
var bench6
var ammo

var player
var zombie

var playerimage
var zombieimage

var woodgroup
var benchgroup
var obstaclegroup
createEdgeSprites();
function preload(){
  background_img=loadImage("images/background.png");
  playerimage=loadImage("images/player.png")
  zombieimage=loadImage("images/zombie.png")
  ammunitionimage=loadImage("images/ammo.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  

  player=createSprite(width/2,height/2+130,70,70);
  player.addImage(playerimage);
  player.scale=0.15

  zombie=createSprite(80,height/2,70,70);
  zombie.addImage(zombieimage);
  zombie.scale=0.15

  ammo=createSprite(width/2+25,height/2+117,5,5)
 ammo.addImage(ammunitionimage);
 ammo.scale=0.05

  table= createSprite(width/2-35,height/2-15,485,55);
  table.visible=false;

  bench3=createSprite(width/2-440,height/2+340,150,55);
  bench3.rotation=35
  bench3.visible=false;

  bench1=createSprite(width/2-550,height/2-115,65,150);
  bench1.rotation=10
  bench1.visible=false;

  bench2=createSprite(width/2-570,height/2+125,65,150);
  bench2.rotation=10
  bench2.visible=false;

  bench4=createSprite(width/2-120,height/2+370,200,55);
  bench4.rotation=-8
  bench4.visible=false;

  bench5=createSprite(width/2+230,height/2+350,190,45);
  bench5.rotation=-6
  bench5.visible=false;

  bench6=createSprite(width/2+545,height/2+173,50,155);
  bench6.rotation=42
  bench6.visible=false;

  bed=createSprite(width/2+225,height/2+175,150,50);
  bed.visible=false;

  chair=createSprite(width/2-40,height/2-80,450,80);
  chair.visible=false;

  wood1=createSprite(width/2-30,height/2-275,675,50);
  wood1.visible=false;

  wood2=createSprite(width/2+345,height/2-150,75,350);
  wood2.visible=false;

  wood3=createSprite(width/2-330,height/2+125,70,290);
  wood3.visible=false;

  wood4=createSprite(width/2+60,height/2+255,450,50);
  wood4.rotation=-2
  wood4.visible=false

  woodgroup = createGroup();
  obstaclegroup = createGroup();
  benchgroup = createGroup();

  woodgroup.add(wood1)
  woodgroup.add(wood2)
  woodgroup.add(wood3)
  woodgroup.add(wood4)

  benchgroup.add(bench1)
  benchgroup.add(bench2)
  benchgroup.add(bench3)
  benchgroup.add(bench4)
  benchgroup.add(bench5)
  benchgroup.add(bench6)

  obstaclegroup.add(table)
  obstaclegroup.add(chair)
  obstaclegroup.add(bed)
}

function draw(){
  background(background_img);
  
  if(keyIsDown(RIGHT_ARROW)){
    player.x += 5;
    ammo.x += 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x -= 5;
    ammo.x -= 5;
  }
  if(keyIsDown(UP_ARROW)){
    player.y -= 5;
    ammo.y -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y += 5;
    ammo.y += 5;
  }

  if(player.collide(woodgroup)||player.collide(benchgroup)||player.collide(obstaclegroup)){
    player.velocityX=0
    player.velocityY=0
    ammo.velocityX=0
    ammo.velocityY=0
  }
  
  player.collide(createEdgeSprites())

  ammunition();
  
  drawSprites();
}

function ammunition(){
 

 
}
