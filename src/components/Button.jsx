import React from "react";
import { useState } from "react";


const Button = () => {
    const [btnTitle, setBtnTitle] = useState('버튼')

    return (
        <button>{btnTitle}</button>
    )
}


export default Button;