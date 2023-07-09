import { createContext, useState } from "react";
import {data} from "../JsonData"

export const TripAdvisorcontext = createContext();

export const TripAdvisorProvider = ({children})=>{

    const [tripData,setTripData]= useState(data.continents)
    const [countryData,setCountryData]= useState()
    const [citiesData,setCitiesData]= useState()

    return <TripAdvisorcontext.Provider value={{tripData,countryData,setCountryData,setCitiesData,citiesData}}>
        {children}
    </TripAdvisorcontext.Provider>
}