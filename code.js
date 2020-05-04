//Name Spacing Matter.js
    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;

//Create variables related to matter.js
    var engine, world;

//Create other variables
    var friend,friend1,friend2;
    var music
    var backgroundImg;

//load sounds and images    
    function preload(){
        getBackgroundImg();        
        music = loadSound("audio/BackgroundMusic1.mp3")
    }

function setup(){       
    //Create canvas of width 400 and height 400
        var canvas = createCanvas(800,400);
    
    //Create engine and world
        engine = Engine.create();
        world = engine.world;

    //Create cartoon friend(s)    
        friend=new FriendSayingHi(700,340,100,120);
        friend1=new FriendSamSide(50,340,80,120);
        friend2=new FriendSmiling(55,340,80,120)
       
    //Play background music
        music.play();

}

function draw(){
    
    //Everything is displayed only when background Image is loaded
        if(backgroundImg){

            //Draw a background
                background(backgroundImg);

            //Play sounds
                for(i=0;i<1;i++){
                    if(frameCount>50 && frameCount<53){
                        responsiveVoice.speak("hello");
                    }
                    else if(frameCount>150 && frameCount<153){
                        responsiveVoice.cancel();
                        responsiveVoice.speak("my name is friendabot");
                    }
                    else if(frameCount>250 && frameCount<253){   
                        responsiveVoice.cancel();
                        responsiveVoice.speak("Meet my friend Sam")
                    }
                    else if(frameCount>350 && frameCount<353){
                        responsiveVoice.cancel()
                        responsiveVoice.speak("Hey! Enough Introduction about ourselves! What is your name?","US English Male")
                    }
                }    
                    
            //Update engine
                Engine.update(engine);
                
            //Display cartoon friend 'friendabot'
                friend.display();
                                
            //Give texts settings
                getTextColor();
                noStroke();
                textSize(20)

            //Display texts
                for(i=0;i<1;i++){    
                    if(frameCount>50 && frameCount<150){
                            textSize(30)
                            text("Hello!",540,325)    
                    }else if(frameCount>150 && frameCount<250){
                            text("My name is friendabot!",450,325)
                    }else if(frameCount>250 && frameCount<350){
                            text("Meet my friend,Sam!",450,325);
                            friend1.display();
                    }else if(frameCount>350){
                            friend2.display();
                            text("Hey! Enough Introduction about ourselves. What is your name?",100,340)
                    }
                }
        }

}




//Create a function which will detect if it is day or night and change color of text accordingly
    async function getTextColor(){
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        var hour = responseJSON.datetime.slice(11,13)
        if(hour>=06 && hour<=17){
            fill("black")
        }else {
            fill("white")
        }
        
    }
    
    
//Create a function which will detect if it is day or night and change background accordingly
    async function getBackgroundImg(){
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        var hour = responseJSON.datetime.slice(11,13)
        if(hour>=06 && hour<=17){
            backgroundImg = loadImage("images/background.jpg");
        }else {
            backgroundImg = loadImage("images/background1.jpg");
        }
        
    }