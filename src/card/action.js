export const allCards=(data)=>{
    return{
        type:"ALL_PRODUCTS",
        payload:data,
    }
}

export const error=()=>{
    return {
        type:"API_ERROR"
    }
}

