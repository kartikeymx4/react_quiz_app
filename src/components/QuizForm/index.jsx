import React, { useState } from 'react'
import Wrapper from './style'

const QuizForm = ({addQuizzes}) => {
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")

    const submit = (e) =>{
        e.preventDefault()
        addQuizzes({image, title})
    }

  return (
    <Wrapper>
    <form action="">
    <h1>Create a Quiz</h1><br/>
      <label htmlFor="Title" id="Title">Title: </label><br />
      <input id="quizTitle" type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)} required/><br/>
      <br /><label htmlFor="Image" id="Image">Image: </label>

      <input
      type="file"
      onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
      />
      
      <br/><br /><input id="submitbtn" value="Create" type="submit" onClick={submit} />

    </form>
    </Wrapper>
  )
}

export default QuizForm

