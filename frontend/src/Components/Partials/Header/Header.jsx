import React from 'react';
import './Header.scss'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
   <div className='collected-Nav'>
<header>
    <nav>
    <img src={require("../../../Assets/Images/Logo.png")}className="media" alt='' />
        <Link to="/" className='Links'> <li className="header__menu">FORSIDE</li></Link>
        <Link to="/event" className='Links'> <li className="header__menu">EVENT</li></Link>
        <Link to="/camps" className='Links'> <li className="header__menu">CAMPS</li></Link>
        <Link to="/billettes" className='Links'> <li className="header__menu">BILLETTER</li></Link>
        <Link to="/prakriskinfo" className='Links'> <li className="header__menu">PRAKTISK INFO</li></Link>
        <Link to="/login" className='Links'> <li className="header__menu">LOGIN</li></Link>
    </nav>
</header>
<main>
  <Outlet />
</main>
</div>

  )
}

export default Header;
