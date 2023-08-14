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
  <h1 className='sub-title'>NYHEDER</h1>
    <div className="gigs">
      <div className="container">
        <div className="cards">
          
        {
             <>
          // (&&) "AND" operator. 
          //often used in control structures such as if statements, 
          //loops, and more complex conditional expressions 
          Array.isArray(data.items) && data.items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
       
          <button>
        
           
    <p>Follow me</p>
    <svg viewBox="0 0 16 16" class="bi bi-whatsapp" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
    </svg>
  
  
</button>
</>

        }
        

        </div>
      </div>
    </div>
    </>
  );
}

// Exporting the component for use in other parts of the application
export default Forside;
   

