export type UserRole = 'ADMIN' | 'MANAGER';

export interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
