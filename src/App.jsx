import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Cart></Cart>
      {/* <Home></Home> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      <Footer></Footer>
    </>
  );
}

export default App;
