import React from "react";

import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/css/style.css";
import GoogleFontLoader from "react-google-font-loader";
import usericon from 'adminbsb-materialdesign/images/user.png'
import { connect } from "react-redux";
import { overlayAction } from "../redux";
class SideBar extends React.Component{
constructor(props){
    super(props)
    this.divref = React.createRef()
}


    componentDidMount(){
        document.addEventListener("mousedown", this.handleMouseClick, false)
    }
    componentWillUnmount(){
        document.addEventListener("mousedown", this.handleMouseClick, true)

    }

    handleMouseClick=(event)=>{
if(event.target === this.divref.current){
    return
}
else{
    return !this.overlayer
}
    }
    render(){

     
    return(

            <section>
        {/*<!-- Left Sidebar -->*/}
        <aside id="leftsidebar" className="sidebar">
            {/*<!-- User Info -->*/}
            <div className="user-info">
                <div className="image">
                    <img src={usericon} width="48" height="48" alt="User"/>
                </div>
                <div className="info-container">
                    <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                    <div className="email">john.doe@example.com</div>
                    <div className={this.props.overlayer?"btn-group user-helper-dropdown ": "btn-group user-helper-dropdown open"}>
                        <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={this.props.overlayAction} ref={this.divref}>keyboard_arrow_down</i>
                        <ul className="dropdown-menu pull-right">
                            
                            
                            
                            
                            
                            
                            <li><a href="j#" className=" waves-effect waves-block"><i className="material-icons">input</i>Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*<!-- #User Info -->*/}
            {/*<!-- Menu -->*/}
            <div className="menu">
           
                <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '712px'}}>

                    <ul className="list" style={{overflow: 'hidden', width: 'auto', height: '712px'}}>
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="active">
                        <a href="index.html" className="toggled waves-effect waves-block">
                            <i className="material-icons">home</i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/typography.html" className=" waves-effect waves-block">
                            <i className="material-icons">text_fields</i>
                            <span>Typography</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/helper-classes.html" className=" waves-effect waves-block">
                            <i className="material-icons">layers</i>
                            <span>Helper Classes</span>
                        </a>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">widgets</i>
                            <span>Widgets</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="j#" className="menu-toggle waves-effect waves-block">
                                    <span>Cards</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/widgets/cards/basic.html" className=" waves-effect waves-block">Basic</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/cards/colored.html" className=" waves-effect waves-block">Colored</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/cards/no-header.html" className=" waves-effect waves-block">No Header</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="j#" className="menu-toggle waves-effect waves-block">
                                    <span>Infobox</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-1.html" className=" waves-effect waves-block">Infobox-1</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-2.html" className=" waves-effect waves-block">Infobox-2</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-3.html" className=" waves-effect waves-block">Infobox-3</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-4.html" className=" waves-effect waves-block">Infobox-4</a>
                                    </li>
                                    <li>
                                        <a href="pages/widgets/infobox/infobox-5.html" className=" waves-effect waves-block">Infobox-5</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">swap_calls</i>
                            <span>User Interface (UI)</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="pages/ui/alerts.html" className=" waves-effect waves-block">Alerts</a>
                            </li>
                            <li>
                                <a href="pages/ui/animations.html" className=" waves-effect waves-block">Animations</a>
                            </li>
                            <li>
                                <a href="pages/ui/badges.html" className=" waves-effect waves-block">Badges</a>
                            </li>

