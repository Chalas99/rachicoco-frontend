import Axios from "./axios";

const getAllProducts = () => {
  return Axios.get("/Admin/GetAllProducts");
};

const addProduct = (product) =>{
  return Axios.post("/Admin/AddProductForm", product);
};

const deleteproduct = (id) =>{
  return Axios.delete("/Admin/deleteproduct/" +id);
};
const adduser = (user) => {
  return Axios.post("/Admin/adduser", user);
};

const getAllUsers = () => {
  return Axios.get("/Admin/GetAllUsers");
};

const deleteuser = (id) =>{
  return Axios.delete("/Admin/deleteuser/" +id);
};

const AdminService = {
  getAllProducts,
  addProduct,
  deleteproduct,
  adduser,
  getAllUsers,
  deleteuser
  };
    
  export default AdminService;