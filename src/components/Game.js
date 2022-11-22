import HangMan from './HangMan'

export default function Game(props) {
    const {startGame, gameWord} = props;
    return (
        <>
            <main className="game">
                <HangMan/>                
                <aside>
                    <button className="choose-word-button" onClick={startGame}>
                        <p>
                            Escolher Palavra
                        </p>
                    </button>
                    <p className="game-word">{gameWord}</p>
                </aside>
            </main>
        </>
    );
}