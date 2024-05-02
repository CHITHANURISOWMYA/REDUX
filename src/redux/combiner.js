import { combineReducers } from "redux";
import { ReducerFunction } from "./reducer";
import productReducer from "./products/reducer";
import formReducer from "../form/formreducer";
import { cardReducer } from "../card/reducer";
import { carsouelReducer } from "../carsousel/reducer";


const rootReducer=combineReducers({
    movieData:ReducerFunction,
    productData:productReducer,
    formsData:formReducer,
    cardData:cardReducer,
    caroselData:carsouelReducer,


})
export default rootReducer
