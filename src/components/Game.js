import HangMan from './HangMan'
import {useState} from 'react'

export default function Game(props) {

    const [gameWord, setGameWord] = useState("_ _ _ _ _ _ _ _ _ _");

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
                    <p className="game-word">{gameWord}</p>
                </aside>
            </main>
        </>
    );
}