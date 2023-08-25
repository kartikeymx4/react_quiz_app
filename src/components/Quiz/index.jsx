import React from 'react'
import Wrapper from './style'
import { Link } from 'react-router-dom'



const Quiz = ({image, title}) => {
  return (
    <Wrapper>
      <Link to="/questions">
      <img src={image} alt='quiz' />
      </Link>
      <div>{title}</div>
    </Wrapper>
  )
}

export default Quiz
