import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="nav_a">
        <ul>
          <li>
            <Link to="/">AndyKuan Dev</Link>
            <p className="title_discrip">黑暗中<span className="title_sub_discrip">紅寶石</span></p>
          </li>
          <li>
            <a href="https://medium.com/@lianankuan" target="_blank">Tech Blogs</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> 
        </ul>
      </nav> 

      <Outlet />

      {/*<footer className="footer_b"> Footer </footer>*/}

    </>
  )
};

export default Layout;