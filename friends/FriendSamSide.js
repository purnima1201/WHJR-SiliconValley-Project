//Create child 'Friend Sam Side' from parent BaseFriend
    class FriendSamSide extends BaseFriend{
        
        //Call the constructor, which takes arguments for xPosition, yPosition, width and height
        constructor(x,y,width,height){
            
            //Assign the constructor variable to the super constructor in baseFriend (parent)
                super(x,y,width,height);
            
            //Load a different image
                this.image=loadImage("images/kid facing side.png")
        }
    }