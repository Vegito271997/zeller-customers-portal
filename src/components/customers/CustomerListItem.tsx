import type { CustomerRecord } from '../../types/customer';

interface CustomerListItemProps {
  customer: CustomerRecord;
}

export const CustomerListItem = ({ customer }: CustomerListItemProps) => {
  const initial = customer.name.charAt(0).toUpperCase();

  return (
    <li className="flex items-center gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md bg-zeller-primaryLight text-zeller-primary font-semibold text-sm sm:text-base">
        {initial}
      </div>

      <div>
        <p className="text-base sm:text-lg font-semibold">{customer.name}</p>
        <p className="text-sm text-gray-500 capitalize">{customer.role.toLowerCase()}</p>
      </div>
    </li>
  );
};
