class AgeInput{
    constructor(){

    }
    display(){
        var ageInput = createInput("Age")
        ageInput.position(100,340)
        var submit1Button = createButton("Submit")
        submit1Button.position(100,375)
        submit1Button.mousePressed(function (){
            ageInput.hide()
            submit1Button.hide()
            age=ageInput.value()
            responsiveVoice.speak("Cool")
        })
    }
    updateAge(){
        database.ref(userIndex).set({
            Age:age
        })
    }
    
}
