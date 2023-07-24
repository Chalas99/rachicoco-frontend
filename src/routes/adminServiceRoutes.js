import Axios from "./axios";

const getAllProducts = () => {
  return Axios.get("/Admin/GetAllProducts");
};

const addProduct = (product) =>{
  return Axios.post("/Admin/AddProductForm", product);
};

const AdminService = {
  getAllProducts,
  addProduct
    

  };
    
  export default AdminService;