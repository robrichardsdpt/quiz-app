import React from 'react'
import Home from './components/home/home.jsx'
import Quiz from './components/quiz/quiz.jsx'
import Header from './components/header/header.jsx'
import { Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/sidebar.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <div className='main-side-bar'><Sidebar/></div>
        <div className='main-quiz-content'>
          We are clean and good to go!
          <Route exact path='/'component={Home} />
          <Route path='/quiz' component={Quiz} />
        </div>
      </div>
    </div>
  );
}

export default App;
