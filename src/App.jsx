import React, { useState } from 'react';
import { ExamProvider, useExam } from './context/ExamContext';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MockExam from './components/MockExam';
import ResultsPage from './components/ResultsPage';
import ConfirmModal from './components/ConfirmModal';
import { Award, RotateCcw, Home } from 'lucide-react';

function AppContent() {
  const { view, setView, resetAllProgress, attemptedCount, totalQuestions } = useExam();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleConfirmReset = () => {
    setIsResetModalOpen(false);
    resetAllProgress();
  };

  // If in active exam mode, render the zero-scroll full viewport interface directly
  if (view === 'exam') {
    return <MockExam />;
  }

  return (
    <div className="app-container">
      <Header onOpenResetModal={() => setIsResetModalOpen(true)} />

      <main className="main-content">
        {view === 'home' && (
          <HomePage onOpenResetModal={() => setIsResetModalOpen(true)} />
        )}

        {view === 'results' && <ResultsPage />}

        {view === 'all_completed' && (
          <div className="card text-center" style={{ padding: '3rem 1.5rem', maxWidth: '580px', margin: '2rem auto' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--success-bg)',
                color: 'var(--success)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <Award size={44} />
            </div>

            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              All Questions Completed!
            </h2>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Congratulations! You have attempted every single question in the question bank ({totalQuestions} questions across all 12 NPTEL assignments).
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-full"
                onClick={() => setIsResetModalOpen(true)}
              >
                <RotateCcw size={18} />
                <span>Reset Bank & Start Over</span>
              </button>

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
        )}
      </main>

      {/* Global Reset Progress Confirmation Modal */}
      <ConfirmModal
        isOpen={isResetModalOpen}
        title="Reset All Progress?"
        message={`This will clear all ${attemptedCount} attempted question records and exam history from your browser. You will be able to start fresh with the full question bank.`}
        confirmLabel="Reset Everything"
        cancelLabel="Cancel"
        isDanger={true}
        onConfirm={handleConfirmReset}
        onCancel={() => setIsResetModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ExamProvider>
      <AppContent />
    </ExamProvider>
  );
}
