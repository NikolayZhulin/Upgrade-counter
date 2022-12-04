import s from './SetCounter.module.css'
import {Button} from "../Button/Button";
import {SetValueInput} from "../SetValueInput/SetValueInput";
import React from "react";

type SetCounterPropsType = {
    startValue: number;
    maxValue: number;
    setStartValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    setEditMode: (editMode: boolean) => void;
}

export const SetCounter: React.FC<SetCounterPropsType> = (
    {
        startValue,
        maxValue,
        setStartValue,
        setMaxValue,
        setEditMode,
    }
) => {

    const StartValueSetter = (val: string) => { // turn on edit mode and set start value in state
        setEditMode(true);
        setStartValue(+val);
    }
    const MaxValueSetter = (val: string) => {// turn on edit mode and set max value in state
        setEditMode(true);
        setMaxValue(+val);
    }

    return (
        <div className={s.counter_wrapper}>
            <div className={s.count_field}>
                <SetValueInput
                    name={'max value'}
                    onChange={MaxValueSetter}
                    value={maxValue}
                />
                <SetValueInput
                    name={'start value'}
                    onChange={StartValueSetter}
                    value={startValue}
                />
            </div>
            <div className={s.buttons_wrapper}>
                <Button name={'set'}
                        callback={() => setEditMode(false)}
                        disabled={startValue < 0 || maxValue < 0 || maxValue <= startValue}/>
            </div>
        </div>
    )
}