import React from 'react'
import './question.scss'

const Question = ({ randomCountry, options }) => {
  console.log(randomCountry)
  return(
    <div className='question-card'>
      <img src={randomCountry.flag} className='flag-image'/>
    </div>
  )
}

export default Question