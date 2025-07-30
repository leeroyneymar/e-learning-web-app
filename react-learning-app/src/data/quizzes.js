export const quizzes = [
  {
    id: 'js-basics-quiz',
    title: 'JavaScript Basics Quiz',
    description: 'Test your knowledge of JavaScript fundamentals',
    category: 'JavaScript Basics',
    difficulty: 'Beginner',
    questions: [
      {
        question: 'Which keyword is used to declare a variable that can be reassigned in JavaScript?',
        options: ['var', 'let', 'const', 'define'],
        correct: 1,
        explanation: 'let is the modern way to declare variables that can be reassigned. const is for constants, and var is the older method.'
      },
      {
        question: 'What will console.log(typeof "Hello") output?',
        options: ['text', 'string', 'char', 'word'],
        correct: 1,
        explanation: 'The typeof operator returns "string" for text values enclosed in quotes.'
      },
      {
        question: 'How do you write a comment in JavaScript?',
        options: ['# This is a comment', '<!-- This is a comment -->', '// This is a comment', '* This is a comment'],
        correct: 2,
        explanation: 'JavaScript uses // for single-line comments and /* */ for multi-line comments.'
      },
      {
        question: 'Which method is used to display output in the browser console?',
        options: ['print()', 'display()', 'console.log()', 'output()'],
        correct: 2,
        explanation: 'console.log() is the standard method to output information to the browser console.'
      },
      {
        question: 'What is the result of 5 + "3" in JavaScript?',
        options: ['8', '53', '5 + 3', 'Error'],
        correct: 1,
        explanation: 'JavaScript performs type coercion and concatenates the number 5 with the string "3" to produce "53".'
      }
    ]
  },
  {
    id: 'js-functions-quiz',
    title: 'JavaScript Functions Quiz',
    description: 'Test your understanding of JavaScript functions',
    category: 'JavaScript Basics',
    difficulty: 'Beginner',
    questions: [
      {
        question: 'How do you define a function in JavaScript?',
        options: [
          'function myFunction() {}',
          'def myFunction() {}',
          'function: myFunction() {}',
          'create function myFunction() {}'
        ],
        correct: 0,
        explanation: 'Functions in JavaScript are defined using the function keyword followed by the function name and parentheses.'
      },
      {
        question: 'What are function parameters?',
        options: [
          'The values returned by a function',
          'The variables declared inside a function',
          'The inputs that a function accepts',
          'The code executed by a function'
        ],
        correct: 2,
        explanation: 'Parameters are the inputs that a function accepts when it is called.'
      },
      {
        question: 'How do you call a function named "greet"?',
        options: ['call greet()', 'greet()', 'function greet()', 'execute greet()'],
        correct: 1,
        explanation: 'Functions are called by writing their name followed by parentheses.'
      },
      {
        question: 'What keyword is used to return a value from a function?',
        options: ['give', 'return', 'output', 'send'],
        correct: 1,
        explanation: 'The return keyword is used to return a value from a function.'
      }
    ]
  },
  {
    id: 'react-basics-quiz',
    title: 'React Fundamentals Quiz',
    description: 'Test your knowledge of React components and JSX',
    category: 'React Fundamentals',
    difficulty: 'Intermediate',
    questions: [
      {
        question: 'What is JSX?',
        options: [
          'A new programming language',
          'JavaScript XML - a syntax extension for JavaScript',
          'A CSS framework',
          'A database query language'
        ],
        correct: 1,
        explanation: 'JSX is JavaScript XML, a syntax extension that allows you to write HTML-like code in JavaScript.'
      },
      {
        question: 'How do you pass data to a React component?',
        options: ['Through variables', 'Through props', 'Through parameters', 'Through arguments'],
        correct: 1,
        explanation: 'Props (properties) are used to pass data from parent components to child components in React.'
      },
      {
        question: 'What must a React functional component return?',
        options: ['A string', 'A number', 'JSX or null', 'An object'],
        correct: 2,
        explanation: 'React functional components must return JSX elements or null.'
      },
      {
        question: 'How do you embed JavaScript expressions in JSX?',
        options: ['Using () parentheses', 'Using {} curly braces', 'Using [] square brackets', 'Using <> angle brackets'],
        correct: 1,
        explanation: 'JavaScript expressions are embedded in JSX using curly braces {}.'
      }
    ]
  },
  {
    id: 'web-dev-quiz',
    title: 'Web Development Fundamentals',
    description: 'Test your knowledge of HTML and CSS basics',
    category: 'Web Development',
    difficulty: 'Beginner',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyperlink and Text Markup Language',
          'HyperText Markup Language',
          'High Tech Modern Language',
          'HyperText Machine Language'
        ],
        correct: 1,
        explanation: 'HTML stands for HyperText Markup Language, the standard markup language for web pages.'
      },
      {
        question: 'Which HTML tag is used for the largest heading?',
        options: ['<heading>', '<h6>', '<h1>', '<header>'],
        correct: 2,
        explanation: 'The <h1> tag represents the largest heading in HTML, with <h6> being the smallest.'
      },
      {
        question: 'What does CSS stand for?',
        options: [
          'Computer Style Sheets',
          'Cascading Style Sheets',
          'Creative Style System',
          'Colorful Style Sheets'
        ],
        correct: 1,
        explanation: 'CSS stands for Cascading Style Sheets, used to style and layout web pages.'
      },
      {
        question: 'How do you select an element by ID in CSS?',
        options: ['#elementid', '.elementid', 'elementid', '*elementid'],
        correct: 0,
        explanation: 'In CSS, you select an element by ID using the # symbol followed by the ID name.'
      }
    ]
  }
];

export default quizzes;