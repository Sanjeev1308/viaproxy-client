/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoFormCustomSelect from '@/components/auto-form/fields/custom-select';
import { useAllSubCategoryById } from '@/hooks/api/category.rq';
import { useMemo } from 'react';

export default function SubCategoryDropdown(props: any) {
  const { data, isLoading } = useAllSubCategoryById(props.productCategoryId);

  const categoryDropdownOptions = useMemo(() => {
    return data?.data.map((item: any) => ({ value: item._id, label: item.name }));
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <AutoFormCustomSelect selectOptions={categoryDropdownOptions} {...props} />;
}
