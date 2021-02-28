import React, {useState, useEffect}from 'react'
import axios from 'axios'
import Question from '../question/question.jsx'

const Quiz = () => {
  const [countries, setCountries] = useState()
  const [randomCountry, setRandomCountry] = useState()
  const [options, setOptions] = useState()
  const [nextQuestion, setNextQuestion] = useState(true)
  
  const handleSetNextQuestion = () => {
    setNextQuestion(!nextQuestion)
  }
  useEffect(()=> {
    axios({
      url: 'https://restcountries.eu/rest/v2/all',
      method: 'GET'
    })
    .then(response => setCountries(response.data))
    .then(() => {
      return Math.floor(Math.random() * 250)
    })
    .then((number) => {
      setRandomCountry(number)
      let i = 0
      const optionArray = []
      while(i < 3) {
        const optionNumber = Math.floor(Math.random() * 250)
        if(number !== optionNumber){
        optionArray.push(optionNumber)
        i++
      }
      }
      setOptions([...optionArray, number])
    })
  }, [nextQuestion])


  console.log(options)
  return (
    <div>
    {(randomCountry && options) && <Question randomCountry={countries[randomCountry]} options={options} countries={countries} handleSetNextQuestion={handleSetNextQuestion}/>}
    </div>
  )
}

export default Quiz