// src/app/components/ClientNavbarAndSidebar.js
'use client';

import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import Link from 'next/link';

export default function ClientNavbarAndSidebar({ categories }) {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-5 py-4 lg:px-15 lg:pl-13">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
        suppressHydrationWarning={true} // <-- ADD THIS LINE HERE
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
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/quizzes/${category.id}`} className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.074 4 8.442.2a1.085 1.085 0 0 0-1.635 0L3.926 4H.1a1 1 0 0 0-.964 1.244l1.22 4.646a1 1 0 0 0 .963.71H17.68a1 1 0 0 0 .963-.71l1.22-4.646A1 1 0 0 0 19.9 4h-3.826Zm-5.74 4.542a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.6-3.834a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.6 3.834a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                    <path d="M1.378 11.025A1.332 1.332 0 0 0 0 12.358v2.716a1.332 1.332 0 0 0 1.378 1.333h17.244a1.332 1.332 0 0 0 1.378-1.333v-2.716a1.332 1.332 0 0 0-1.378-1.333H1.378Z"/>
                  </svg>
                  <span className="ms-3">{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}