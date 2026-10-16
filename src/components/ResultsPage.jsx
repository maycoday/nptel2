import React, { useState } from 'react';
import { useExam } from '../context/ExamContext';
import AnswerReview from './AnswerReview';
import { Award, ArrowRight, Home, RotateCcw, CheckCircle, XCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function ResultsPage() {
  const {
    activeMock,
    startMock,
    remainingCount,
    totalQuestions,
    setView,
    history
  } = useExam();

  const [isStartingNext, setIsStartingNext] = useState(false);

  // If no activeMock result, look at latest history item
  const result = activeMock?.submittedResult || history[0];

  if (!result) {
    return (
      <div className="card text-center" style={{ padding: '3rem 1.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          No mock exam results available to view.
        </p>
        <button className="btn btn-primary" onClick={() => setView('home')}>
          Return to Home
        </button>
      </div>
    );
  }

  const {
    mockNumber,
    score,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    reviewItems
  } = result;

  const handleNextMock = () => {
    if (isStartingNext) return;
    setIsStartingNext(true);
    setTimeout(() => {
      startMock();
      setIsStartingNext(false);
    }, 150);
  };

  // Performance badge & motivational text
  let statusBadge = { title: 'Keep Practicing', subtitle: 'Review the explanations below to improve!' };
  if (percentage >= 90) {
    statusBadge = { title: 'Outstanding!', subtitle: 'Mastery level performance in Cryptography!' };
  } else if (percentage >= 70) {
    statusBadge = { title: 'Great Job!', subtitle: 'Solid understanding of modern cryptographic concepts.' };
  } else if (percentage >= 50) {
    statusBadge = { title: 'Good Effort!', subtitle: 'You are on the right track, review your weak spots.' };
  }

  return (
    <div>
      {/* Hero Score Card */}
      <div className="card results-hero">
        <div className="score-badge">
          {score}
        </div>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
          {percentage}% Score
        </h2>
        <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.35rem' }}>
          {statusBadge.title}
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.25rem auto' }}>
          {statusBadge.subtitle}
        </p>

        {/* 3 Stat Boxes */}
        <div className="results-stats-row">
          <div className="result-stat-box green">
            <div className="result-stat-num">{correctCount}</div>
            <div className="result-stat-lbl">Correct</div>
          </div>
          <div className="result-stat-box red">
            <div className="result-stat-num">{incorrectCount}</div>
            <div className="result-stat-lbl">Incorrect</div>
          </div>
          <div className="result-stat-box slate">
            <div className="result-stat-num">{unansweredCount}</div>
            <div className="result-stat-lbl">Unanswered</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
          {remainingCount > 0 ? (
            <button
              type="button"
              className="btn btn-primary btn-lg btn-full"
              onClick={handleNextMock}
              disabled={isStartingNext}
            >
              <span>Next Mock ({remainingCount} questions left)</span>
              <ArrowRight size={20} />
            </button>
          ) : (
            <div
              style={{
                backgroundColor: 'var(--success-bg)',
                color: 'var(--success-text)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={18} />
              <span>All 120 questions completed! Great accomplishment!</span>
            </div>
          )}

          <button
            type="button"
            className="btn btn-secondary btn-full"
            onClick={() => setView('home')}
          >
            <Home size={18} />
            <span>Return to Dashboard</span>
          </button>
        </div>
      </div>

      {/* Answer Review */}
      <AnswerReview reviewItems={reviewItems} />
    </div>
  );
}
