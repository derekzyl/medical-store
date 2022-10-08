import axios from "axios";
import Config from "./config";
import {reactLocalStorage} from 'reactjs-localstorage';

class AuthHandler {
  static  async login({username, password, callBack}){


   try
   {const axe = await axios
      .post(Config.loginUrl, { username: username, password: password })

      if (axe.status === 200) {
        reactLocalStorage.set("token", axe.data.access );
        reactLocalStorage.set ("refresh", axe.data.refresh);
        callBack({
 error: false,
    message: "Successfully logged in",
    data: axe.data,
    success: true,

        });   
      }
      else{
        callBack('login failed');
      }
}
catch(error)
{

  callBack({
    error: true,
       message: "login failed, incorrect login credentials",
       data: error,
       success: false,
   
           });
}   


    //   .then(function (response) {
    //     console.log(response);
    //     if(response.status === 200){
    //       reactLocalStorage.set("token", response.data.access );
    //       reactLocalStorage.set ("refresh", response.data.refresh);
    //       callBack('login successful');
    //     }
    // //   })
    //   .catch(function (err) {
       
    //     callBack('error during login');
    //   });
  }
}
export default AuthHandler;
