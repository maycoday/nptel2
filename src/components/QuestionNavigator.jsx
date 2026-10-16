import React from 'react';
import { Check } from 'lucide-react';

export default function QuestionNavigator({
  questionIds,
  currentIndex,
  answers,
  onSelectIndex
}) {
  const answeredCount = Object.keys(answers).filter(
    id => answers[id] !== undefined && answers[id] !== null
  ).length;
  const total = questionIds.length;

  return (
    <div className="navigator-container">
      <div className="navigator-title-row">
        <span>Question Navigator</span>
        <span style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {answeredCount}/{total} Answered
        </span>
      </div>

      <div className="navigator-grid">
        {questionIds.map((qid, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = answers[qid] !== undefined && answers[qid] !== null;

          let btnClass = 'nav-num-btn';
          if (isAnswered) btnClass += ' answered';
          if (isCurrent) btnClass += ' current';

          return (
            <button
              key={qid}
              type="button"
              className={btnClass}
              onClick={() => onSelectIndex(idx)}
              title={`Jump to Question ${idx + 1} (${isAnswered ? 'Answered' : 'Unanswered'})`}
              aria-label={`Question ${idx + 1}, ${isAnswered ? 'Answered' : 'Unanswered'}${isCurrent ? ', Currently viewing' : ''}`}
            >
              <span>{idx + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
