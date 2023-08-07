import React,{ useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { createRoot } from 'react-dom/client';
import newRequest from '../../utils/newRequest'
import EventCard from '../../Components/eventSCard/EventCard';
import './event.scss'

const Event = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, error, data } = useQuery(["events"], () => {
    let url = '/events/'; 
    return newRequest.get(url).then((res) => res.data);
}, {
    keepPreviousData: true,
});
 
  console.log(data);


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


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


export default Event;