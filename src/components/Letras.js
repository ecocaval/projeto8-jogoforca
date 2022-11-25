import BotaoLetra from "./BotaoLetra"

export default function Letras({gameWord, gameWordHidden, setGameWordHidden, gameHasStarted, numberOfErrors, setNumberOfErrors, setHangManImg, hangManImgErrors, gameIsOver, userWonGame}) {
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
                                    gameWord={gameWord} 
                                    gameWordHidden={gameWordHidden}
                                    setGameWordHidden={setGameWordHidden}
                                    gameHasStarted={gameHasStarted}
                                    numberOfErrors={numberOfErrors}
                                    setNumberOfErrors={setNumberOfErrors}
                                    setHangManImg={setHangManImg}
                                    hangManImgErrors={hangManImgErrors}
                                    gameIsOver={gameIsOver}
                                    userWonGame={userWonGame}
                        />
                    );
                })}
            </section>
        </main>
    );
}