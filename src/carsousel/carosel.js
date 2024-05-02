import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarsouleData } from "./action";
import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@mui/material";
import { ArrowForwardIosRounded } from "@mui/icons-material";

const Carosel=()=>{
 const Data=useSelector((state)=>state.caroselData.all_Images)
 console.log(Data)
 const dispatch=useDispatch()
 
 useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>dispatch(CarsouleData(response.data)))
    .catch((err)=>err)
 },[])

    return(
        <>
       <h1></h1>
        <Carousel sx={{position:"relative",top:"30px",padding:1}}
          NavButton={({onClick, className, style, next, prev}) => {
            return (
                <Button onClick={onClick} className={className} style={style} >
                    {next && "Next"}
                    {prev && "Previous"}
                </Button>
            )
        }}
        >
        {
            Data.map((val,i)=>{
                return(<>
         <Item key={i} item={val}/>
                
                </>)
            })
        }
       
   
        </Carousel>
        
        </>
    )
}
export default Carosel;

export function Item(props)
{
    return (
        <Paper sx={{width:"100%",padding:0}}>
            <center>
            <h2>{props.item.title}</h2>
            <img src={props.item.image} alt="images" width={200}  height={200} />
            </center>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}