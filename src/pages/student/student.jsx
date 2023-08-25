import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuizDetails from '../quiz/quiz';
import Wrapper from './style';
import quizzes from '../data/data';

const Student = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    

    const handleQuizClick = (quizId) => {
        const selected = quizzes.find(quiz => quiz.id === quizId);
        setSelectedQuiz(selected);
    };

    return (  
        <Wrapper>
            <div className="student-container">
        <section>    
        <div>
            <h2>Welcome, Student!</h2>
            <ul className="quiz-list">
                {quizzes.map(quiz => (
                    <li key={quiz.id} className='quiz-box'>
                        <Link to={`/quiz/${quiz.id}`} onClick={() => handleQuizClick(quiz.id)}>
                            <div className="quiz-thumbnail">
                                <img src={quiz.thumbnail} alt={`${quiz.title} Thumbnail`} />
                            </div>
                            <div className="quiz-title">{quiz.title}</div>
                        </Link>
                    </li>
                ))}
            </ul>
            {selectedQuiz && <QuizDetails quiz={selectedQuiz} />} 
        </div>
        </section>
        </div>
        </Wrapper>
    
    );
}

export default Student;
