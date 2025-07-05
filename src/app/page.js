// src/app/page.js
import Image from 'next/image'; // Make sure you import Image if you use it
import Link from 'next/link';
import { categories } from '../data/quizzes'; // Adjust path if necessary

export default function HomePage() {
  return (
    // Adjust this outer div's padding. 'py-4' is less than 'py-10' or 'py-20'
    // 'mx-auto' for horizontal centering, 'max-w-7xl' to limit width
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12"> {/* Reduced padding-y */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500
              text-transparent bg-clip-text mb-8 text-center">
        Discover Quizzes Across Subjects
      </h1>

      <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"> {/* Increased cols for more cards */}
        {categories.map((category) => (
          <Link key={category.id} href={`/quizzes/${category.id}`} className="block">
            <div className="relative bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 overflow-hidden h-full flex flex-col">
              {/* Image with object-cover and proper dimensions */}
              {category.imageUrl && (
                <div className="relative w-full h-48 sm:h-40 md:h-48 lg:h-56"> {/* Fixed height for image container */}
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }} // Ensures image covers the area
                    className="rounded-t-lg"
                    priority={true} // For images above the fold
                  />
                </div>
              )}
              <div className="p-5 flex-grow"> {/* Flex-grow to make cards same height */}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
                <div className="mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium">
                  View Quizzes &rarr;
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}