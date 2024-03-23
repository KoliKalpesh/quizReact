import React from 'react'

function Score({ score, totalQuestions, onReset }) {
  return (
    <div className="score">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}/{totalQuestions}</p>
      <button onClick={onReset}>Try Again</button>
    </div>
  )
}

export default Score
