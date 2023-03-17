import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Screenshot from "./Pages/Screenshot";
import Blog from "./Pages/Blog";
import Download from "./Pages/Download";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import Foother from "./Components/Foother";
import Details from "./Pages/Details";

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/screenshot" element={<Screenshot />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/download" element={<Download />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Details />} />
      </Routes>
      <Foother />
    </div>
  );
}

export default App;
