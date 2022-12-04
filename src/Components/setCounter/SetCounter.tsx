import s from './Counter.module.css'
import {useState} from "react";
import {Button} from "../Button/Button";


export const Counter = () => {

    let [count, setCount] = useState<number>(0)

    const increaseCounter = () => {
        setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(0)
    }

    let finalClassName = s.count_number + (count === 5 //Нужно ли добавить красный класс
        ? ' ' + s.big_red
        : '')


    return (
        <div className={s.counter_wrapper}>
            <div className={s.count_field}>
                <span className={finalClassName}>{count}</span>
            </div>
            <div className={s.buttons_wrapper}>
                <Button name={'inc'} callback={increaseCounter} disabled={count === 5}/>
                <Button name={'reset'} callback={resetCounter} disabled={count === 0}/>
            </div>
        </div>
    )
}