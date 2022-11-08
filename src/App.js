import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard";
import Location from "./pages/Location";
import Navbar12 from "./components/Sidebar/Navbar12";
function App() {
  return (
    <>
    
    <Router>
    <Navbar12/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Location" element={<Location />} />
        </Routes>
    
    </Router>
    </>
  );
}

export default App;
