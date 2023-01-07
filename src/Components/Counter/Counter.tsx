import s from './Counter.module.css'
import React from "react";
import {Button} from "../Button/Button";



type CounterPropsType = {
    startValue: number;
    maxValue: number;
    editMode: boolean;
    count: number;
    setCount: (value: number) => void
}

export const Counter: React.FC<CounterPropsType> = (
    {
        startValue,
        maxValue,
        editMode,
        count,
        setCount
    }) => {

    const finalClassName = s.count_number //add red color if counter reached limit
        + (count === maxValue
            ? ' ' + s.big_red
            : '');

    return (
        <div className={s.counter_wrapper}>
            {!editMode
                && <div className={s.count_field}><span className={finalClassName}>{count}</span></div>}

            {editMode && maxValue >= 0 && startValue >= 0 && maxValue > startValue
                && <div className={s.count_field}><span>Enter value and press "set"</span></div>}

            {(maxValue < 0 || startValue < 0 || maxValue <= startValue)
                && <div className={s.count_field}><span className={s.red}>Incorrect value</span></div>}

            <div className={s.buttons_wrapper}>
                <Button name={'inc'}
                        callback={() => setCount(count + 1)}
                        disabled={count === maxValue || editMode}
                />
                <Button
                    name={'reset'}
                    callback={() => setCount(startValue)}
                    disabled={count === startValue || editMode}
                />
            </div>
        </div>
    )
}

