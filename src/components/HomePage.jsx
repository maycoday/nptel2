import React from 'react';
import { useExam } from '../context/ExamContext';
import {
  Play,
  RotateCcw,
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  BarChart3,
  Flame,
  ArrowRight
} from 'lucide-react';

const ASSIGNMENT_TOPICS = [
  { num: 1, title: 'Classical Ciphers (Shift, Affine, Vigenère, Playfair)' },
  { num: 2, title: 'Hill Cipher & Substitution Permutation Networks (SPN)' },
  { num: 3, title: 'DES & AES Foundations (S-Boxes, MixColumns, Keys)' },
  { num: 4, title: 'Block Cipher Modes (ECB, CBC, OFB, CTR) & OTP' },
  { num: 5, title: 'Stream Ciphers, LFSRs & Golomb’s Randomness Postulates' },
  { num: 6, title: 'Merkle-Hellman Knapsack & Number Theory (Euclid, Bezout, Euler)' },
  { num: 7, title: 'Public Key Cryptography: RSA & Elliptic Curves (ECC)' },
  { num: 8, title: 'Rabin Cryptosystem & Message Authentication Codes (MAC)' },
  { num: 9, title: 'Digital Signatures, Hardness & One-Way Functions' },
  { num: 10, title: 'Differential/Linear Cryptanalysis & Secret Sharing (Shamir)' },
  { num: 11, title: 'Multi-Party Computation (MPC), FHE & Functional Encryption' },
  { num: 12, title: 'Zero-Knowledge Proofs (ZKP), Post-Quantum & Quantum Algorithms' },
];

export default function HomePage({ onOpenResetModal }) {
  const {
    totalQuestions,
    attemptedCount,
    remainingCount,
    mocksCompleted,
    overallAccuracy,
    startMock,
    activeMock,
    setView
  } = useExam();

  const progressPercentage = totalQuestions > 0
    ? Math.round((attemptedCount / totalQuestions) * 100)
    : 0;

  const hasUnfinishedMock = activeMock && !activeMock.isSubmitted && activeMock.questionIds?.length > 0;
  const isAllCompleted = remainingCount === 0 && totalQuestions > 0;

  return (
    <div>
      {/* Hero Section */}
      <div className="card hero-card">
        <div className="hero-pill">
          <Sparkles size={14} />
          <span>NPTEL Certification Ready</span>
        </div>

        <h1 className="hero-title">
          Cryptography Mock Tests
        </h1>

        <p className="hero-subtitle">
          Practice for NPTEL Theory and Practice of Modern Cryptography with authentic assignment questions, step-by-step solutions, and zero-repeat mock exams.
        </p>

        {/* Info Badges */}
        <div className="hero-info-pills">
          <span className="info-badge">
            <BookOpen size={14} />
            <span>{totalQuestions} Total Questions</span>
          </span>
          <span className="info-badge">
            <Clock size={14} />
            <span>10 Questions / Mock</span>
          </span>
          <span className="info-badge">
            <Award size={14} />
            <span>1 Mark per Question</span>
          </span>
        </div>

        {/* Progress Bar Component */}
        <div className="hero-progress-section">
          <div className="progress-header">
            <span style={{ color: 'var(--text-secondary)' }}>Overall Progress</span>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>
              {attemptedCount} / {totalQuestions} attempted ({progressPercentage}%)
            </span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>{attemptedCount} completed</span>
            <span>{remainingCount} questions remaining</span>
          </div>
        </div>

        {/* Main CTA Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', maxWidth: '360px', margin: '0 auto' }}>
          {isAllCompleted ? (
            <div style={{ width: '100%' }}>
              <div
                style={{
                  backgroundColor: 'var(--success-bg)',
                  border: '1px solid var(--success-border)',
                  color: 'var(--success-text)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1rem',
                  fontWeight: 700
                }}
              >
                🎉 Outstanding! You have attempted all {totalQuestions} questions in the bank.
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-full"
                onClick={onOpenResetModal}
              >
                <RotateCcw size={18} />
                <span>Reset & Retake All Mocks</span>
              </button>
            </div>
          ) : hasUnfinishedMock ? (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-full"
                onClick={() => setView('exam')}
              >
                <Play size={18} fill="currentColor" />
                <span>Resume Mock #{activeMock.mockNumber}</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-full"
                onClick={startMock}
              >
                <span>Discard & Start New Mock</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-lg btn-full"
              onClick={startMock}
            >
              <Play size={18} fill="currentColor" />
              <span>Start Mock Exam</span>
            </button>
          )}

          {activeMock?.submittedResult && (
            <button
              type="button"
              className="btn btn-secondary btn-full"
              onClick={() => setView('results')}
            >
              <span>View Last Mock Results</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Stats Dashboard */}
      <h2 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
        <BarChart3 size={18} style={{ color: 'var(--primary)' }} />
        <span>Performance Dashboard</span>
      </h2>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <BookOpen size={18} />
          </div>
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">Total Bank</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <CheckCircle2 size={18} />
          </div>
          <div className="stat-value">{attemptedCount}</div>
          <div className="stat-label">Attempted</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon amber">
            <Clock size={18} />
          </div>
          <div className="stat-value">{remainingCount}</div>
          <div className="stat-label">Remaining</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <Flame size={18} />
          </div>
          <div className="stat-value">{mocksCompleted > 0 ? `${overallAccuracy}%` : '—'}</div>
          <div className="stat-label">Accuracy ({mocksCompleted} {mocksCompleted === 1 ? 'mock' : 'mocks'})</div>
        </div>
      </div>

      {/* Topic Syllabus Breakdown */}
      <div className="card" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Course Coverage (12 Assignments)
          </h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            10 Questions each
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
          {ASSIGNMENT_TOPICS.map((topic) => (
            <div
              key={topic.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.65rem 0.85rem',
                backgroundColor: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.875rem'
              }}
            >
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {topic.num}
              </span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 500, flex: 1 }}>
                {topic.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Progress Section */}
      <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
        <button
          type="button"
          className="btn btn-danger-outline"
          onClick={onOpenResetModal}
          style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
        >
          <RotateCcw size={15} />
          <span>Reset All Progress</span>
        </button>
      </div>
    </div>
  );
}
