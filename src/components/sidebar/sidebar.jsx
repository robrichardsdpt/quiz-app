import React from  'react'
import { useSelector } from 'react-redux'
import './sidebar.styles.scss'

const Sidebar = () => {
  const correct = useSelector(state => state.numAnsCorrect.number)
  const { totalQuestions, streak, score } = useSelector(state => state.stats)
  return(
    <div className='stats-container'>
      <div className='stats-title'>YOUR STATS</div>
      <div className='stats-content'>
        <div className='stat-item'> <div className='stat-label'>TOTAL CORRECT </div><div className='stat'> {correct}</div></div>
        <div className='stat-item'><div className='stat-label'>GRADE  </div><div className='stat'>{totalQuestions ? Math.round(correct/ totalQuestions * 100): 0}%</div></div>
        <div className='stat-item'><div className='stat-label'>STREAK </div><div className='stat'> {streak} </div></div>
        <div className='stat-item'><div className='stat-label'>SCORE </div><div className='stat'>{score}</div></div>
      </div>
    
    </div>
  )
}

export default Sidebar