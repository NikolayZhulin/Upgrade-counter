import React, {useEffect} from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsForCounter} from "./Components/SettingsForCounter/SettingsForCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store/store";
import {counterInformationStateType, getInitialValuesFromLC} from "./Reducers/Counter-reducer";


function App() {


    const countValues = useSelector<AppRootState, counterInformationStateType>(state => state.counter.counterState)

    const dispatch = useDispatch()

    useEffect(() => {  // get and set in state start and max values from local storage
        // @ts-ignore
        dispatch(getInitialValuesFromLC())
    }, []);

    return (
        <div className={s.app}>
            <SettingsForCounter
                maxValue={countValues.maxValue}
                startValue={countValues.startValue}
            />
            <Counter
                maxValue={countValues.maxValue}
                startValue={countValues.startValue}
                editMode={countValues.editMode}
                count={countValues.count}
            />
        </div>
    );
}

export default App;
