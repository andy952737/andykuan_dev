import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="nav_a">
        <ul>
          <li>
            <Link to="/andykuan_dev">AndyKuan Dev</Link>
            <p className="title_discrip"><span className="title_sub_discrip">一個工程師</span>的日誌</p>
          </li>
          <li>
            <a href="https://medium.com/@lianankuan" target="_blank">部落格</a>
          </li>
          <li>
            <Link to="/gitbooks">技術文件</Link>
          </li> 
          <li>
            <Link to="/portfolio">作品集</Link>
          </li> 
        </ul>
      </nav> 

      <Outlet />

      {/*<footer className="footer_b"> Footer </footer>*/}

    </>
  )
};

export default Layout;