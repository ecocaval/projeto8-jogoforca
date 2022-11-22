import LetterButton from "./LetterButton"

export default function Letters(props) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J",
                      "K","L","M","N","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z"];                   
    return (
        <main className="letters">
            <section>
                {alphabet.map((letter) => {
                    return(
                        <LetterButton letter={letter} letterState={props.letterState}/>
                    );
                })}
            </section>
        </main>
    );
}