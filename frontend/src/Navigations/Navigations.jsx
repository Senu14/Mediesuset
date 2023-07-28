import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigations = () => {
  return (
   <div className='collected-Nav'>
<header>
    <nav>
      <h1>MEDIESUSET</h1>
        <Link to="/"><span>FORSIDE</span></Link>
        <Link to="/event"><span>EVENT</span></Link>
        <Link to="/camps"><span>CAMPS</span></Link>
        <Link to="/billettes"><span>BILLETTER</span></Link>
        <Link to="/prakriskinfo"><span>PRAKTISK INFO</span></Link>
        <Link to="/login"><span>LOGIN</span></Link>
    </nav>
</header>
<main>
  <Outlet />
</main>
</div>
  )
 }


export default Navigations;
 