import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Wrapper from './style'

const User = () => {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const add = () => {
    dispatch({
      type: "ADD_USER",
      payload: { name, contact, password }
    })
  }

  const loggedInUser = useSelector(state => state.loggedInUser)
  const navigate = useNavigate()

  useEffect(()=>{
    if(loggedInUser){
      navigate("/login")
    }
  }, [loggedInUser, navigate])


  return (
    <Wrapper>
      <span id='heading'>Sign Up</span>
      <input type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => { setName(e.target.value) }}
      />
      <input type="text"
        placeholder='Contact'
        value={contact}
        onChange={(e) => { setContact(e.target.value) }}
      />
      <input type="text"
        placeholder='Password'
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />
      <input type="button"
        value="Submit"
        onClick={add}
      />
      <div>
        <span>Already have an account?</span>
        <span><Link to='/login'>Login here</Link></span>
      </div>
    </Wrapper>
  )
}

export default User
