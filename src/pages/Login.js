import react from "react";
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/css/style.css";
import GoogleFontLoader from "react-google-font-loader";
import AuthHandler from "../utils/auth-handler";

class Login extends react.Component {
  state = {
    username: "",
    password: "",
    showPassword: true,
    btnDisable: true,
    loginStatus: 0,
  };
  saveInputs = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    if (this.state.password !== "" && this.state.username !== "") {
      this.setState({
        btnDisable: false,
      });
    } else {
      this.setState({
        btnDisable: true,
      });
    }
  };

  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      loginStatus: 1,
    });
    AuthHandler.login({
      username: this.state.username,
      password: this.state.password,
      callBack: this.handleAjaxResponses,
    });
  };

  handleAjaxResponses = (data) => {
    if (data.error) {
      this.setState({ loginStatus: 4 });
    } else {
      this.setState({
        loginStatus: 3,
      });
    }
    console.log(data);
  };

  getThis = () => {

    switch (this.state.loginStatus) {
      case 0:
        return "";
      case 1:
        return (
          <div class="alert alert-warning">
            <strong>logging in</strong> please wait
          </div>
        );
        case 3:
          return (
            <div class="alert alert-success">
            <strong>logged in Successfully</strong> 
            </div>
        );
          case 4:
            return (
              <div class="alert alert-danger">
              <strong>invalid login credentials</strong> 
              </div>
          );
        default:
          return ''
    
  }};

  showPwrd = (e) => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    document.body.className = "login-page";
    return (
      // <body className="login-page">
      <div>
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
        <div className="login-box">
          <div className="logo"> store </div>
          <div className="card">
            <div className="body">
              <form id="sign_in" method="POST" onSubmit={this.formSubmit}>
                <div className="msg"> Sign in to start your session </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons"> person </i>
                  </span>
                  <div className="form-line">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      required
                      autofocus
                      onChange={this.saveInputs}
                    />
                  </div>
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons pe"> lock </i>
                  </span>
                  <div className="form-line">
                    <input
                      type={this.state.showPassword ? "password" : "text"}
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required
                      onChange={this.saveInputs}
                    />
                  </div>
                  <span className="input-group-addon" onClick={this.showPwrd}>
                    <i className="material-icons"> visibility </i>
                  </span>
                </div>
                <div className="row">
                  <div className="col-xs-8 p-t-5">
                    <input
                      type="checkbox"
                      name="rememberme"
                      id="rememberme"
                      className="filled-in chk-col-pink"
                    />
                    <label for="rememberme"> Remember Me </label>
                  </div>
                  <div className="col-xs-4">
                    <button
                      disabled={this.state.btnDisable ? true : false}
                      className="btn btn-block bg-pink waves-effect"
                      type="submit"
                    >
                      SIGN IN
                    </button>
                  </div>
                </div>
                <div className="row m-t-15 m-b--20">
                  <div className="col-xs-6">
                    <a href="sign-up.html"> Register Now! </a>
                  </div>
                  <div className="col-xs-6 align-right">
                    <a href="forgot-password.html"> Forgot Password ? </a>
                  </div>
                
                </div>
          
           
              </form>
              <this.getThis/>
            </div>
          </div>
        </div>
      </div>

      //     // {/* <!-- Jquery Core Js -->
      // <script src="../../plugins/jquery/jquery.min.js"></script>

      // <!-- Bootstrap Core Js -->
      // <script src="../../plugins/bootstrap/js/bootstrap.js"></script>

      // <!-- Waves Effect Plugin Js -->
      // <script src="../../plugins/node-waves/waves.js"></script>

      // <!-- Validation Plugin Js -->
      // <script src="../../plugins/jquery-validation/jquery.validate.js"></script>

      // // <!-- Custom Js --> */}
      // //     <script src="../../js/admin.js"></script>
      // //     <script src="../../js/pages/examples/sign-in.js"></script>
      //   // </body>
    );
  }
}
export default Login;
