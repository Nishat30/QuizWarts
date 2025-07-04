// src/app/api/quizzes/[category]/route.js
import { NextResponse } from 'next/server';
import { quizzes } from '../../../../data/quizzes'; // Path: Go up from '[category]' to 'quizzes', to 'api', to 'app', then to 'src', then into 'data'

export async function GET(request, { params }) {
  // The 'params' object contains the dynamic route segments.
  // In this case, it will have a 'category' property (e.g., 'programming', 'history').
  const { category } = params;

  // Filter the quizzes array to only include quizzes that match the requested categoryId.
  const filteredQuizzes = quizzes.filter(quiz => quiz.categoryId === category);

  // Return the filtered quizzes as a JSON response.
  return NextResponse.json(filteredQuizzes);
}