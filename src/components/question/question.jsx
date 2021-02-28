import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './question.scss'

export const Question = ({ randomCountry, options, countries, handleSetNextQuestion }) => {
  const [status, setStatus] = useState('not answered')
  const [countryResponse, setCountryResponse] = useState('')
  const correctCounter = useSelector(state => state.numAnsCorrect.number)
  const totalCounter = useSelector(state => state.stats.totalQuestions)
  const dispatch = useDispatch()
  console.log(randomCountry)
  
  const handleSubmit = (event) => {
    console.log(event.target.id)
    if(countries[event.target.id].name === randomCountry.name) {
      setStatus('correct')
      dispatch({ type: 'INCREMENT_NUMBER' })
      dispatch({ type: 'INCREMENT_STREAK' })
      dispatch({ type: 'INCREMENT_SCORE' })
    }
    if(countries[event.target.id].name !==randomCountry.name) {
      setStatus('wrong')
      dispatch({ type: 'DECREMENT_SCORE' })
      dispatch({ type: 'CLEAR_STREAK' })
    }
    setCountryResponse(countries[event.target.id].name)
    dispatch({ type: 'INCREMENT_QUESTION'})
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
  const optionsJsx = optionsRandomizedArray.map((country, index) => {
    return(
      <div className='option' key={country} id={country} onClick={handleSubmit}>{index+1}. {countries[country].name}</div>)
 })
  console.log(optionsRandomizedArray)
  return(
    <div className='question-card'>
    Which Country does this flag belong to?
      <div><img src={randomCountry.flag} className='flag-image' alt='flag'/></div>
      { status === 'not answered' && optionsJsx }
      { status === 'correct' &&  `You are right!  ${countryResponse} is the correct answer` }
      { status === 'wrong' && `You are wrong! ${countryResponse} is the wrong answer` }
      { status !== 'not answered' && <div><button onClick={handleNext}>Next Question</button></div>}
      <br/>
      {correctCounter} correct / {totalCounter} total
    </div>
  )
}

export default Question
