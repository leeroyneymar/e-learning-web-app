import React from 'react';
import { Link } from 'react-router-dom';
import { X, Code, FileText, CheckCircle, Lock } from 'lucide-react';
import { lessons } from '../data/lessons';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, userProgress }) => {
  const groupedLessons = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.category]) {
      acc[lesson.category] = [];
    }
    acc[lesson.category].push(lesson);
    return acc;
  }, {});

  const isLessonCompleted = (lessonId) => {
    return userProgress.completedLessons.includes(lessonId);
  };

  const isLessonLocked = (lesson) => {
    if (lesson.prerequisites.length === 0) return false;
    return !lesson.prerequisites.every(prereq => 
      userProgress.completedLessons.includes(prereq)
    );
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Lessons</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="sidebar-content">
          {Object.entries(groupedLessons).map(([category, categoryLessons]) => (
            <div key={category} className="lesson-category">
              <h3 className="category-title">{category}</h3>
              <div className="lesson-list">
                {categoryLessons.map((lesson) => {
                  const completed = isLessonCompleted(lesson.id);
                  const locked = isLessonLocked(lesson);
                  
                  return (
                    <Link
                      key={lesson.id}
                      to={locked ? '#' : `/lesson/${lesson.id}`}
                      className={`lesson-item ${completed ? 'completed' : ''} ${locked ? 'locked' : ''}`}
                      onClick={locked ? (e) => e.preventDefault() : onClose}
                    >
                      <div className="lesson-icon">
                        {locked ? (
                          <Lock size={16} />
                        ) : completed ? (
                          <CheckCircle size={16} />
                        ) : lesson.type === 'quiz' ? (
                          <FileText size={16} />
                        ) : (
                          <Code size={16} />
                        )}
                      </div>
                      <div className="lesson-info">
                        <span className="lesson-title">{lesson.title}</span>
                        <span className="lesson-difficulty">{lesson.difficulty}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;