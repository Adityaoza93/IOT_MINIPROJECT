import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard";
import Location from "./pages/Location";
import Navbar12 from "./components/Navbar12";
import Landing from "./pages/Landing";
import SpecDashboard from "./pages/SpecDashboard"

const baseUrl = `https://us-central1-arduinogasproject.cloudfunctions.net/app/api/${process.env.API_KEY}/getData`;

function App() {
  return (
    <>

      <Router>
        <Navbar12 />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Dashboard" element={<Dashboard baseUrl={baseUrl} />} />
          <Route path="/SpecDashboard" element={<SpecDashboard />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
