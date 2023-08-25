import { styled } from "styled-components";

const Wrapper = styled.div`
#main {
    text-align: center;
    background-color: aliceblue;
    margin-top: 20px;
    box-shadow: 2px 2px 3px #817979;
    border-radius: 20px;
  }

  /* .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px; 
    background-color: #fff;
    border-radius: 5px;
    border: solid thick black;
    background-color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  } */

  h1 {
    background-color: wheat;
    color: black;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }

  select,
  button {
    font-size: 15px;
    padding: 7px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    background-color: wheat;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: lightcyan;
  }

  .question-container {
    border: 1px solid #007bff;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .question-container label {
    display: block;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 2px;
  }

  .question-container input[type="text"] {
    width: 60%;
    padding: 4px;
    margin-bottom: 2px; 
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  /* .question-container input[type="text"]:focus {
    border-color: #007bff;
    border: solid 10px black;
  } */

  .question-container input[type="text"],
  .question-container input[type="radio"] {
    /* margin-right: 5px; */
  }

  .question-container input[type="radio"] {
    vertical-align: middle;
    stroke: black;
  }
`


export default Wrapper
