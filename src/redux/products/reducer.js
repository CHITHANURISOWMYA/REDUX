

 export const ProductsState={
    all_products:[],
    add_cartproducts:[],
    products_load_success:false,
    error:null
}

const productReducer=(state=ProductsState,action)=>{

    switch(action.type){

    case "ALL_PRODUCTS_SUCCESS":
            return {...state,all_products:action.payload,    products_load_success:true}
    case "ADD_CART":
        return{...state,add_cartproducts:action.payload}
    case "API_ERROR":
        return{...state,error:action.payload}
    
        default:
        return state  
    
    }
}
export default productReducer