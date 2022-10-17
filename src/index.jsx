import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AndyKuanTw from "./pages/AndyKuanTw";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import GitBooks from "./pages/GitBooks";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage"; 

// import my_image from "./images/andy.jpg";

import index_styles from "./index.css";
import styles from "./styles.css";
import gitbooks from "./assets/gitbooks.css";
 

// default
export function App() {
  return ( 
    <BrowserRouter>  
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="gitbooks" element={<GitBooks />} /> 
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="andykuan_dev" element={<AndyKuanTw />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

