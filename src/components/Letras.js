import BotaoLetra from "./BotaoLetra"

export default function Letras({letterState, gameWord, gameWordHidden, setGameWordHidden, gameHasStarted, numberOfErrors, setNumberOfErrors, setHangManImg, hangManImgErrors, gameIsOver}) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J",
                      "K","L","M","N","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z"];                   
    return (
        <main className="letras">
            <section>
                {alphabet.map((letter) => {
                    return(
                        <BotaoLetra key={letter} 
                                    letter={letter} 
                                    letterState={letterState}
                                    gameWord={gameWord} 
                                    gameWordHidden={gameWordHidden}
                                    setGameWordHidden={setGameWordHidden}
                                    gameHasStarted={gameHasStarted}
                                    numberOfErrors={numberOfErrors}
                                    setNumberOfErrors={setNumberOfErrors}
                                    setHangManImg={setHangManImg}
                                    hangManImgErrors={hangManImgErrors}
                                    gameIsOver={gameIsOver}
                        />
                    );
                })}
            </section>
        </main>
    );
}