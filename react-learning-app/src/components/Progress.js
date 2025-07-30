import React from 'react';
import { Trophy, Target, Calendar, BookOpen, Award } from 'lucide-react';
import { lessons } from '../data/lessons';
import './Progress.css';

const Progress = ({ userProgress }) => {
  const totalLessons = lessons.length;
  const completedLessons = userProgress.completedLessons.length;
  const completionPercentage = Math.round((completedLessons / totalLessons) * 100);
  
  const categoryProgress = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.category]) {
      acc[lesson.category] = { total: 0, completed: 0 };
    }
    acc[lesson.category].total++;
    if (userProgress.completedLessons.includes(lesson.id)) {
      acc[lesson.category].completed++;
    }
    return acc;
  }, {});

  const difficultyProgress = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.difficulty]) {
      acc[lesson.difficulty] = { total: 0, completed: 0 };
    }
    acc[lesson.difficulty].total++;
    if (userProgress.completedLessons.includes(lesson.id)) {
      acc[lesson.difficulty].completed++;
    }
    return acc;
  }, {});

  const getAchievements = () => {
    const achievements = [];
    
    if (completedLessons >= 1) {
      achievements.push({
        title: 'First Steps',
        description: 'Complete your first lesson',
        icon: '🎯',
        unlocked: true
      });
    }
    
    if (completedLessons >= 5) {
      achievements.push({
        title: 'Getting Started',
        description: 'Complete 5 lessons',
        icon: '📚',
        unlocked: true
      });
    }
    
    if (completedLessons >= 10) {
      achievements.push({
        title: 'Dedicated Learner',
        description: 'Complete 10 lessons',
        icon: '🚀',
        unlocked: true
      });
    }
    
    if (userProgress.totalPoints >= 100) {
      achievements.push({
        title: 'Point Collector',
        description: 'Earn 100 points',
        icon: '💎',
        unlocked: true
      });
    }
    
    if (userProgress.totalPoints >= 500) {
      achievements.push({
        title: 'High Achiever',
        description: 'Earn 500 points',
        icon: '👑',
        unlocked: true
      });
    }

    // Add locked achievements
    if (completedLessons < 20) {
      achievements.push({
        title: 'Coding Master',
        description: 'Complete 20 lessons',
        icon: '🏆',
        unlocked: false
      });
    }
    
    if (userProgress.totalPoints < 1000) {
      achievements.push({
        title: 'Point Master',
        description: 'Earn 1000 points',
        icon: '⭐',
        unlocked: false
      });
    }
    
    return achievements;
  };

  const achievements = getAchievements();

  return (
    <div className="progress-page">
      <div className="progress-header">
        <h1>Your Learning Progress</h1>
        <p>Track your coding journey and achievements</p>
      </div>

      <div className="overview-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <BookOpen size={32} />
          </div>
          <div className="stat-content">
            <h2>{completedLessons}</h2>
            <p>Lessons Completed</p>
            <span className="stat-detail">out of {totalLessons}</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Trophy size={32} />
          </div>
          <div className="stat-content">
            <h2>{userProgress.totalPoints}</h2>
            <p>Total Points</p>
            <span className="stat-detail">Keep earning!</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Target size={32} />
          </div>
          <div className="stat-content">
            <h2>{completionPercentage}%</h2>
            <p>Overall Progress</p>
            <span className="stat-detail">Course completion</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Calendar size={32} />
          </div>
          <div className="stat-content">
            <h2>{userProgress.currentStreak}</h2>
            <p>Day Streak</p>
            <span className="stat-detail">Keep it up!</span>
          </div>
        </div>
      </div>

      <div className="overall-progress">
        <h2>Overall Progress</h2>
        <div className="progress-bar-large">
          <div 
            className="progress-fill-large" 
            style={{ width: `${completionPercentage}%` }}
          >
            <span className="progress-text">{completionPercentage}%</span>
          </div>
        </div>
        <p>{completedLessons} of {totalLessons} lessons completed</p>
      </div>

      <div className="category-progress">
        <h2>Progress by Category</h2>
        <div className="category-grid">
          {Object.entries(categoryProgress).map(([category, progress]) => {
            const percentage = Math.round((progress.completed / progress.total) * 100);
            return (
              <div key={category} className="category-card">
                <h3>{category}</h3>
                <div className="category-stats">
                  <span>{progress.completed}/{progress.total} lessons</span>
                  <span className="percentage">{percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="difficulty-progress">
        <h2>Progress by Difficulty</h2>
        <div className="difficulty-grid">
          {Object.entries(difficultyProgress).map(([difficulty, progress]) => {
            const percentage = Math.round((progress.completed / progress.total) * 100);
            return (
              <div key={difficulty} className="difficulty-card">
                <h3 className={`difficulty-${difficulty.toLowerCase()}`}>{difficulty}</h3>
                <div className="difficulty-stats">
                  <span>{progress.completed}/{progress.total} lessons</span>
                  <span className="percentage">{percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="achievements-section">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-icon">
                {achievement.unlocked ? (
                  <span className="achievement-emoji">{achievement.icon}</span>
                ) : (
                  <Award size={32} className="locked-icon" />
                )}
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                {!achievement.unlocked && <span className="locked-badge">Locked</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;