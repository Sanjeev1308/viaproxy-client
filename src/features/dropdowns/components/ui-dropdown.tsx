/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IDropDownOption } from '@/models/form-field.model';

export default function UIDropdown({
  selectOptions,
  onChange,
  value,
  placeholder,
  loading = true,
  ...rest
}: {
  selectOptions: IDropDownOption[];
  onChange?: any;
  defaultValue?: any;
  value?: any;
  loading?: boolean;
  placeholder?: string;
}) {
  function findItem(value: any) {
    return selectOptions?.find((item) => item.value === value);
  }

  return (
    <Select onValueChange={onChange} value={value} {...rest}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>{value ? findItem(value)?.label : 'Select an option'}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {loading ? (
          <div>loading...</div>
        ) : (
          selectOptions?.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}
