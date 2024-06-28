import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Category from './Components/Category';
import Product from './Components/Product';
import Allprod from './Components/Allprod';
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Moment from './Components/Moment';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/h' element={<Home></Home>}></Route>
        <Route path='/prod/:catname' element={<Product></Product>}></Route>
        <Route path='/cat' element={<Category></Category>}></Route>
        <Route path='/prod' element={<Allprod></Allprod>}></Route>
        <Route path='/reg' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logo' element={<Logout></Logout>}></Route>
        <Route path="/" element={<Moment></Moment>}></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
