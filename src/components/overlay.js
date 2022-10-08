import React from "react";
import { connect } from "react-redux";
import { toggleOnNavbar } from "../redux";

class Overlay extends React.Component{

    render(){
        return(
     
                <div className="overlay" style={{
               
                    
                    display :(window.screen.width < 750)? (this.props.navbarOpen?'block': 'none'):'none'}}></div>
        
        )
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        toggleOnNavbar:()=>dispatch( toggleOnNavbar())
    }
}

const mapStateToProps = state =>{
    return {
      navbarOpen: state.nav.navbarOpen
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Overlay)