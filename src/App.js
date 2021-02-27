import React from 'react'
import Home from './components/home/home.jsx'
import Quiz from './components/quiz/quiz.jsx'
import { Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
    We are clean and good to go!
    <Route exact path='/'component={Home} />
    <Route path='/quiz' component={Quiz} />
    </div>
  );
}

export default App;
