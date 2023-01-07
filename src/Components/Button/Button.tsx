import s from './Button.module.css'
import React from "react";


type ButtonPropsType = {
    name: string;
    callback: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonPropsType> = (
    {
        name,
        callback,
        disabled
    }
) => {
    return (
        <button
            className={s.button}
            onClick={callback}
            disabled={disabled}
        >
            {name}
        </button>
    )
}