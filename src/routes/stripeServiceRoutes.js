import Axios from "./axios";

const checkout = (data) => {
  return Axios.post("/stripe/create-checkout-session", data);
};

const StripeService = {
    checkout
  };
    
  export default StripeService;