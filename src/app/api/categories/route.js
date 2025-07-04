// src/app/api/categories/route.js
import { NextResponse } from 'next/server';
import { categories } from '../../../data/quizzes'; // Path: Go up from 'api' to 'app', then to 'src', then into 'data'

export async function GET() {
  // This function will be called for GET requests to /api/categories
  // It simply returns the 'categories' array from your mock data as a JSON response.
  return NextResponse.json(categories);
}