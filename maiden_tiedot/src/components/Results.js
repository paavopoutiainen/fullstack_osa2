import React, {useState} from "react"



const Results = ({word, countries, callback}) =>{
    const [countryState, setCountry] = useState({})
    /*const [matchedCountries, setCountries] = useState(countries.filter((country, i) => {
        console.log(country.name)
        console.log(word)
        return country.name.toLowerCase().includes(word.toLowerCase())
    }))*/

    let matchedCountries = countries.filter((country, i) => 
    country.name.toLowerCase().includes(word.toLowerCase()) && word !== "")
        

    
    
    

    console.log("matched", matchedCountries)

    function show(){
        let country = matchedCountries[0]
        if(matchedCountries.length === 1){
            return      <div>
                        <h1>{country.name}</h1>
                        <p>capital {country.capital}<br/>
                        population {country.population}</p>
                        <h1>Languages</h1>
                        <ul>
                            {country.languages.map((x, i) => <li key={i}>{x.name}</li>)}
                        </ul>
                        <img height="300" width="400" src = {country.flag}></img>
                    </div>
        } else if(matchedCountries.length === 0){
            return <p></p>
        } else if (matchedCountries.length <= 10){
            return matchedCountries.map((country, i) => 
                <div  key={i}>
                    <value>{country.name}</value>
                    <button id={i} onClick={() => callback(country.name)}>show</button>
                </div>)
        }
    }

    

    return <div>{show()}</div>
}





export default Results