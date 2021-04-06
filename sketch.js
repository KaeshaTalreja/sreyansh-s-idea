var gameState;
var welcomePic,arrowPic ;
var welcomeSpr,arrowSpr,storySpr;
var groupStory,groupStage_1,groupStage_2,groupWelcome;


function preload(){
  welcomePic=loadImage("loading.gif");
  arrowPic=loadImage("arrow.png");
}


function setup() {
  //create the canvas
  createCanvas(displayWidth-20,displayHeight-200);

  //initial value of game state
  gameState="welcome";

  //create all the sprites required in your project
  welcomeSpr=createSprite(650,300,50,50);
  arrowSpr=createSprite(700,525,50,50);
  welcomeSpr.addImage(welcomePic);
  arrowSpr.addImage(arrowPic);
  arrowSpr.scale=0.35;

  storySpr=createSprite(20,20,40,40);

  arrowSpr.debug=true;
  //create the group
  groupWelcome=new Group();
  groupStory=new Group();
  groupStage_1=new Group();
  groupStage_2=new Group();

  //tell the sprites in Welcome group
  groupWelcome.add(welcomeSpr);
  groupWelcome.add(arrowSpr);

  groupStory.add(storySpr);

}

function draw() {
  background(220);
  drawSprites();
  text(gameState,200,40);
  
  if(gameState==="welcome"){
      text("Press to start",690,600);
      groupWelcome.setVisibleEach(true);
      storySpr.visible=false;
      groupStory.setVisibleEach(false);
      groupStage_1.setVisibleEach(false);
      groupStage_2.setVisibleEach(false);
      
      if(mousePressedOver(arrowSpr)){
        gameState="story";
      }

   
  }
  if(gameState==="story"){
    groupWelcome.setVisibleEach(false);
      groupStory.setVisibleEach(true);
      groupStage_1.setVisibleEach(false);
      groupStage_2.setVisibleEach(false);
      text("hi",200,50);
  }

}