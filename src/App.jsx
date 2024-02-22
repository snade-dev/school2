import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Presentation from "./pages/Presentation";
import Enseignement from "./pages/Enseignement";

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enseignement/:id" element={<Enseignement />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}
