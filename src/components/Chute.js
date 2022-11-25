export default function Chute({usrGuessBtState, setUsrGuessBtState, setGameWord, gameWord, setGameWordHidden, gameWordHidden, setGameIsOver, setHangManImg, finalHangMan, setUserWonGame, setGameHasStarted}) {

    function testGuess(event) {
        const userGuessInput = event.currentTarget.parentElement.childNodes[1]
        const userGuess = userGuessInput.value
        console.log('test');
        console.log(userGuess===gameWord);
        return (userGuess===gameWord)?(rightGuess(userGuessInput)):(wrongGuess(userGuessInput))
    }

    function rightGuess(userGuessInput) {
        let gameWordCounter = -1
        const gameWordArr = Array.from(gameWord)

        gameWordHidden = (Array.from(gameWordHidden)).map((char) => {
            if(char!==" ") {
                gameWordCounter++
                return gameWordArr[gameWordCounter]
            } 
            return char
        })   
        setGameWordHidden(gameWordHidden.toString().replaceAll(',',''))     
        setUsrGuessBtState(true)
        userGuessInput.value = ''
        checkIfGameIsOver();  
    }

    function wrongGuess(userGuessInput) {
        setGameHasStarted(false)
        setGameIsOver(true)
        setUsrGuessBtState(true)
        setGameWordHidden('')
        setGameWord('')
        setHangManImg(finalHangMan)
        userGuessInput.value = ''        
    }

    function checkIfGameIsOver() {
        if(!(Array.from(gameWordHidden).includes('_'))) {
            setGameHasStarted(false)
            setGameIsOver(true)
            setUsrGuessBtState(true)
            setUserWonGame(true)
            console.log('game is over');
        }
    }

    return (
        <>
            <footer className="chute-usuario">
                <p>Já sei a palavra!</p>
                <input disabled={usrGuessBtState}></input>
                <button onClick={testGuess}>
                    <p>Chutar</p>
                </button>
            </footer>
        </>
    );
}