'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import moment from 'moment';

export const saveQuizResult = (quizId, score, quizTitle) => {
  if (typeof window !== 'undefined') {
    try {
      const existingStats = JSON.parse(localStorage.getItem('quizWartsStats') || '[]');
      const newResult = {
        id: Date.now(),
        quizId,
        quizTitle,
        score: Math.max(0, Math.min(100, score)),
        date: new Date().toISOString(),
      };
      existingStats.push(newResult);
      localStorage.setItem('quizWartsStats', JSON.stringify(existingStats));
      console.log('Quiz result saved:', newResult);
    } catch (error) {
      console.error('Error saving quiz result to local storage:', error);
    }
  }
};

const getQuizResults = () => {
  if (typeof window !== 'undefined') {
    try {
      return JSON.parse(localStorage.getItem('quizWartsStats') || '[]');
    } catch (error) {
      console.error('Error reading quiz results from local storage:', error);
      return [];
    }
  }
  return [];
};

const clearQuizStats = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('quizWartsStats');
    console.log('All quiz stats cleared from local storage.');
  }
};


export default function MyStatsPage() {
  const [quizStats, setQuizStats] = useState([]);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);

  useEffect(() => {
    setQuizStats(getQuizResults());
  }, []);

  const chartData = useMemo(() => {
    return quizStats
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map(stat => ({
        name: stat.quizTitle,
        score: stat.score,
        date: stat.date,
      }));
  }, [quizStats]);

  const totalQuizzesTaken = quizStats.length;
  const averageScore = totalQuizzesTaken > 0
    ? (quizStats.reduce((sum, stat) => sum + stat.score, 0) / totalQuizzesTaken).toFixed(2)
    : 'N/A';

  const uniqueQuizzes = new Set(quizStats.map(stat => stat.quizId)).size;

  const handleClearStats = () => {
    clearQuizStats();
    setQuizStats([]);
    setShowClearConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6 sm:p-8 pt-24 sm:pt-28">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 dark:text-blue-300">My Quiz Stats</h1>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg text-center">
            <p className="text-lg font-medium text-blue-700 dark:text-blue-200">Quizzes Taken</p>
            <p className="text-3xl font-bold text-white dark:text-blue-50">{totalQuizzesTaken}</p>
          </div>
          <div className="bg-green-100 dark:bg-blue-900 p-4 rounded-lg text-center">
            <p className="text-lg font-medium text-blue-700 dark:text-blue-200">Average Score</p>
            <p className="text-3xl font-bold text-white dark:text-green-50">{averageScore}%</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Score Progress Over Time</h2>
        {totalQuizzesTaken === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 py-10">
            No quiz data available yet. Take some quizzes to see your stats here!👻
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-grid-light)" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={120}
                interval={0}
                tick={{ fill: 'var(--color-text-axis)', fontSize: 12 }}
                style={{ fill: 'var(--color-text-axis)' }}
                stroke="var(--color-axis-line)"
                padding={{ left: 20, right: 20 }}
              />
              <YAxis
                label={{ value: 'Score (%)', angle: -90, position: 'insideLeft', fill: 'var(--color-text-axis)', offset: -10 }}
                domain={[0, 100]}
                tick={{ fill: 'var(--color-text-axis)' }}
                style={{ fill: 'var(--color-text-axis)' }}
                stroke="var(--color-axis-line)"
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'var(--color-tooltip-bg)', border: '1px solid var(--color-axis-line)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                labelStyle={{ color: 'var(--color-tooltip-label)', fontWeight: 'bold' }}
                itemStyle={{ color: 'var(--color-tooltip-item)' }}
                formatter={(value, name, props) => [`${value}%`, props.payload.quizTitle || 'Quiz Score']}
                labelFormatter={(label) => {
                  const dataPoint = chartData.find(d => d.name === label);
                  return dataPoint ? moment(dataPoint.date).format('MMMM D, YYYY HH:mm A') : label;
                }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px', color: 'var(--color-legend-text)' }} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#82ca9d"
                activeDot={{ r: 6, fill: '#82ca9d', stroke: '#ffffff', strokeWidth: 2 }}
                strokeWidth={3}
                name="Score"
                dot={{ r: 4, fill: '#82ca9d', stroke: '#fff', strokeWidth: 1 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowClearConfirmation(true)}
            className="px-6 py-3 bg-red-800 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200"
          >
            Clear All Stats
          </button>
        </div>
      </div>

      {showClearConfirmation && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-2xl max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Confirm Clear Stats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Are you sure you want to clear all your quiz statistics? This action cannot be undone.⚡</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleClearStats}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200"
              >
                Yes, Clear
              </button>
              <button
                onClick={() => setShowClearConfirmation(false)}
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg shadow-md transition-colors duration-200 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
