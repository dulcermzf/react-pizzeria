import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Pizza from "./pages/Pizza/Pizza";
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import { CartProvider } from './context/CartContext';
import { UserContext, UserProvider } from './context/UserContext';
import { useContext } from 'react';

function App() {
  const { token } = useContext(UserContext)

  console.log(token);

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={ token ? <Navigate to="/home" /> : <Login/>} />
          <Route path='/register' element={ token ? <Navigate to="/home" /> : <Register/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/pizza/:id' element={<Pizza/>} />  
          <Route path='/profile' element={ token ? <Profile/> : <Navigate to="/login" /> } />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        
        <Footer></Footer> 
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
