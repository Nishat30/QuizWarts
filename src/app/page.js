// src/app/page.js
// This is a Server Component (no 'use client' needed here).
// It will be Statically Generated (SSG) at build time.

import Link from 'next/link';
// We don't need to import categories here anymore because the layout fetches them
// and the main content of this page doesn't directly use them, only the Link component.
// The categories for the sidebar are passed to ClientNavbarAndSidebar in layout.js.

// Metadata for this specific page (overrides default metadata from layout.js)
export const metadata = {
  title: 'Home - Micro-Quiz Platform', // Specific title for the home page
  description: 'Discover and take short quizzes on various topics like History, Science, and Programming.',
};

export default async function HomePage() {
  // Since categories are now passed to ClientNavbarAndSidebar in layout.js,
  // and this page's main content is just links, we don't strictly need to
  // fetch/import categories here again if they are only used for navigation.
  // However, if you want to display the categories directly on the page,
  // you would import them here as well. For now, let's assume they are displayed via layout.

  // To display them on the page itself (as per the requirement "list available quiz categories"):
  // You would need to import `categories` from `../data/quizzes` here as well.
  // Let's add that back to fulfill the requirement explicitly.
  const { categories } = await import('../data/quizzes'); // Dynamic import for Server Component

  return (
    // The main content area. The 'sm:ml-64' class pushes content to the right
    // to make space for the fixed sidebar.
    <main className="p-4 sm:ml-64">
      {/* Container for the main content, mimicking Flowbite's content area styling */}
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Explore Quiz Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/quizzes/${category.id}`} // Link to the dynamic category page
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center"
            >
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {category.name}
              </h2>
              {/* You can add a small image/icon here using next/image later if desired */}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}