import React from 'react'
import './eventCard.scss'

function EventCard({item}) {
  
  return (
    <div className='event-card'>
        <img src={item.image} alt="Product" />
        {/* <p>{item.description}</p> */}
        <h3>{item.stage_name}</h3>
        <h3>{item.local_time}</h3>
        
    </div>
  )
}

export default EventCard
