import {useEffect, useState} from 'react'
import Jogo from './components/Jogo'
import Letras from './components/Letras'
import Chute from './components/Chute'
import words from './words/words'
import sortWords from './words/sortWords'

export default function App() {

  const hangManImgErrors = [
    "assets/imgs/forca0.png",
    "assets/imgs/forca1.png",
    "assets/imgs/forca2.png",
    "assets/imgs/forca3.png",
    "assets/imgs/forca4.png",
    "assets/imgs/forca5.png",
    "assets/imgs/forca6.png"
  ] 

  const [letterState, setletterState] = useState("desativado")
  const [usrGuessBtState, setUsrGuessBtState] = useState(true)
  const [gameWordHidden, setGameWordHidden] = useState("")
  const [gameWord, setGameWord] = useState('')
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [gameIsOver, setGameIsOver] = useState(false)
  const [numberOfErrors, setNumberOfErrors] = useState(0)
  const [hangManImg, setHangManImg] = useState(hangManImgErrors[0])
  const [userWonGame, setUserWonGame] = useState(false) 

  function startGame() {
      const {sortedWord,sortedWordHidden} = sortWords(words,0)
      console.log(sortedWord)
      setletterState("")
      setUsrGuessBtState(false)
      setGameWord(sortedWord)
      setGameWordHidden(sortedWordHidden)
      setGameHasStarted(true)
      setGameIsOver(false)
      setUserWonGame(false)
      setNumberOfErrors(0)
  }

  return (
    <>
      <main>
        <Jogo startGame={startGame} 
              gameWord={gameWordHidden}
              hangManImg={hangManImg}
        />
        <Letras letterState={letterState} 
                gameWord={gameWord} 
                gameWordHidden={gameWordHidden} 
                setGameWordHidden={setGameWordHidden} 
                gameHasStarted={gameHasStarted}
                numberOfErrors={numberOfErrors}
                setNumberOfErrors={setNumberOfErrors}
                setHangManImg={setHangManImg}
                hangManImgErrors={hangManImgErrors}
                gameIsOver={gameIsOver}
                userWonGame={userWonGame}
        />
        <Chute usrGuessBtState={usrGuessBtState}
               setUsrGuessBtState={setUsrGuessBtState}
               setGameWord={setGameWord}
               gameWord={gameWord}
               setGameWordHidden={setGameWordHidden}
               gameWordHidden={gameWordHidden}
               setGameIsOver={setGameIsOver}
               setHangManImg={setHangManImg}
               finalHangMan={hangManImgErrors[hangManImgErrors.length-1]}
               setUserWonGame={setUserWonGame}
        />
      </main>
    </>
  );
}
