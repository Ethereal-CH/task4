import React from 'react';
import { render } from '@testing-library/react';
import NewsletterTemplate from './NewsletterTemplate';

test('renders newsletter template correctly', () => {
  const { getByText, getByAltText, getByRole } = render(
    <NewsletterTemplate
      title="Welcome to our Newsletter"
      name="John Doe"
      image="https://via.placeholder.com/600x300"
      newsletterContent="This is the content of the newsletter."
      learnMoreLink="https://example.com"
    />
  );

  expect(getByText('Weekly Update')).toBeInTheDocument();
  expect(getByText('This is the content of the newsletter.')).toBeInTheDocument();
  expect(getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', 'https://example.com');
  expect(getByAltText('Newsletter Image')).toHaveAttribute('src', 'https://via.placeholder.com/600x300');
});