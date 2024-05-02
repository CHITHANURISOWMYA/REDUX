
export const movieTickets={
    totalTickeks:300,
    filledTickets:200,
    unfilledTickets:100,
    holdTickets:0
}
export const ReducerFunction=(state=movieTickets,action)=>{
     switch(action.type){
        case "BUY_TICKETS":
            return {...state,filledTickets:state.filledTickets+1,unfilledTickets:state.unfilledTickets-1}
 
         case "HOLD-TICKETS":
            return{...state,holdTickets:state.holdTickets+1}

        default :return state
     }
}
