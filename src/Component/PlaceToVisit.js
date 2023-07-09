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
            <p className='place'><span className='name'>Description:</span><span>{description}</span></p>
            <p className='place'><span className='name'>Rating:</span><span>{ratings}</span></p>
            <p className='place'><span className='name'>Location:</span><span>{location}</span></p>
            <p className='place'><span className='name'>Opening Hours:</span>{openingHours}<span></span></p>
            <p className='place'><span className='name'>Reviews:</span><span>{reviews}</span></p>
            <p className='place'><span className='name'>ticket Price:</span><span>{ticketPrice}</span></p>
            <p className='place'><span className='name'>Website:</span><span><a href={website} />{website}</span></p>
        </div>
        </div>
        
    </div>
  )
}
