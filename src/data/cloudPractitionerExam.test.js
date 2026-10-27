import { createCloudPractitionerExam } from './cloudPractitionerExam';
import { cloudPractitionerDomains } from './cloudPractitionerDomains';
import { cloudPractitionerQuestions } from './cloudPractitionerQuestions';

test('creates a 65-question exam with the configured allocation for each domain', () => {
  const exam = createCloudPractitionerExam();

  expect(exam).toHaveLength(65);
  expect(new Set(exam.map(question => question.id)).size).toBe(65);

  cloudPractitionerDomains.forEach(domain => {
    expect(exam.filter(question => question.domain === domain.slug)).toHaveLength(domain.questionCount);
  });
});

test('samples and shuffles questions using the provided random source', () => {
  const reverseBiasedExam = createCloudPractitionerExam(
    cloudPractitionerQuestions,
    cloudPractitionerDomains,
    () => 0
  );
  const forwardBiasedExam = createCloudPractitionerExam(
    cloudPractitionerQuestions,
    cloudPractitionerDomains,
    () => 0.999999
  );

  expect(reverseBiasedExam.map(question => question.id)).not.toEqual(
    forwardBiasedExam.map(question => question.id)
  );
  expect(reverseBiasedExam).toHaveLength(65);
  expect(forwardBiasedExam).toHaveLength(65);
});

test('fails explicitly when a domain does not contain enough questions', () => {
  expect(() => createCloudPractitionerExam(
    cloudPractitionerQuestions.filter(question => question.domain !== 'billing-pricing-support')
  )).toThrow('Not enough questions for domain "billing-pricing-support"');
});
