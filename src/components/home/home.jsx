import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      Welcome to the THUNDERDOME! <br/>
      <Link to='/quiz'><button>Get Quizzin'</button></Link>
    </div>
  )
}

export default Home