import React, { useContext } from 'react'
import { TripAdvisorcontext } from '../Context.js/TripAdvisorContext'
import {Link} from "react-router-dom"

export default function PlaceToVisit() {
    const {place} = useContext(TripAdvisorcontext)
    console.log(place)

    const {id,name,description,image,ratings,location,openingHours,reviews,ticketPrice,website} = place
  return (
    <div >
        <button  className='back-btn'><Link   className='link' to="/country">Back</Link></button>
        <header className='header'>
            <h4>{name} </h4>
        </header>
        <div className='place-container'>
        
        <div className='place-img'><img src={image} alt={name}/></div>
        <div>
            <p className='place'><span className='name'>Description:</span><span className='detail'>{description}</span></p>
            <p className='place'><span className='name'>Rating:</span><span className='detail'>{ratings}</span></p>
            <p className='place'><span className='name'>Location:</span><span className='detail'>{location}</span></p>
            <p className='place'><span className='name'>Opening Hours:</span ><span className='detail'>{openingHours}</span></p>
            <p className='place'><span className='name'>Reviews:</span><span className='detail'>{reviews}</span></p>
            <p className='place'><span className='name'>ticket Price:</span><span className='detail'>{ticketPrice}</span></p>
            <p className='place'><span className='name'>Website:</span><span className='detail'><a href={website} />{website}</span></p>
        </div>
        </div>
        
    </div>
  )
}
