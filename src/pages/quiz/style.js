import { styled } from "styled-components";

const Wrapper = styled.section`
.quiz-details {
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 10px;
    color: #333;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }
  .ques{
    margin-top : 10px;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    input[type="radio"] {
      margin-right: 10px;
    }
  }

  input[type="button"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
}

`

export default Wrapper;
