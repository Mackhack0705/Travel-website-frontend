import { useState } from "react";
import "./App.css";
import FeatureSearch from "./pages/FeatureSearch";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
// import PrivateRoute from "./pages/PrivateRoute";

function App() {
  // You can use state to keep track of the user's login status
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login-form" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<About />} />
          <Route path='/signup-form' element={<SignUp />} />
          <Route path="/flight-Search" element={<FeatureSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
