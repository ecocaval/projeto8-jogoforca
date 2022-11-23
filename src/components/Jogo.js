import Forca from './Forca'

export default function Jogo({startGame, gameWord, hangManImg}) {
    return (
        <>
            <main className="jogo">
                <Forca hangManImg={hangManImg}/>                
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