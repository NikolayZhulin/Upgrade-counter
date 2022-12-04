import s from './Counter.module.css'
import React, {useEffect, useState} from "react";
import {Button} from "../Button/Button";


type CounterPropsType = {
    startValue: number;
    maxValue: number;
    editMode: boolean;
}

export const Counter: React.FC<CounterPropsType> = (
    {
        startValue,
        maxValue,
        editMode,
    }) => {
    const [count, setCount] = useState<number>(startValue);

    useEffect(() => { // set current start value in counter useState
        setCount(startValue);
    }, [startValue]);

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

