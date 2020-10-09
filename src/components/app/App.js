import React, { useState } from 'react'
import './App.css'
import Quiz from '../quiz/Quiz'
import HelloScreen from '../helloScreen/HelloScreen'

export default App

const views = {
  hello: 'HELLO',
  quiz: 'QUIZ',
  score: 'SCORE'
}

function App () {
  const [ view, setView ] = useState(views.hello)
  const [ score, setScore ] = useState(0)

  const startQuiz = () => setView(views.quiz)

  const endQuiz = (score) => {
    setScore(score); setView(views.score)
  }

  switch (view) {
    case views.hello:
      return <HelloScreen onStart={startQuiz} />
    case views.quiz:
      return <Quiz endQuiz={endQuiz} />
    case views.score:
      return <h1>your score is {score}</h1>
    default:
      return <HelloScreen onStart={startQuiz} />
  }
}
