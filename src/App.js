import Game from './components/Game'
import Letters from './components/Letters'
import UserGuess from './components/UserGuess'
import {useState} from 'react'
import words from './words/words'

export default function App() {

  const [letterState, setletterState] = useState("disabled");
  const [usrGuessBtState, setUsrGuessBtState] = useState(true);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [gameWord, setGameWord] = useState("");

  function startGame() {
      setletterState("")
      setUsrGuessBtState(false)
      setGameWord(sortWords(words,0).sortedWordHidden)
  }

  function sortWords(words, sortCounter) {

    const originalWordsIndexes = [];
    const originalWords = words.slice()
   
    let shuffledWordsIndexes = [];
    let shuffledWords = [];

    originalWords.forEach((_,index) => {
      originalWordsIndexes.push(index);
    })

    shuffledWordsIndexes = originalWordsIndexes.sort((a,b) => {
        return 0.5 - Math.random();
    })

    originalWords.forEach((_,index) => {
      shuffledWords.push(originalWords[shuffledWordsIndexes[index]])
    })

    if(sortCounter < ((words.length>100)?100:words.length)) {
      sortWords(words,sortCounter+1);
    }

    // returns the original word and it's sorted version
    return ({
      sortedWord: shuffledWords[0],
      sortedWordHidden: shuffledWords[0].replace(/./g, '_ ')
    }) ;
  }

  return (
    <>
      <main>
        <Game startGame={startGame} gameWord={gameWord}/>
        <Letters letterState={letterState}/>
        <UserGuess usrGuessBtState={usrGuessBtState}/>
      </main>
    </>
  );
}
