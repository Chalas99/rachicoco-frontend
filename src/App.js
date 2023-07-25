import './App.css';
import {Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import SignUp from './pages/SignUp';
import SystemUserLogin from './pages/SystemUserLogin';
import CustomerProfile from './pages/customer/CustomerProfile';
import AdminDash from './pages/admin/AdminUser';
import AdminProduct from './pages/admin/AdminProduct';
import AdminReports from './pages/admin/AdminReports';
import StoreOrder from './pages/Storekeeper/StoreOrder';
import StoreInventory from './pages/Storekeeper/StoreInventory';
import StoreRaw from './pages/Storekeeper/StoreRaw';
import ModEmployee from './pages/Moderator/ModEmployee';
import ModSupplier from './pages/Moderator/ModSupplier';
import ModCustomer from './pages/Moderator/ModCustomer';
import SignIn from './pages/SignIn';
import AdminUser from './pages/admin/AdminUser';
import AddUserForm from './pages/admin/AddUserForm';
import AddProductForm from './pages/admin/AddProductForm';
import AddCusForm from './pages/Moderator/AddCusForm';
import AddSupForm from './pages/Moderator/AddSupForm';
import AddEmpForm from './pages/Moderator/AddEmpForm';
import UserEdit from './pages/admin/UserEdit';
import ProductEdit from './pages/admin/ProductEdit';
import CusEdit from './pages/Moderator/CusEdit';
import SupEdit from './pages/Moderator/SupEdit';
import EmpEdit from './pages/Moderator/EmpEdit';
import OrderDetails from './pages/customer/OrderDetails';
import Checkout from './pages/customer/Checkout';
import SupportTicket from './pages/customer/SupportTicket';
import RequireAuth from './components/RequireAuth';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';



function App() {

  const ROLES = {
    "Admin": 2080,
    "Moderator":2060,
    "StoreKeeper":2050,
    "Customer": 2020
  }

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path='/Gallery' element={<Gallery/>}></Route>
              <Route path="/Login" element={<SignIn/>}></Route>
              <Route path="/Registration" element={<SignUp/>}></Route>
              <Route path="/systemuserlogin" element={<SystemUserLogin/>}></Route>
              <Route path='/ModEmployee' element={<ModEmployee/>}></Route>
                <Route path='/ModSupplier' element={<ModSupplier/>}></Route>
                <Route path='/ModCustomer' element={<ModCustomer/>}></Route>
                <Route path='/AddCusForm' element={<AddCusForm/>}></Route>
                <Route path='/AddSupForm' element={<AddSupForm/>}></Route>
                <Route path='/AddEmpForm' element={<AddEmpForm/>}></Route>
                <Route path='/CusEdit' element={<CusEdit/>}></Route>
                <Route path='/SupEdit' element={<SupEdit/>}></Route>
                <Route path='/EmpEdit' element={<EmpEdit/>}></Route>
                <Route path='/AddProductEdit' element={<ProductEdit/>}></Route>
                <Route path='/StoreOrder' element={<StoreOrder/>}></Route>
                <Route path='/StoreInventory' element={<StoreInventory/>}></Route>
                <Route path='/StoreRaw' element={<StoreRaw/>}></Route>

              <Route element={<RequireAuth allowedRole={[ROLES.Admin]}/>}>
                <Route path='/AdminUser' element={<AdminUser/>}></Route>
                <Route path='/AdminDash' element={<AdminDash/>}></Route>
                <Route path='/AdminProduct' element={<AdminProduct/>}></Route>
                <Route path='/AdminReport' element={<AdminReports/>}></Route>
                <Route path='/AddUserForm' element={<AddUserForm/>}></Route>
                <Route path='/AddProductForm' element={<AddProductForm/>}></Route>

              </Route>

              <Route element={<RequireAuth allowedRole={[ROLES.Moderator]}/>}>
               
              </Route>

              <Route element={<RequireAuth allowedRole={[ROLES.StoreKeeper]}/>}>
               
               
              </Route>

              <Route element={<RequireAuth allowedRole={[ROLES.Customer]}/>}>
                <Route path="/CustomerProfile" element={<CustomerProfile/>}></Route>
                <Route path='/orderDetails' element={<OrderDetails/>}></Route>
                <Route path='/SupportTicket' element={<SupportTicket/>}></Route>
                <Route path='/Checkout' element={<Checkout/>}></Route>
              </Route>

              <Route path='/AddUserEdit' element={<UserEdit/>}></Route>

              <Route path='/unauthorized' element={<Unauthorized/>}></Route>
              <Route path="/*" element={<Missing />} />
             
            </Route>  
        </Routes>
    </div>
  );
}

export default App;
