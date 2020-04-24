class Cat{
  
 constructor(){
   
   //Posición del personaje
   this.x= width/2;
   this.y= height/2;
   this.dir=0.4;
   this.dir1=0.4;
   
   //Velocidad del personaje
   this.velx=4;
   
   //Imágenes
   this.img=[]; //array
   this.frame=0;
   for(var i=0; i<12; i++){
      this.img[i]=loadImage("cat/cat_"+i+".gif")
   }
 }
  
  mostrarCat(){
    push();
    translate(this.x, this.y);
    scale(this.dir, this.dir1);
    imageMode(CENTER);
    image(this.img[this.frame], 0, 0); 
    pop();

  }
  
   derechaCat(){
   this.frame++; 
   this.x=this.x+this.velx;
   this.dir=0.5;
   if(this.frame>11){
    this.frame=0; 
   }
  }
  
   izquierdaCat(){
   this.frame++;
   this.x=this.x-this.velx;
   this.dir=-0.5;
   if(this.frame>11){
     this.frame=0; 
    }
  }
  
  press(){
    if(keyCode==37 && keyIsPressed){
    cat.izquierdaCat();
  }
  
  if(keyCode==39 && keyIsPressed){
    cat.derechaCat();
    }
  }
}