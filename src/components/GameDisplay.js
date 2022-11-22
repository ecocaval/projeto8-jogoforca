import HangMan from './HangMan'
import ChooseWordButton from './ChooseWordButton'
import GameWord from './GameWord'


export default function GameDisplay() {
    return (
        <>
            <main className="game-display">
                <HangMan/>
                <aside>
                    <ChooseWordButton/>
                    <GameWord/>
                </aside>
            </main>
        </>
    );
}