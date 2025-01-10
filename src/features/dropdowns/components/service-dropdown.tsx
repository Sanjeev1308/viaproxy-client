/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAllCategory } from '@/hooks/api/category.rq';
import { useMemo } from 'react';
import UIDropdown from './ui-dropdown';

export default function ServiceDropdown({ value, onChange }: any) {
  const { data, isLoading } = useAllCategory({ page: 1, limit: 10, filter: { categoryType: 'service' } });

  const options = useMemo(() => {
    return data?.data.map((item: any) => ({ value: item.id, label: item.name }));
  }, [data]);

  return <UIDropdown selectOptions={options} value={value} onChange={onChange} loading={isLoading} />;
}
