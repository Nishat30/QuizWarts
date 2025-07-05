// src/app/components/ClientNavbarAndSidebar.js
'use client';

import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import Link from 'next/link';

export default function ClientNavbarAndSidebar({ categories, children }) {
  useEffect(() => {
    // Attempt to initialize Flowbite with a slight delay
    // This can help if the DOM elements aren't fully ready immediately
    const timer = setTimeout(() => {
      initFlowbite();
      console.log('Flowbite initialized (after delay)'); // For debugging
    }, 100); // Small delay, e.g., 100ms

    // Cleanup function for useEffect
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means it runs once on mount

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-5 py-4 lg:px-15 lg:pl-13">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <Link href="/" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">QuizWarts</span>
              </Link>
            </div>
            <div className="ml-25 flex-1 max-w-150 mx-6 hidden md:block"> {/* Hidden on small screens, shown on medium and up */}
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for quizzes..." // Updated placeholder
                    />
                </div>
            </div>
            <div className="flex items-center md:order-2">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed Left Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
        suppressHydrationWarning={true}
      >
        <div className="h-full px-5 pb-5 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/" className="flex items-center p-3 mt-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                <span className="ms-3">Home</span>
              </Link>
            </li>

            {/* Category links with dropdowns */}
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="flex items-center w-full p-3 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls={`dropdown-${category.id}`}
                  data-collapse-toggle={`dropdown-${category.id}`}
                >
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    {/* Placeholder SVG for category icon - replace with appropriate icon if you have one */}
                    <path d="M11.074 4 8.442.2a1.085 1.085 0 0 0-1.635 0L3.926 4H.1a1 1 0 0 0-.964 1.244l1.22 4.646a1 1 0 0 0 .963.71H17.68a1 1 0 0 0 .963-.71l1.22-4.646A1 1 0 0 0 19.9 4h-3.826Zm-5.74 4.542a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.6-3.834a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.6 3.834a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                  </svg>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{category.name}</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <ul id={`dropdown-${category.id}`} className="hidden py-2 space-y-2">
                  {category.quizzes && category.quizzes.map((quiz) => (
                    <li key={quiz.id}>
                      {/*
                        *** IMPORTANT CORRECTION HERE ***
                        Removed the comment from inside the href's curly braces to fix the Syntax Error.
                        This will now generate links like /quiz/bio-cell-basics,
                        matching your existing src/app/quiz/[id]/page.js route.
                      */}
                      <Link
                        href={`/quiz/${quiz.id}`} // CORRECTED LINK FORMAT: Comment removed from inside {}
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        {quiz.title} {/* Use quiz.title here, as defined in your quizzes.js */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {/* Removed My Stats */}
          </ul>
        </div>
      </aside>

      {/* Main Content Area - this is where your pages will be rendered */}
      {/* The `layout.js` should already handle the padding for this area */}
      {children}
    </>
  );
}