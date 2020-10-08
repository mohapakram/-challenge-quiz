import React, { useState } from 'react'
import './App.css'
import Quiz from '../quiz/Quiz'
import HelloScreen from '../helloScreen/HelloScreen'

export default App

function App () {
  const [ isRunning, setIsRunning ] = useState(false)

  const startQuiz = () => setIsRunning(true)

  if (isRunning) {
    return <Quiz />
  } else {
    return <HelloScreen onStart={startQuiz} />
  }
}
