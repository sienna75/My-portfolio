import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('renders portfolio heading and initial projects', () => {
  render(<App />);
  // Checks for hero title or studio name
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  // Checks for initial project title from projects.js
  expect(screen.getByText(/Lumina Brand Identity/i)).toBeInTheDocument();
});

test('filters project list based on search', () => {
  render(<App />);
  // Matches placeholder in SearchBar.jsx
  const searchInput = screen.getByPlaceholderText(/Filter by title or category/i);

  fireEvent.change(searchInput, { target: { value: 'E-Commerce' } });

  expect(screen.getByText(/E-Commerce Redesign/i)).toBeInTheDocument();
  expect(screen.queryByText(/Lumina Brand Identity/i)).not.toBeInTheDocument();
});