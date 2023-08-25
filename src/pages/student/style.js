import { styled } from "styled-components";

const Wrapper=styled.section `
.student-container {
  padding: 20px;
  background-color: $background-color; // Use your color variables
  font-family: 'Arial', sans-serif;

  h2 {
    color: $primary-color;
    text-align : center;
  }
  img{
    height : 180px;
    width : 180px;
  }
  .quiz-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .quiz-box {
      margin: 15px;
      padding: 10px;
      background-color: $secondary-color;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .quiz-thumbnail {
        img {
          max-width: 50%;
          height: auto;
        }
      }

      .quiz-title {
        margin-top: 10px;
        font-size: 1.2rem;
        color: $text-color;
      }
    }
  }
}

`
export default Wrapper;
