// src/data/quizzes.js

export const categories = [
  { id: 'history', name: 'History' },
  { id: 'science', name: 'Science' },
  { id: 'programming', name: 'Programming' },
  // Add more categories here if needed
];

export const quizzes = [
  { id: 'ancient-history', categoryId: 'history', title: 'Ancient History Fundamentals', description: 'Test your knowledge of early civilizations.' },
  { id: 'world-wars', categoryId: 'history', title: 'World Wars Overview', description: 'Key events and figures from WWI and WWII.' },
  { id: 'basic-physics', categoryId: 'science', title: 'Basic Physics Concepts', description: 'Fundamental principles of physics.' },
  { id: 'js-fundamentals', categoryId: 'programming', title: 'JavaScript Fundamentals', description: 'Test your knowledge of core JavaScript concepts.' },
  { id: 'html-essentials', categoryId: 'programming', title: 'HTML Essentials', description: 'Core HTML tags and structure.' },
  { id: 'css-styling', categoryId: 'programming', title: 'CSS Styling', description: 'Mastering CSS for web design.' },
  { id: 'python-basics', categoryId: 'programming', title: 'Python Basics', description: 'Introduction to Python syntax and features.' },
  { id: 'c-intro', categoryId: 'programming', title: 'C Programming Intro', description: 'Basic C language concepts.' },
  { id: 'cpp-oop', categoryId: 'programming', title: 'C++ OOP Concepts', description: 'Object-Oriented Programming in C++.' },
  { id: 'golang-syntax', categoryId: 'programming', title: 'Golang Basic Syntax', description: 'Fundamentals of Go programming language.' },
  { id: 'sql-queries', categoryId: 'programming', title: 'SQL Basic Queries', description: 'Essential SQL commands for databases.' },
];

export const quizDetails = {
  'ancient-history': {
    id: 'ancient-history',
    title: 'Ancient History Fundamentals',
    questions: [
      {
        id: 'ah1',
        text: 'Which river was central to ancient Egyptian civilization?',
        options: ['Tigris', 'Euphrates', 'Nile', 'Yellow'],
        correctAnswer: 'Nile',
      },
      {
        id: 'ah2',
        text: 'What was the capital of the Roman Empire?',
        options: ['Athens', 'Constantinople', 'Rome', 'Alexandria'],
        correctAnswer: 'Rome',
      },
    ],
    categoryId: 'history', // <--- ADDED/CORRECTED THIS LINE
  },
  'js-fundamentals': {
    id: 'js-fundamentals',
    title: 'JavaScript Fundamentals',
    questions: [
      {
        id: 'js1',
        text: 'Which keyword is used to declare a variable whose value can be reassigned?',
        options: ['const', 'let', 'var', 'def'],
        correctAnswer: 'let',
      },
      {
        id: 'js2',
        text: 'What is the correct way to write an array in JavaScript?',
        options: ['["apple", "banana", "cherry"]', '("apple", "banana", "cherry")', '{apple, banana, cherry}', '<apple, banana, cherry>'],
        correctAnswer: '["apple", "banana", "cherry"]',
      },
      {
        id: 'js3',
        text: 'What does "DOM" stand for?',
        options: ['Data Object Model', 'Document Order Markup', 'Document Object Model', 'Digital Operation Manager'],
        correctAnswer: 'Document Object Model',
      },
    ],
    categoryId: 'programming', // <--- ADDED/CORRECTED THIS LINE
  },
  'html-essentials': {
    id: 'html-essentials',
    title: 'HTML Essentials',
    questions: [
      {
        id: 'html1',
        text: 'Which HTML tag is used to define an internal style sheet?',
        options: ['<script>', '<css>', '<style>', '<link>'],
        correctAnswer: '<style>',
      },
    ],
    categoryId: 'programming', // <--- ADDED/CORRECTED THIS LINE
  },
  'css-styling': {
    id: 'css-styling',
    title: 'CSS Styling',
    questions: [
      {
        id: 'css1',
        text: 'Which CSS property is used to change the text color of an element?',
        options: ['text-color', 'font-color', 'color', 'foreground-color'],
        correctAnswer: 'color',
      },
    ],
    categoryId: 'programming', // <--- ADDED/CORRECTED THIS LINE
  },
  'python-basics': {
    id: 'python-basics',
    title: 'Python Basics',
    questions: [
      {
        id: 'py1',
        text: 'Which of the following is used to define a block of code in Python?',
        options: ['Parentheses', 'Curly braces', 'Indentation', 'Keywords'],
        correctAnswer: 'Indentation',
      },
    ],
    categoryId: 'programming', // <--- ADDED/CORRECTED THIS LINE
  },
  'c-intro': {
    id: 'c-intro',
    title: 'C Programming Intro',
    questions: [
      {
        id: 'c1',
        text: 'What is the correct way to end a statement in C?',
        options: [':', ';', '.', ','],
        correctAnswer: ';',
      },
    ],
    categoryId: 'programming', // <--- ADDED/CORRECTED THIS LINE
  },
  'cpp-oop': {
    id: 'cpp-oop',
    title: 'C++ OOP Concepts',
    questions: [
      {
        id: 'cpp1',
        text: 'Which concept in OOP allows a class to inherit properties and methods from another class?',
        options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Abstraction'],
        correctAnswer: 'Inheritance',
      },
    ],
    categoryId: 'programming', // <--- ADDED/CORRECTED THIS LINE
  },
  'golang-syntax': {
    id: 'golang-syntax',
    title: 'Golang Basic Syntax',
    questions: [
      {
        id: 'go1',
        text: 'What keyword is used to declare a variable in Go?',
        options: ['var', 'let', 'const', 'new'],
        correctAnswer: 'var',
      },
    ],
    categoryId: 'programming', // <--- ADDED/CORRECTED THIS LINE
  },
  'sql-queries': {
    id: 'sql-queries',
    title: 'SQL Basic Queries',
    questions: [
      {
        id: 'sql1',
        text: 'Which SQL keyword is used to extract data from a database?',
        options: ['GET', 'OPEN', 'SELECT', 'EXTRACT'],
        correctAnswer: 'SELECT',
      },
    ],
    categoryId: 'programming', // <--- ADDED/CORRECTED THIS LINE
  },
  'world-wars': { // <--- Added the missing quiz 'world-wars' details here
    id: 'world-wars',
    title: 'World Wars Overview',
    questions: [
      {
        id: 'ww1',
        text: 'Which year did World War I begin?',
        options: ['1914', '1918', '1939', '1945'],
        correctAnswer: '1914',
      },
      {
        id: 'ww2',
        text: 'Which country was known as the "Land of the Rising Sun" during WWII?',
        options: ['China', 'Japan', 'Korea', 'Thailand'],
        correctAnswer: 'Japan',
      },
    ],
    categoryId: 'history', // <--- ADDED THIS LINE
  },
  'basic-physics': { // <--- Added the missing quiz 'basic-physics' details here
    id: 'basic-physics',
    title: 'Basic Physics Concepts',
    questions: [
      {
        id: 'bp1',
        text: 'What is the SI unit of force?',
        options: ['Joule', 'Watt', 'Newton', 'Volt'],
        correctAnswer: 'Newton',
      },
      {
        id: 'bp2',
        text: 'Which law states that "for every action, there is an equal and opposite reaction"?',
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Ohm's Law"],
        correctAnswer: "Newton's Third Law",
      },
    ],
    categoryId: 'science', // <--- ADDED THIS LINE
  },
};