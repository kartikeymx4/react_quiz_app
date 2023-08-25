import React, { useState } from 'react'
import QuizForm from '../../components/QuizForm'
import Quiz from '../../components/Quiz'
import Wrapper from './style'


const Teacher = () => {
    const [quizzes, setQuizzes] = useState([])
    const addQuizzes = (quiz) =>{
        setQuizzes([...quizzes, quiz])
        console.log(quizzes)
    }
  return (
    <Wrapper>
      <QuizForm addQuizzes ={addQuizzes}/>
      <div id='quiz'>
      {quizzes.map((quiz, i) =><Quiz key={i} image={quiz.image} title = {quiz.title}/>)}
      </div>
    </Wrapper>
  )
}

export default Teacher
