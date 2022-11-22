import LetterButton from "./LetterButton"

export default function Letters(props) {
    const {letterState, gameWord, gameWordHidden, setGameWordHidden} = props;
    const alphabet = ["A","B","C","D","E","F","G","H","I","J",
                      "K","L","M","N","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z"];                   
    return (
        <main className="letters">
            <section>
                {alphabet.map((letter) => {
                    return(
                        <LetterButton key={letter} letter={letter} letterState={letterState}
                                      gameWord={gameWord} gameWordHidden={gameWordHidden}
                                      setGameWordHidden={setGameWordHidden}/>
                    );
                })}
            </section>
        </main>
    );
}