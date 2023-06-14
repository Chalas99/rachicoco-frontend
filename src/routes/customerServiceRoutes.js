import Axios from "./axios";

const signUpCustomer = (customer) => {
  return Axios.post("/signup", customer);
};

const signInCustomer = (customer) =>{
  return Axios.post("/signin", customer);
};

const CustomerService = {
    signUpCustomer,
    signInCustomer

  };
    
  export default CustomerService;