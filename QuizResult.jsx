import React from 'react'
import questions from './QuizData'

const QuizResult=(props)=>{
    return(
        <>
         <div className='score-section'>
            <h2>Completed!</h2>
            <h4>Total Score {props.score}/20</h4>
            <h4>Your Correct Question {props.CorrectAns} out {questions.length}</h4>
            <button onClick={props.handlePlayAgain}>&nbsp;Play Again</button>
         </div>
        </>
    )
}
export default QuizResult;