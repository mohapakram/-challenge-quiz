import React, { useState } from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import ScoreBar from '../scoreBar/ScoreBar'
import Question from '../question/Question'
import questions from '../../assets/questions.json'
import calculations from '../../utils/calculations'

export default Quiz

const {
  calcProgress,
  calcWrongAnswers,
  calcCorrectAnswers,
  calcScore,
  calcMaxScore,
  calcMinScore } = calculations

function Quiz () {
  const [ state, setState ] = useState({
    currentQuestionIndex: 0,
    currentQuestion: questions[0],
    questionsLength: questions.length,
    progress: 0,
    scores: {
      score: 0,
      minScore: 0,
      maxScore: 0
    },
    answers: {
      correctAnswers: 0,
      wrongAnswers: 0
    }
  })

  const { currentQuestionIndex, questionsLength, currentQuestion, progress, answers, scores } = state
  const { correctAnswers, wrongAnswers } = answers

  const goToNextQuestion = (isCorrectAnswer) => {
    let nextState = {
      currentQuestionIndex: currentQuestionIndex + 1,
      correctAnswers: calcCorrectAnswers(isCorrectAnswer, correctAnswers)
    }

    console.log(calcCorrectAnswers(isCorrectAnswer, correctAnswers))

    setState({ ...state,
      currentQuestionIndex: nextState.currentQuestionIndex,
      currentQuestion: questions[nextState.currentQuestionIndex],
      progress: calcProgress(currentQuestionIndex, questionsLength),
      answers: {
        wrongAnswers: calcWrongAnswers(isCorrectAnswer, wrongAnswers),
        correctAnswers: nextState.correctAnswers
      },
      scores: {
        score: calcScore(nextState.correctAnswers, nextState.currentQuestionIndex),
        maxScore: calcMaxScore(questionsLength, nextState.currentQuestionIndex, nextState.correctAnswers),
        minScore: calcMinScore(nextState.correctAnswers, questionsLength)
      }
    })
  }

  return (
    <>
      <ProgressBar progress={progress} />
      <Question question={currentQuestion} position={{ currentQuestionIndex, questionsLength }} goToNextQuestion={goToNextQuestion} />
      <ScoreBar scores={scores} />
    </>
  )
}
