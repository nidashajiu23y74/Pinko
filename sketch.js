function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground= new Ground(775,240,450,60);

}
var particles=[];
var plinkos=[];
var divisions=[];
var divisionheight=30;


function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
  for(var k = 0;k <= width; k = k + 80){
    divisions.push(new Divisions(k,height = divisionsHeight/2,10,divisionsHeight));
  }

  for(var j=0; j < particles.length; j++){
    particles[j].display();

  }
  for(var k=0; k < divisions.length; k++){
    divisions[k].display();
    
  }
  if (frameCount%60==0){
    particles.push(new Particle(random(width/2*10,width/2+10),10,10))
  }
}