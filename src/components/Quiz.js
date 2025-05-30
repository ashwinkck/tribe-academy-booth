import React, { useState, useEffect, useCallback } from 'react';
import { allQuestionsData } from '../questions'; // Adjust path if questions.js is elsewhere

// Helper function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Quiz = ({ onQuizComplete }) => {
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizPhase, setQuizPhase] = useState('initial'); // 'initial', 'collectInfo', 'playing', 'results'

  // State for user info
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userOrganization, setUserOrganization] = useState('');
  const [formError, setFormError] = useState('');


  const proceedToQuizQuestions = useCallback(() => {
    // This shuffles the entire list of questions from questions.js
    const shuffledAll = shuffleArray(allQuestionsData);
    // Then, it takes the first 10 questions from that fully shuffled list.
    // This ensures a random selection of 10 questions from your entire bank.
    const selectedTen = shuffledAll.slice(0, 10);

    const preparedQuestions = shuffleArray(
      selectedTen.map(q => ({
        ...q,
        options: shuffleArray([...q.options]) // Shuffles options for each question
      }))
    ); // Shuffles the order of the 10 selected questions

    setCurrentQuizQuestions(preparedQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setQuizPhase('playing');
  }, []);

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      setFormError('Name and Phone Number are required.');
      return;
    }
    if (!/^\d{10}$/.test(userPhone.trim())) {
        setFormError('Please enter a valid 10-digit phone number.');
        return;
    }
    setFormError('');

    console.log("User Info Collected:", {
      name: userName,
      phone: userPhone,
      organization: userOrganization,
    });

    proceedToQuizQuestions(); // Start the quiz questions
  };


  const handleAnswerSelect = (questionId, selectedOption) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      calculateScore();
      setQuizPhase('results');
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    currentQuizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const resetAndStartOver = () => {
    setUserName('');
    setUserPhone('');
    setUserOrganization('');
    setFormError('');
    setQuizPhase('initial'); 
  }

  if (quizPhase === 'initial') {
    return (
      <div className="text-center p-8 bg-brand-black rounded-lg max-w-md mx-auto mt-10 border border-gray-700 shadow-xl">
        <h2 className="text-3xl font-bold text-tribe-red-pink mb-6">Web3 Quiz Challenge!</h2>
        <p className="text-gray-300 mb-8">Test your knowledge with 10 random questions. Please provide your details to start.</p>
        <button
          onClick={() => setQuizPhase('collectInfo')}
          className="bg-tribe-mustard hover:bg-opacity-80 text-brand-black font-bold py-3 px-10 rounded-lg text-xl transition-transform duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    );
  }

  if (quizPhase === 'collectInfo') {
    return (
      <div className="text-center p-6 md:p-8 bg-gray-900 rounded-lg max-w-lg mx-auto mt-10 border border-gray-700 shadow-2xl">
        <h2 className="text-2xl font-bold text-tribe-red-pink mb-6">Your Details</h2>
        <form onSubmit={handleInfoSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-tribe-pink focus:border-tribe-pink"
            />
          </div>
          <div>
            <label htmlFor="userPhone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              id="userPhone"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-tribe-pink focus:border-tribe-pink"
            />
          </div>
          <div>
            <label htmlFor="userOrganization" className="block text-sm font-medium text-gray-300 mb-1">Organization (Optional)</label>
            <input
              type="text"
              id="userOrganization"
              value={userOrganization}
              onChange={(e) => setUserOrganization(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-tribe-pink focus:border-tribe-pink"
            />
          </div>
          {formError && <p className="text-red-400 text-sm text-center">{formError}</p>}
          <button
            type="submit"
            className="w-full bg-tribe-mustard hover:bg-opacity-80 text-brand-black font-bold py-3 px-10 rounded-lg text-xl transition-transform duration-300 transform hover:scale-105 mt-6"
          >
            Start Quiz
          </button>
        </form>
      </div>
    );
  }


  if (quizPhase === 'results') {
    return (
      <div className="text-center p-8 bg-gray-900 rounded-lg max-w-md mx-auto mt-10 border border-gray-700 shadow-2xl">
        <h2 className="text-3xl font-bold text-tribe-red-pink mb-6">Quiz Finished!</h2>
        <p className="text-gray-300 mb-2">Thank you, {userName || 'Participant'}!</p>
        <p className="text-4xl text-tribe-mustard mb-8">Your Score: {score} / {currentQuizQuestions.length}</p>
        <button
          onClick={resetAndStartOver}
          className="bg-tribe-mustard hover:bg-opacity-80 text-brand-black font-bold py-3 px-10 rounded-lg text-xl mr-4 transition-transform duration-300 transform hover:scale-105"
        >
          Play Again
        </button>
        {onQuizComplete && (
          <button
            onClick={onQuizComplete}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            Close Quiz
          </button>
        )}
      </div>
    );
  }

  if (quizPhase === 'playing') {
    if (!currentQuizQuestions.length || currentQuestionIndex >= currentQuizQuestions.length) {
      return <p className="text-white text-center p-10">Loading questions or quiz ended unexpectedly...</p>; 
    }

    const question = currentQuizQuestions[currentQuestionIndex];

    return (
      <div className="p-6 md:p-10 max-w-3xl mx-auto bg-gray-900 rounded-xl shadow-2xl text-white mt-10 border border-gray-700">
        <div className="mb-6">
          <p className="text-sm text-tribe-mustard font-semibold">Question {currentQuestionIndex + 1} of {currentQuizQuestions.length}</p>
          <h3 className="text-xl sm:text-2xl font-semibold mt-1">{question.text}</h3>
        </div>
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index} 
              onClick={() => handleAnswerSelect(question.id, option)}
              className={`block w-full p-4 rounded-lg text-left text-lg transition-all duration-200 transform hover:scale-[1.02]
                          ${userAnswers[question.id] === option 
                            ? 'bg-tribe-red-pink ring-2 ring-offset-2 ring-offset-gray-900 ring-white' 
                            : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextQuestion}
          disabled={!userAnswers[question.id]}
          className="w-full bg-tribe-mustard hover:bg-opacity-80 text-brand-black font-bold py-3 px-8 rounded-lg text-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex < currentQuizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
    );
  }

  // Fallback for unknown phase
  return <p className="text-white text-center p-10">Something went wrong with the quiz phase.</p>;
};

export default Quiz;
