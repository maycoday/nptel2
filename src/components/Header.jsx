import React from 'react';
import { useExam } from '../context/ExamContext';
import { ShieldCheck, Moon, Sun, Home, RotateCcw } from 'lucide-react';

export default function Header({ onOpenResetModal }) {
  const { theme, toggleTheme, view, setView, activeMock } = useExam();

  const handleHomeClick = () => {
    if (view === 'exam' && activeMock && !activeMock.isSubmitted) {
      if (window.confirm('You have an active mock in progress. Do you want to return to the home screen? Your current answers will be saved.')) {
        setView('home');
      }
    } else {
      setView('home');
    }
  };

  return (
    <header className="app-header">
      <div className="header-inner">
        <button
          onClick={handleHomeClick}
          className="brand-wrapper"
          title="Return to Home"
          aria-label="Cryptography Mock Tests Home"
        >
          <div className="brand-icon">
            <ShieldCheck size={22} strokeWidth={2.4} />
          </div>
          <div>
            <div className="brand-title">
              CryptoMock
              <span className="brand-badge">NPTEL</span>
            </div>
          </div>
        </button>

        <div className="header-actions">
          {view !== 'home' && (
            <button
              onClick={handleHomeClick}
              className="btn-icon"
              title="Dashboard"
              aria-label="Dashboard"
            >
              <Home size={18} />
            </button>
          )}

          {onOpenResetModal && (
            <button
              onClick={onOpenResetModal}
              className="btn-icon"
              title="Reset All Progress"
              aria-label="Reset All Progress"
            >
              <RotateCcw size={18} />
            </button>
          )}

          <button
            onClick={toggleTheme}
            className="btn-icon"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? (
              <Sun size={19} className="text-warning" />
            ) : (
              <Moon size={19} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
