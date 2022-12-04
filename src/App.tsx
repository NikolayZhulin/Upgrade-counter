import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {SetCounter} from "./Components/setCounter/SetCounter";

function App() {

    let [startValue, setStartValue] = useState(0);
    let [maxValue, setMaxValue] = useState(5);
    let [editMode, setEditMode] = useState(false);

    useEffect(() => {  // get and set in state start and max values from local storage
        let maxVal = localStorage.getItem('maxValue');
        let startVal = localStorage.getItem('startValue');
        maxVal && setMaxValue(JSON.parse(maxVal));
        startVal && setStartValue(JSON.parse(startVal));
    }, []);

    let setMaxValueToLocalStorage = (val: number) => { //set to local storage current max value of counter
        localStorage.setItem('maxValue', JSON.stringify(val));
        setMaxValue(val);
    }

    let setStartValueToLocalStorage = (val: number) => { //set to local storage current start value of counter
        localStorage.setItem('startValue', JSON.stringify(val));
        setStartValue(val);
    }

    return (
        <div className={s.app}>
            <SetCounter
                maxValue={maxValue}
                startValue={startValue}
                setStartValue={setStartValueToLocalStorage}
                setMaxValue={setMaxValueToLocalStorage}
                setEditMode={setEditMode}
            />
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     editMode={editMode}
            />
        </div>
    );
}

export default App;
