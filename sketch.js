function setup() {

  createCanvas(800,400);
angleMode(DEGREES)

}


function draw() {

background("black");  

hr = hour();
mn = minute()
sc = second();

noFill()

translate(200,200);

rotate(-90)

strokeWeight(8)
stroke("blue")
scAngle = map(sc,0,60,0,360)
arc(0,0,300,300,0,scAngle);

strokeWeight(8)
stroke("red")
mnAngle = map(mn,0,60,0,360) + map(scAngle, 0, 360, 0, 6);
arc(0,0,280,280,0,mnAngle);

strokeWeight(8);
stroke("pink");
hrAngle = map(hr % 12,0,24,0,360); +  map(mnAngle, 0, 360, 0, 30);
arc(0,0,260,260,0,hrAngle);


push();
rotate(scAngle);
stroke("blue")
strokeWeight(7);
line(0,0,100,0);
pop();


push();
rotate(mnAngle);
stroke("red")
strokeWeight(7);
line(0,0,120,0)
pop();

push();
rotate(hrAngle);
stroke("pink")
strokeWeight(7);
line(0,0,75,0)
pop();

  drawSprites();

}