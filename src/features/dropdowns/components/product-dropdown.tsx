/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoFormCustomSelect from '@/components/auto-form/fields/custom-select';
import { useAllProduct } from '@/hooks/api/product.rq';
import { useMemo } from 'react';

export default function ProductDropdown(props: any) {
  const { data, isLoading } = useAllProduct({
    page: 1,
    limit: 30,
    filter: {},
  });

  const productDropdownOptions = useMemo(() => {
    return data?.data.map((item: any) => ({ value: item._id, label: item.name }));
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <AutoFormCustomSelect selectOptions={productDropdownOptions} {...props} />;
}
