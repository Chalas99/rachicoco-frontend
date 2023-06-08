import Axios from "./axios";

const signUpCustomer = (customer) => {
  return Axios.post("/signup", customer);
};

const CustomerService = {
    signUpCustomer
  };
  
  export default CustomerService;