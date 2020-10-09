import React, { useState } from 'react'
import './Question.css'
import QuestionHeader from '../questionHeader/QuestionHeader'
import decodeString from '../../utils/decodeString'

export default Question

function Question ({ question, position, goToNextQuestion }) {
  const [ feedback, setFeedback ] = useState(undefined)
  const [ isCorrectAnswer, setIsCorrectAnswer ] = useState(undefined)
  const { difficulty, category } = question
  const answers = [...question.incorrect_answers, question.correct_answer]

  const validateAnswer = (answer) => {
    setFeedback(answer === question.correct_answer ? 'correct answer!' : 'wrong answer..')
    setIsCorrectAnswer(answer === question.correct_answer)
  }

  const renderNextQuestion = (feedback) => {
    setFeedback(undefined)
    goToNextQuestion(isCorrectAnswer)
    setIsCorrectAnswer(undefined)
  }

  const renderFeedback = () => {
    return (
      <div id='feedback'>
        <span>{feedback}</span>
        <button onClick={renderNextQuestion}>next question</button>
      </div>
    )
  }

  const colorAnswer = (answer) => answer === question.correct_answer ? 'answer correct' : 'answer incorrect'

  return (
    <div id='question'>
      <QuestionHeader difficulty={difficulty} category={category} position={position} />
      <div className='content'>
        {decodeString(question.question)}
      </div>
      <div className='answers-container'>
        {answers.map((answer, i) => (
          <button key={i} className={feedback ? colorAnswer(answer) : 'answer'} disabled={feedback} onClick={() => validateAnswer(answer)}>
            {decodeString(answer)}
          </button>
        ))}
      </div>
      {feedback && renderFeedback()}
    </div>
  )
}
