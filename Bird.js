class Bird extends BaseClass{     //inherit the properties of baseclass
    constructor(x, y) {       //trigger the class
     super(x,y,50,50)         //transfer the properties of the baseclass
     this.image=loadImage("sprites/bird.png")
    };
  
  display(){
    this.body.position.x=mouseX
    this.body.position.y=mouseY

    super.display()

  }

}