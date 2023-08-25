import React, { useState } from 'react'
import axios from 'axios'
import Wrapper from '../Questions/style'; 

const Questions = () => {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleQuizSelect = (event) => {
    setSelectedQuiz(event.target.value);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      question: '',
      options: ['','','',''],
      correctOption: 0,
    }

    setQuestions([...questions, newQuestion]);
  }

  const handleSaveQuiz = () => {
    
    axios.post("https://quizattendace.onrender.com/api/ques/add", {questions, selectedQuiz})
    .then((res) => {console.log(res.data)})
    .catch((err) => {console.log(err)})
  };


  return (
    <Wrapper>
    
      <div id="main">
        <h1>Select a Quiz:</h1>
        {/* <label htmlFor="quizSelector"></label> */}
        <select id="quizSelector" value={selectedQuiz} onChange={handleQuizSelect}>
          <option value="" disabled selected>Select an option</option>
          <option value="quiz1">HTML</option>
          <option value="quiz2">CSS</option>
          <option value="quiz3">JS</option>
          {/* Add more options as needed */}
        </select>

        <button onClick={handleAddQuestion}>Create Question</button>

        {questions.map((question, index) => (
          <div key={index} className="question-container">
            <label>Question {index + 1}:</label>
            <input
              type="text"
              value={question.question}
              onChange={(event) => {
                const updatedQuestions = [...questions];
                updatedQuestions[index].question = event.target.value;
                setQuestions(updatedQuestions);
              }}
            />
            <br />
            <label>Options:</label>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    value={optionIndex}
                    checked={question.correctOption === optionIndex}
                    onChange={() => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[index].correctOption = optionIndex;
                      setQuestions(updatedQuestions);
                    }}
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(event) => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[index].options[optionIndex] = event.target.value;
                      setQuestions(updatedQuestions);
                    }}
                  />
                </label>
              </div>
            ))}
          </div>
        ))}

        <button onClick={handleSaveQuiz}>Save Quiz</button>
      </div>
    
    </Wrapper>
  );
};

export default Questions
