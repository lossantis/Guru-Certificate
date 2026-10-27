import { getUserStatistics } from './userService';
import { getUserResults } from './apiService';

jest.mock('./apiService', () => ({ getUserResults: jest.fn() }));

test('estatísticas contam como erro só as questões respondidas incorretamente', async () => {
  getUserResults.mockResolvedValue([
    { examType: 'cloud-practitioner', correct: 1, total: 65, percentage: 1.5, wrongQuestions: [7], topics: [], timestamp: '2026-10-27T10:00:00Z' },
    { examType: 'cloud-practitioner', correct: 10, total: 20, percentage: 50, wrongQuestions: [1, 2], topics: [], timestamp: '2026-10-27T11:00:00Z' },
    { examType: 'developer-associate', correct: 15, total: 20, percentage: 75, topics: [], timestamp: '2026-10-27T12:00:00Z' }
  ]);

  const stats = await getUserStatistics('student');

  expect(stats.totalWrong).toBe(8);
  expect(stats.byExamType['cloud-practitioner']).toMatchObject({ exams: 2, correct: 11, wrong: 3 });
  expect(stats.byExamType['developer-associate'].wrong).toBe(5);
});
