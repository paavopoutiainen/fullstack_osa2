import React, {useState, useEffect} from 'react';

import './App.css';
import axios from 'axios';
import Results from "./components/Results"

function App() {

const [searchWord, setWord] = useState("")
const [countriesData, setCountriesData] = useState([])


function searchWordChanged(e) {
  setWord(e.target.value)
  //console.log("matched",matchedCountries)
 
}
console.log("kkakki")


useEffect(() => {
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => setCountriesData(response.data))
  
}, [])

/*const matchedCountries = countriesData.map(country => {
  if(country.name.toLowerCase().includes(searchWord.toLowerCase())){
    console.log("maa: ", country.name)
    console.log("hakusana", searchWord)
    return <p>{country.name}</p>
  } 
})*/
const setSearchWordOnClick = (word) => {
  console.log("this is:", typeof word)
  setWord(word)
}


  return (
    <div>
      <div id="haku">
        <label>find countries</label><input type = "text" 
        value ={searchWord} onChange={searchWordChanged} />
      </div>
      
      <Results word = {searchWord} countries = {countriesData} 
      callback={setSearchWordOnClick}/>
    </div>
  )
    
  
}

export default App;
