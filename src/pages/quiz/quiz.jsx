import React from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import quizzes from '../data/data';
import Wrapper from './style';
import { useState } from 'react';
const QuizDetails = () => {
    const {id} = useParams()
    const selectedQuiz = quizzes.find(quiz => quiz.id === parseInt(id));
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(selectedQuiz.questions.length).fill(-1));
    const navigate=useNavigate();
    const handleAnswerSelect = (questionIndex, optionIndex) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[questionIndex] = optionIndex;
        setSelectedAnswers(newSelectedAnswers);
    };
    const handleSubmit = () => {
        let obtainedMarks = 0;
    
        for (let i = 0; i < selectedQuiz.questions.length; i++) {
            if (selectedAnswers[i] === selectedQuiz.correctOptions[i]) {
                obtainedMarks++;
            }
        }
        navigate(`/quiz/${selectedQuiz.id}/result?marks=${obtainedMarks}`);
    };
    
    if (!selectedQuiz) {
        return <div>Quiz not found</div>;
    }
    return (
        <Wrapper>
        <div className="quiz-details">
            <h2>{selectedQuiz.title}</h2>
            <img src={selectedQuiz.thumbnail} alt={selectedQuiz.title} style={{ maxWidth: '200px' }} />
            <h3>Questions:</h3>
            <ul>
                {selectedQuiz.questions.map((question, questionIndex) => (
                    <li key={questionIndex} >
                        {question}
                        <ul>
                            {selectedQuiz.options[questionIndex].map((option, optionIndex) => (
                                <li key={optionIndex} className='ques'>
                                    <label>
                                    <input
                                                type="radio"
                                                name={`question-${questionIndex}`}
                                                onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
                                            />
                                            {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <input type="button" value="Submit" onClick={handleSubmit}/>
        </div>
        </Wrapper>
           );
};

export default QuizDetails;
