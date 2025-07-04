// src/app/api/quiz/[id]/route.js
import { NextResponse } from 'next/server';
import { quizDetails } from '../../../../data/quizzes'; // Path: Go up from '[id]' to 'quiz', to 'api', to 'app', then to 'src', then into 'data'

export async function GET(request, { params }) {
  // The 'params' object contains the dynamic route segments.
  // In this case, it will have an 'id' property (e.g., 'js-fundamentals', 'ancient-history').
  const { id } = params;

  // Look up the specific quiz details using the 'id' from your mock data.
  const quiz = quizDetails[id];

  if (quiz) {
    // If the quiz is found, return it as a JSON response.
    return NextResponse.json(quiz);
  } else {
    // If the quiz is not found, return a 404 Not Found response.
    return NextResponse.json({ message: 'Quiz not found' }, { status: 404 });
  }
}