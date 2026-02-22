import type { CustomerRecord, UserRole } from '../../types/customer';
import { CustomerListItem } from './CustomerListItem';
import { getRoleTitle } from '../../lib/roleHelpers';

interface CustomerListProps {
  customers: CustomerRecord[];
  role: UserRole;
}

export const CustomerList = ({ customers, role }: CustomerListProps) => {
  const title = getRoleTitle(role);

  if (!customers.length) {
    return (
      <section aria-live="polite" aria-relevant="additions removals">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
        <p className="text-gray-500 text-sm">No users found for this role.</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-lg sm:text-xl font-semibold mb-6">{title}</h2>

      <ul className="space-y-5 sm:space-y-6">
        {customers.map((customer) => (
          <CustomerListItem key={customer.id} customer={customer} />
        ))}
      </ul>
    </section>
  );
};
