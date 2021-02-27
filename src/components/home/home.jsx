import React from 'react'

const Home = () => {
  const goToQuiz = () => {
    console.log('quiz')
  }
  return (
    <div>
      Welcome to the THUNDERDOME! <br/>
      <button onClick={goToQuiz}>Get Quizzin'</button>
    </div>
  )
}

export default Home