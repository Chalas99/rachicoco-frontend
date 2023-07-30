import Axios from "./axios";

const createTicket = (Ticket) => {
  return Axios.post("/Mod/createTicket", Ticket);
};

const recordempDetails = (Employee) => {
    return Axios.post("/Mod/AddEmpForm", Employee);
  };

  const recordsupDetails = (Supplier) => {
    return Axios.post("/Mod/AddSupForm", Supplier);
  };

  const employeeDetail = () => {
    return Axios.get("/mod/employeeDetail");
  };

  const supplierDetail = () => {
    return Axios.get("/mod/supplierDetail");
  };

  const deleteEmp= (id) =>{
    return Axios.delete("/Mod/deleteEmp/" +id);
  };

  const deleteSup = (id) =>{
    return Axios.delete("/Mod/deleteSup/" +id);
  };
  

const ModService = {
  createTicket,
  recordempDetails,
  recordsupDetails,
  employeeDetail,
  supplierDetail,
  deleteEmp,
  deleteSup

  
  };
    
  export default ModService;