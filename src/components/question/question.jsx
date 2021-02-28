import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './question.scss'

export const Question = ({ randomCountry, options, countries, handleSetNextQuestion }) => {
  const [status, setStatus] = useState('not answered')
  const [countryResponse, setCountryResponse] = useState('')
  const counter = useSelector(state => state.numAnsCorrect.number)
  const dispatch = useDispatch()
  console.log(randomCountry)
  
  const handleSubmit = (event) => {
    console.log(event.target.id)
    if(countries[event.target.id].name === randomCountry.name) {
      setStatus('correct')
      dispatch({ type: 'INCREMENT_NUMBER' })
    }
    if(countries[event.target.id].name !==randomCountry.name) setStatus('wrong')
    setCountryResponse(countries[event.target.id].name)
  }

  const handleNext = () => {
    handleSetNextQuestion()
    setStatus('not answered')
  }


  const optionsRandomized = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array
  }
  const optionsRandomizedArray = optionsRandomized(options)
  const optionsJsx = optionsRandomizedArray.map((country) => {
    return(
      <div className='option' key={country} id={country} onClick={handleSubmit}>{countries[country].name}</div>)
 })
  console.log(optionsRandomizedArray)
  return(
    <div className='question-card'>
    Which Country does this flag belong to?
      <div><img src={randomCountry.flag} className='flag-image'/></div>
      { status === 'not answered' && optionsJsx }
      { status === 'correct' &&  `You are right!  ${countryResponse} is the correct answer` }
      { status === 'wrong' && `You are wrong! ${countryResponse} is the wrong answer` }
      { status !== 'not answered' && <div><button onClick={handleNext}>Next Question</button></div>}
      <br/>
      {counter} correct so far!
    </div>
  )
}

export default Question
