import React from 'react'
import './QuestionHeader.css'
import decodeString from '../../utils/decodeString'
import displayDifficulty from '../../utils/displayDifficulty/displayDifficulty'

export default QuestionHeader

function QuestionHeader ({ difficulty, category, position }) {
  const { currentQuestionIndex, questionsLength } = position
  return (
    <div id='question-header'>
      <h1>question { currentQuestionIndex + 1 } of {questionsLength} </h1>
      <span>{decodeString(category)}</span>
      <span>{displayDifficulty(difficulty)}</span>
    </div>
  )
}
