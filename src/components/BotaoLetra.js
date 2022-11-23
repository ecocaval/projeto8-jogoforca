import {useState} from 'react'

export default function BotaoLetra(props) {

    const {letter, letterState, gameWord, gameWordHidden, setGameWordHidden, gameHasStarted} = props;
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false); 

    function disableButton() {
        setButtonIsDisabled(true)
    }    

    function removeFirstAndLastSpaces(arr) {
        arr.pop()
        arr.shift()
        return arr
    }

    function lookForLetterInWord(wordToUpdate, letter) {
        return wordToUpdate.map((wordLetter) => {
            return((wordLetter!==letter.toLowerCase() && wordLetter!==' ')?'_':wordLetter)
        })
    }

    function checkGuess() {
        const guessIsRight = Array.from(gameWord).includes(letter.toLowerCase());

        if(guessIsRight) {
            let wordToUpdate = Array.from(gameWord.replaceAll('',' '))
            let currentWordDisplay = Array.from(gameWordHidden)
            console.log(gameWordHidden);

            removeFirstAndLastSpaces(wordToUpdate)
            
            wordToUpdate = lookForLetterInWord(wordToUpdate,letter)

            currentWordDisplay = currentWordDisplay.map((currentWordLetter,index) => {
                return (((currentWordLetter===wordToUpdate[index])||(wordToUpdate[index]==="_" && currentWordLetter!=='_'))?currentWordLetter:wordToUpdate[index])
            })
            setGameWordHidden(currentWordDisplay.toString().replaceAll(',',''));            
        }
    }

    return(
        <button key={letter} 
                className={(letterState) + (buttonIsDisabled ? "desativado" : "")} 
                onClick={() => {
                    if(!gameHasStarted) {
                        return
                    }
                    disableButton() 
                    checkGuess()
                }}
        >
            {letter}
        </button>
    );
}