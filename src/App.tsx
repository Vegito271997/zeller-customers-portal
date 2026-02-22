import { useState } from 'react';

import { useZellerCustomers } from './hooks/useZellerCustomers';
import type { UserRole } from './types/customer';
import { RoleSelector } from './components/customers/RoleSelector';
import { CustomerList } from './components/customers/CustomerList';
import { CustomerListSkeleton } from './components/customers/CustomerListSkeleton';

export const App = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('ADMIN');

  const { customers, loading, error } = useZellerCustomers(selectedRole);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-semibold mb-8">Zeller Customers</h1>
        <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />

        <hr className="my-10 border-gray-200" />

        {loading && <CustomerListSkeleton />}

        {error && (
          <div role="alert" className="rounded-md bg-red-50 border border-red-200 p-4">
            <p className="text-red-700 font-medium">Unable to load customers.</p>
            <p className="text-red-600 text-sm mt-1">Please check your connection and try again.</p>
          </div>
        )}

        {!loading && !error && <CustomerList customers={customers} role={selectedRole} />}
      </div>
    </main>
  );
};
