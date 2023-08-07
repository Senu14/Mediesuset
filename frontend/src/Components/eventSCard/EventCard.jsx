
import React from 'react'
import './eventCard.scss'

function EventCard({item}) {
  return (
    <div className='event-card'>
        <img src={item.image} alt="Product" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
  )
}

export default EventCard
