import Game from './components/Game'
import Letters from './components/Letters'
import UserGuess from './components/UserGuess'
import {useState} from 'react'
import words from './words/words'

export default function App() {

  const [letterState, setletterState] = useState("disabled");
  const [usrGuessBtState, setUsrGuessBtState] = useState(true);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [gameWord, setGameWord] = useState("_ _ _ _ _ _ _ _ _ _");

  function startGame() {
      setletterState("")
      setUsrGuessBtState(false)
      setGameWord(sortWords(words,0))
  }

  function sortWords(words, sortCounter) {

    const originalWordsIndexes = [];
    const originalWords = words.slice()
   
    let shuffledWordsIndexes = [];
    let shuffledWords = [];

    for(let counter in originalWords){
      originalWordsIndexes.push(counter);
    }

    shuffledWordsIndexes = originalWordsIndexes.sort((a,b) => {
        return 0.5 - Math.random();
    })

    for(let counter in originalWords){
      shuffledWords.push(originalWords[shuffledWordsIndexes[counter]])
    }    

    if(sortCounter < ((words.length>100)?100:words.length)) {
      sortWords(words,sortCounter+1);
    }
    
    return shuffledWords[0];
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
