import React from 'react'
import {useState} from 'react';

export default function Forca() {    

    const hangManImgErrors = [
        "assets/imgs/forca0.png",
        "assets/imgs/forca1.png",
        "assets/imgs/forca2.png",
        "assets/imgs/forca3.png",
        "assets/imgs/forca4.png",
        "assets/imgs/forca5.png",
        "assets/imgs/forca6.png"
    ]

    const [hangManImg, setHangManImg] = useState(hangManImgErrors[0])

    return (
        <>
            <figure className='forca'>
                <img src={hangManImg}/>
            </figure>
        </>
    );
}