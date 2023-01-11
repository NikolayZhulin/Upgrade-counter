import {CounterActionsType, setCountAC, setMaxValueAC, setStartValueAC} from "../ActionCreators/CounterActionCreators";
import {ThunkAction} from "redux-thunk";

export type CounterStateType = {
    counterState: counterInformationStateType;
}

export type counterInformationStateType = {
    startValue: number;
    maxValue: number;
    count: number;
    editMode: boolean;
}

const initialCounterState: CounterStateType = {
    counterState: {
        startValue: 0,
        maxValue: 5,
        count: 0,
        editMode: false,
    }
}

export const INCREASE_COUNT = 'INCREASE_COUNT';
export const RESET_COUNT = 'RESET_COUNT';
export const SET_EDIT_MODE = 'SET_EDIT_MODE';
export const SET_START_VALUE = 'SET_START_VALUE';
export const SET_MAX_VALUE = 'SET_MAX_VALUE';
export const SET_COUNT = 'SET_COUNT';


export const counterReducer = (state: CounterStateType = initialCounterState, action: CounterActionsType) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return {...state, counterState: {...state.counterState, count: state.counterState.count + 1}}
        case RESET_COUNT:
            return {...state, counterState: {...state.counterState, count: action.payload.startValue}}
        case SET_EDIT_MODE:
            return {...state, counterState: {...state.counterState, editMode: action.payload.editMode}}
        case SET_START_VALUE:
            return {...state, counterState: {...state.counterState, startValue: action.payload.value}}
        case SET_MAX_VALUE:
            return {...state, counterState: {...state.counterState, maxValue: action.payload.value}}
        case SET_COUNT:
            return {...state, counterState: {...state.counterState, count: action.payload.count}}
        default:
            return state;
    }
}



export const getInitialValuesFromLC = () => (dispatch:any):void => {

    let maxVal = localStorage.getItem('maxValue');
    let startVal = localStorage.getItem('startValue');

    maxVal && dispatch(setMaxValueAC(+JSON.parse(maxVal)));

    startVal
    && dispatch(setStartValueAC(+JSON.parse(startVal)))
    && dispatch(setCountAC(+JSON.parse(startVal)));
}
