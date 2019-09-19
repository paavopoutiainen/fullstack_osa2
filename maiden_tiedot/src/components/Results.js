import React from "react"
import Country from "./Country"


//Displaying results 
const Results = ({matchedCountries, setMatchedCountries, setCountry, country}) =>{
    
    //if the searchword is found only in one country's name that country will be 
    //put into the state
    if(matchedCountries.length === 1){
        setCountry(matchedCountries[0])
    } else {
        setCountry(null)
    }

    //When the button is clicked the clicked country has to be put into a state in order to
    //display it, we can do this indirectly by setting matchedCountries consistent with the 
    //full name of the clicked country and then the code above will handle setting the country
    const handleClick = (e) => {
        let clickedCountry = matchedCountries[e.target.id]
        setMatchedCountries(matchedCountries.filter(c => c.name === clickedCountry.name))
          
    }

    //rendering options
    let numberOfMatches = matchedCountries.length
    if(numberOfMatches === 0){
        return <p></p>
    }else if (matchedCountries.length <= 10 && country === null){
        return matchedCountries.map((country, i) => 
            <div  key={i}>
                <p>{country.name}</p>
                <button id={i} onClick={(e) => handleClick(e)}>show</button>
            </div>)
    } else if (matchedCountries.length > 10){
        return <div>too many matches specify another filter</div>
    } 
    return <Country country ={country}/>
    
   

}






export default Results