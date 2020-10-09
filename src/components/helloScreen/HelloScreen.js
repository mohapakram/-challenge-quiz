import React from 'react'
import './HelloScreen.css'

export default HelloScreen

function HelloScreen ({ onStart }) {
  return (
    <div id='hello-screen'>
      <h1>A Quiz is the best way to master what you have learned!</h1>
      <button className='primary' onClick={onStart}>
            I want to strengthen my knowledge
      </button>
    </div>
  )
}
