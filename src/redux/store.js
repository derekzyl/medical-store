import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
// import { navbarReducer } from "./navbar-toggle/navbar_toggle_reducer"
import rootReducer from "./root_reducer"

 const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

 export default store