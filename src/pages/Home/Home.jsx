import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const loggedInUser = useSelector(state => state.loggedInUser)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!loggedInUser){
      navigate("/login")
    }
  }, [loggedInUser, navigate])

  return (
    <>
      <h1>This is Home Page</h1>
    </>
  )
}

export default Home
