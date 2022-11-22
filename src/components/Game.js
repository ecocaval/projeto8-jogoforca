import HangMan from './HangMan'

export default function Game(props) {

    return (
        <>
            <main className="game">

                <HangMan/>
                
                <aside>
                    <button className="choose-word-button" onClick={props.startGame}>
                        <p>
                            Escolher Palavra
                        </p>
                    </button>
                    <p className="game-word">{props.gameWord}</p>
                </aside>
            </main>
        </>
    );
}