import logo from './logo.svg';
import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';

// 주소값 부여 -> Routes, Route
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
    <Route path='/login' element={<Login></Login>}></Route>  
    <Route path='/Join' element={<Join></Join>}></Route>
    <Route path='/' element={<Join></Join>}></Route>
    <Route path='/Home' element={<Home></Home>}></Route>
    </Routes>

    </>
    
  );
}

export default App;
