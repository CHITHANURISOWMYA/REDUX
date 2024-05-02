import { legacy_createStore } from "redux";
import { ReducerFunction } from "./reducer";
import rootReducer from "./combiner";


 export const Redux_store=legacy_createStore(rootReducer)