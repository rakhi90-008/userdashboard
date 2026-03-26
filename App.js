import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from "./components/UserTable";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
