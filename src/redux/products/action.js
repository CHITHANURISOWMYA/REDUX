

export const allProducts=(data)=>{
    return{
        type:"ALL_PRODUCTS_SUCCESS",
        payload:data
    }
}

export const addCartProducts=()=>{
    return{
        type:"ADD_CART"
    } 
}

export const error=()=>{
    return {
        type:"API_ERROR"
    }
}