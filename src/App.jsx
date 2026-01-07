import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ShopAll from "./pages/Shopall/ShopAll";
import BestSellers from "./pages/BestSeller/BestSellers";
import ActiveQx from "./pages/ActiveQx/ActiveQx";
import Artisanal from "./pages/Artisanal/Artisanal";
import Kids from "./pages/Kids/Kids";
import About from "./pages/About/About";
import  Search  from "./pages/Search/Search";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";

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
