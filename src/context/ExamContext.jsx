import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { questions as questionBank } from '../data/questions';

const ExamContext = createContext(null);

const STORAGE_KEY_ATTEMPTED = 'crypto_attempted_ids';
const STORAGE_KEY_HISTORY = 'crypto_exam_history';
const STORAGE_KEY_ACTIVE_MOCK = 'crypto_active_mock';
const STORAGE_KEY_THEME = 'crypto_theme';

export function ExamProvider({ children }) {
  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Attempted question IDs (set persisted as array)
  const [attemptedIds, setAttemptedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ATTEMPTED);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Exam history (past submitted mocks)
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Active mock test state
  // Structure: { mockId, questionIds, currentIndex, answers: { [qid]: optionIdx }, isSubmitted, submittedResult }
  const [activeMock, setActiveMock] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_MOCK);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Current view: 'home' | 'exam' | 'results' | 'all_completed'
  const [view, setView] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_MOCK);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.isSubmitted) return 'results';
        if (parsed.questionIds && parsed.questionIds.length > 0) return 'exam';
      }
    } catch {}
    return 'home';
  });

  // Apply theme class to <html>
  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch (e) {
      console.error('Error saving theme:', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync attemptedIds to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ATTEMPTED, JSON.stringify(Array.from(attemptedIds)));
    } catch (e) {
      console.error('Error saving attempted IDs:', e);
    }
  }, [attemptedIds]);

  // Sync history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
    } catch (e) {
      console.error('Error saving history:', e);
    }
  }, [history]);

  // Sync activeMock to localStorage
  useEffect(() => {
    try {
      if (activeMock) {
        localStorage.setItem(STORAGE_KEY_ACTIVE_MOCK, JSON.stringify(activeMock));
      } else {
        localStorage.removeItem(STORAGE_KEY_ACTIVE_MOCK);
      }
    } catch (e) {
      console.error('Error saving active mock:', e);
    }
  }, [activeMock]);

  // Total questions in the bank
  const totalQuestions = questionBank.length;
  const attemptedCount = attemptedIds.size;
  const remainingCount = Math.max(0, totalQuestions - attemptedCount);
  const mocksCompleted = history.length;

  // Calculate overall accuracy across all submitted mocks
  // Formula: Total correct answers / Total questions attempted * 100
  const totalCorrectAllTime = history.reduce((sum, h) => sum + (h.correctCount || 0), 0);
  const totalAttemptedAllTime = history.reduce((sum, h) => sum + (h.totalQuestions || 0), 0);
  const overallAccuracy = totalAttemptedAllTime > 0
    ? Math.round((totalCorrectAllTime / totalAttemptedAllTime) * 100)
    : 0;

  // Start a new mock exam
  const startMock = () => {
    // Check unattempted questions
    const unattempted = questionBank.filter(q => !attemptedIds.has(q.id));

    if (unattempted.length === 0) {
      setView('all_completed');
      return;
    }

    // Pick 10 random questions or all remaining if < 10
    const countToPick = Math.min(10, unattempted.length);
    // Shuffle unattempted questions using Fisher-Yates
    const shuffled = [...unattempted];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const selectedQuestions = shuffled.slice(0, countToPick);

    // Shuffle options for EACH question so positions (A, B, C, D) are randomized every mock
    const preparedQuestions = selectedQuestions.map(q => {
      const optObjects = q.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === q.correctAnswer
      }));
      // Fisher-Yates shuffle on the options
      for (let i = optObjects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optObjects[i], optObjects[j]] = [optObjects[j], optObjects[i]];
      }
      return {
        ...q,
        options: optObjects.map(o => o.text),
        correctAnswer: optObjects.findIndex(o => o.isCorrect)
      };
    });

    const newMock = {
      mockId: Date.now(),
      mockNumber: mocksCompleted + 1,
      questions: preparedQuestions,
      questionIds: preparedQuestions.map(q => q.id),
      currentIndex: 0,
      answers: {},
      isSubmitted: false,
      submittedResult: null,
      startTime: Date.now()
    };

    setActiveMock(newMock);
    setView('exam');
  };

  // Select/change answer for a question in active mock
  const selectAnswer = (questionId, optionIndex) => {
    if (!activeMock || activeMock.isSubmitted) return;

    setActiveMock(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionIndex
      }
    }));
  };

  // Navigate question index
  const goToQuestion = (index) => {
    if (!activeMock) return;
    if (index >= 0 && index < activeMock.questionIds.length) {
      setActiveMock(prev => ({ ...prev, currentIndex: index }));
    }
  };

  const nextQuestion = () => {
    if (!activeMock) return;
    goToQuestion(activeMock.currentIndex + 1);
  };

  const prevQuestion = () => {
    if (!activeMock) return;
    goToQuestion(activeMock.currentIndex - 1);
  };

  // Submit active mock
  const submitMock = () => {
    if (!activeMock || activeMock.isSubmitted) return;

    const mockQuestions = activeMock.questions && activeMock.questions.length > 0
      ? activeMock.questions
      : activeMock.questionIds.map(id => questionBank.find(q => q.id === id)).filter(Boolean);

    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const reviewItems = mockQuestions.map(q => {
      const userChoice = activeMock.answers[q.id];
      const isUnanswered = userChoice === undefined || userChoice === null;
      const isCorrect = !isUnanswered && userChoice === q.correctAnswer;

      if (isUnanswered) {
        unansweredCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      return {
        questionId: q.id,
        question: q.question,
        options: q.options,
        userChoice,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        assignment: q.assignment,
        assignmentQ: q.assignmentQ,
        isCorrect,
        isUnanswered
      };
    });

    const total = mockQuestions.length;
    const scorePercentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    const result = {
      mockId: activeMock.mockId,
      mockNumber: activeMock.mockNumber,
      totalQuestions: total,
      correctCount,
      incorrectCount,
      unansweredCount,
      score: `${correctCount}/${total}`,
      percentage: scorePercentage,
      submittedAt: new Date().toISOString(),
      reviewItems
    };

    // Mark ALL question IDs in this mock as attempted (no-repeat rule)
    const newAttempted = new Set(attemptedIds);
    activeMock.questionIds.forEach(id => newAttempted.add(id));
    setAttemptedIds(newAttempted);

    // Save to history
    setHistory(prev => [result, ...prev]);

    // Update active mock as submitted
    setActiveMock(prev => ({
      ...prev,
      isSubmitted: true,
      submittedResult: result
    }));

    setView('results');

    // Confetti celebration if score >= 70%
    if (scorePercentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  // Reset all progress (with clear confirmation)
  const resetAllProgress = () => {
    setAttemptedIds(new Set());
    setHistory([]);
    setActiveMock(null);
    try {
      localStorage.removeItem(STORAGE_KEY_ATTEMPTED);
      localStorage.removeItem(STORAGE_KEY_HISTORY);
      localStorage.removeItem(STORAGE_KEY_ACTIVE_MOCK);
    } catch {}
    setView('home');
  };

  // Return to home dashboard
  const goHome = () => {
    setView('home');
  };

  return (
    <ExamContext.Provider
      value={{
        theme,
        toggleTheme,
        view,
        setView,
        goHome,
        totalQuestions,
        attemptedCount,
        remainingCount,
        mocksCompleted,
        overallAccuracy,
        totalCorrectAllTime,
        totalAttemptedAllTime,
        history,
        activeMock,
        startMock,
        selectAnswer,
        goToQuestion,
        nextQuestion,
        prevQuestion,
        submitMock,
        resetAllProgress,
        questionBank
      }}
    >
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
}
