import React, {useEffect, useState} from "react"
import axios from "axios"
import Weather from "./Weather"

const Country = ({country}) => {
    const [weather, setWeather] = useState(null)

    const baseUrl = "http://api.weatherstack.com/current?access_key="
    const accessKey = "fd45cb64899fe28aa8b46d23a8ef8549"
    const city = country.capital

    //getting the weather data on the first render
    useEffect(() => {
        axios
            .get(`${baseUrl}${accessKey}&query=${country.capital}`)
            .then(response => setWeather(response.data))
            
    } ,[])
    

    console.log(weather)


    //Rendering the country
    return  <div>
                <h1>{country.name}</h1>
                <p>capital {country.capital}<br/>
                population {country.population}</p>
                <h1>Languages</h1>
                <ul>
                    {country.languages.map((x, i) => <li key={i}>{x.name}</li>)}
                </ul>
                <img height="300" width="400" src = {country.flag} alt =""></img>
                <h2>Weather in {country.capital}</h2>
                <Weather weather ={weather}/>
            </div>
}


export default Country