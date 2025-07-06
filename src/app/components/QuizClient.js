'use client'; 

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { saveQuizResult } from '../my-stats/page'; 

export default function QuizClient({ initialQuizData }) {
  const [quiz, setQuiz] = useState(initialQuizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0); 
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState(
    Array(initialQuizData.questions.length).fill(null)
  );

  useEffect(() => {
    setQuiz(initialQuizData);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers(Array(initialQuizData.questions.length).fill(null));
  }, [initialQuizData.id, initialQuizData.questions.length, initialQuizData]); 

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <p className="text-center text-red-500 text-xl font-semibold">Error: Quiz data is missing or empty.</p>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSelect = (option) => {
    if (userAnswers[currentQuestionIndex] !== null && showFeedback) return;

    setSelectedAnswer(option);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);

    setShowFeedback(true);

    const currentCorrectCount = newAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
    setScore(currentCorrectCount); 
  };

  const handleNavigation = useCallback((direction) => {
    setShowFeedback(false);
    setSelectedAnswer(null);

    let newIndex = currentQuestionIndex;
    if (direction === 'next') {
      newIndex = currentQuestionIndex + 1;
    } else if (direction === 'prev') {
      newIndex = currentQuestionIndex - 1;
    }

    if (newIndex >= 0 && newIndex < quiz.questions.length) {
      setCurrentQuestionIndex(newIndex);
      if (userAnswers[newIndex] !== null) {
        setSelectedAnswer(userAnswers[newIndex]);
        setShowFeedback(true);
      }
    } else if (newIndex >= quiz.questions.length) {
      setQuizCompleted(true);
      const finalPercentageScore = (score / quiz.questions.length) * 100;
      const scoreToSave = isNaN(finalPercentageScore) ? 0 : finalPercentageScore;

      saveQuizResult(quiz.id, scoreToSave, quiz.title);
      console.log(`Quiz "${quiz.title}" completed with score: ${scoreToSave.toFixed(2)}%`);
    }
  }, [currentQuestionIndex, quiz.questions.length, userAnswers, quiz.id, quiz.title, score]);

  const getOptionClasses = (option) => {
    let baseClasses = 'block w-full text-left py-2 px-4 border rounded-lg transition-all duration-200 text-lg ';
    const isAnswered = userAnswers[currentQuestionIndex] !== null;

    if (isAnswered) {
      if (option === currentQuestion.correctAnswer) {
        baseClasses += 'bg-green-100 border-green-500 text-green-800 dark:bg-green-700 dark:border-green-600 dark:text-green-100 ring-2 ring-green-500';
      } else if (userAnswers[currentQuestionIndex] === option) {
        baseClasses += 'bg-red-100 border-red-500 text-red-800 dark:bg-red-700 dark:border-red-600 dark:text-red-100 ring-2 ring-red-500';
      } else {
        baseClasses += 'bg-gray-50 border-gray-200 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 opacity-70 cursor-not-allowed';
      }
    } else {
      baseClasses += 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600';
      if (selectedAnswer === option) {
        baseClasses += ' ring-2 ring-blue-500 dark:ring-blue-400 bg-blue-50 dark:bg-blue-900/50';
      }
    }
    return baseClasses;
  };

  const displayCategoryName = quiz.categoryId
    ? quiz.categoryId.charAt(0).toUpperCase() + quiz.categoryId.slice(1).replace(/-/g, ' ')
    : 'Category';

  const isCurrentQuestionAnswered = userAnswers[currentQuestionIndex] !== null;

  const displayScorePercentage = quiz.questions.length > 0
    ? ((score / quiz.questions.length) * 100).toFixed(2)
    : '0.00';

  return (
    <div className="flex justify-center items-center py-6 px-3 sm:px-6 lg:px-8 bg-gray-900 min-h-[calc(100vh-68px)]">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 transform transition-all duration-300 ease-in-out">
        {quizCompleted ? (
          <div className="text-center py-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">Quiz Completed! 🎉</h2>
            <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
              Your score: <span className="font-bold text-blue-600 dark:text-blue-400">{displayScorePercentage}%</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2 2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Go to Home
              </Link>
              {quiz.categoryId && (
                <Link
                  href={`/quizzes/${quiz.categoryId}`}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl shadow-sm text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                  More Quizzes in {displayCategoryName}
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
              {quiz.title}
            </h1>

            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mb-5">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
              ></div>
            </div>

            <p className="text-lg mb-5 text-gray-600 dark:text-gray-400 font-medium">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </p>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white leading-relaxed flex-grow">
              {currentQuestion.text}
            </h2>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isCurrentQuestionAnswered && showFeedback}
                  className={getOptionClasses(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-between gap-3 mt-auto">
              <button
                onClick={() => handleNavigation('prev')}
                disabled={currentQuestionIndex === 0}
                className={`inline-flex items-center px-5 py-2 border border-gray-300 text-base font-medium rounded-xl shadow-sm text-gray-700 dark:text-gray-200 dark:border-gray-600 transition-colors transform active:scale-95
                  ${currentQuestionIndex === 0
                    ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-60'
                    : 'bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  }`}
              >
                <svg className="mr-2 -ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Previous
              </button>

              <button
                onClick={() => handleNavigation('next')}
                disabled={!isCurrentQuestionAnswered}
                className={`inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-xl shadow-sm text-white transition-colors transform active:scale-95
                  ${!isCurrentQuestionAnswered
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed opacity-60'
                    : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  }`}
              >
                {currentQuestionIndex < quiz.questions.length - 1 ? (
                  <>
                    Next Question
                    <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </>
                ) : (
                  <>
                    Finish Quiz
                    <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}