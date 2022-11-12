import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import NFT from "./pages/nft/NFT";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Router>
      <Navbar setToggleMenu={setToggleMenu} />
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nfts" element={<NFT />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
