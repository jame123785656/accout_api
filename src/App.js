import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Post from "./pages/Post.js"
import ProFile from "./pages/ProFile.js"
import ErrorPage from "./pages/ErrorPage.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post/>} />
        <Route path="/profile" element={<ProFile/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
