import Axios from "./axios";

const signInsystemuser = (SystemUser) =>{
  return Axios.post("/SystemUserLogin", SystemUser);
};

const SystemUser = {
   
    signInsystemuser

  };
    
  export default SystemUser;