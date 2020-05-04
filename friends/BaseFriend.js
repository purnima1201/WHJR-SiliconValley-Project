//Create Base Class for friend
    class BaseFriend{
        //Call the constructor, who will take arguements for xPosition, yPosition, width, height
            constructor(x, y, width, height) {
                //Give options for the class objects
                    var options = {
                        'restitution':0.8,
                        'friction':1.0,
                        'density':1.0,
                        isStatic:true
                    }
                this.body = Bodies.rectangle(x, y, width, height, options);
                this.width = width;
                this.height = height;
                this.image = loadImage();
                World.add(world, this.body);
            }
        
        //Create display function
            display(){
                push();
                translate(this.body.position.x, this.body.position.y);
                imageMode(CENTER);
                image(this.image, 0, 0, this.width, this.height);
                pop();
            }
    }