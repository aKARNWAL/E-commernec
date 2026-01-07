import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShopAll from "./pages/ShopAll";
import BestSellers from "./pages/BestSellers";
import ActiveQx from "./pages/ActiveQx";
import Artisanal from "./pages/Artisanal";
import Kids from "./pages/Kids";
import About from "./pages/About";
import  Search  from "./pages/Search";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="ActiveQx" element={<ActiveQx/>} />
        <Route path="/Artisanal" element={<Artisanal />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/About" element={<About />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />  
      </Routes>
      <Footer />
    </>
  );
}
