import Game from './components/Game'
import Letters from './components/Letters'
import UserGuess from './components/UserGuess'
import {useState} from 'react'

export default function App() {

  const [letterState, setletterState] = useState("disabled");
  const [usrGuessBtState, setUsrGuessBtState] = useState(true);

  function startGame() {
      setletterState("")
      setUsrGuessBtState(false)
  }

  return (
    <>
      <main>
        <Game startGame={startGame}/>
        <Letters letterState={letterState}/>
        <UserGuess usrGuessBtState={usrGuessBtState}/>
      </main>
    </>
  );
}
