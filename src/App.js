import {useState} from 'react'
import Game from './components/Game'
import Letters from './components/Letters'
import UserGuess from './components/UserGuess'
import words from './words/words'
import sortWords from './words/sortWords'

export default function App() {

  const [letterState, setletterState] = useState("disabled");
  const [usrGuessBtState, setUsrGuessBtState] = useState(true);
  const [gameWordHidden, setGameWordHidden] = useState("");
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [gameWord, setGameWord] = useState('');

  function startGame() {
      const {sortedWord, sortedWordHidden} = sortWords(words,0)
      setletterState("")
      setUsrGuessBtState(false)
      setGameWord(sortedWord);
      setGameWordHidden(sortedWordHidden)
      console.log(sortedWord);
  }

  return (
    <>
      <main>
        <Game startGame={startGame} gameWord={gameWordHidden}/>
        <Letters letterState={letterState} gameWord={gameWord} gameWordHidden={gameWordHidden} setGameWordHidden={setGameWordHidden}/>
        <UserGuess usrGuessBtState={usrGuessBtState}/>
      </main>
    </>
  );
}
