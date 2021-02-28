import React from 'react'
import './header.scss'
import { useSelector } from 'react-redux'

const Header = () => {
  const counter = useSelector(state => state.numAnsCorrect.number)
  return(
    <div className='header-container'>
      <div>This is the navigation bar</div>
      <div className='link-container'>
      Link
      link
      links
      {counter}
      </div>
    </div>
  )
}

export default Header