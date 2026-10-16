import React, { useState, useEffect } from 'react';
import { useExam } from '../context/ExamContext';
import ConfirmModal from './ConfirmModal';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowLeft,
  Check,
  Moon,
  Sun
} from 'lucide-react';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export default function MockExam() {
  const {
    activeMock,
    selectAnswer,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    submitMock,
    questionBank,
    setView,
    theme,
    toggleTheme
  } = useExam();

  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Add exam-mode class to body to prevent any background scroll
  useEffect(() => {
    document.body.classList.add('exam-mode');
    return () => {
      document.body.classList.remove('exam-mode');
    };
  }, []);

  if (!activeMock || !activeMock.questionIds || activeMock.questionIds.length === 0) {
    return (
      <div className="exam-fullscreen" style={{ alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
        <div className="card text-center" style={{ maxWidth: '400px', width: '100%' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            No active mock test found.
          </p>
          <button className="btn btn-primary btn-full" onClick={() => setView('home')}>
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const { questionIds, currentIndex, answers, mockNumber } = activeMock;
  const total = questionIds.length;
  const currentQuestionId = questionIds[currentIndex];
  const currentQuestion = (activeMock.questions && activeMock.questions[currentIndex])
    || questionBank.find(q => q.id === currentQuestionId);
  const currentAnswer = answers[currentQuestionId];

  // Count unanswered
  const unansweredCount = questionIds.filter(
    id => answers[id] === undefined || answers[id] === null
  ).length;

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  // Keyboard shortcut listener: 1-4 or A-D, Left/Right arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toLowerCase();
      if (key === '1' || key === 'a') selectAnswer(currentQuestionId, 0);
      else if (key === '2' || key === 'b') selectAnswer(currentQuestionId, 1);
      else if (key === '3' || key === 'c') selectAnswer(currentQuestionId, 2);
      else if (key === '4' || key === 'd') selectAnswer(currentQuestionId, 3);
      else if (e.key === 'ArrowRight' && !isLast) nextQuestion();
      else if (e.key === 'ArrowLeft' && !isFirst) prevQuestion();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionId, selectAnswer, isLast, isFirst, nextQuestion, prevQuestion]);

  const handleSubmitClick = () => {
    if (unansweredCount > 0) {
      setShowSubmitConfirm(true);
    } else {
      submitMock();
    }
  };

  const handleConfirmSubmit = () => {
    setShowSubmitConfirm(false);
    submitMock();
  };

  return (
    <div className="exam-fullscreen">
      <div className="exam-inner-container">
        {/* 1. Compact Top Bar */}
        <div className="exam-top-bar">
          <div className="exam-top-left">
            <button
              type="button"
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              onClick={() => setShowExitConfirm(true)}
              title="Exit Mock Exam"
              aria-label="Exit Mock Exam"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="exam-pill-badge">
              Mock #{mockNumber}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Q {currentIndex + 1} of {total}
            </span>
          </div>

          <div className="exam-top-right">
            <button
              type="button"
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} className="text-warning" /> : <Moon size={16} />}
            </button>

            <button
              type="button"
              className="btn btn-primary exam-btn-sm"
              onClick={handleSubmitClick}
            >
              <CheckCircle size={14} />
              <span>Submit</span>
            </button>
          </div>
        </div>

        {/* 2. Slim Progress Bar */}
        <div className="exam-slim-progress">
          <div
            className="exam-slim-progress-fill"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>

        {/* 3. Single-Row Navigator Strip (All 10 Questions at a Glance, Zero Scroll) */}
        <div className="exam-strip-navigator" aria-label="Question Navigator">
          {questionIds.map((qid, idx) => {
            const isCurrent = idx === currentIndex;
            const isAnswered = answers[qid] !== undefined && answers[qid] !== null;

            let btnClass = 'strip-pill-btn';
            if (isAnswered) btnClass += ' answered';
            if (isCurrent) btnClass += ' current';

            return (
              <button
                key={qid}
                type="button"
                className={btnClass}
                onClick={() => goToQuestion(idx)}
                title={`Question ${idx + 1} (${isAnswered ? 'Answered' : 'Unanswered'})`}
                aria-label={`Go to Question ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* 4. Center Main Panel: Question Text + 4 Options */}
        <div className="exam-main-panel">
          <div className="exam-panel-meta">
            <span>
              {currentQuestion?.assignment ? `Assignment ${currentQuestion.assignment} • Q${currentQuestion.assignmentQ || ''}` : 'Mock Test'}
            </span>
            <span>1 Mark</span>
          </div>

          {/* Question Text */}
          <h2 className="exam-question-heading">
            {currentQuestion?.question}
          </h2>

          {/* 4 Options */}
          <div className="exam-options-stack" role="radiogroup" aria-label="Answer options">
            {currentQuestion?.options.map((optionText, optIdx) => {
              const isSelected = currentAnswer === optIdx;
              const letter = OPTION_LETTERS[optIdx] || String.fromCharCode(65 + optIdx);

              return (
                <button
                  key={optIdx}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={`exam-compact-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => selectAnswer(currentQuestionId, optIdx)}
                >
                  <div className="exam-option-circle">
                    {isSelected ? <Check size={14} strokeWidth={3} /> : letter}
                  </div>
                  <div className="exam-option-text">
                    {optionText}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Bottom Action Bar */}
        <div className="exam-footer-bar">
          <button
            type="button"
            className="btn btn-secondary exam-nav-btn"
            onClick={prevQuestion}
            disabled={isFirst}
            style={{ opacity: isFirst ? 0.4 : 1, cursor: isFirst ? 'not-allowed' : 'pointer' }}
          >
            <ChevronLeft size={16} />
            <span>Prev</span>
          </button>

          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            {unansweredCount > 0 ? (
              <span>{unansweredCount} unanswered</span>
            ) : (
              <span style={{ color: 'var(--success)' }}>All answered ✓</span>
            )}
          </div>

          {isLast ? (
            <button
              type="button"
              className="btn btn-primary exam-nav-btn"
              onClick={handleSubmitClick}
            >
              <span>Submit</span>
              <CheckCircle size={16} />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary exam-nav-btn"
              onClick={nextQuestion}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modals */}
      <ConfirmModal
        isOpen={showSubmitConfirm}
        title="Unanswered Questions"
        message={`You have ${unansweredCount} unanswered ${
          unansweredCount === 1 ? 'question' : 'questions'
        } out of ${total}. Are you sure you want to submit your mock exam now? Once submitted, these questions cannot be attempted again in future mocks.`}
        confirmLabel="Submit Anyway"
        cancelLabel="Review Questions"
        isDanger={false}
        onConfirm={handleConfirmSubmit}
        onCancel={() => setShowSubmitConfirm(false)}
      />

      <ConfirmModal
        isOpen={showExitConfirm}
        title="Exit Active Mock?"
        message="Your selected answers will be saved in your browser, but this mock has not yet been submitted. You can resume it anytime from the home page."
        confirmLabel="Exit to Home"
        cancelLabel="Stay in Mock"
        isDanger={false}
        onConfirm={() => {
          setShowExitConfirm(false);
          setView('home');
        }}
        onCancel={() => setShowExitConfirm(false)}
      />
    </div>
  );
}
