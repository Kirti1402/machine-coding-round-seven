import React, { useContext } from 'react'
import { TripAdvisorcontext } from '../Context.js/TripAdvisorContext'
import {Link} from "react-router-dom"

export default function Continents() {
    const {countryData,setCitiesData} = useContext(TripAdvisorcontext)
    console.log( "country",countryData)
  return (
    <div>
        <header className='header'>
            
            <h4>Top Continents in {countryData.name} </h4>
        </header>
        <div className='continents-container'>
            {countryData.countries && countryData.countries.map(countries => {
              console.log("countries",countries)
                const {id,name,image} = countries;
                return <div className='continents-card' key={id}>
                        <Link to="/country"  onClick={()=>setCitiesData(countries)}>
                        <img src={image} alt={name}/>
                    <p className='continent-name'><span><i class="fas fa-map-marker-alt"></i></span><span>{name}</span></p>
                        </Link>
                      </div>                 
            })}
        </div>
    </div>
  )
}
