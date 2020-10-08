import React from 'react'
import './Question.css'
import QuestionHeader from '../questionHeader/QuestionHeader'
import decodeString from '../../utils/decodeString'

export default Question

function Question ({ question, currentQNumber, numberOfAllQ }) {
  const answers = [
    'Stan%20Lee',
    'Malcolm%20Wheeler-Nicholson',
    'Robert%20Crumb',
    'Robert%20Kirkman'
  ]

  const testQuestionData =
{
  category: 'Entertainment%3A%20Video%20Games',
  currentQNumber: 1,
  numberOfAllQ: 20,
  difficulty: 'medium'
}

  return (
    <div id='question'>
      <QuestionHeader questionData={testQuestionData} />
      <div className='content'>
        {decodeString(question.question)}
      </div>
      <div className='answers-container'>
        {answers.map(answer => (
          <button className='answer'>
            {decodeString(answer)}
          </button>
        ))}
      </div>
    </div>
  )
}
