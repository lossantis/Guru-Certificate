import { cloudPractitionerQuestions } from './cloudPractitionerQuestions';
import { cloudPractitionerDomains } from './cloudPractitionerDomains';

const shuffle = (items, random) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
};

export const createCloudPractitionerExam = (
  questions = cloudPractitionerQuestions,
  domains = cloudPractitionerDomains,
  random = Math.random
) => {
  const selectedQuestions = domains.flatMap(domain => {
    const domainQuestions = questions.filter(question => question.domain === domain.slug);
    if (domainQuestions.length < domain.questionCount) {
      throw new Error(`Not enough questions for domain "${domain.slug}"`);
    }
    return shuffle(domainQuestions, random).slice(0, domain.questionCount);
  });

  const expectedTotal = domains.reduce((total, domain) => total + domain.questionCount, 0);
  if (selectedQuestions.length !== expectedTotal) {
    throw new Error(`Expected ${expectedTotal} selected questions, got ${selectedQuestions.length}`);
  }

  return shuffle(selectedQuestions, random);
};
