import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <h1>TILMELD NYHEDSBREV</h1>
      <p>Få de seneste nyheder sendt til din indbakke</p>
      <div class="registration-form">
      <input type="email" id="email" name="email" placeholder="Indtast emailadresse"/>
      <button type="submit">TILMED</button>
</div>
       <img src={require("../../../Assets/Images/Hancock logo.png")}className="media" alt='' />
    </footer>
  );
};

export default Footer;
