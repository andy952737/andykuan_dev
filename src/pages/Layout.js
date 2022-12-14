import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <> 
      <nav className="nav_a">
        <ul>
          <li> 
            <Link to="/andykuan_dev">andykuan_tw</Link> 
            <p className="title_discrip"><span className="title_sub_discrip">享受躍動的</span>工程師</p>
          </li>
          <li> 
            <a href="https://medium.com/@lianankuan" target="_blank">部落格</a>
          </li>  
          <li>
            <Link to="/gitbooks">技術文件</Link> 
          </li> 
          {/*<li>
            <Link to="/portfolio">作品集</Link>
          </li> */}
          <li>
            <a href="https://www.cakeresume.com/s--XT60AylSFknISAuw7heuVQ--/lian-an-kuan" target="_blank">履歷</a>
          </li> 
        </ul> 
      </nav> 

      <Outlet />

      {/*<footer className="footer_b"> Footer </footer>*/}

    </>
  )
};

export default Layout;