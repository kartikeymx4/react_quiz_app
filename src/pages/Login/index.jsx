import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Wrapper from './style'
import axios from 'axios'

const Login = () => {
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const login = (e) => {
        e.preventDefault()
        e.target.value = "Logging..."
        e.target.disabled = true
        console.log(e.target)

        axios.post("https://server-api1-li2k.onrender.com/api/user/login", {
            contact, password
        }).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            navigate("/")
            console.log(res.data)
        }).catch(err => {
            console.log(err.message)
        }).finally(() => {
            console.log("Finally is running")
            e.target.value = "Login"
            e.target.disabled = false
        })
    }

    return (
        <Wrapper>
            <span id='heading'>Login</span>
            <input type="text"
                placeholder='Contact'
                value={contact}
                required
                onChange={(e) => setContact(e.target.value)}
            />
            <input type="text"
                placeholder='Password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit"
                value="Login"
                disabled={false}
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

 // dispatch({
        //     type: "LOGIN",
        //     payload: { contact, password }
        // })