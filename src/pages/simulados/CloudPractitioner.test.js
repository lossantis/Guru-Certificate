import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CloudPractitioner from './CloudPractitioner';
import CloudPractitionerDomainSession from './CloudPractitionerDomainSession';
import { cloudPractitionerQuestions } from '../../data/cloudPractitionerQuestions';

jest.mock('../../components/ExamProtection', () => ({ children }) => children);

const originalQuestions = cloudPractitionerQuestions.slice();

const makeQuestion = ({ id, multiple = false, alternatives }) => ({
  id,
  domain: 'cloud-concepts',
  title: { 'pt-BR': `Questão ${id}`, en: `Question ${id}` },
  description: { 'pt-BR': `Enunciado da questão ${id}`, en: `Question ${id} prompt` },
  question: { 'pt-BR': '', en: '' },
  multiple,
  answered: false,
  correct: false,
  alternatives: alternatives.map(({ title, correct }) => ({
    title: { 'pt-BR': title, en: title },
    correct,
    explanation: {
      'pt-BR': `Explicação: ${title}`,
      en: `Explanation: ${title}`
    }
  })),
  explanation: { 'pt-BR': `Explicação da questão ${id}`, en: `Explanation for question ${id}` }
});

const singleQuestion = makeQuestion({
  id: 1,
  alternatives: [
    { title: 'Resposta única correta', correct: true },
    { title: 'Resposta única incorreta', correct: false }
  ]
});

const multipleQuestion = makeQuestion({
  id: 2,
  multiple: true,
  alternatives: [
    { title: 'Resposta múltipla correta A', correct: true },
    { title: 'Resposta múltipla incorreta', correct: false },
    { title: 'Resposta múltipla correta B', correct: true }
  ]
});

const renderFullExam = () => render(
  <MemoryRouter>
    <CloudPractitioner />
  </MemoryRouter>
);

const renderDomainSession = () => render(
  <MemoryRouter initialEntries={['/simulado/cloud-practitioner/dominio/cloud-concepts']}>
    <Routes>
      <Route
        path="/simulado/cloud-practitioner/dominio/:domainId"
        element={<CloudPractitionerDomainSession />}
      />
    </Routes>
  </MemoryRouter>
);

const advanceToMultipleQuestion = () => {
  fireEvent.click(screen.getByText('Resposta única correta'));
  fireEvent.click(screen.getByRole('button', { name: 'Próxima →' }));
  expect(screen.getByText('Enunciado da questão 2')).toBeInTheDocument();
};

beforeEach(() => {
  cloudPractitionerQuestions.splice(
    0,
    cloudPractitionerQuestions.length,
    singleQuestion,
    multipleQuestion
  );
});

afterEach(() => {
  cloudPractitionerQuestions.splice(
    0,
    cloudPractitionerQuestions.length,
    ...originalQuestions
  );
});

test('mantém a seleção única e o feedback imediato nas questões comuns', () => {
  renderFullExam();

  expect(screen.getAllByRole('radio')).toHaveLength(2);
  fireEvent.click(screen.getByText('Resposta única correta'));

  expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
  expect(screen.getAllByRole('radio')[0]).toBeChecked();
});

test('no simulado completo, confirma todas as opções corretas antes de avançar e calcula a pontuação', () => {
  renderFullExam();
  advanceToMultipleQuestion();

  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes).toHaveLength(3);

  const nextButton = screen.getByRole('button', { name: 'Finalizar' });
  expect(nextButton).toBeDisabled();
  fireEvent.click(checkboxes[0]);
  fireEvent.click(checkboxes[2]);
  expect(checkboxes[0]).toBeChecked();
  expect(checkboxes[2]).toBeChecked();
  expect(screen.queryByText('✓ Correto!')).not.toBeInTheDocument();

  expect(nextButton).toBeDisabled();
  fireEvent.click(screen.getByRole('button', { name: 'Confirmar resposta' }));

  expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
  expect(screen.getByText(/Respostas corretas:/)).toHaveTextContent(
    'Resposta múltipla correta A; Resposta múltipla correta B'
  );
  expect(nextButton).toBeEnabled();
  fireEvent.click(nextButton);
  expect(screen.getByText('Você acertou 2 de 2 questões')).toBeInTheDocument();
});

test.each([
  ['omitir uma opção correta', [0]],
  ['selecionar uma opção incorreta extra', [0, 1, 2]]
])('no simulado completo, marca como incorreta a resposta que %s', (_description, selections) => {
  renderFullExam();
  advanceToMultipleQuestion();

  const checkboxes = screen.getAllByRole('checkbox');
  selections.forEach(index => fireEvent.click(checkboxes[index]));
  fireEvent.click(screen.getByRole('button', { name: 'Confirmar resposta' }));

  expect(screen.getByText('✗ Incorreto')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar' }));
  expect(screen.getByText('Você acertou 1 de 2 questões')).toBeInTheDocument();
});

test('na sessão por domínio, permite múltiplas seleções e confirma a resposta antes de pontuar', () => {
  renderDomainSession();
  advanceToMultipleQuestion();

  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes).toHaveLength(3);
  const nextButton = screen.getByRole('button', { name: 'Finalizar' });
  expect(nextButton).toBeDisabled();
  fireEvent.click(checkboxes[0]);
  fireEvent.click(checkboxes[2]);
  expect(nextButton).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: 'Confirmar resposta' }));
  expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
  expect(screen.getByText(/Respostas corretas:/)).toHaveTextContent(
    'Resposta múltipla correta A; Resposta múltipla correta B'
  );
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar' }));
  expect(screen.getByText('Você acertou 2 de 2 questões (100.0%)')).toBeInTheDocument();
});

test.each([
  ['omitir uma opção correta', [0]],
  ['selecionar uma opção incorreta extra', [0, 1, 2]]
])('na sessão por domínio, pontua como incorreta a resposta que %s', (_description, selections) => {
  renderDomainSession();
  advanceToMultipleQuestion();

  const checkboxes = screen.getAllByRole('checkbox');
  selections.forEach(index => fireEvent.click(checkboxes[index]));
  fireEvent.click(screen.getByRole('button', { name: 'Confirmar resposta' }));

  expect(screen.getByText('✗ Incorreto')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar' }));
  expect(screen.getByText('Você acertou 1 de 2 questões (50.0%)')).toBeInTheDocument();
});
