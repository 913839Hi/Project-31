const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var bar1,bar2,bar3,bar4,bar5,bar6,bar7;
var particles=[];
var plinkos=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

ground=new Ground(240,790,480,20);

bar1=new Division(10,700,10,300);
bar2=new Division(78,700,10,300);
bar3=new Division(156,700,10,300);
bar4=new Division(234,700,10,300);
bar5=new Division(312,700,10,300);
bar6=new Division(390,700,10,300);
bar7=new Division(475,700,10,300);

for (var j=40; j<=innerWidth; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for (var j=15; j<=width-10; j=j+50) {
plinkos.push(new Plinko(j,175));
}
for (var j=15; j<=width-10; j=j+50) {
  plinkos.push(new Plinko(j,275));
  }
  for (var j=15; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
    }
    

if(frameCount%60===0){
  particles.push(new Particle(random(10,470),10));
}

}

console.log("frameCount")

function draw() {
  background("black");  
  Engine.update(engine);

 
ground.display();
bar1.display();
bar2.display();
bar3.display();
bar4.display();
bar5.display();
bar6.display();
bar7.display();

for (var j=0; j<plinkos.length; j++){
  plinkos[j].display();
}

for (var j=0; j<particles.length; j++){
  particles[j].display();
}



}