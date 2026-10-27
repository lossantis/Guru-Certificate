import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Profile from './Profile';
import { getCurrentUser, getUserStatistics } from '../services/userService';

jest.mock('../services/userService', () => ({
  getCurrentUser: jest.fn(),
  getUserStatistics: jest.fn(),
  getWrongCount: result => result.wrongQuestions.length,
  logoutUser: jest.fn()
}));

const makeResult = (id, timestamp) => ({
  id, examType: 'cloud-practitioner', correct: 1, total: 65, percentage: 1.5,
  passed: false, wrongQuestions: [], topics: [], timestamp
});

test('lista de simulados começa fechada e mantém no máximo um aberto', async () => {
  getCurrentUser.mockReturnValue({ id: 'student', username: 'Estudante' });
  getUserStatistics.mockResolvedValue({
    totalExams: 2, totalCorrect: 2, totalWrong: 0, totalQuestions: 130, averagePercentage: '1.5',
    byExamType: {}, topicsToReview: [],
    detailedResults: [makeResult('new', '2026-10-27T12:00:00Z'), makeResult('old', '2026-10-27T10:00:00Z')]
  });

  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Profile /></MemoryRouter>);

  const toggles = await screen.findAllByRole('button', { name: /Simulado \d/ });
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'false');
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(toggles[0]);
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(toggles[1]);
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'true');
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggles[1]);
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'false');
});
