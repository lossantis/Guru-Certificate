import { registerUser, saveExamResult, getRanking, getUserResults, logoutUser } from './apiService';

const ok = data => Promise.resolve({ ok: true, json: async () => data });
beforeEach(() => { localStorage.clear(); global.fetch = jest.fn(); });
afterEach(() => { delete global.fetch; });

test('resultado offline fica pendente e sincroniza ao consultar o ranking', async () => {
  fetch.mockImplementationOnce(() => ok({ user: { id: 'student', username: 'Estudante' }, token: 'session-token' }));
  await registerUser('Estudante', 'student@example.com', 'senha123');
  expect(localStorage.getItem('guru_certificate_session')).not.toContain('senha123');
  fetch.mockRejectedValueOnce(new TypeError('offline'));
  await expect(saveExamResult('student', 'developer-associate', { correct: 18, total: 20 })).rejects.toThrow('conectar');
  const pending = JSON.parse(localStorage.getItem('guru_certificate_pending_results'));
  expect(pending).toHaveLength(1);
  fetch.mockImplementationOnce(() => ok({ id: pending[0].id })).mockImplementationOnce(() => ok([]));
  await getRanking();
  expect(JSON.parse(localStorage.getItem('guru_certificate_pending_results'))).toEqual([]);
  expect(JSON.parse(fetch.mock.calls[2][1].body).id).toBe(pending[0].id);
  fetch.mockImplementationOnce(() => ok({ ok: true }));
  logoutUser();
  expect(localStorage.getItem('guru_certificate_session')).toBeNull();
});

test('resultado pendente rejeitado como inválido é descartado e não bloqueia o perfil', async () => {
  fetch.mockImplementationOnce(() => ok({ user: { id: 'student', username: 'Estudante' }, token: 'session-token' }));
  await registerUser('Estudante', 'student@example.com', 'senha123');
  localStorage.setItem('guru_certificate_pending_results', JSON.stringify([
    { id: 'old-134', userId: 'student', examType: 'cloud-practitioner', correct: 100, total: 134 }
  ]));
  fetch.mockImplementationOnce(() => Promise.resolve({ ok: false, status: 400, json: async () => ({ message: 'Resultado inválido' }) }))
    .mockImplementationOnce(() => ok([]));
  await expect(getUserResults('student')).resolves.toEqual([]);
  expect(JSON.parse(localStorage.getItem('guru_certificate_pending_results'))).toEqual([]);
});
