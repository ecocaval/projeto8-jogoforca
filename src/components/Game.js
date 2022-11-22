import HangMan from './HangMan'

export default function Game() {
    return (
        <>
            <main className="game">

                <HangMan/>
                
                <aside>
                    <button className="choose-word-button">
                        <p>
                            Escolher Palavra
                        </p>
                    </button>
                    <p className="game-word">_ _ _ _ _ _ _ _ _ _</p>
                </aside>
            </main>
        </>
    );
}