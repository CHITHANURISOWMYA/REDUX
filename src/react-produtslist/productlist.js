import axios from "axios";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../redux/products/action";




const ProductsList=()=>{
        const dispatch=useDispatch()

    useEffect(()=>{
        loadproducts();
    },[])

    const reduxstate2=useSelector(state=>state.productData)
    console.log(reduxstate2);
    const loadproducts=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            dispatch(allProducts(response.data))
        }).catch((error)=>(error))
    }
    return(
        <>

     <h1>products</h1>
     {
     reduxstate2.products_load_success ? reduxstate2.all_products.map(element=><h1>{element.title} </h1>): <h3>please wait</h3>
     
     }
        </>
    )
}
export default ProductsList