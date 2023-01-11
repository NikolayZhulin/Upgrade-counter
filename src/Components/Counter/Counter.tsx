import s from './Counter.module.css'
import React from "react";
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {increaseCountAC, resetCountAC} from "../../ActionCreators/CounterActionCreators";



type CounterPropsType = {
    startValue: number;
    maxValue: number;
    editMode: boolean;
    count: number;
}

const MESSAGE='Enter value and press "set"'
const ERROR_MESSAGE='Incorrect value'

export const Counter: React.FC<CounterPropsType> = (
    {
        startValue,
        maxValue,
        editMode,
        count,
    }) => {

    const dispatch = useDispatch();

    const increaseCountHandler =() =>{ //increase counter value on 1
        dispatch(increaseCountAC())
    }

    const resetCountHandler =() =>{ //reset counter value for start value
        dispatch(resetCountAC(startValue))
    }

    const finalClassName = s.count_number //add red color if counter reached limit
        + (count === maxValue
            ? ' ' + s.big_red
            : '');

    const isChangeMessage = editMode && maxValue >= 0 && startValue >= 0 && maxValue > startValue
    const isIncorrectMessage = maxValue < 0 || startValue < 0 || maxValue <= startValue

    return (
        <div className={s.counter_wrapper}>

            <div className={s.count_field}>
                {!editMode && <span className={finalClassName}>{count}</span>}

                {isChangeMessage && <span>{MESSAGE}</span>}

                {isIncorrectMessage && <span className={s.red}>{ERROR_MESSAGE}</span>}
            </div>

            <div className={s.buttons_wrapper}>
                <Button name={'inc'}
                        callback={increaseCountHandler}
                        disabled={count === maxValue || editMode}
                />
                <Button
                    name={'reset'}
                    callback={resetCountHandler}
                    disabled={count === startValue || editMode}
                />
            </div>
        </div>
    )
}

