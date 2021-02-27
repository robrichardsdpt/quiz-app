import React from 'react'
import './question.scss'

const Question = ({ randomCountry, options, countries }) => {
  console.log(randomCountry)
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
      <div key={country}>{countries[country].name}</div>)
 })
  console.log(optionsRandomizedArray)
  return(
    <div className='question-card'>
    Which Country does this flag belong to?
      <div><img src={randomCountry.flag} className='flag-image'/></div>
      {optionsJsx}
    </div>
  )
}

export default Question