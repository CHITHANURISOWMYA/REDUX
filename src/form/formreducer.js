
const initialState={
    formDataa:{}
};

 const formReducer=(state=initialState,action)=>{
    // console.log("checkkkk",action.payload)
    switch(action.type){
       
        case "SUBMIT_FORM":
            return{
                ...state,
                formDataa:action.payload
            };
        default:
            return state;
    }
};
export default formReducer