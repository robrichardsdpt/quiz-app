import React, {useState, useEffect}from 'react'
import axios from 'axios'
import Question from '../question/question.jsx'

const Quiz = () => {
  const [countries, setCountries] = useState()
  const [randomCountry, setRandomCountry] = useState()
  
  useEffect(()=> {
    axios({
      url: 'https://restcountries.eu/rest/v2/all',
      method: 'GET'
    })
    .then(response => setCountries(response.data))
    .then(() => {
      return Math.floor(Math.random() * 250)
    })
    .then((number) => setRandomCountry(number))
  }, [])
  
  
  console.log(countries)
  return (
    <div>Here is your quiz
    {randomCountry && <Question randomCountry={countries[randomCountry]}/>}
    </div>
  )
}

export default Quiz