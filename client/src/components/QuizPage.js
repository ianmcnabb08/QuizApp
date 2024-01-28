import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = ({ numQuestions }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponse, setUserResponse] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
        try {
            if (Number.isInteger(numQuestions) && numQuestions > 0) {
            const response = await axios.get(`https://cluebase.herokuapp.com/clue?count=${numQuestions}`);
            setQuestions(response.data);
            }
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
        };

        fetchQuestions();
    }, [numQuestions]);

    const handleNextQuestion = () => {
        // Validate user's response before moving to the next question
        const currentQuestion = questions[currentQuestionIndex];
        if (userResponse.trim().toLowerCase() === currentQuestion?.answer.toLowerCase()) {
        // User's answer is correct
        setIsCorrectAnswer(true);
        if (currentQuestionIndex < numQuestions - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setUserResponse('');
            setIsCorrectAnswer(null); // Reset correctness status for the next question
        } else {
            // Quiz completed, you can handle this case accordingly
            console.log('Quiz completed!');
        }
        } else {
        // User's answer is incorrect
        setIsCorrectAnswer(false);
        alert('Wrong answer! Try again.');
        }
    };

    const handleInputChange = (e) => {
        setUserResponse(e.target.value);
    };

    return (
        <div className="container mt-5">
        <div className="text-center">
            <h1 className="mb-4">Question {currentQuestionIndex + 1}</h1>
            <p>{questions[currentQuestionIndex]?.question}</p>
            <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your response"
            value={userResponse}
            onChange={handleInputChange}
            />
            {isCorrectAnswer !== null && (
            <p className={isCorrectAnswer ? 'text-success' : 'text-danger'}>
                {isCorrectAnswer ? 'Correct!' : 'Incorrect! Try again.'}
            </p>
            )}
            <button className="btn btn-primary" onClick={handleNextQuestion}>
            Next Question
            </button>
        </div>
        </div>
    );
};

export default Quiz;
