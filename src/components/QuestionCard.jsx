import React, { useEffect } from 'react';
import { Check, HelpCircle } from 'lucide-react';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export default function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectOption
}) {
  if (!question) return null;

  // Keyboard shortcut listener: 1-4 or A-D
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is inside an input field
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toLowerCase();
      if (key === '1' || key === 'a') onSelectOption(0);
      else if (key === '2' || key === 'b') onSelectOption(1);
      else if (key === '3' || key === 'c') onSelectOption(2);
      else if (key === '4' || key === 'd') onSelectOption(3);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelectOption]);

  return (
    <div className="card question-card">
      <div className="question-meta">
        <span className="question-meta-tag">
          {question.assignment ? `Assignment ${question.assignment} • Q${question.assignmentQ || ''}` : 'Mock Question'}
        </span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          1 Mark
        </span>
      </div>

      <h2 className="question-text">
        {question.question}
      </h2>

      <div className="options-list" role="radiogroup" aria-label="Question options">
        {question.options.map((optionText, idx) => {
          const isSelected = selectedAnswer === idx;
          const letter = OPTION_LETTERS[idx] || String.fromCharCode(65 + idx);

          return (
            <button
              key={idx}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectOption(idx)}
            >
              <div className="option-letter">
                {isSelected ? <Check size={16} strokeWidth={3} /> : letter}
              </div>
              <div className="option-text">
                {optionText}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
