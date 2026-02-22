import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { LIST_ZELLER_CUSTOMERS } from '../graphql';
import type { CustomerRecord, UserRole } from '../types/customer';

interface ListZellerCustomersResponse {
  listZellerCustomers: {
    items: CustomerRecord[];
  };
}

export const useZellerCustomers = (selectedRole: UserRole) => {
  const { data, loading, error } = useQuery<ListZellerCustomersResponse>(LIST_ZELLER_CUSTOMERS);

  const filteredCustomers = useMemo(() => {
    if (!data?.listZellerCustomers.items) return [];

    return data.listZellerCustomers.items.filter((customer) => customer.role === selectedRole);
  }, [data, selectedRole]);

  return {
    customers: filteredCustomers,
    loading,
    error,
  };
};
