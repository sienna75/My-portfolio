import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('renders portfolio heading and initial project', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/Lumina/i)).toBeInTheDocument();
});

test('filters project list based on search', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Filter/i);

  fireEvent.change(searchInput, { target: { value: 'E-Commerce' } });

  expect(screen.getByText(/E-Commerce/i)).toBeInTheDocument();
  expect(screen.queryByText(/Lumina/i)).not.toBeInTheDocument();
});