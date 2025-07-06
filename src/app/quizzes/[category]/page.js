import Link from 'next/link';
import { getCategoryById } from '../../../data/quizzes';

export async function generateStaticParams() {
  const { categories } = await import('../../../data/quizzes');
  return categories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }) {
  await Promise.resolve();
  const category = params.category;

  const categoryData = getCategoryById(category);
  if (!categoryData) {
    return {
      title: 'Category Not Found - QuizWarts',
    };
  }
  return {
    title: `${categoryData.name} Quizzes - QuizWarts`,
    description: `Browse quizzes about ${categoryData.name}. ${categoryData.description}`,
  };
}


export default async function CategoryQuizzesPage({ params }) {
  await Promise.resolve(); 
  const category = params.category;

  const categoryData = getCategoryById(category);

  if (!categoryData) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Category Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400">The quiz category you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline dark:text-blue-400">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="mx-10 mt-15 text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
        {categoryData.name} Quizzes
      </h1>
      <p className="mx-10 mt-3 text-lg text-gray-600 dark:text-gray-400 mb-0">{categoryData.description}</p>

      {categoryData.quizzes && categoryData.quizzes.length > 0 ? (
        <div className="mx-10 mt-8 mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.quizzes.map((quiz) => (
            <Link
              key={quiz.id}
              href={`/quiz/${quiz.id}`}
              className="block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 p-5"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{quiz.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{quiz.description}</p>
              <div className="mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium">
                Start Quiz &rarr;
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No quizzes available for this category yet.</p>
      )}
    </>
  );
}