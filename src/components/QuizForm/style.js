import { styled } from "styled-components";

const Wrapper = styled.div`

form{

text-align: center;
background-color: aliceblue;
margin: auto;
margin-top: 50px;
box-shadow: 2px 2px 3px #817979;
border-radius: 20px;
}

#submitbtn{
    background-color: lightgoldenrodyellow;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    font-weight: bold;
    font-size: medium;
    padding: 5px 10px 5px 10px;
    margin: 10px 20px 10px 20px;
}

h1{
    color: black;
    background-color: wheat;
}

form input[type=text]{
    font-size: 15px;
    padding: 7px 10px;
    margin: 5px 0;
    box-sizing: border-box;

}

#Title{
    font-weight: bold;
    font-size: large;
    color: black;
    background-color: white;
}

#Image{
    font-weight: bold;
    font-size: large;
    color: black;
    background-color: white;
}

`

export default Wrapper