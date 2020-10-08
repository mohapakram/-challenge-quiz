import React, { useState } from 'react'
import './Question.css'
import QuestionHeader from '../questionHeader/QuestionHeader'
import decodeString from '../../utils/decodeString'

export default Question

function Question ({ question, position, goToNextQuestion }) {
  const [ feedback, setFeedback ] = useState(undefined)
  const { difficulty, category } = question
  const answers = [...question.incorrect_answers, question.correct_answer]

  const validateAnswer = (answer) => {
    setFeedback(answer === question.correct_answer ? 'correct answer!' : 'wrong answer..')
  }

  return (
    <div id='question'>
      <QuestionHeader difficulty={difficulty} category={category} position={position} />
      <div className='content'>
        {decodeString(question.question)}
      </div>
      <div className='answers-container'>
        {answers.map((answer, i) => (
          <button key={i} className='answer' onClick={() => validateAnswer(answer)}>
            {decodeString(answer)}
          </button>
        ))}
      </div>
      {feedback && <div> {feedback} </div> }
    </div>
  )
}
