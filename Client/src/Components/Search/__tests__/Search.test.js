import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line to extend expect with toBeInTheDocument
import Search from '../Search';

describe('Search', () => {
  const mockProps = {
    searchStatus: 'Active',
    searchLaunch: '2023-09-20',
    searchType: 'Dragon',
    setSearchStatus: jest.fn(),
    setSearchLaunch: jest.fn(),
    setSearchType: jest.fn(),
  };

  it('renders correctly', () => {
    render(<Search {...mockProps} />);
    
    // Check if input elements are rendered
    const statusInput = screen.getByPlaceholderText('Search by status');
    const launchInput = screen.getByPlaceholderText('Search by launch date');
    const typeInput = screen.getByPlaceholderText('Search by type');
    
    expect(statusInput).toBeInTheDocument();
    expect(launchInput).toBeInTheDocument();
    expect(typeInput).toBeInTheDocument();
  });

  it('calls setSearchStatus, setSearchLaunch, and setSearchType on input change', () => {
    render(<Search {...mockProps} />);
    
    const statusInput = screen.getByPlaceholderText('Search by status');
    const launchInput = screen.getByPlaceholderText('Search by launch date');
    const typeInput = screen.getByPlaceholderText('Search by type');
    
    fireEvent.change(statusInput, { target: { value: 'NewStatus' } });
    fireEvent.change(launchInput, { target: { value: 'NewLaunchDate' } });
    fireEvent.change(typeInput, { target: { value: 'NewType' } });
    
    expect(mockProps.setSearchStatus).toHaveBeenCalledWith('NewStatus');
    expect(mockProps.setSearchLaunch).toHaveBeenCalledWith('NewLaunchDate');
    expect(mockProps.setSearchType).toHaveBeenCalledWith('NewType');
  });
});
