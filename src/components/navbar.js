
import React from "react";
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/css/style.css";
import GoogleFontLoader from "react-google-font-loader";
import { toggleOnNavbar } from "../redux";
import { connect } from "react-redux";


const Navbar = (props)=>{
        return(
       



              <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-header">
         
                <div onClick={props.toggleOnNavbar } className="bars"></div>
                <a className="navbar-brand" href="index.html">ADMINBSB - MATERIAL DESIGN  </a>
            </div>
            
        </div>
    </nav>
          
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)






