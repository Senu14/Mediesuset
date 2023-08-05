import React,{ useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { createRoot } from 'react-dom/client';

import './Forside.scss';
import newRequest from '../../utils/newRequest'
import ProductCard from '../../Components/ProductCard/ProductCard';

const Forside = () => { 
  const [open, setOpen] = useState(false);

  const { isLoading, error, data } = useQuery(["nyheder"], () => {
    let url = '/nyheder/nyheder'; 
    return newRequest.get(url).then((res) => res.data);
}, {
    keepPreviousData: true,
});
console.log(data);


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
  <div className='global-body-color'>
    <div className="gigs">
      <div className="container">
        <div className="cards">
          
        {
          Array.isArray(data.items) && data.items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        }



        </div>
      </div>
    </div>
    </div>
  );
}

export default Forside;
   

