import Game from './components/Game'
import Letters from './components/Letters'
import UserGuess from './components/UserGuess'

export default function App() {
  return (
    <>
      <main>
        <Game/>
        <Letters/>
        <UserGuess/>
      </main>
    </>
  );
}
