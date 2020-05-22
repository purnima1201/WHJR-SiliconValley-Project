/*  
    Created By Shreshth Narayan Singh
    Email me at shreshthns.425@gmail.com
    Or call me at +91-9660303008
    Hope you enjoy the app!
    Created using javascript
    Automated sound was made only with the help of responsive voice.org
    Background Music was imported from wondershare
*/



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
    var appState="start";
    var nameForm,name,age,index=0,userIndex="";
    var database;

//load sounds and images    
    function preload(){
        getBackgroundImg();        
        getTextColor();
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
        
    nameForm=new NameInput(); 
    ageForm = new AgeInput();
    database = firebase.database()
 
}

function draw(){
    

    //ageForm.updateAge()
    //Everything is displayed only when background Image is loaded
    if (backgroundImg) {

        //Draw a background
        background(backgroundImg);

        //Play sounds
    
        if (frameCount === 50) {
            responsiveVoice.speak("hello");
        }
        else if (frameCount === 150) {
            responsiveVoice.cancel();
            responsiveVoice.speak("my name is friendabot");
        }
        else if (frameCount === 250) {
            responsiveVoice.cancel();
            responsiveVoice.speak("Meet my friend Sam")
        }
        else if (frameCount === 350) {
            responsiveVoice.cancel()
            responsiveVoice.speak("Hey! Enough Introduction about ourselves! What is your name?", "Hindi Male")
        } if (frameCount === 350) {
            nameForm.display()
        }

        //Update engine
        Engine.update(engine);
        //console.log(frameCount)
        //Display cartoon friend 'friendabot'
        friend.display();
                    
        //Give texts settings
        noStroke();
        textSize(20)
        if (frameCount > 250)
            friend2.display();
        //nameForm.updateName()
        //ageForm.updateAge()
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
function updateDetails() {
    database.ref(userIndex).set({
        Name: name,
        Age: age
    })
}