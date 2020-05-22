class NameInput{
    constructor(){

    }
    display(){
        var nameInput = createInput("Name")
        nameInput.position(100,340)
        var submitButton = createButton("Submit")
        submitButton.position(100,375)
        submitButton.mousePressed(function (){
            index++;
            userIndex="user"+index;
            nameInput.hide()
            submitButton.hide()
            name=nameInput.value()
            responsiveVoice.speak("Welcome! "+name);
            responsiveVoice.speak("How old are you?")
            ageForm.display()
        })
    }
    updateName(){
        database.ref(userIndex).set({
            Name:name
        })
    }

    }
    
