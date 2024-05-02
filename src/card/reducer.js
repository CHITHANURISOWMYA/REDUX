
export const CardsState={
    all_cards:[],
    // products_load_success:false,
   
}
 export const cardReducer=(state=CardsState,action)=>{
    switch(action.type){
        case "ALL_PRODUCTS":
            return{...state,all_cards:action.payload}
            //return{...state,all_cards:[...state.all_cards,action.payload]}

    default: return state;
        
    }
}