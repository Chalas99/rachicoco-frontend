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

const getSalesData = (data) =>{
  return Axios.post("/Admin/reports/sales", data);
};

const getCustomerCount = () =>{
  return Axios.get("/Admin/getCustomerCount");
};

const getOrderCount = () =>{
  return Axios.get("/Admin/getOrderCount");
};
const AdminService = {
  getAllProducts,
  addProduct,
  deleteproduct,
  adduser,
  getAllUsers,
  deleteuser,
  getSalesData,
  getCustomerCount,
  getOrderCount
  };
    
  export default AdminService;