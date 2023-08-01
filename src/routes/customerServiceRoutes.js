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

const findAllCustomers = () =>{
  return Axios.get("/GetAllCustomers");
};

const getOrders = (cusid) =>{
  return Axios.get("/getOrders/" +cusid);
};
const CustomerService = {
    signUpCustomer,
    signInCustomer,
    supportTicket,
    addToCart,
    findAllCustomers,
    getOrders
  };
    
  export default CustomerService;