import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AndyKuanDev from "./pages/AndyKuanDev";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import GitBooks from "./pages/GitBooks";
import NoPage from "./pages/NoPage";

import styles from "./styles.css";

// default
export function App() {
  return ( 
    <BrowserRouter>  
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="gitbooks" element={<GitBooks />} />
          <Route path="andykuan_dev" element={<AndyKuanDev />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
