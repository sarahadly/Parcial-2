class Pug{
 
  constructor(){
   this.x=width/2;
   this.y=height/2;
   this.dir=0.5;
   this.dir1=0.5; 
    
   this.velx=4;
  
    
   this.img=[];
   this.frame=0;
   for(var i=0; i<8; i++){
      this.img[i]= loadImage("pug/pug_"+i+".gif");
    }  
  }
    
   mostrarPug(){
     push();
     translate(this.x, this.y);
     scale(this.dir, this.dir1);
     imageMode(CENTER);
     image(this.img[this.frame], 0, 0);
     pop();
   }
  
   derechaPug(){
    this.frame++; 
    this.x=this.x+this.velx;
    this.dir=0.5;
    if(this.frame>7){
    this.frame=0; 
   }  
     
   }
  
  izquierdaPug(){
   this.frame++;
   this.x=this.x-this.velx;
   this.dir=-0.5;
   if(this.frame>7){
    this.frame=0;  
  }
 }
  
  press(){
  if(key=="a" && keyIsPressed){
   pug.izquierdaPug(); 
  }
  
  if(key=="d" && keyIsPressed){
   pug.derechaPug();
   }
  }
}