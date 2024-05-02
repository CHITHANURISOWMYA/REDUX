import { useDispatch, useSelector } from "react-redux"
import { buy_ticket, hold_ticket } from "../redux/action";

const Movie_tickets=()=>{

    const reduxstate= useSelector(state=>state.movieData)
    console.log(reduxstate);
    const dispatch=useDispatch()
   
    const buytickets=()=>{
        dispatch(buy_ticket())
    }

    const holdtickets=()=>{
        dispatch(hold_ticket())
    }
    
     
return(
        <>
      <h1>  MOIVE TICKETS</h1>
     < h1>TOTAL TICKETS : {reduxstate.totalTickeks}</h1>
      <h1>FILLED TICKETS :{reduxstate.filledTickets}</h1>
      <h1>UNFILLED TICKETS :{reduxstate.unfilledTickets}</h1>
      <h1>HOLD TICKETS :{reduxstate.holdTickets}</h1>
        <button onClick={buytickets}> BUY NOW </button>
        <button onClick={holdtickets}> HOLD </button>
        </>
    )
}
export default Movie_tickets