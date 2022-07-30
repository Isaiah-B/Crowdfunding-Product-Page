/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  const navCheck = navOpen ? ' nav-open' : '';
  const onMenuClick = () => setNavOpen(navOpen => !navOpen);

  return (
    <header className={`header${navCheck}`}>
      <div className="header-top">
        <a href="#"><img className="logo" src="images/logo.svg" alt="Crowdfund company logo" /></a>
        <div className="mobile-nav-bg">        
          <ul className="nav-main">
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Discover</a></li>
            <li className="nav-item"><a href="#">Get Started</a></li>
          </ul>
        </div>
        <button className="nav-menu-btn" onClick={onMenuClick}>
          <img id="mobile-nav-open" src="images/icon-hamburger.svg" alt="Open navigation menu"></img>
          <img id="mobile-nav-close" src="images/icon-close-menu.svg" alt="Close navigation menu"></img>
        </button>
      </div>
  </header>
  )
}

export default Header;