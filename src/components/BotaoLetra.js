import {useEffect, useState} from 'react'

export default function BotaoLetra({letter, letterState, gameWord, gameWordHidden, setGameWordHidden, gameHasStarted, numberOfErrors, setNumberOfErrors, setHangManImg, hangManImgErrors, gameIsOver}) {
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false); 

    function removeFirstAndLastSpaces(arr) {
        arr.pop()
        arr.shift()
        return arr
    }

    function lookForLetterInWord(wordToUpdate, letter) {
        return wordToUpdate.map((wordLetter) => {
            return((wordLetter !== letter.toLowerCase() && wordLetter !== ' ') ? '_' : wordLetter)
        })
    }

    function checkGuess() {
        const guessIsRight = Array.from(gameWord).includes(letter.toLowerCase());
        if(guessIsRight) {
            let wordToUpdate = Array.from(gameWord.replaceAll('',' '))
            let currentWordDisplay = Array.from(gameWordHidden)

            removeFirstAndLastSpaces(wordToUpdate)
            
            wordToUpdate = lookForLetterInWord(wordToUpdate,letter)

            currentWordDisplay = currentWordDisplay.map((currentWordLetter,index) => {
                return (((currentWordLetter === wordToUpdate[index]) ||
                         (wordToUpdate[index] === "_" && currentWordLetter !== '_'))
                         ? currentWordLetter : wordToUpdate[index])
            })
            setGameWordHidden(currentWordDisplay.toString().replaceAll(',',''));            
        } else {
            setNumberOfErrors(numberOfErrors+1);
        }
    }

    // updates the hangman image
    useEffect(() => {
        setHangManImg(hangManImgErrors[numberOfErrors]) 
    },[numberOfErrors])

    return(
        <button key={letter} 
                className={(letterState) + (buttonIsDisabled ? "desativado" : "") + (gameIsOver ? "desativado" : "")} 
                onClick={() => {
                    if(!gameHasStarted || gameIsOver) {
                        return
                    }
                    setButtonIsDisabled(true)
                    checkGuess()
                }}
        >
            {letter}
        </button>
    );
}