import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LessonViewer from './components/LessonViewer';
import Quiz from './components/Quiz';
import Progress from './components/Progress';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('learningProgress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      currentStreak: 0,
      totalPoints: 0,
      quizScores: {}
    };
  });

  useEffect(() => {
    localStorage.setItem('learningProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const updateProgress = (lessonId, completed = false, points = 0) => {
    setUserProgress(prev => ({
      ...prev,
      completedLessons: completed 
        ? [...new Set([...prev.completedLessons, lessonId])]
        : prev.completedLessons,
      totalPoints: prev.totalPoints + points
    }));
  };

  return (
    <Router>
      <div className="App">
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          userProgress={userProgress}
        />
        <div className="main-content">
          <Sidebar 
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            userProgress={userProgress}
          />
          <div className={`content-area ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <Routes>
              <Route path="/" element={<Dashboard userProgress={userProgress} />} />
              <Route 
                path="/lesson/:id" 
                element={<LessonViewer updateProgress={updateProgress} userProgress={userProgress} />} 
              />
              <Route 
                path="/quiz/:id" 
                element={<Quiz updateProgress={updateProgress} userProgress={userProgress} />} 
              />
              <Route 
                path="/quiz" 
                element={<Quiz updateProgress={updateProgress} userProgress={userProgress} />} 
              />
              <Route path="/progress" element={<Progress userProgress={userProgress} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
