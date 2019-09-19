import React, {useState, useEffect} from 'react';

import './App.css';
import axios from 'axios';
import Results from "./components/Results"

function App() {


const [country, setCountry] = useState(null)//state for a country we want to display
const [searchWord, setWord] = useState("")
const [countriesData, setCountriesData] = useState([])
const [matchedCountries, setMatchedCountries] = useState([])//state for countries that match with the searchword

//listening to the searchfield and changing the state
function searchWordChanged(e) {
  setWord(e.target.value)
}


//fetching the country data on the first rendering
useEffect(() => {
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => setCountriesData(response.data))
  
}, [])

//effect hook which sets the matchedCountries consistent with the new searchword everytime 
//the searchword changes
useEffect(() => {
  setMatchedCountries(countriesData.filter((country, i) => 
  country.name.toLowerCase().includes(searchWord.toLowerCase()) && searchWord !== ""))
  
}, [searchWord])


  return (
    <div>
      <div id="haku">
        <label>find countries</label><input type = "text" 
        value ={searchWord} onChange={searchWordChanged} />
      </div>
      
      <Results matchedCountries ={matchedCountries} setMatchedCountries ={setMatchedCountries} 
      setCountry={setCountry} country ={country}/>
    </div>
  )
    
  
}

export default App;
