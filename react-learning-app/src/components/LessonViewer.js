import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { lessons } from '../data/lessons';
import { executeCode } from '../utils/codeExecutor';
import './LessonViewer.css';

const LessonViewer = ({ updateProgress, userProgress }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = lessons.find(l => l.id === id);
  
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (lesson) {
      setCode(lesson.steps[0]?.startingCode || '');
      setIsCompleted(userProgress.completedLessons.includes(lesson.id));
    }
  }, [lesson, userProgress]);

  if (!lesson) {
    return <div className="lesson-not-found">Lesson not found</div>;
  }

  const currentStepData = lesson.steps[currentStep];

  const handleRunCode = async () => {
    setIsRunning(true);
    try {
      const result = await executeCode(code, lesson.language);
      setOutput(result);
      
      // Check if code meets the criteria for the current step
      if (currentStepData.solution && code.trim() === currentStepData.solution.trim()) {
        updateProgress(lesson.id, false, 10);
        if (currentStep === lesson.steps.length - 1) {
          setIsCompleted(true);
          updateProgress(lesson.id, true, 50);
        }
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
    setIsRunning(false);
  };

  const handleReset = () => {
    setCode(currentStepData.startingCode || '');
    setOutput('');
  };

  const nextStep = () => {
    if (currentStep < lesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCode(lesson.steps[currentStep + 1]?.startingCode || '');
      setOutput('');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCode(lesson.steps[currentStep - 1]?.startingCode || '');
      setOutput('');
    }
  };

  const getNextLesson = () => {
    const currentIndex = lessons.findIndex(l => l.id === lesson.id);
    return lessons[currentIndex + 1];
  };

  const nextLesson = getNextLesson();

  return (
    <div className="lesson-viewer">
      <div className="lesson-header">
        <div className="lesson-title">
          <h1>{lesson.title}</h1>
          <span className={`difficulty ${lesson.difficulty.toLowerCase()}`}>
            {lesson.difficulty}
          </span>
          {isCompleted && <CheckCircle className="completed-icon" size={24} />}
        </div>
        <div className="lesson-progress">
          Step {currentStep + 1} of {lesson.steps.length}
        </div>
      </div>

      <div className="lesson-content">
        <div className="lesson-instructions">
          <div className="step-content">
            <h2>{currentStepData.title}</h2>
            <div 
              className="step-description"
              dangerouslySetInnerHTML={{ __html: currentStepData.description }}
            />
            
            {currentStepData.hint && (
              <div className="hint">
                <strong>💡 Hint:</strong> {currentStepData.hint}
              </div>
            )}

            {currentStepData.example && (
              <div className="example">
                <strong>Example:</strong>
                <pre><code>{currentStepData.example}</code></pre>
              </div>
            )}
          </div>

          <div className="step-navigation">
            <button 
              onClick={prevStep} 
              disabled={currentStep === 0}
              className="nav-btn"
            >
              <ArrowLeft size={16} /> Previous
            </button>
            <button 
              onClick={nextStep} 
              disabled={currentStep === lesson.steps.length - 1}
              className="nav-btn"
            >
              Next <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="lesson-playground">
          <div className="editor-container">
            <div className="editor-header">
              <span>Code Editor ({lesson.language})</span>
              <div className="editor-actions">
                <button onClick={handleReset} className="action-btn">
                  <RotateCcw size={16} /> Reset
                </button>
                <button 
                  onClick={handleRunCode} 
                  className="run-btn"
                  disabled={isRunning}
                >
                  <Play size={16} /> {isRunning ? 'Running...' : 'Run Code'}
                </button>
              </div>
            </div>
            
            <Editor
              height="300px"
              language={lesson.language}
              value={code}
              onChange={(value) => setCode(value || '')}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true
              }}
            />
          </div>

          <div className="output-container">
            <div className="output-header">Output</div>
            <div className="output-content">
              <pre>{output || 'Run your code to see the output...'}</pre>
            </div>
          </div>
        </div>
      </div>

      {isCompleted && (
        <div className="lesson-completion">
          <div className="completion-message">
            <CheckCircle size={48} />
            <h2>Lesson Completed! 🎉</h2>
            <p>Great job! You've successfully completed this lesson.</p>
            
            {nextLesson && (
              <button 
                onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                className="next-lesson-btn"
              >
                Continue to: {nextLesson.title} <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonViewer;