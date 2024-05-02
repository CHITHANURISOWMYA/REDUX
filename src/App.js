import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { buy_ticket} from './redux/action';
import Movie_tickets from './react-movie/salar_movie';
import ProductsList from './react-produtslist/productlist';
import Demo from './form/forms';
import Cards from './card/cards';
import Carosel from './carsousel/carosel';

function App() {


  return (
   <>
   {/* <ProductsList/> */}
   {/* <Movie_tickets/>
   <Demo/> */}
   {/* <Cards/> */}
   <Carosel/>
   
  
   </>
  )
}

export default App;
