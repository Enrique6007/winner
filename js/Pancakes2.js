function checkAnswer(event){
    if (event.key == 'Enter'){
        event.preventDefault();

        textValue = document.getElementById('textInput').value
        document.getElementById('textInput').value = ''
        console.log(textValue)

        if (textValue == '21'){
            //whatever you want

            console.log('o=OH IO')
        }
        else if (textValue == '19'){
            console.log('nineteen')
        }
    }

}