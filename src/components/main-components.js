import React from "react";
import HomeComponent from "./home-component";
import Overlay from "./overlay";
import PageLoader from "./page-loader";
import SideBar from "./side-bar";

import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/css/style.css";
import GoogleFontLoader from "react-google-font-loader";
import Navbar from "./navbar";
import { connect } from "react-redux";

class MainComponents extends React.Component {
  
  render() {
    // if (window.screen.width > 750) {
    //   document.getElementById("root").className = this.navbarOff ?'theme-red ls-closed': 'theme-red ls-closed overlay-open';
    // } else if (window.screen < 750){
    // }
    document.getElementById("root").className = (window.screen.width < 750)? (this.props.navbarOpen ?'theme-red ls-closed overlay-open': 'theme-red ls-closed'): 'theme-red '

    return (
      <React.Fragment>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, "400i"],
            },
          ]}
          subsets={["latin", "cyrillic-text"]}
        />
         <GoogleFontLoader
          fonts={[
            {
              font: "Material+Icons",
            },
          ]}
          subsets={["cyrillic-ext", "greek"]}
        />
        <Overlay />
        <Navbar/>
        <SideBar />
        <HomeComponent />
        {this.props.navbarOpen?<div>hello</div>:<div>hi</div>}
          

        <PageLoader />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state =>{
  return {
    navbarOpen: state.nav.navbarOpen
  }
}
export default connect(mapStateToProps)(MainComponents);
