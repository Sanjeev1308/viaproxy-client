/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoFormCustomSelect from '@/components/auto-form/fields/custom-select';
import { useAllCategory } from '@/hooks/api/category.rq';
import { useMemo } from 'react';

export default function CategoryDropdown(props: any) {
  const { data, isLoading } = useAllCategory({
    page: 1,
    limit: 30,
    filter: { categoryType: props.categoryType, isSubcategory: false },
  });

  const categoryDropdownOptions = useMemo(() => {
    return data?.data.map((item: any) => ({ value: item._id, label: item.name }));
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <AutoFormCustomSelect selectOptions={categoryDropdownOptions} {...props} />;
}
