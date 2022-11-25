import {useEffect, useState} from 'react'

export default function BotaoLetra({letter, gameWord, gameWordHidden, setGameWordHidden, gameHasStarted, numberOfErrors, setNumberOfErrors, setHangManImg, hangManImgErrors, gameIsOver, userWonGame}) {
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
            const incrementedNumberOfErrors = numberOfErrors+1;
            setNumberOfErrors(incrementedNumberOfErrors);
            setHangManImg(hangManImgErrors[incrementedNumberOfErrors]) 
        }
    }

    // disables button if game is over
    useEffect(() => {
        if(gameIsOver) {
            setButtonIsDisabled(false)
        } 
    }, [gameIsOver])

    return(
        <button key={letter} 
                className={(gameHasStarted ? "" : "desativado ") +
                           (buttonIsDisabled ? "desativado " : "") + 
                           (gameIsOver ? "desativado " : "") + 
                           (userWonGame ? "desativado " : "")} 
                onClick={() => {
                    if(!gameHasStarted || gameIsOver || userWonGame) {
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