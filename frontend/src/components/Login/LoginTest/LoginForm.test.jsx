import { render, screen } from '@testing-library/react';
import { LoginForm } from '../LoginForm';

test('LoginForm component', () => {
  render(<LoginForm />);
  const textElement = screen.getByText(/LoginForm/i);
  expect(textElement).toBeInTheDocument();
});

