import s from './SetValueInput.module.css'
import {useState} from "react";


type SetValueInputPropsType = {
    name: string;
    onChange:(value: string)=>void
    value:number
}

export const SetValueInput = (props: SetValueInputPropsType) => {

    return (
        <div className={s.setValue_wrapper}>
            <span>{props.name}:</span>
            <input
                value={props.value}
                onChange={(e) => props.onChange(e.currentTarget.value)}
                className={+props.value < 0
                    ? s.error_input
                    : ''}
                type="number"/>
        </div>
    )
}