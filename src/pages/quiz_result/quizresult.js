import React from 'react';
import { useLocation } from 'react-router-dom'; 
import Wrapper from './style';

const QuizResult = () => {
    const location = useLocation(); 
    const searchParams = new URLSearchParams(location.search);
    const obtainedMarks = searchParams.get('marks');

    return (
        <Wrapper>
        <section>        
            <div className="quiz-result">
            <h2>Quiz Result</h2>
            <p>Obtained Marks: {obtainedMarks}</p>
        </div>
        </section>
        </Wrapper>

    );
};

export default QuizResult;
