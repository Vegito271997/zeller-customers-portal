import { render, screen } from '@testing-library/react';
import { CustomerList } from '../CustomerList';
import type { CustomerRecord } from '../../../types/customer';

describe('CustomerList', () => {
  const mockCustomers: CustomerRecord[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'ADMIN',
    },
  ];

  it('renders the correct role title', () => {
    render(<CustomerList customers={mockCustomers} role="ADMIN" />);

    expect(screen.getByText('Admin Users')).toBeInTheDocument();
  });

  it('renders customer name', () => {
    render(<CustomerList customers={mockCustomers} role="ADMIN" />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('shows empty state when no customers', () => {
    render(<CustomerList customers={[]} role="ADMIN" />);

    expect(screen.getByText(/no users found/i)).toBeInTheDocument();
  });
});
