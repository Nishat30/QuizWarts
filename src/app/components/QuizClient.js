// src/app/components/QuizClient.js
'use client'; // This directive makes this a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link'; // For client-side navigation

export default function QuizClient({ initialQuizData }) {
  // State to hold the current quiz data, questions, user progress, and score
  const [quiz, setQuiz] = useState(initialQuizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Effect to reset quiz state when a new quiz is loaded (e.g., navigating between quiz pages)
  useEffect(() => {
    setQuiz(initialQuizData);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
  }, [initialQuizData.id]); // Dependency array: re-run if initialQuizData.id changes

  // Basic check for valid quiz data
  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return <p className="text-center text-red-500">Error: Quiz data is missing or empty.</p>;
  }

  // Get the current question based on the index
  const currentQuestion = quiz.questions[currentQuestionIndex];

  // Handler for when a user selects an answer
  const handleAnswerSelect = (option) => {
    // Prevent changing answer if feedback is already being shown
    if (showFeedback) return;

    setSelectedAnswer(option); // Set the user's selected answer
    setShowFeedback(true); // Show immediate feedback

    // Check if the selected answer is correct and update score
    if (option === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Handler for moving to the next question or finishing the quiz
  const handleNextQuestion = () => {
    setShowFeedback(false); // Hide feedback for the next question
    setSelectedAnswer(null); // Clear selected answer

    // Check if there are more questions
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to next question
    } else {
      setQuizCompleted(true); // All questions answered, quiz is complete
    }
  };

  // Helper function to apply dynamic Tailwind CSS classes based on answer state
  const getOptionClasses = (option) => {
    let classes = 'block w-full text-left p-4 border rounded-lg transition-colors duration-200 ';
    if (showFeedback) {
      // If feedback is showing, highlight correct/incorrect answers
      if (option === currentQuestion.correctAnswer) {
        classes += 'bg-green-100 border-green-500 dark:bg-green-800 dark:border-green-600'; // Correct answer
      } else if (selectedAnswer === option) {
        classes += 'bg-red-100 border-red-500 dark:bg-red-800 dark:border-red-600'; // Incorrectly selected
      } else {
        classes += 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600 opacity-60'; // Unselected after feedback
      }
    } else {
      // Before feedback, apply hover styles and highlight the currently selected option
      classes += 'bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600';
      if (selectedAnswer === option) {
        classes += ' ring-2 ring-blue-500'; // Highlight selected before feedback
      }
    }
    return classes;
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">{quiz.title}</h1>

      {quizCompleted ? (
        // Display quiz completion screen and score
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Quiz Completed!</h2>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">Your score: **{score}** out of **{quiz.questions.length}**</p>
          <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Go to Home
          </Link>
          {/* Link back to the specific category page */}
          <Link href={`/quizzes/${quiz.categoryId}`} className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600">
            More Quizzes in {quiz.categoryId.charAt(0).toUpperCase() + quiz.categoryId.slice(1)}
          </Link>
        </div>
      ) : (
        // Display current question and answer options
        <div>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{currentQuestion.text}</h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={showFeedback} // Disable buttons once an answer is selected for feedback
                className={getOptionClasses(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Feedback section (visible after an answer is selected) */}
          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 dark:bg-green-900' : 'bg-red-50 dark:bg-red-900'} text-center`}>
              <p className={`font-semibold text-lg ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect!'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The correct answer was: **{currentQuestion.correctAnswer}**
              </p>
              {/* Button to move to the next question or finish the quiz */}
              <button
                onClick={handleNextQuestion}
                className="mt-4 inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}