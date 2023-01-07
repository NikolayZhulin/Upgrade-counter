import s from './SettingsForCounter.module.css'
import {Button} from "../Button/Button";
import {SetValueInput} from "../SetValueInput/SetValueInput";
import React from "react";

type SetCounterPropsType = {
    startValue: number;
    maxValue: number;
    setStartValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    setEditMode: (editMode: boolean) => void;
    setCount: (value: number) => void;
}

export const SettingsForCounter: React.FC<SetCounterPropsType> = (
    {
        startValue,
        maxValue,
        setStartValue,
        setMaxValue,
        setEditMode,
        setCount
    }
) => {

    const startValueSetter = (val: string) => { // turn on edit mode and set start value in state
        setEditMode(true);
        setStartValue(+val);
    }
    const maxValueSetter = (val: string) => {// turn on edit mode and set max value in state
        setEditMode(true);
         setMaxValue(+val);
    }

    const setNewValues = () =>{
        setCount(startValue)
        setEditMode(false)
    }

    return (
        <div className={s.counter_wrapper}>
            <div className={s.count_field}>
                <SetValueInput
                    name={'max value'}
                    onChange={maxValueSetter}
                    value={maxValue}
                />
                <SetValueInput
                    name={'start value'}
                    onChange={startValueSetter}
                    value={startValue}
                />
            </div>
            <div className={s.buttons_wrapper}>
                <Button name={'set'}
                        callback={setNewValues}
                        disabled={startValue < 0 || maxValue < 0 || maxValue <= startValue}/>
            </div>
        </div>
    )
}