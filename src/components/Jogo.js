import Forca from './Forca'

export default function Jogo(props) {
    const {startGame, gameWord} = props;
    return (
        <>
            <main className="jogo">
                <Forca/>                
                <aside>
                    <button className="bota-escolha-palavra" onClick={startGame}>
                        <p>
                            Escolher Palavra
                        </p>
                    </button>
                    <p className="palavra-jogo">{gameWord}</p>
                </aside>
            </main>
        </>
    );
}