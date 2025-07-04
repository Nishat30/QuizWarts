// src/app/layout.js
// This is a Server Component, wrapping your entire application.

import './globals.css'; // Import your global Tailwind CSS styles
import { Inter } from 'next/font/google'; // Import Inter font
import ClientNavbarAndSidebar from './components/ClientNavbarAndSidebar'; // Import your client-side navigation component

// Initialize Inter font globally (correct place)
const inter = Inter({ subsets: ['latin'] });

// Define static metadata for the entire application (default SEO)
export const metadata = {
  title: 'QuizWarts: Micro-Quiz Platform',
  description: 'A platform for short, topic-specific quizzes on various subjects like History, Science, and Programming.',
};

export default async function RootLayout({ children }) {
  // Use await import() to dynamically load categories within the async component function
  // This ensures categories are defined and available for ClientNavbarAndSidebar.
  const { categories: allCategories } = await import('../data/quizzes'); // Corrected path to src/data/quizzes.js

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* The ClientNavbarAndSidebar component will be present on all pages */}
        <ClientNavbarAndSidebar categories={allCategories} />

        {/* The 'children' prop is where your individual pages will be rendered */}
        {children}
      </body>
    </html>
  );
}