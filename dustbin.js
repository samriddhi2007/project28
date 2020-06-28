class Dustbin{
constructor(x,y,width,height){
var options={
isStatic:true,
restitution:0,
friction:0,
density:1.2



}
this.bodies = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
World.add(world,this.bodies)
this.image = loadImage("thisimage")

}









}






   
























