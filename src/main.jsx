import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UseContextProvider } from "./Usecontext/Usecontext";
import Recipe from "./Pages/Recipe/Recipe";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UseContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  </UseContextProvider>
);
