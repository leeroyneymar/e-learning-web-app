import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, BookOpen, Trophy, User } from 'lucide-react';
import './Header.css';

const Header = ({ onMenuClick, userProgress }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <Link to="/" className="logo">
          <BookOpen size={28} />
          <span>CodeLearn</span>
        </Link>
      </div>
      
      <nav className="header-nav">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/progress" className="nav-link">Progress</Link>
      </nav>
      
      <div className="header-right">
        <div className="points-display">
          <Trophy size={20} />
          <span>{userProgress.totalPoints} pts</span>
        </div>
        <div className="user-avatar">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;