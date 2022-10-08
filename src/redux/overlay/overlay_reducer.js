import { OVERLAY } from "./overlay_type";

 

  const initState={
      overlayer : true
  }

  const overlayReducer = (state=initState, action)=>{
switch (action.type) {
    case OVERLAY:
        return{
            ...state,
            overlayer:!state.overlayer
        }
        
       

    default:
        return state
}
  }

  export default overlayReducer