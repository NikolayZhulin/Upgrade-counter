import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsForCounter} from "./Components/SettingsForCounter/SettingsForCounter";


function App() {

    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [count, setCount] = useState<number>(startValue);
    const [editMode, setEditMode] = useState(false);


    useEffect(() => {  // get and set in state start and max values from local storage
        let maxVal = localStorage.getItem('maxValue');
        let startVal = localStorage.getItem('startValue');
        maxVal && setMaxValue(JSON.parse(maxVal));
        startVal && setStartValue(JSON.parse(startVal));
        startVal && setCount(JSON.parse(startVal));
    }, []);


    let setMaxValueToLocalStorage = (val: number) => { //set to local storage current max value of counter
        val > 0 && localStorage.setItem('maxValue', JSON.stringify(val));
        setMaxValue(val);
    }

    let setStartValueToLocalStorage = (val: number) => { //set to local storage current start value of counter
        val > 0 && localStorage.setItem('startValue', JSON.stringify(val));
        setStartValue(val);
    }

    return (
        <div className={s.app}>
            <SettingsForCounter
                maxValue={maxValue}
                startValue={startValue}
                setStartValue={setStartValueToLocalStorage}
                setMaxValue={setMaxValueToLocalStorage}
                setEditMode={setEditMode}
                setCount={setCount}
            />
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     editMode={editMode}
                     count={count}
                     setCount={setCount}
            />
        </div>
    );
}

export default App;
