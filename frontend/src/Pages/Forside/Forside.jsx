// Importing required modules from React, React-Query, React-DOM, and utility functions
import React,{ useState } from 'react'
import { useQuery } from 'react-query';
// import { createRoot } from 'react-dom/client';

import './Forside.scss'; // Importing SCSS file for styling
import newRequest from '../../utils/newRequest' // Importing a utility function for making HTTP requests
import ProductCard from '../../Components/ProductCard/ProductCard'; // Importing a reusable product card component

const Forside = () => { 
// State hook for handling an open state, initially set to false
  // const [open, setOpen] = useState(false);

// React Query hook for fetching data using an asynchronous function
  const { isLoading, error, data } = useQuery(["nyheder"], () => {
    let url = '/nyheder/nyheder'; // Endpoint to fetch data from
    return newRequest.get(url).then((res) => res.data); // Making GET request and returning data
}, {
    keepPreviousData: true, // Preserving previously fetched data when new data is being fetched
});

// Logging fetched data for debugging
console.log(data);  

  // Handling loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
  <div className='Header-img'></div>
    <div className="gigs">
      <div className="container">
        <div className="cards">
        {
          // (&&) "AND" operator. 
          //often used in control structures such as if statements, 
          //loops, and more complex conditional expressions 
          Array.isArray(data.items) && data.items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))

        }
         

        </div>
      </div>
    </div>
    </>
  );
}

// Exporting the component for use in other parts of the application
export default Forside;
   

