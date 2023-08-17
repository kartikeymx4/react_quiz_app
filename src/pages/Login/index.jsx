import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const Login = () => {
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const login = () => {
        dispatch({
            type: "LOGIN",
            payload: { contact, password }
        })
    }

    return (
        <Wrapper>
            <span id='heading'>Login</span>
            <input type="text"
                placeholder='Contact'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
            />
            <input type="text"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="button"
                value="login"
                onClick={login}
            />
            <div>
                <span>Don't have an account?</span>
                <span><Link to='/sign-up'>Sign-up</Link></span>
            </div>
        </Wrapper>
    )
}

export default Login
