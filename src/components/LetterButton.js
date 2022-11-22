import {useState} from 'react'

export default function LetterButton(props) {

    const [buttonIsDisabled, setButtonIsDisabled] = useState(false); 

    function disableButton() {
        setButtonIsDisabled(true)
    }    

    return(
        <button key={props.letter} 
                className={(props.letterState) + (buttonIsDisabled ? "disabled" : "")} 
                onClick={disableButton}
        >
            {props.letter}
        </button>
    );
}