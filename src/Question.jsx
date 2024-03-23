
import React, { useState } from 'react';
function Question({ question, onAnswer }) {
    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option === question.correctAnswer);
  };
  return (
    <div className="question">
    <h2>{question.question}</h2>
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`option ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
  )
}

export default Question
