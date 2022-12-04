import s from './Counter.module.css'
import {useEffect, useState} from "react";
import {Button} from "../Button/Button";


type CounterPropsType = {
    startValue: number
    maxValue: number
    editMode: boolean
}

export const Counter = (props: CounterPropsType) => {

    let [count, setCount] = useState<number>(props.startValue)

    useEffect(() => {
        resetCounter();
    }, [props.startValue, props.maxValue])


    const increaseCounter = () => {
        setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(props.startValue)
    }

    let finalClassName = s.count_number + (count === props.maxValue
        ? ' ' + s.big_red
        : '')


    return (
        <div className={s.counter_wrapper}>
            {!props.editMode
                && <div className={s.count_field}><span className={finalClassName}>{count}</span></div>}

            {props.editMode && props.maxValue >= 0 && props.startValue >= 0 && props.maxValue > props.startValue
                && <div className={s.count_field}><span>Enter value and press "set"</span></div>}

            {(props.maxValue < 0 || props.startValue < 0 || props.maxValue <= props.startValue)
                && <div className={s.count_field}><span className={s.red}>Incorrect value</span></div>}

            <div className={s.buttons_wrapper}>
                <Button name={'inc'} callback={increaseCounter} disabled={count === props.maxValue || props.editMode}/>
                <Button name={'reset'} callback={resetCounter} disabled={count === props.startValue || props.editMode}/>
            </div>
        </div>
    )
}