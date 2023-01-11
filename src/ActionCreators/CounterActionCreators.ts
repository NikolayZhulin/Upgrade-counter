import {
    INCREASE_COUNT,
    RESET_COUNT,
    SET_COUNT,
    SET_EDIT_MODE,
    SET_MAX_VALUE,
    SET_START_VALUE
} from "../Reducers/Counter-reducer";

export type CounterActionsType = increaseCountACType
    | resetCountACType
    | setEditModeACType
    | setStartValueACType
    | setMaxValueACType
    | setCountACType;

type increaseCountACType = ReturnType<typeof increaseCountAC>;
type resetCountACType = ReturnType<typeof resetCountAC>;
type setEditModeACType = ReturnType<typeof setEditModeAC>;
type setStartValueACType = ReturnType<typeof setStartValueAC>;
type setMaxValueACType = ReturnType<typeof setMaxValueAC>;
type setCountACType = ReturnType<typeof setCountAC>;

export const increaseCountAC = () => {
    return {
        type: INCREASE_COUNT
    } as const;
}

export const resetCountAC = (startValue:number) => {
    return {
        type: RESET_COUNT,
        payload:{
            startValue
        }
    } as const;
}

export const setEditModeAC = (editMode: boolean) => {
    return {
        type: SET_EDIT_MODE,
        payload: {
            editMode
        }
    } as const;
}

export const setStartValueAC = (value: number) => {
    return {
        type: SET_START_VALUE,
        payload: {
            value
        }
    } as const;
}

export const setMaxValueAC = (value: number) => {
    return {
        type: SET_MAX_VALUE,
        payload: {
            value
        }
    } as const;
}

export const setCountAC = (count: number) => {
    return {
        type: SET_COUNT,
        payload: {
            count
        }
    } as const;
}