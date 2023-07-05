import React,{useState} from 'react'
import './Quiz.css'
import questions from './QuizData'
import QuizResult from './QuizResult'

const Quiz=()=>{
    const[CurrentQuestion,setCurrentQuestion]=useState(0)
    const[score,setScore]=useState(0)
    const[CorrectAns,setCorrectAns]=useState(0)
    const[showResult,setShowResult]=useState(false)
    const[clicked,setClicked]=useState(false)
    const handleClick=()=>{
        setClicked(false)
        const nextQuestion=CurrentQuestion+1;
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowResult(true)
        }
        
    }
    const handleAnswrOption=(isCorrect)=>{
        if(isCorrect){
            setScore(score+1)
            setCorrectAns(CorrectAns+1)
        }
        setClicked(true)
    }
    const handlePlayAgain=()=>{
        setCurrentQuestion(0)
        setScore(0)
        setCorrectAns(0)
        setShowResult(false)
    }
    return(
        <>
        <div className='app'>
            {showResult?( <QuizResult score={score} CorrectAns={CorrectAns} handlePlayAgain={handlePlayAgain}/>):( <>
            <div className='question-section'>
                {/* <h5>Score:{score}</h5> */}
                <h5 className='kar'>HTML Question Paper</h5>
                 <div className='question-count'>
                    <h5 class='kartick'>Question {CurrentQuestion+1} and {questions.length}</h5>
                 </div>
                 <div className='question-text'>{questions[CurrentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
                {questions[CurrentQuestion].answarOptions.map((ans,i)=>{
                    return(
                    <button className={`button ${clicked && ans.isCorrect? "correct":"botton"}`} 
                    disabled={clicked} key={i} onClick={()=>handleAnswrOption(ans.isCorrect)}>{ans.answerText}</button>
                )})}
                    
                    <div className='actions'>
                <button onClick={handlePlayAgain}>Quit</button>
                <button disabled={!clicked} onClick={handleClick}>Next</button>
            </div>
            </div>
            </>)}
          
        </div>
        </>
    )
}
export default Quiz;