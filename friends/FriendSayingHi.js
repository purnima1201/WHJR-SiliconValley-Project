//Create child 'FriendSayingHi' from parent BaseFriend
    class FriendSayingHi extends BaseFriend{
        
        //Create constructor which takes arguments for xPosition, yPosition, width, height
            constructor(x, y, width, height) {
        
            //Assign the constructor arguments to the superconstructor of baseFriend (parent)
                super(x,y,width,height)
                
            //Load a different image
                    this.image=loadImage("images/kid_saying_hi.png")
        }
        
    }