                            <li>
                                <a href="pages/ui/breadcrumbs.html" className=" waves-effect waves-block">Breadcrumbs</a>
                            </li>
                            <li>
                                <a href="pages/ui/buttons.html" className=" waves-effect waves-block">Buttons</a>
                            </li>
                            <li>
                                <a href="pages/ui/collapse.html" className=" waves-effect waves-block">Collapse</a>
                            </li>
                            <li>
                                <a href="pages/ui/colors.html" className=" waves-effect waves-block">Colors</a>
                            </li>
                            <li>
                                <a href="pages/ui/dialogs.html" className=" waves-effect waves-block">Dialogs</a>
                            </li>
                            <li>
                                <a href="pages/ui/icons.html" className=" waves-effect waves-block">Icons</a>
                            </li>
                            <li>
                                <a href="pages/ui/labels.html" className=" waves-effect waves-block">Labels</a>
                            </li>
                            <li>
                                <a href="pages/ui/list-group.html" className=" waves-effect waves-block">List Group</a>
                            </li>
                            <li>
                                <a href="pages/ui/media-object.html" className=" waves-effect waves-block">Media Object</a>
                            </li>
                            <li>
                                <a href="pages/ui/modals.html" className=" waves-effect waves-block">Modals</a>
                            </li>
                            <li>
                                <a href="pages/ui/notifications.html" className=" waves-effect waves-block">Notifications</a>
                            </li>
                            <li>
                                <a href="pages/ui/pagination.html" className=" waves-effect waves-block">Pagination</a>
                            </li>
                            <li>
                                <a href="pages/ui/preloaders.html" className=" waves-effect waves-block">Preloaders</a>
                            </li>
                            <li>
                                <a href="pages/ui/progressbars.html" className=" waves-effect waves-block">Progress Bars</a>
                            </li>
                            <li>
                                <a href="pages/ui/range-sliders.html" className=" waves-effect waves-block">Range Sliders</a>
                            </li>
                            <li>
                                <a href="pages/ui/sortable-nestable.html" className=" waves-effect waves-block">Sortable &amp; Nestable</a>
                            </li>
                            <li>
                                <a href="pages/ui/tabs.html" className=" waves-effect waves-block">Tabs</a>
                            </li>
                            <li>
                                <a href="pages/ui/thumbnails.html" className=" waves-effect waves-block">Thumbnails</a>
                            </li>
                            <li>
                                <a href="pages/ui/tooltips-popovers.html" className=" waves-effect waves-block">Tooltips &amp; Popovers</a>
                            </li>
                            <li>
                                <a href="pages/ui/waves.html" className=" waves-effect waves-block">Waves</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">assignment</i>
                            <span>Forms</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="pages/forms/basic-form-elements.html" className=" waves-effect waves-block">Basic Form Elements</a>
                            </li>
                            <li>
                                <a href="pages/forms/advanced-form-elements.html" className=" waves-effect waves-block">Advanced Form Elements</a>
                            </li>
                            <li>
                                <a href="pages/forms/form-examples.html" className=" waves-effect waves-block">Form Examples</a>
                            </li>
                            <li>
                                <a href="pages/forms/form-validation.html" className=" waves-effect waves-block">Form Validation</a>
                            </li>
                            <li>
                                <a href="pages/forms/form-wizard.html" className=" waves-effect waves-block">Form Wizard</a>
                            </li>
                            <li>
                                <a href="pages/forms/editors.html" className=" waves-effect waves-block">Editors</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">view_list</i>
                            <span>Tables</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="pages/tables/normal-tables.html" className=" waves-effect waves-block">Normal Tables</a>
                            </li>
                            <li>
                                <a href="pages/tables/jquery-datatable.html" className=" waves-effect waves-block">Jquery Datatables</a>
                            </li>
                            <li>
                                <a href="pages/tables/editable-table.html" className=" waves-effect waves-block">Editable Tables</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">perm_media</i>
                            <span>Medias</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="pages/medias/image-gallery.html" className=" waves-effect waves-block">Image Gallery</a>
                            </li>
                            <li>
                                <a href="pages/medias/carousel.html" className=" waves-effect waves-block">Carousel</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">pie_chart</i>
                            <span>Charts</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="pages/charts/morris.html" className=" waves-effect waves-block">Morris</a>
                            </li>
                            <li>
                                <a href="pages/charts/flot.html" className=" waves-effect waves-block">Flot</a>
                            </li>
                            <li>
                                <a href="pages/charts/chartjs.html" className=" waves-effect waves-block">ChartJS</a>
                            </li>
                            <li>
                                <a href="pages/charts/sparkline.html" className=" waves-effect waves-block">Sparkline</a>
                            </li>
                            <li>
                                <a href="pages/charts/jquery-knob.html" className=" waves-effect waves-block">Jquery Knob</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">content_copy</i>
                            <span>Example Pages</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="pages/examples/profile.html" className=" waves-effect waves-block">Profile</a>
                            </li>
                            <li>
                                <a href="pages/examples/sign-in.html" className=" waves-effect waves-block">Sign In</a>
                            </li>
                            <li>
                                <a href="pages/examples/sign-up.html" className=" waves-effect waves-block">Sign Up</a>
                            </li>
                            <li>
                                <a href="pages/examples/forgot-password.html" className=" waves-effect waves-block">Forgot Password</a>
                            </li>
                            <li>
                                <a href="pages/examples/blank.html" className=" waves-effect waves-block">Blank Page</a>
                            </li>
                            <li>
                                <a href="pages/examples/404.html" className=" waves-effect waves-block">404 - Not Found</a>
                            </li>
                            <li>
                                <a href="pages/examples/500.html" className=" waves-effect waves-block">500 - Server Error</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">map</i>
                            <span>Maps</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="pages/maps/google.html" className=" waves-effect waves-block">Google Map</a>
                            </li>
                            <li>
                                <a href="pages/maps/yandex.html" className=" waves-effect waves-block">YandexMap</a>
                            </li>
                            <li>
                                <a href="pages/maps/jvectormap.html" className=" waves-effect waves-block">jVectorMap</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="j#" className="menu-toggle waves-effect waves-block">
                            <i className="material-icons">trending_down</i>
                            <span>Multi Level Menu</span>
                        </a>
                        <ul className="ml-menu">
                            <li>
                                <a href="j#" className=" waves-effect waves-block">
                                    <span>Menu Item</span>
                                </a>
                            </li>
                            <li>
                                <a href="j#" className=" waves-effect waves-block">
                                    <span>Menu Item - 2</span>
                                </a>
                            </li>
                            <li>
                                <a href="j#" className="menu-toggle waves-effect waves-block">
                                    <span>Level - 2</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="j#" className=" waves-effect waves-block">
                                            <span>Menu Item</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="j#" className="menu-toggle waves-effect waves-block">
                                            <span>Level - 3</span>
                                        </a>
                                        <ul className="ml-menu">
                                            <li>
                                                <a href="j#" className=" waves-effect waves-block">
                                                    <span>Level - 4</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="pages/changelogs.html" className=" waves-effect waves-block">
                            <i className="material-icons">update</i>
                            <span>Changelogs</span>
                        </a>
                    </li>
                    <li className="header">LABELS</li>
                    <li>
                        <a href="j#" className=" waves-effect waves-block">
                            <i className="material-icons col-red">donut_large</i>
                            <span>Important</span>
                        </a>
                    </li>
                    <li>
                        <a href="j#" className=" waves-effect waves-block">
                            <i className="material-icons col-amber">donut_large</i>
                            <span>Warning</span>
                        </a>
                    </li>
                    <li>
                        <a href="j#" className=" waves-effect waves-block">
                            <i className="material-icons col-light-blue">donut_large</i>
                            <span>Information</span>
                        </a>
                    </li>
                </ul><div className="slimScrollBar"
                 style={{background: 'rgba(0, 0, 0, 0.5)', width: '4px', position: 'absolute', top: '0px', opacity: '0.4', display: 'none', borderRadius: '7px', zIndex: 99, right: '1px', height: '100.5%'}}>    
                           </div>
                           <div className="slimScrollRail" style={{
                           width: '4px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius:' 0px', background: 'rgb(51, 51, 51)', opacity: 0.2, zIndex: 90, right: '1px'}}></div></div>
            </div>
            {/*<!-- #Menu -->*/}
            {/*<!-- Footer -->*/}
            <div className="legal">
                <div className="copyright">
                    © 2016 - 2017 <a href="j#">AdminBSB - Material Design</a>.
                </div>
                <div className="version">
                    <b>Version: </b> 1.0.5
                </div>
            </div>
            {/*<!-- #Footer -->*/}
        </aside>
        {/*<!-- #END# Left Sidebar -->*/}
        {/*<!-- Right Sidebar -->*/}
        
        {/*<!-- #END# Right Sidebar -->*/}
    </section>
      
    )
    }
}


const mapDispatchToProps= dispatch =>{
    return{
        overlayAction:()=>dispatch(overlayAction())
    }
}

const mapStateToProps = state =>{
    return {
      overlayer: state.overlay.overlayer
    }
  }
export default  connect(mapStateToProps, mapDispatchToProps) (SideBar)