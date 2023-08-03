import React,{ useEffect, useState } from 'react'
import './Forside.scss';
import axios from 'axios';


const Forside = () => { 
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      const result = await axios.get('http://localhost:4000/games');
      setData(result.data);
    }

    fetchData();
  }, []);

  return (
  <div className='global-body-color'>
    <div className="gigs">
      <div className="container">
        <div className="cards">
        {/* {
          data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
} */}

        </div>
      </div>
    </div>
    </div>
  );
}

export default Forside;
   

