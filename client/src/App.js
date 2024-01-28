// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import QuizPage from './components/QuizPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Main />} path="/" exact />
          <Route element={<QuizPage />} path="/quiz/:numQuestions" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



