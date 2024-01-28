// Main.js
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="mb-4">Start Quiz</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                <Link to="/quiz/5" className="btn btn-primary btn-lg btn-block mb-3">
                    5 Questions
                </Link>
                <Link to="/quiz/10" className="btn btn-primary btn-lg btn-block mb-3">
                    10 Questions
                </Link>
                <Link to="/quiz/15" className="btn btn-primary btn-lg btn-block mb-3">
                    15 Questions
                </Link>
                <Link to="/quiz/20" className="btn btn-primary btn-lg btn-block">
                    20 Questions
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;

