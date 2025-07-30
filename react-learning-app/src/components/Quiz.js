import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { quizzes } from '../data/quizzes';
import './Quiz.css';

const Quiz = ({ updateProgress, userProgress }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find(q => q.id === id);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (quiz) {
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setShowResults(false);
      setScore(0);
    }
  }, [quiz]);

  if (!quiz) {
    return <div className="quiz-not-found">Quiz not found</div>;
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    
    const finalScore = Math.round((correct / quiz.questions.length) * 100);
    setScore(finalScore);
    setShowResults(true);
    
    // Update progress
    const points = finalScore >= 70 ? 100 : Math.floor(finalScore / 2);
    updateProgress(quiz.id, finalScore >= 70, points);
  };

  const currentQuestionData = quiz.questions[currentQuestion];
  const isAnswered = selectedAnswers.hasOwnProperty(currentQuestion);
  const canProceed = isAnswered;

  if (showResults) {
    return (
      <div className="quiz-results">
        <div className="results-container">
          <div className="score-display">
            <div className={`score-circle ${score >= 70 ? 'pass' : 'fail'}`}>
              {score}%
            </div>
            <h2>{score >= 70 ? 'Congratulations! 🎉' : 'Keep Learning! 📚'}</h2>
            <p>
              {score >= 70 
                ? 'You passed the quiz! Great understanding of the concepts.'
                : 'You can retake this quiz anytime to improve your score.'
              }
            </p>
          </div>

          <div className="question-review">
            <h3>Review Your Answers</h3>
            {quiz.questions.map((question, qIndex) => {
              const userAnswer = selectedAnswers[qIndex];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div key={qIndex} className="review-item">
                  <div className="review-header">
                    <span className="question-number">Q{qIndex + 1}</span>
                    {isCorrect ? (
                      <CheckCircle className="correct" size={20} />
                    ) : (
                      <XCircle className="incorrect" size={20} />
                    )}
                  </div>
                  <p className="review-question">{question.question}</p>
                  <div className="review-answers">
                    <p className="user-answer">
                      Your answer: {question.options[userAnswer] || 'Not answered'}
                    </p>
                    {!isCorrect && (
                      <p className="correct-answer">
                        Correct answer: {question.options[question.correct]}
                      </p>
                    )}
                  </div>
                  {question.explanation && (
                    <p className="explanation">{question.explanation}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="results-actions">
            <button 
              onClick={() => window.location.reload()}
              className="retake-btn"
            >
              Retake Quiz
            </button>
            <button 
              onClick={() => navigate('/')}
              className="dashboard-btn"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h1>{quiz.title}</h1>
        <div className="quiz-progress">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="quiz-content">
        <div className="question-container">
          <h2>{currentQuestionData.question}</h2>
          
          <div className="options-container">
            {currentQuestionData.options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(currentQuestion, index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          {currentQuestionData.hint && !isAnswered && (
            <div className="hint">
              <strong>💡 Hint:</strong> {currentQuestionData.hint}
            </div>
          )}
        </div>

        <div className="quiz-navigation">
          <button 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="nav-btn secondary"
          >
            Previous
          </button>
          
          <span className="question-indicator">
            {currentQuestion + 1} / {quiz.questions.length}
          </span>
          
          <button 
            onClick={handleNext}
            disabled={!canProceed}
            className="nav-btn primary"
          >
            {currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;