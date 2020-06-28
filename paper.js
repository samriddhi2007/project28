class Paper{
constructor(x,y,width,height){
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.bodies = Bodies.ellipse(x,y,5,options)
this.width= width
this.height = height
World.add(world,this.bodies)
this.image = loadImage(paperimage)
}














}