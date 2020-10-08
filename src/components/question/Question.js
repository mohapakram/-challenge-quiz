import React from 'react'
import './Question.css'
import QuestionHeader from '../questionHeader/QuestionHeader'
import decodeString from '../../utils/decodeString'

export default Question

function Question ({ question, position, onSelect }) {
  const { difficulty, category } = question
  const answers = [...question.incorrect_answers, question.correct_answer]
  return (
    <div id='question'>
      <QuestionHeader difficulty={difficulty} category={category} position={position} />
      <div className='content'>
        {decodeString(question.question)}
      </div>
      <div className='answers-container'>
        {answers.map((answer, i) => (
          <button key={i} className='answer' onClick={onSelect}>
            {decodeString(answer)}
          </button>
        ))}
      </div>
    </div>
  )
}
