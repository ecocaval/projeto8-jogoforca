import GameDisplay from './components/GameDisplay'
import GameKeyboard from './components/GameKeyboard'
import GameUserGuess from './components/GameUserGuess'

export default function App() {
  return (
    <>
      <main>
        <GameDisplay/>
        <GameKeyboard/>
        <GameUserGuess/>
      </main>
    </>
  );
}
