import s from './SetValueInput.module.css'
import React from "react";


type SetValueInputPropsType = {
    name: string;
    onChange: (value: string) => void;
    value: number;
}

export const SetValueInput: React.FC<SetValueInputPropsType> = (
    {
        name,
        onChange,
        value,
    }
) => {
    return (
        <div className={s.setValue_wrapper}>
            <span>{name}:</span>
            <input
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
                className={value < 0
                    ? s.error_input
                    : ''}
                type="number"/>
        </div>
    )
}