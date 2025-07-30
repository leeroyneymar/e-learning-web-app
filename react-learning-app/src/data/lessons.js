export const lessons = [
  {
    id: 'js-basics-1',
    title: 'JavaScript Variables and Data Types',
    description: 'Learn about variables, strings, numbers, and basic data types in JavaScript',
    category: 'JavaScript Basics',
    difficulty: 'Beginner',
    language: 'javascript',
    featured: true,
    prerequisites: [],
    steps: [
      {
        title: 'Declaring Variables',
        description: `
          <p>In JavaScript, you can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>.</p>
          <ul>
            <li><code>let</code> - for variables that can change</li>
            <li><code>const</code> - for constants that won't change</li>
            <li><code>var</code> - older way (not recommended)</li>
          </ul>
          <p>Try declaring a variable called <code>name</code> and assign it your name as a string.</p>
        `,
        startingCode: `// Declare a variable called 'name' and assign it your name
`,
        solution: `let name = "John";`,
        hint: 'Use let followed by the variable name, then = and your name in quotes'
      },
      {
        title: 'Working with Numbers',
        description: `
          <p>JavaScript can work with numbers for mathematical operations.</p>
          <p>Create a variable called <code>age</code> and assign it a number, then create another variable called <code>nextYear</code> that adds 1 to the age.</p>
        `,
        startingCode: `// Create variables for age and next year's age
`,
        solution: `let age = 25;\nlet nextYear = age + 1;`,
        hint: 'Numbers don\'t need quotes, and you can use + for addition'
      },
      {
        title: 'Using console.log',
        description: `
          <p>The <code>console.log()</code> function displays output in the console.</p>
          <p>Use console.log to display your name and age variables.</p>
        `,
        startingCode: `let name = "John";\nlet age = 25;\n\n// Use console.log to display the variables\n`,
        solution: `let name = "John";\nlet age = 25;\n\nconsole.log(name);\nconsole.log(age);`,
        hint: 'Put the variable name inside the parentheses of console.log()'
      }
    ]
  },
  {
    id: 'js-functions-1',
    title: 'Introduction to Functions',
    description: 'Learn how to create and use functions in JavaScript',
    category: 'JavaScript Basics',
    difficulty: 'Beginner',
    language: 'javascript',
    featured: true,
    prerequisites: ['js-basics-1'],
    steps: [
      {
        title: 'Creating a Simple Function',
        description: `
          <p>Functions are reusable blocks of code. You can create them using the <code>function</code> keyword.</p>
          <p>Create a function called <code>greet</code> that displays "Hello, World!" using console.log.</p>
        `,
        startingCode: `// Create a function called 'greet'
`,
        solution: `function greet() {\n  console.log("Hello, World!");\n}`,
        hint: 'Use function keyword, then name, then parentheses, then curly braces with the code inside'
      },
      {
        title: 'Function Parameters',
        description: `
          <p>Functions can accept parameters (inputs) to make them more flexible.</p>
          <p>Create a function called <code>sayHello</code> that takes a <code>name</code> parameter and greets that person.</p>
        `,
        startingCode: `// Create a function that takes a name parameter
`,
        solution: `function sayHello(name) {\n  console.log("Hello, " + name + "!");\n}`,
        hint: 'Put the parameter name inside the parentheses, then use it in the function body'
      },
      {
        title: 'Calling Functions',
        description: `
          <p>To use a function, you need to "call" it by writing its name followed by parentheses.</p>
          <p>Call your <code>sayHello</code> function with your name as an argument.</p>
        `,
        startingCode: `function sayHello(name) {\n  console.log("Hello, " + name + "!");\n}\n\n// Call the function with your name\n`,
        solution: `function sayHello(name) {\n  console.log("Hello, " + name + "!");\n}\n\nsayHello("John");`,
        hint: 'Write the function name followed by parentheses with your name in quotes inside'
      }
    ]
  },
  {
    id: 'js-arrays-1',
    title: 'Working with Arrays',
    description: 'Learn how to create and manipulate arrays in JavaScript',
    category: 'JavaScript Basics',
    difficulty: 'Beginner',
    language: 'javascript',
    featured: false,
    prerequisites: ['js-basics-1'],
    steps: [
      {
        title: 'Creating Arrays',
        description: `
          <p>Arrays store multiple values in a single variable. They use square brackets.</p>
          <p>Create an array called <code>fruits</code> with three fruit names.</p>
        `,
        startingCode: `// Create an array of fruits
`,
        solution: `let fruits = ["apple", "banana", "orange"];`,
        hint: 'Use square brackets and separate items with commas'
      },
      {
        title: 'Accessing Array Elements',
        description: `
          <p>You can access array elements using their index (starting from 0).</p>
          <p>Use console.log to display the first fruit from your array.</p>
        `,
        startingCode: `let fruits = ["apple", "banana", "orange"];\n\n// Display the first fruit\n`,
        solution: `let fruits = ["apple", "banana", "orange"];\n\nconsole.log(fruits[0]);`,
        hint: 'Use the array name followed by [0] for the first element'
      }
    ]
  },
  {
    id: 'js-loops-1',
    title: 'Introduction to Loops',
    description: 'Learn how to use for loops to repeat code',
    category: 'JavaScript Control Flow',
    difficulty: 'Intermediate',
    language: 'javascript',
    featured: true,
    prerequisites: ['js-functions-1', 'js-arrays-1'],
    steps: [
      {
        title: 'Basic For Loop',
        description: `
          <p>For loops repeat code a specific number of times.</p>
          <p>Create a for loop that counts from 1 to 5 and displays each number.</p>
        `,
        startingCode: `// Create a for loop that counts from 1 to 5
`,
        solution: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`,
        hint: 'for (initialization; condition; increment) { code }'
      },
      {
        title: 'Looping Through Arrays',
        description: `
          <p>You can use loops to go through all elements in an array.</p>
          <p>Create an array of colors and use a for loop to display each color.</p>
        `,
        startingCode: `// Create an array and loop through it
`,
        solution: `let colors = ["red", "green", "blue"];\nfor (let i = 0; i < colors.length; i++) {\n  console.log(colors[i]);\n}`,
        hint: 'Use array.length for the condition and array[i] to access elements'
      }
    ]
  },
  {
    id: 'react-intro-1',
    title: 'Introduction to React Components',
    description: 'Learn the basics of React components and JSX',
    category: 'React Fundamentals',
    difficulty: 'Intermediate',
    language: 'javascript',
    featured: true,
    prerequisites: ['js-functions-1'],
    steps: [
      {
        title: 'Creating a Functional Component',
        description: `
          <p>React components are JavaScript functions that return JSX.</p>
          <p>Create a simple component called <code>Welcome</code> that returns a heading saying "Welcome to React!"</p>
        `,
        startingCode: `// Create a Welcome component
function Welcome() {
  // Return JSX here
}`,
        solution: `function Welcome() {\n  return <h1>Welcome to React!</h1>;\n}`,
        hint: 'Return JSX using angle brackets like HTML'
      },
      {
        title: 'Using Props',
        description: `
          <p>Props allow you to pass data to components.</p>
          <p>Modify the Welcome component to accept a <code>name</code> prop and display "Welcome to React, [name]!"</p>
        `,
        startingCode: `// Modify to accept props
function Welcome(props) {
  // Use props.name in the JSX
}`,
        solution: `function Welcome(props) {\n  return <h1>Welcome to React, {props.name}!</h1>;\n}`,
        hint: 'Use curly braces to include JavaScript expressions in JSX'
      }
    ]
  },
  {
    id: 'html-basics-1',
    title: 'HTML Structure and Elements',
    description: 'Learn the basic structure of HTML documents',
    category: 'Web Development',
    difficulty: 'Beginner',
    language: 'html',
    featured: false,
    prerequisites: [],
    steps: [
      {
        title: 'Basic HTML Structure',
        description: `
          <p>Every HTML document has a basic structure with html, head, and body tags.</p>
          <p>Create a basic HTML document with a title "My First Page" and a heading that says "Hello World!"</p>
        `,
        startingCode: `<!-- Create a basic HTML structure -->
`,
        solution: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>`,
        hint: 'Start with <!DOCTYPE html>, then html, head with title, and body with h1'
      }
    ]
  },
  {
    id: 'css-basics-1',
    title: 'CSS Styling Fundamentals',
    description: 'Learn how to style HTML elements with CSS',
    category: 'Web Development',
    difficulty: 'Beginner',
    language: 'css',
    featured: false,
    prerequisites: ['html-basics-1'],
    steps: [
      {
        title: 'Basic CSS Styling',
        description: `
          <p>CSS allows you to style HTML elements with properties like color, font-size, and background.</p>
          <p>Create CSS rules to make h1 elements blue and give them a font-size of 24px.</p>
        `,
        startingCode: `/* Style the h1 element */
`,
        solution: `h1 {\n  color: blue;\n  font-size: 24px;\n}`,
        hint: 'Use the element name followed by curly braces with property: value pairs'
      }
    ]
  },
  {
    id: 'python-basics-1',
    title: 'Python Variables and Print',
    description: 'Learn Python basics with variables and output',
    category: 'Python Fundamentals',
    difficulty: 'Beginner',
    language: 'python',
    featured: true,
    prerequisites: [],
    steps: [
      {
        title: 'Python Variables',
        description: `
          <p>In Python, you can create variables without declaring their type.</p>
          <p>Create a variable called <code>message</code> and assign it "Hello, Python!" then print it.</p>
        `,
        startingCode: `# Create a variable and print it
`,
        solution: `message = "Hello, Python!"\nprint(message)`,
        hint: 'Use = for assignment and print() function to display output'
      }
    ]
  },
  {
    id: 'js-objects-1',
    title: 'JavaScript Objects',
    description: 'Learn how to work with objects in JavaScript',
    category: 'JavaScript Basics',
    difficulty: 'Intermediate',
    language: 'javascript',
    featured: false,
    prerequisites: ['js-functions-1'],
    steps: [
      {
        title: 'Creating Objects',
        description: `
          <p>Objects in JavaScript store data as key-value pairs.</p>
          <p>Create an object called <code>person</code> with properties name, age, and city.</p>
        `,
        startingCode: `// Create a person object
`,
        solution: `let person = {\n  name: "John",\n  age: 30,\n  city: "New York"\n};`,
        hint: 'Use curly braces and separate properties with commas'
      },
      {
        title: 'Accessing Object Properties',
        description: `
          <p>You can access object properties using dot notation or bracket notation.</p>
          <p>Access and display the name property from your person object.</p>
        `,
        startingCode: `let person = {\n  name: "John",\n  age: 30,\n  city: "New York"\n};\n\n// Access the name property\n`,
        solution: `let person = {\n  name: "John",\n  age: 30,\n  city: "New York"\n};\n\nconsole.log(person.name);`,
        hint: 'Use object.property syntax'
      }
    ]
  },
  {
    id: 'js-conditionals-1',
    title: 'Conditional Statements',
    description: 'Learn how to use if-else statements in JavaScript',
    category: 'JavaScript Control Flow',
    difficulty: 'Beginner',
    language: 'javascript',
    featured: false,
    prerequisites: ['js-basics-1'],
    steps: [
      {
        title: 'Basic If Statement',
        description: `
          <p>Conditional statements let you execute code based on conditions.</p>
          <p>Create a variable <code>score</code> with value 85 and use an if statement to check if it's greater than 80.</p>
        `,
        startingCode: `// Create score variable and check condition
`,
        solution: `let score = 85;\nif (score > 80) {\n  console.log("Great job!");\n}`,
        hint: 'Use if (condition) { code } syntax'
      },
      {
        title: 'If-Else Statement',
        description: `
          <p>You can also specify what happens when the condition is false.</p>
          <p>Add an else statement to display "Keep trying!" when score is 80 or less.</p>
        `,
        startingCode: `let score = 75;\nif (score > 80) {\n  console.log("Great job!");\n}\n// Add else statement here\n`,
        solution: `let score = 75;\nif (score > 80) {\n  console.log("Great job!");\n} else {\n  console.log("Keep trying!");\n}`,
        hint: 'Add else { code } after the if block'
      }
    ]
  }
];

export default lessons;