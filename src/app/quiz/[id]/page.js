import { getQuizByIdWithCategory } from '../../../data/quizzes';
import QuizClient from '../../components/QuizClient'; 
import Link from 'next/link';

export async function generateStaticParams() {
  const { categories } = await import('../../../data/quizzes');
  const params = [];
  categories.forEach(category => {
    category.quizzes.forEach(quiz => {
      params.push({
        id: quiz.id,
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  await Promise.resolve();

  const id = params.id;
  const result = getQuizByIdWithCategory(id);

  if (!result || !result.quiz) {
    return {
      title: 'Quiz Not Found - QuizWarts',
    };
  }
  return {
    title: `${result.quiz.title} - QuizWarts`,
    description: result.quiz.description || `Take the ${result.quiz.title} quiz.`,
  };
}


export default async function SingleQuizPage({ params }) {
  await Promise.resolve();

  const id = params.id;
  const result = getQuizByIdWithCategory(id);

  if (!result || !result.quiz) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Quiz Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400">The quiz you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline dark:text-blue-400">
          Go to Home
        </Link>
      </div>
    );
  }

  const { quiz, categoryId } = result;

  const quizForClient = {
    ...quiz,
    categoryId: categoryId,
  };

  return (
    <QuizClient initialQuizData={quizForClient} />
  );
}