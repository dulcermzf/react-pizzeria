import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Pizza from "./pages/Pizza/Pizza";
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/pizza/:id' element={<Pizza/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
