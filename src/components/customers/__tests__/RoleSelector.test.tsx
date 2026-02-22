import { render, screen, fireEvent } from '@testing-library/react';
import { RoleSelector } from '../RoleSelector';

describe('RoleSelector', () => {
  it('renders both admin and manager options', () => {
    render(<RoleSelector selectedRole="ADMIN" onRoleChange={() => {}} />);

    expect(screen.getByLabelText(/admin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/manager/i)).toBeInTheDocument();
  });

  it('calls onRoleChange when selecting manager', () => {
    const mockHandler = vi.fn();

    render(<RoleSelector selectedRole="ADMIN" onRoleChange={mockHandler} />);

    const managerRadio = screen.getByLabelText(/manager/i);

    fireEvent.click(managerRadio);

    expect(mockHandler).toHaveBeenCalledWith('MANAGER');
  });

  it('checks the selected role correctly', () => {
    render(<RoleSelector selectedRole="MANAGER" onRoleChange={() => {}} />);

    const managerRadio = screen.getByLabelText(/manager/i);

    expect(managerRadio).toBeChecked();
  });
});
