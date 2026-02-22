import type { UserRole } from '../types/customer';

export const getRoleTitle = (role: UserRole): string => {
  switch (role) {
    case 'ADMIN':
      return 'Admin Users';
    case 'MANAGER':
      return 'Manager Users';
    default:
      return '';
  }
};
