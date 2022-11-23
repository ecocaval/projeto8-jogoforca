import {useState} from 'react'
import Jogo from './components/Jogo'
import Letras from './components/Letras'
import Chute from './components/Chute'
import words from './words/words'
import sortWords from './words/sortWords'

export default function App() {

  const [letterState, setletterState] = useState("desativado");
  const [usrGuessBtState, setUsrGuessBtState] = useState(true);
  const [gameWordHidden, setGameWordHidden] = useState("");
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [gameWord, setGameWord] = useState('');
  const [gameHasStarted, setGameHasStarted] = useState(false);

  function startGame() {
      const {sortedWord, sortedWordHidden} = sortWords(words,0)
      console.log(sortedWord);
      setletterState("")
      setUsrGuessBtState(false)
      setGameWord(sortedWord);
      setGameWordHidden(sortedWordHidden)
      setGameHasStarted(true);
  }

  return (
    <>
      <main>
        <Jogo startGame={startGame} gameWord={gameWordHidden}/>
        <Letras letterState={letterState} 
                gameWord={gameWord} 
                gameWordHidden={gameWordHidden} 
                setGameWordHidden={setGameWordHidden}
                gameHasStarted={gameHasStarted}
        />
        <Chute usrGuessBtState={usrGuessBtState}/>
      </main>
    </>
  );
}
