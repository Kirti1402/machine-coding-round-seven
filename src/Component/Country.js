import React, { useContext } from 'react'
import { TripAdvisorcontext } from '../Context.js/TripAdvisorContext'
import {Link} from "react-router-dom"

export default function Country() {
    const {citiesData,setPlaces} = useContext(TripAdvisorcontext)
    console.log("Cities",citiesData);
  return (
    <div>
       <header className='header'>
            
            <h4>Top Place to Visit in {citiesData.name} </h4>
        </header>
        <div className='continents-container'>
            {citiesData.destinations && citiesData.destinations.map(places => {
              console.log("countries",places)
                const {id,name,image} = places;
                return <div className='continents-card' key={id}>
                        <Link to="/placesToVisit"  onClick={()=>setPlaces(places)}>
                        <img src={image} alt={name}/>
                    <p className='continent-name'><span><i class="fas fa-map-marker-alt"></i></span><span>{name}</span></p>
                        </Link>
                      </div>                 
            })}
        </div>
    </div>
  )
}
