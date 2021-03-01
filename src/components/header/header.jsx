import React from 'react'
import './header.scss'
import { useSelector } from 'react-redux'

const Header = () => {
  const counter = useSelector(state => state.numAnsCorrect.number)
  return(
    <div className='header-container'>
      <div className='header-title'>NAME THAT FLAG</div>
      <div className='header-stats'>
        {counter} correct
      </div>
    </div>
  )
}

export default Header