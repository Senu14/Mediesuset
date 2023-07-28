import React from 'react';
import { Link } from 'react-router-dom';

const Forside = ({card}) => {
  return (
  
    <div className="cardInfo">
    <Link to={`/one/${card.id}`}> 
        <img src={card.image} alt="" /></Link>
        <div className="info">
            <div className="user">
              <p>{card.title}</p> 
              <span>{card.disc}</span>
              <button>{card.button}</button>
            </div>
                   
        </div>
      
        <div className="detail">
            
            <div className="price">
              <h2>DKK{card.price}</h2>
            </div>
        </div>
        </div>
   
  )
}


export default Forside;