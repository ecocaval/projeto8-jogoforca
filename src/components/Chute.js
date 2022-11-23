export default function Chute(props) {
    return (
        <>
            <footer className="chute-usuario">
                <p>Já sei a palavra!</p>
                <input disabled={props.usrGuessBtState}></input>
                <button>
                    <p>Chutar</p>
                </button>
            </footer>
        </>
    );
}