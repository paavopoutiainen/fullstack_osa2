import React from 'react';

const Weather = ({weather}) => {
    
    if(weather !== null){
        return (
            <div>
                <p>Temperature: {weather.current.temperature} Celsius</p>
                <img src={`${weather.current.weather_icons[0]}`} alt=""/>
                <p>Wind: {weather.current.wind_speed}kph direction {weather.current.wind_dir}</p>
            </div>)
    } else{
        return null
    }
    
};

export default Weather;