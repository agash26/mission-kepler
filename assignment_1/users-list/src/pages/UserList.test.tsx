import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from '../pages/UserList';
import { User } from '../types/User';

// Define mockData before any jest.mock calls
const mockData: User[] = [
  {
    id: 1,
    name: 'User One',
    location: 'Chennai',
    skills: ['React', 'TypeScript'],
    img: 'https://example.com/alice.jpg',
  },
  {
    id: 2,
    name: 'User Two',
    location: 'Madurai',
    skills: ['Node.js', 'JavaScript'],
    img: 'https://example.com/bob.jpg',
  },
];

jest.mock('../data/data.json', () => mockData);

const mockSearchQuery = 'react';

describe('UserList Component', () => {
  it('renders user cards based on search query', () => {
    render(<UserList searchQuery={mockSearchQuery} />);

    expect(screen.getByText(/User One/i)).toBeInTheDocument();
    expect(screen.queryByText(/User Two/i)).not.toBeInTheDocument();
  });

  it('displays "No users available" when no users match the search query', () => {
    render(<UserList searchQuery="nonexistent" />);

    expect(screen.getByText(/No users available/i)).toBeInTheDocument();
  });
});
