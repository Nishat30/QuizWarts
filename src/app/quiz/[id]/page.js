// src/app/quiz/[id]/page.js

// Import necessary modules
import { quizzes as allQuizzesData, categories as allCategoriesData, quizDetails as allQuizDetailsData } from '../../../data/quizzes'; // Corrected path to src/data/quizzes.js
import QuizClient from '../../components/QuizClient';
import { notFound } from 'next/navigation'; // Import notFound for handling missing quizzes

// 1. generateStaticParams (Optional but recommended for better performance)
// This function tells Next.js which dynamic segments ([category]) to pre-render
export async function generateStaticParams() {
  return allQuizzesData.map((quiz) => ({
    id: quiz.id, // For the [id] segment
  }));
}

// 2. generateMetadata
// This allows you to set dynamic <title> and <meta> tags for each quiz page.
export async function generateMetadata({ params }) {
  // Await params before accessing its properties
  const awaitedParams = await params; // Add this line
  const quizId = awaitedParams.id;    // Use awaitedParams

  const quiz = allQuizDetailsData[quizId]; // Access details directly from imported data

  if (!quiz) {
    // If quiz is not found, return default metadata or indicate not found
    return {
      title: 'Quiz Not Found',
      description: 'The requested quiz does not exist.',
    };
  }

  return {
    title: quiz.title,
    description: `Take a quiz on ${quiz.title}. Test your knowledge!`,
  };
}

// 3. QuizPage Component (Server Component)
// This component fetches the quiz data on the server and passes it to the client component.
export default async function QuizPage({ params }) {
  // Await params here as well
  const awaitedParams = await params; // Add this line
  const quizId = awaitedParams.id;    // Use awaitedParams

  // Fetch quiz data (simulate API call, though we are using mock data directly)
  // In a real application, this would be a fetch to an actual API endpoint.
  // For now, we'll directly access the mock data.

  // Simulate an API call delay if you want to test loading states
  // await new Promise(resolve => setTimeout(resolve, 500));

  const quiz = allQuizDetailsData[quizId];

  if (!quiz) {
    notFound(); // Next.js built-in notFound function for 404
  }

  // Pass the fetched quiz data as props to the client component
  return (
    <main className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        {/* Render the Client Quiz component, passing the initial data */}
        <QuizClient initialQuizData={quiz} />
      </div>
    </main>
  );
}