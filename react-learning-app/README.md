# CodeLearn - Interactive Programming Learning Platform

A modern, fully-functional React.js application designed to help students learn programming through interactive lessons, coding exercises, and quizzes.

## 🚀 Features

### 📚 Interactive Lessons
- Step-by-step programming tutorials
- Multiple programming languages (JavaScript, Python, HTML, CSS, React)
- Interactive code editor with syntax highlighting (Monaco Editor)
- Real-time code execution for JavaScript
- Progress tracking through lesson steps

### 💻 Code Editor
- Monaco Editor integration (VS Code editor)
- Syntax highlighting for multiple languages
- Dark theme support
- Real-time code execution and output display
- Code reset and solution hints

### 📊 Progress Tracking
- User progress saved in local storage
- Completion tracking for lessons and quizzes
- Points and achievement system
- Progress analytics and statistics
- Category and difficulty-based progress breakdown

### 🧩 Quiz System
- Interactive multiple-choice quizzes
- Instant feedback and explanations
- Score tracking and review system
- Passing criteria (70% threshold)
- Detailed answer review

### 🎯 Gamification
- Points system for completing lessons and quizzes
- Achievement badges and milestones
- Streak tracking
- Progress visualization

### 📱 Responsive Design
- Mobile-friendly interface
- Modern, clean UI with animations
- Sidebar navigation with lesson organization
- Intuitive dashboard with learning overview

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Monaco Editor** - Code editor component
- **Lucide React** - Icon library
- **CSS3** - Modern styling with animations
- **Local Storage** - Progress persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Sidebar.js & Sidebar.css
│   ├── Dashboard.js & Dashboard.css
│   ├── LessonViewer.js & LessonViewer.css
│   ├── Quiz.js & Quiz.css
│   └── Progress.js & Progress.css
├── data/
│   ├── lessons.js
│   └── quizzes.js
├── utils/
│   └── codeExecutor.js
├── App.js & App.css
└── index.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd react-learning-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📖 How to Use

### 1. Dashboard
- View your learning progress and statistics
- Access featured and next available lessons
- Track points and achievements

### 2. Lessons
- Navigate through step-by-step tutorials
- Write and execute code in the integrated editor
- Get hints and examples for each exercise
- Progress through prerequisites to unlock advanced lessons

### 3. Code Editor
- Write code with syntax highlighting
- Run JavaScript code directly in the browser
- Reset code to starting template
- View output in real-time

### 4. Quizzes
- Test your knowledge with interactive quizzes
- Get instant feedback on answers
- Review explanations for all questions
- Track scores and retake as needed

### 5. Progress Tracking
- Monitor completion across different categories
- View detailed statistics and achievements
- Track learning streaks and points earned

## 📚 Available Content

### JavaScript Basics
- Variables and Data Types
- Functions
- Arrays
- Objects
- Conditional Statements

### JavaScript Control Flow
- Loops
- Advanced conditional logic

### React Fundamentals
- Components and JSX
- Props and state management

### Web Development
- HTML structure and elements
- CSS styling fundamentals

### Python Fundamentals
- Variables and basic syntax

## 🎮 Gamification Features

### Points System
- 10 points per lesson step completion
- 50 points for completing entire lessons
- 100 points for passing quizzes (70%+)
- Bonus points for high quiz scores

### Achievements
- 🎯 First Steps - Complete your first lesson
- 📚 Getting Started - Complete 5 lessons
- 🚀 Dedicated Learner - Complete 10 lessons
- 💎 Point Collector - Earn 100 points
- 👑 High Achiever - Earn 500 points
- 🏆 Coding Master - Complete 20 lessons
- ⭐ Point Master - Earn 1000 points

## 🔧 Customization

### Adding New Lessons
Edit `src/data/lessons.js` to add new lessons with the following structure:

```javascript
{
  id: 'unique-lesson-id',
  title: 'Lesson Title',
  description: 'Brief description',
  category: 'Category Name',
  difficulty: 'Beginner|Intermediate|Advanced',
  language: 'javascript|python|html|css',
  featured: true|false,
  prerequisites: ['prerequisite-lesson-ids'],
  steps: [
    {
      title: 'Step Title',
      description: 'HTML description with instructions',
      startingCode: 'Initial code template',
      solution: 'Expected solution',
      hint: 'Helpful hint for students'
    }
  ]
}
```

### Adding New Quizzes
Edit `src/data/quizzes.js` to add new quizzes:

```javascript
{
  id: 'quiz-id',
  title: 'Quiz Title',
  description: 'Quiz description',
  category: 'Category',
  difficulty: 'Difficulty Level',
  questions: [
    {
      question: 'Question text',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: 1, // Index of correct answer
      explanation: 'Explanation of the answer'
    }
  ]
}
```

## 🌐 Code Execution

The application includes a safe JavaScript code execution environment that:
- Captures `console.log` output
- Handles errors gracefully
- Runs in a sandboxed environment
- Provides immediate feedback

For other languages (Python, etc.), the system displays placeholder messages indicating where backend integration would be implemented.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Features adaptive layouts and touch-friendly interfaces.

## 🔒 Data Persistence

User progress is automatically saved to browser local storage, including:
- Completed lessons and steps
- Quiz scores and attempts
- Points and achievements
- Learning streaks

## 🎨 Styling

The application features:
- Modern, clean design
- Smooth animations and transitions
- Consistent color scheme
- Accessible UI components
- Dark theme code editor

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Deploy Options
- Static hosting (Netlify, Vercel, GitHub Pages)
- Web servers (Apache, Nginx)
- Cloud platforms (AWS S3, Google Cloud Storage)

## 🔄 Future Enhancements

Potential features to add:
- Backend integration for multi-language code execution
- User authentication and cloud progress sync
- Social features (sharing achievements, leaderboards)
- More programming languages and frameworks
- Video tutorials integration
- Code collaboration features
- Advanced analytics and learning paths

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🆘 Support

For issues or questions:
- Check the browser console for error messages
- Ensure all dependencies are installed correctly
- Verify Node.js version compatibility
- Clear browser cache and local storage if needed

## 🎯 Learning Outcomes

Students using this platform will learn:
- Programming fundamentals across multiple languages
- Problem-solving and logical thinking
- Code debugging and testing
- Best practices in software development
- Interactive development workflows

The platform is designed to provide hands-on, practical learning experiences that prepare students for real-world programming challenges.
