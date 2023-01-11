import s from './SettingsForCounter.module.css'
import {Button} from "../Button/Button";
import {SetValueInput} from "../SetValueInput/SetValueInput";
import React from "react";
import {useDispatch} from "react-redux";
import {setCountAC, setEditModeAC} from "../../ActionCreators/CounterActionCreators";
import {setMaxValueInLC, setStartValueInLC} from "../../Reducers/Counter-reducer";


type SetCounterPropsType = {
    startValue: number;
    maxValue: number;
}

export const SettingsForCounter: React.FC<SetCounterPropsType> = ({
                                                                      startValue,
                                                                      maxValue,
                                                                  }) => {

    const dispatch = useDispatch();

    const startValueSetter = (val: string) => { // turn on edit mode and set start value in state
        dispatch(setEditModeAC(true))
        // @ts-ignore
        dispatch(setStartValueInLC(+val))
    }

    const maxValueSetter = (val: string) => {// turn on edit mode and set max value in state
        dispatch(setEditModeAC(true))
        // @ts-ignore
        dispatch(setMaxValueInLC(+val))
    }

    const setNewValues = () => {  //set new value for counter and turn off edit mode
        dispatch(setCountAC(startValue))
        dispatch(setEditModeAC(false))
    }

    const disabledFlag = startValue < 0 || maxValue < 0 || maxValue <= startValue;

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
                        disabled={disabledFlag}/>
            </div>
        </div>
    )
}