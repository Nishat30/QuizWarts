// src/app/quizzes/[category]/page.js
// This is a Server Component, so no 'use client' directive is needed at the top.

import Link from 'next/link';
// Import mock data directly for generateStaticParams and metadata,
// as these run at build time (or on first request for SSR).
import { quizzes as allQuizzesData, categories as allCategoriesData } from '../../../data/quizzes';  // Corrected path to src/data/quizzes.js

// 1. generateStaticParams (Optional but recommended for better performance)
// This function tells Next.js which dynamic segments ([category]) to pre-render
// into static HTML at build time. For categories not listed here, it will
// fall back to Server-Side Rendering (SSR) on demand.
export async function generateStaticParams() {
  return allCategoriesData.map((category) => ({
    category: category.id, // 'category' corresponds to the folder name [category]
  }));
  // Example output: [{ category: 'history' }, { category: 'programming' }]
}

// 2. generateMetadata (for Dynamic SEO)
// This function allows you to set dynamic <title> and <meta> tags based on params.
export async function generateMetadata({ params }) {
  const categoryId = params.category;
  const category = allCategoriesData.find(cat => cat.id === categoryId);

  return {
    title: `Quizzes on ${category ? category.name : 'Category'} - QuizWarts`,
    description: `Browse and take quizzes related to ${category ? category.name : 'this category'}. Test your knowledge!`,
  };
}

// Default export is your Page Component
export default async function CategoryQuizzesPage({ params }) {
  const categoryId = params.category; // Get the dynamic category ID from the URL

  // 3. Data Fetching (Server-Side Rendering)
  // Fetch quizzes for the specific category from your API route.
  // Using { cache: 'no-store' } ensures this data is always fetched on each request
  // on the server, making it Server-Side Rendered (SSR).
  // In a real app, you might have different caching strategies.
  const res = await fetch(`http://localhost:3000/api/quizzes/${categoryId}`, { cache: 'no-store' });

  // Handle API errors (e.g., if the category API returns a non-200 status)
  if (!res.ok) {
    // You could render a more specific error message or redirect
    return (
      <main className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 text-center">
          <h1 className="text-3xl font-bold mb-6 text-red-500">Error Loading Quizzes</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Could not fetch quizzes for this category. Please try again later.</p>
          <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">Go back to Home</Link>
        </div>
      </main>
    );
  }

  const categoryQuizzes = await res.json();

  // Find the category name for display purposes (from your pre-imported data)
  const currentCategory = allCategoriesData.find(cat => cat.id === categoryId);

  // If the category itself isn't found in your static list (e.g., direct URL access to a non-existent category)
  if (!currentCategory) {
    return (
      <main className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 text-center">
          <h1 className="text-3xl font-bold mb-6 text-red-500">Category Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">The quiz category you are looking for does not exist.</p>
          <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">Go back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    // The main content area, with padding to account for the fixed sidebar
    <main className="p-4 sm:ml-64">
      {/* Container for content, mimicking Flowbite's main content area */}
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {`Quizzes in ${currentCategory.name}`}
        </h1>

        {categoryQuizzes.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">
            No quizzes available for this category yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryQuizzes.map((quiz) => (
              <Link
                key={quiz.id}
                href={`/quiz/${quiz.id}`} // Link to the individual quiz page
                className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {quiz.title}
                </h3>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {quiz.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}