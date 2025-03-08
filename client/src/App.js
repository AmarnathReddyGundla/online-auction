import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PostAuction from "./components/PostAuction";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="" element={<LandingPage />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="post-auction" element={<PostAuction />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
