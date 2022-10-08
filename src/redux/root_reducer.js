 import {combineReducers} from 'redux'
 import navbarReducer from './navbar-toggle/navbar_toggle_reducer'
import overlayReducer from './overlay/overlay_reducer'

const rootReducer = combineReducers({nav:navbarReducer, overlay: overlayReducer})
 export default rootReducer