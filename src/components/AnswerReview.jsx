import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, BookOpen, Filter } from 'lucide-react';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export default function AnswerReview({ reviewItems = [] }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'mistakes' | 'correct'

  const filteredItems = reviewItems.filter(item => {
    if (filter === 'mistakes') return !item.isCorrect;
    if (filter === 'correct') return item.isCorrect;
    return true;
  });

  return (
    <div className="mt-4">
      {/* Review Header and Filters */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Review Answers
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Explanations and detailed step-by-step solutions
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            type="button"
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', borderRadius: 'var(--radius-full)' }}
            onClick={() => setFilter('all')}
          >
            All ({reviewItems.length})
          </button>
          <button
            type="button"
            className={`btn ${filter === 'mistakes' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', borderRadius: 'var(--radius-full)' }}
            onClick={() => setFilter('mistakes')}
          >
            Mistakes ({reviewItems.filter(i => !i.isCorrect).length})
          </button>
          <button
            type="button"
            className={`btn ${filter === 'correct' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', borderRadius: 'var(--radius-full)' }}
            onClick={() => setFilter('correct')}
          >
            Correct ({reviewItems.filter(i => i.isCorrect).length})
          </button>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="card text-center" style={{ padding: '2rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>No questions match this filter.</p>
        </div>
      ) : (
        filteredItems.map((item, idx) => {
          let cardStatusClass = 'is-unanswered';
          if (item.isCorrect) cardStatusClass = 'is-correct';
          else if (!item.isUnanswered) cardStatusClass = 'is-incorrect';

          return (
            <div
              key={item.questionId}
              className={`card review-item-card ${cardStatusClass}`}
            >
              {/* Question Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="question-meta-tag">
                  Question {idx + 1} • {item.assignment ? `Assignment ${item.assignment}` : 'Mock Exam'}
                </span>

                {item.isCorrect ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--success)' }}>
                    <CheckCircle2 size={16} />
                    <span>Correct (+1)</span>
                  </span>
                ) : item.isUnanswered ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--warning)' }}>
                    <AlertCircle size={16} />
                    <span>Unanswered (0)</span>
                  </span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--danger)' }}>
                    <XCircle size={16} />
                    <span>Incorrect (0)</span>
                  </span>
                )}
              </div>

              {/* Question Text */}
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                {item.question}
              </h4>

              {/* Options */}
              <div style={{ marginBottom: '1rem' }}>
                {item.options.map((optText, optIdx) => {
                  const isUserSelection = item.userChoice === optIdx;
                  const isTheCorrectAnswer = item.correctAnswer === optIdx;

                  let optClass = 'review-option';
                  let icon = null;

                  if (isTheCorrectAnswer) {
                    optClass += ' is-correct-target';
                    icon = <CheckCircle2 size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />;
                  } else if (isUserSelection && !item.isCorrect) {
                    optClass += ' is-user-wrong';
                    icon = <XCircle size={18} style={{ color: 'var(--danger)', flexShrink: 0 }} />;
                  }

                  const letter = OPTION_LETTERS[optIdx] || String.fromCharCode(65 + optIdx);

                  return (
                    <div key={optIdx} className={optClass}>
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: isTheCorrectAnswer ? 'var(--success)' : isUserSelection ? 'var(--danger)' : 'var(--bg-tertiary)',
                          color: (isTheCorrectAnswer || isUserSelection) ? '#fff' : 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}
                      >
                        {letter}
                      </span>
                      <span style={{ flex: 1 }}>{optText}</span>
                      {icon}
                    </div>
                  );
                })}
              </div>

              {/* Status summary */}
              {item.isUnanswered && (
                <div style={{ fontSize: '0.85rem', color: 'var(--warning-text)', backgroundColor: 'var(--warning-bg)', padding: '0.45rem 0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem', fontWeight: 600 }}>
                  ⚠️ You left this question unanswered. The correct choice is Option {OPTION_LETTERS[item.correctAnswer]}.
                </div>
              )}

              {/* Explanation (Never hidden, as required by spec) */}
              {item.explanation && (
                <div className="explanation-box">
                  <div className="explanation-label">
                    <BookOpen size={16} />
                    <span>Explanation & Solution</span>
                  </div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    {item.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
