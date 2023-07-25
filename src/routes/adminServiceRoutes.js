import Axios from "./axios";

const getAllProducts = () => {
  return Axios.get("/Admin/GetAllProducts");
};

const addProduct = (product) =>{
  return Axios.post("/Admin/AddProductForm", product);
};

const deleteproduct = (id) =>{
  return Axios.post("/Admin/deleteproduct/" +id);
};

const AdminService = {
  getAllProducts,
  addProduct,
  deleteproduct
  };
    
  export default AdminService;