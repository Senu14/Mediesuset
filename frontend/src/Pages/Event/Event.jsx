// Importing similar required modules as above
import React,{ useState } from 'react'
import { useQuery } from 'react-query';
// import { createRoot } from 'react-dom/client';
import newRequest from '../../utils/newRequest'
import EventCard from '../../Components/eventSCard/EventCard'; // Importing a reusable event card component
import './event.scss'// Importing SCSS file for styling

const Event = () => {
  // Similar state and query handling as in the Forside component
  // const [open, setOpen] = useState(false);

  const { isLoading, error, data } = useQuery(["events"], () => {
    let url = '/events/';  // Endpoint to fetch events
    return newRequest.get(url).then((res) => res.data);  // Making GET request and returning data
}, {
    keepPreviousData: true, // Preserving previously fetched data
});
 
// Logging fetched data for debugging
  console.log(data);

// Handling loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

// Rendering fetched data and event cards
  return (
    <>
    <div className='Header-img'>
  
  
    <div className='event'>
              {
           data.items.map((item) => (
            <EventCard key={item.id} item={item} />
          ))
        }
  </div>
  </div>
        
    </>
  )
}

// Exporting the component for use in other parts of the application
export default Event;