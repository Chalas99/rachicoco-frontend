import './App.css';
import {Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SystemUserLogin from './pages/SystemUserLogin';
import CustomerProfile from './pages/customer/CustomerProfile';
import AdminDash from './pages/admin/AdminDash';
import AdminUserView from './pages/admin/AdminUserView';
import AdminProduct from './pages/admin/AdminProduct';
import AdminReports from './pages/admin/AdminReports';
import StoreOrder from './pages/Storekeeper/StoreOrder';
import StoreInventory from './pages/Storekeeper/StoreInventory';
import StoreRaw from './pages/Storekeeper/StoreRaw';


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/Login" element={<SignIn/>}></Route>
              <Route path="/Registration" element={<SignUp/>}></Route>
              <Route path="/systemuserlogin" element={<SystemUserLogin/>}></Route>
              <Route path="/CustomerProfile" element={<CustomerProfile/>}></Route>
              <Route path='/Admindash' element={<AdminDash/>}></Route>
              <Route path='/AdminUserView' element={<AdminUserView/>}></Route>
              <Route path='/AdminProduct' element={<AdminProduct/>}></Route>
              <Route path='/AdminReport' element={<AdminReports/>}></Route>
              <Route path='/StoreOrder' element={<StoreOrder/>}></Route>
              <Route path='/StoreInventory' element={<StoreInventory/>}></Route>
              <Route path='/StoreRaw' element={<StoreRaw/>}></Route>
            </Route>  
        </Routes>
    </div>
  );
}

export default App;
