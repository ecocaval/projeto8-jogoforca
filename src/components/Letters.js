export default function Letters() {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J",
                      "K","L","M","N","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z"];

    return (
        <main className="letters">
            <section>
                {alphabet.map((letter) => {
                    return(
                        <button className="disabled">{letter}</button>
                    );
                })}
            </section>
        </main>
    );
}