var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star;
var score;
var gameState;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("music.mp3");

}

function setup() {
	createCanvas(800, 700);

	fairyVoice.play();

	fairy = createSprite(400, 520,50,50);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.15;
	
	score=0;
	starGroup= createGroup();

	gameState=0;
	/*engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);*/

}


function draw() {
  background(bgImg);
  
  text("Score: "+score,730,50);

  if(gameState===0){
  spawnStars();
  if(starGroup.isTouching(fairy)){
	  starGroup.destroyEach();
	  score++;
  }
  if(score===10){
	  gameState=1;
  }
}
if(gameState===1){
	text("YOU WIN!!", 380,350);
	text("Press Space to Restart",340,370);
}
if(keyCode===32 && gameState===1){
	gameState=0;
	score=0;
}
  drawSprites();

}

function keyPressed() {

	if(keyCode ===RIGHT_ARROW){
           fairy.x = fairy.x + 50;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 50;
	}

	/*if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}*/
}

function spawnStars(){
	if(frameCount%100===0){
		star = createSprite(400,30,30,30);
		star.x= Math.round(random(100,790));
		star.addImage(starImg);
		star.scale = 0.2;
		star.velocityY=7;
		starGroup.add(star);
		star.lifeTime=5;
	  }


}