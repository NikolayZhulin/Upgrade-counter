import {counterReducer} from "../Reducers/Counter-reducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
    counter: counterReducer
})
export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))