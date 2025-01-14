/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoFormCustomSelect from '@/components/auto-form/fields/custom-select';
import { useAllService } from '@/hooks/api/service.rq';
import { useMemo } from 'react';

export default function ServiceDropdown(props: any) {
  const { data, isLoading } = useAllService({
    page: 1,
    limit: 30,
    filter: {},
  });

  const serviceDropdownOptions = useMemo(() => {
    return data?.data.map((item: any) => ({ value: item._id, label: item.name }));
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <AutoFormCustomSelect selectOptions={serviceDropdownOptions} {...props} />;
}
