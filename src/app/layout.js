

import './globals.css';
import { Inter } from 'next/font/google';
import ClientNavbarAndSidebar from './components/dashboard'; 
import { categories } from '../data/quizzes'; 

const inter = Inter({ subsets: ['latin'] });

// Define static metadata for the entire application (default SEO)
export const metadata = {
  title: 'QuizWarts: Micro-Quiz Platform',
  description: 'A platform for short, topic-specific quizzes on various subjects like History, Science, and Programming.',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ClientNavbarAndSidebar categories={categories}>
          {children} 
          
        </ClientNavbarAndSidebar>
        <p className="text-center text-white dark:bg-gray-900 text-sm py-0 mt-0 pl-60 pb-10">
          © 2025| Made by Shafaqun Nisa 🤍   
        </p>
      </body>
    </html>
  );
}
