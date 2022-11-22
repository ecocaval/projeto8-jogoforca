export default function UserGuess(props) {
    return (
        <>
            <footer className="user-guess">
                <p>Já sei a palavra!</p>
                <input disabled={props.usrGuessBtState}></input>
                <button>
                    <p>Chutar</p>
                </button>
            </footer>
        </>
    );
}