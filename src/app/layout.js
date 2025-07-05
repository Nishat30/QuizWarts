// src/app/layout.js
// This is a Server Component, wrapping your entire application.

import './globals.css'; // Import your global Tailwind CSS styles
import { Inter } from 'next/font/google'; // Import Inter font
import ClientNavbarAndSidebar from './components/ClientNavbarAndSidebar'; // Import your client-side navigation component
import { categories } from '../data/quizzes'; // Import categories for the sidebar

// Initialize Inter font globally (correct place)
const inter = Inter({ subsets: ['latin'] });

// Define static metadata for the entire application (default SEO)
export const metadata = {
  title: 'QuizWarts: Micro-Quiz Platform',
  description: 'A platform for short, topic-specific quizzes on various subjects like History, Science, and Programming.',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> {/* Moved the script into the <head> tag */}
        {/*
          This inline script runs as early as possible in the document head.
          It checks localStorage for a saved theme preference and applies 'dark' or 'light'
          class to the <html> tag immediately. This prevents a "flash of unstyled content" (FOUC)
          where the page might initially render in light mode before the client-side JS loads.
        */}
        <script
          id="theme-initializer" // Added an ID for potential debugging/reference
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try { // Added try-catch for robustness in edge cases
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme) {
                    document.documentElement.classList.add(storedTheme);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {
                  console.error("Theme script failed:", e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* The ClientNavbarAndSidebar component will be present on all pages */}
        <ClientNavbarAndSidebar categories={categories} />

        <div className="sm:ml-64 pt-[64px] min-h-screen overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}