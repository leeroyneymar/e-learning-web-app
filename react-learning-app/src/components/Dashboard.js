import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Target, TrendingUp, Play } from 'lucide-react';
import { lessons } from '../data/lessons';
import './Dashboard.css';

const Dashboard = ({ userProgress }) => {
  const completedCount = userProgress.completedLessons.length;
  const totalLessons = lessons.length;
  const completionPercentage = Math.round((completedCount / totalLessons) * 100);
  
  const nextLessons = lessons
    .filter(lesson => !userProgress.completedLessons.includes(lesson.id))
    .filter(lesson => lesson.prerequisites.every(prereq => 
      userProgress.completedLessons.includes(prereq)
    ))
    .slice(0, 3);

  const featuredLessons = lessons
    .filter(lesson => lesson.featured)
    .slice(0, 4);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back!</h1>
        <p>Continue your programming journey</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <BookOpen size={24} />
          </div>
          <div className="stat-content">
            <h3>{completedCount}</h3>
            <p>Lessons Completed</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Trophy size={24} />
          </div>
          <div className="stat-content">
            <h3>{userProgress.totalPoints}</h3>
            <p>Points Earned</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Target size={24} />
          </div>
          <div className="stat-content">
            <h3>{completionPercentage}%</h3>
            <p>Progress</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>{userProgress.currentStreak}</h3>
            <p>Day Streak</p>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Your Progress</h2>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p>{completedCount} of {totalLessons} lessons completed</p>
      </div>

      {nextLessons.length > 0 && (
        <div className="next-lessons">
          <h2>Continue Learning</h2>
          <div className="lesson-cards">
            {nextLessons.map(lesson => (
              <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="lesson-card">
                <div className="lesson-card-header">
                  <h3>{lesson.title}</h3>
                  <span className={`difficulty ${lesson.difficulty.toLowerCase()}`}>
                    {lesson.difficulty}
                  </span>
                </div>
                <p>{lesson.description}</p>
                <div className="lesson-card-footer">
                  <span className="category">{lesson.category}</span>
                  <Play size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="featured-lessons">
        <h2>Featured Lessons</h2>
        <div className="lesson-cards">
          {featuredLessons.map(lesson => {
            const isCompleted = userProgress.completedLessons.includes(lesson.id);
            const isLocked = lesson.prerequisites.some(prereq => 
              !userProgress.completedLessons.includes(prereq)
            );
            
            return (
              <Link 
                key={lesson.id} 
                to={isLocked ? '#' : `/lesson/${lesson.id}`} 
                className={`lesson-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}
                onClick={isLocked ? (e) => e.preventDefault() : undefined}
              >
                <div className="lesson-card-header">
                  <h3>{lesson.title}</h3>
                  <span className={`difficulty ${lesson.difficulty.toLowerCase()}`}>
                    {lesson.difficulty}
                  </span>
                </div>
                <p>{lesson.description}</p>
                <div className="lesson-card-footer">
                  <span className="category">{lesson.category}</span>
                  {isCompleted && <Trophy size={16} />}
                  {isLocked && <span className="locked-text">Locked</span>}
                  {!isCompleted && !isLocked && <Play size={16} />}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;