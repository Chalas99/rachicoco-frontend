import Axios from "./axios";

const signUpCustomer = (customer) => {
  return Axios.post("/signup", customer);
};

const signInCustomer = (customer) =>{
  return Axios.post("/signin", customer);
};

const supportTicket = (customer) =>{
  return Axios.post("/supportTicket", customer);
};

const addToCart = (id) =>{
  return Axios.get("/cart", +id);
};

const CustomerService = {
    signUpCustomer,
    signInCustomer,
    supportTicket,
    addToCart
  };
    
  export default CustomerService;