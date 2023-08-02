import React, { useState } from 'react';
import './Login.scss';
// import { FontAwesomeIcon } from'@fortawesome/fontawesome-free';
// import { fa-solid fa-at } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };
  

  return (
    <>
    <div className='Header-pic'>
   
</div>
  
    <form onSubmit={handleSubmit}>
      <h1>LOGIN</h1>
      <p>Indtast login oplysninger:</p>
      <label>
        Email:
      {/* <FontAwesomeIcon icon="fa-solid fa-at" /> */}
        <input
          type="email"
          value={email}
          placeholder="Indtast din email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          placeholder="Indtast adgangskode"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <br />
      <button type="submit">LOGIN</button>
    </form>
    </>
  );
};


const Login = () => {
  const handleLogin = (data) => {
    // Handle login 
    
    console.log('Login:', data);
  };

  return (
    <div className='global-body-color' >
        <LoginForm onSubmit={handleLogin} />
      
      
    </div>
  );
};



export default Login;