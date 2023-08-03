import React from 'react'
import { Route, Routes } from 'react-router-dom';

//import All Pages
import Forside from '../../Pages/Forside/Forside';
import Event from '../../Pages/Event/Event';
import Camps from '../../Pages/Camps/Camps';
import Billetter from '../../Pages/Billetter/Billetter';
import PraktiskInfo from '../../Pages/ProktiskInfo/PraktiskInfo';
import Login from '../../Pages/Login/Login';

//Layouts that wrapped the other pages
import  Navigations  from '../../Navigations/Navigations';


const AppRouter = () => {
  return (
     <Routes>
          <Route path="/" element={<Navigations />} />
          <Route index path="/" element={<Forside />} />
          <Route path="/event" element={<Event />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/billetter" element={<Billetter />} />
          <Route path="/praktiskinfo" element={<PraktiskInfo />} />
          <Route path="/login" element={<Login/>} />

     </Routes>

  )
}

export default AppRouter;