//Create child 'FriendSmiling' from parent BaseFriend
  class FriendSmiling extends BaseFriend{  

    //Create a constructor which takes the arguments xPosition, yPosition, width, height
      constructor(x, y, width, height) {       

        //Assign the arguments of constructor to the super constructor of baseFriend (parent)
          super(x,y,width,height);         

        //Load a different image  
          this.image = loadImage("images/kid smiling.png");
      }
  }