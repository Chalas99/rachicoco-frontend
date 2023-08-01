import Axios from "./axios";

const findAllOrders = () =>{
  return Axios.get("/Store/GetOrders");
};

const viewOrder = (id) =>{
    return Axios.get("/Store/ViewOrders/" +id);
  };


const StoreService = {
   findAllOrders,
   viewOrder

  };
    
  export default StoreService;