export const intialState={
    all_Images:[],
}



export const carsouelReducer=(state=intialState,action)=>{
 switch(action.type){
    case "ALL_IMAGES":
        return{...state,all_Images:action.payload}

    default: return state
    }

}