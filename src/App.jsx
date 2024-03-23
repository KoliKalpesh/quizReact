import { useState } from 'react'
import questionsData from './questionsData';
import Question from './Question';
import Score from './Score';
import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

 

  return (
    <>
     <div className="app">
      {currentQuestionIndex < questionsData.length ? (
        <Question
          question={questionsData[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Score score={score} totalQuestions={questionsData.length} onReset={resetQuiz} />
      )}
    </div>
  

    </>
  )
}

export default App
