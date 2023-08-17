import { styled } from "styled-components";

const Wrapper = styled.form`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 5px;
border: black 1px solid;
display: flex;
flex-direction: column;
width: 30rem;
padding: 20px 20px;
gap: 5px;
font-size: 20px;
#heading{
    text-align: center;
    font-weight: bold;
}
input{
    padding: 10px;
    font-size: 1rem;
}
input[type = button]{
    background-color: #4ac1a3;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    color: white;
}
div{
    display: flex;
    justify-content: center;
    gap: 3px;
}
div span a{
    color: #4ac1a3;
}
`

export default Wrapper;