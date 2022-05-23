import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Login/Register/Register";
import Login from "./Login/Login/Login";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <div className="text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/parts/:id" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
