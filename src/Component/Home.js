import React, { useContext } from 'react'
import { TripAdvisorcontext } from '../Context.js/TripAdvisorContext'
import {Link} from "react-router-dom"

export default function Home() {
    const {tripData,setCountryData} = useContext(TripAdvisorcontext)
    console.log(tripData)
  return (
    <div>
        <header className='header'>
            <h1>Welcome To Trip Advisor</h1>
            <h4>Top Continents For Your Next Holiday</h4>
        </header>
        <div className='continents-container'>
            {tripData && tripData.map(continents => {
                const {id,image,name} = continents;
                return <div className='continents-card' key={id}>

                        <Link to="/continents"onClick={()=> setCountryData(continents)}>
                        <img src={image} alt={name}/>
                    <p className='continent-name'><span><i class="fas fa-map-marker-alt"></i></span><span>{name}</span></p>
                        </Link>
                      </div>

                 
            })}
        </div>
    </div>
  )
}
