import s from './SetCounter.module.css'
import {useState} from "react";
import {Button} from "../Button/Button";
import {SetValueInput} from "../SetValueInput/SetValueInput";

type SetCounterPropsType = {
    startValue: number;
    maxValue: number;
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setEditMode:(editMode:boolean)=>void
}

export const SetCounter = (props: SetCounterPropsType) => {


    const addStartValue = (val: string) => {
        props.setEditMode(true)
        props.setStartValue(+val)
    }
    const addMaxValue = (val: string) => {
        props.setEditMode(true)
        props.setMaxValue(+val)
    }

    return (
        <div className={s.counter_wrapper}>
            <div className={s.count_field}>
                <SetValueInput
                    name={'max value'}
                    onChange={addMaxValue}
                    value={props.maxValue}
                />
                <SetValueInput
                    name={'start value'}
                    onChange={addStartValue}
                    value={props.startValue}
                />
            </div>
            <div className={s.buttons_wrapper}>
                <Button name={'set'}
                        callback={()=>props.setEditMode(false)}
                        disabled={props.startValue < 0 || props.maxValue < 0 || props.maxValue <= props.startValue}/>
            </div>
        </div>
    )
}