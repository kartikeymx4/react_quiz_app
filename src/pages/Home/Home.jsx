import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  }, [navigate])

  return (
    <>
      <h1>This is Home Page</h1>
    </>
  )
}

export default Home
