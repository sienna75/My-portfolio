import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  it('renders input with placeholder text', () => {
    render(<SearchBar searchTerm="" onSearchChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/Filter projects by title.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onSearchChange when user types', () => {
    const handleSearchChange = vi.fn();
    render(<SearchBar searchTerm="" onSearchChange={handleSearchChange} />);
    
    const inputElement = screen.getByPlaceholderText(/Filter projects by title.../i);
    fireEvent.change(inputElement, { target: { value: 'React' } });
    
    expect(handleSearchChange).toHaveBeenCalledWith('React');
  });
});