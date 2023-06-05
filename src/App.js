import './App.css';
import {Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/Login" element={<SignIn/>}></Route>
              <Route path="/Registration" element={<SignUp/>}></Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
