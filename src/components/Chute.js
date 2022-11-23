export default function Chute({usrGuessBtState, setUsrGuessBtState, setGameWord, gameWord, setGameWordHidden, gameWordHidden, setGameIsOver, setHangManImg, finalHangMan}) {

    function testGuess(event) {
        const footerDiv = event.currentTarget.parentElement
        const userGuess = footerDiv.childNodes[1].value
        return (userGuess===gameWord)?(rightGuess()):(wrongGuess(footerDiv))
    }

    function rightGuess() {
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
    }

    function wrongGuess(footerDiv) {
        setGameIsOver(true)
        setUsrGuessBtState(true)
        setGameWordHidden('')
        setGameWord('')
        setHangManImg(finalHangMan)
        footerDiv.childNodes[1].value = ''        
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