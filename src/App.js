import './App.css';
import {Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Gellary from './pages/Gellary';
import SignIn from './pages/SignIn';
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
import SignIn2 from './pages/SignIn2';
import AdminUser from './pages/admin/AdminUser';
import AddUserForm from './pages/admin/AddUserForm';
import AddProductForm from './pages/admin/AddProductForm';
import AddCusForm from './pages/Moderator/AddCusForm';
import AddSupForm from './pages/Moderator/AddSupForm';
import AddEmpForm from './pages/Moderator/AddEmpForm';



function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path='/Gellary' element={<Gellary/>}></Route>
              <Route path="/Login" element={<SignIn/>}></Route>
              <Route path="/Login2" element={<SignIn2/>}></Route>
              <Route path="/Registration" element={<SignUp/>}></Route>
              <Route path="/systemuserlogin" element={<SystemUserLogin/>}></Route>
              <Route path="/CustomerProfile" element={<CustomerProfile/>}></Route>
              <Route path='/AdminUser' element={<AdminUser/>}></Route>
              <Route path='/AdminDash' element={<AdminDash/>}></Route>
              <Route path='/AdminProduct' element={<AdminProduct/>}></Route>
              <Route path='/AdminReport' element={<AdminReports/>}></Route>
              <Route path='/AddUserForm' element={<AddUserForm/>}></Route>
              <Route path='/AddProductForm' element={<AddProductForm/>}></Route>
              <Route path='/StoreOrder' element={<StoreOrder/>}></Route>
              <Route path='/StoreInventory' element={<StoreInventory/>}></Route>
              <Route path='/StoreRaw' element={<StoreRaw/>}></Route>
              <Route path='/ModEmployee' element={<ModEmployee/>}></Route>
              <Route path='/ModSupplier' element={<ModSupplier/>}></Route>
              <Route path='/ModCustomer' element={<ModCustomer/>}></Route>
              <Route path='/AddCusForm' element={<AddCusForm/>}></Route>
              <Route path='/AddSupForm' element={<AddSupForm/>}></Route>
              <Route path='/AddEmpForm' element={<AddEmpForm/>}></Route>
             
            </Route>  
        </Routes>
    </div>
  );
}

export default App;
