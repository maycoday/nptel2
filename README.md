# Build a Modern Cryptography Mock Test Website

Build a clean, modern, fully functional **frontend-only mock exam website** for my NPTEL Theory and Practice of Modern Cryptography exam preparation.

## Tech Stack
- React + Vite
- JavaScript
- Plain CSS (no backend, no database)
- Use local React state and browser localStorage only if needed
- No authentication, API calls, or server dependencies

## 1. Home Page

Create an attractive, minimal home page with:
- Title: **Cryptography Mock Tests**
- Subtitle: Practice for NPTEL Theory and Practice of Modern Cryptography
- Total question count: 120 (I will hardcode the questions myself)
- Test format: 10 questions per mock, 1 mark per question
- A prominent **Start Mock Exam** button
- A small progress indicator showing how many questions have already been attempted and how many remain

Keep the design professional and student-friendly. Avoid unnecessary animations, excessive gradients, and clutter.

## 2. Question Bank

I will manually add all 120 questions to a separate JavaScript file, such as `src/data/questions.js`.

Use this data structure for every question:

```js
{
  id: 1,
  question: "What is the block size of AES?",
  options: [
    "64 bits",
    "128 bits",
    "192 bits",
    "256 bits"
  ],
  correctAnswer: 1,
  explanation: "AES always uses a 128-bit block size."
}
```

Requirements:
- `id` must be unique for every question.
- `options` contains four choices.
- `correctAnswer` is a zero-based index into the options array.
- `explanation` is optional but should be displayed when available.
- Keep all questions in a separate file so I can easily add, edit, or remove questions without changing the UI.
- Initially include only a few clearly labelled sample questions. I will replace them with my 120 questions.

## 3. Mock Exam Logic

When the user clicks **Start Mock Exam**:

1. Select 10 random questions from the available, unattempted questions.
2. Display one question at a time with four selectable options.
3. Show progress such as `Question 3 of 10`.
4. Display a progress bar.
5. Provide Previous and Next buttons for navigation.
6. Preserve selected answers when navigating between questions.
7. Allow the user to change an answer before submitting.
8. Display a question navigator showing which questions are answered and unanswered.
9. Show a Submit Test button on the final question.
10. Before submission, show a confirmation dialog if any questions are unanswered.

### Critical no-repeat rule

A question must never appear again in a later mock once its mock has been submitted.

- Maintain a set of attempted question IDs.
- When generating the next mock, select 10 random questions only from those IDs that have not been attempted.
- Mark all 10 questions as attempted when the user submits the mock, regardless of whether they answered them correctly.
- Never repeat questions within the same mock.
- If the remaining question count is less than 10, show all remaining questions in the final mock.
- Once all 120 questions have been attempted, display a completion screen instead of starting another mock.
- Do not accidentally repeat questions when the page re-renders or the user navigates between questions.

Persist attempted IDs and mock progress in localStorage so refreshing the browser does not reset the user's progress.

## 4. Results Page After Submission

After the user submits a mock, display:

- Score, for example `7/10`
- Percentage score
- Number of correct answers
- Number of incorrect answers
- Number of unanswered questions
- A clear visual indication of the result
- A **Review Answers** section
- A **Next Mock** button

For every question in the review section, show:
- The complete question
- All four options
- The user's selected answer
- The correct answer
- A green indicator for the correct option
- A red indicator for an incorrectly selected option
- A clear message if the question was left unanswered
- The explanation, if available

For example:
- Correct answer: Green
- Incorrect selected answer: Red
- Correct answer revealed even when the user's choice was wrong
- Unanswered question: Clearly labelled as unanswered

Do not hide the correct answer behind another click. Make reviewing mistakes easy.

The **Next Mock** button should generate a new set of 10 questions using only the unattempted question bank.

## 5. Dashboard and Progress

On the home page, show:
- Total questions in the bank
- Questions attempted
- Questions remaining
- Mocks completed
- Overall accuracy across all submitted mocks

Update these figures immediately after every submission.

The accuracy calculation should be:

`Total correct answers / Total questions attempted × 100`

Here, total questions attempted means all questions included in submitted mocks, including unanswered questions.

## 6. UI and Design

Create a polished, responsive interface that works on desktop, tablet, and mobile.

Design preferences:
- Clean light theme
- White or subtle neutral backgrounds
- One consistent accent color
- Clear typography and readable question text
- Rounded cards with subtle borders
- Comfortable spacing between options
- Large, accessible buttons
- Distinct answered, unanswered, selected, correct, and incorrect states
- Responsive layout without horizontal overflow
- Simple loading-free transitions
- Keyboard accessibility where practical

Use reusable React components, for example:
- `HomePage`
- `MockExam`
- `QuestionCard`
- `QuestionNavigator`
- `ResultsPage`
- `AnswerReview`
- `ProgressDashboard`

## 7. Important Edge Cases

Handle these properly:
- No questions in the question bank
- Fewer than 10 unattempted questions remaining
- All questions attempted
- User refreshes during a mock
- User refreshes after submitting a mock
- User tries to submit with unanswered questions
- A question has no explanation
- User rapidly clicks Next Mock multiple times
- Question IDs are accidentally duplicated

Do not mark a mock as submitted twice or count its score twice.

Add a **Reset All Progress** button with a confirmation dialog. It should clear saved progress and allow the user to start again from the full question bank.

## 8. Code Quality

- Write complete, working code rather than pseudocode.
- Use clean component separation and sensible file organization.
- Keep the question bank separate from the application logic.
- Do not hardcode the number 120 into calculations; derive the total from the actual question bank.
- Use the actual question IDs to track attempts, not array positions.
- Ensure all buttons and interactions work.
- Do not add a backend or unnecessary dependencies.
- Include clear instructions to run the project using `npm install` and `npm run dev`.

## Final Deliverable

Build the complete working application, not just a visual mockup. Implement the entire flow:

**Home → Start Mock → Answer 10 Questions → Submit → View Score and Correct Answers → Next 10 Unattempted Questions → Repeat Until Completion.**

Before finishing, test the no-repeat logic, score calculation, persistence after refresh, and final-mock behavior.