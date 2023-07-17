import Axios from "./axios";

const signInsystemuser = (SystemUser) =>{
  return Axios.post("/SystemUserLogin", SystemUser);
};

const createSystemUser = (systemUser) =>{
  return Axios.post("/Sysuser/AddUser", systemUser);
};
const SystemUserService = {
   
    signInsystemuser,
    createSystemUser


  };
    
  export default SystemUserService;