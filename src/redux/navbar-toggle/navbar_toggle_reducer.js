import { TOGGLE_ON } from "./navbar_toggle_type";

 const initialState = {
     navbarOpen:true
 }


  const navbarReducer = (state=initialState, action)=>{
switch (action.type) {
    case  TOGGLE_ON:
        return{
            ...state,
            navbarOpen:!state.navbarOpen,
           
        }
        
   

    default:
        return state
}
  }
  export default navbarReducer