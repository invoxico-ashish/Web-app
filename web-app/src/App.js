import React from "react";
import Header from "./Components/Common/Header";
import Home from "./Components/Home";
import Userlisting from "./Components/Userlisting";
import RegistrationForm from "./Components/RegistrationForm";
import Pagination from "./Components/Pagination";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        < Header />
      </div>
      <div className="rightside">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Userlisting" element={<Userlisting />} />
          <Route path="*" element={<RegistrationForm />} />
          <Route path="/pagination" element={<Pagination />} />
        </Routes>
      </div>
    </div>

  )
}

export default App;
