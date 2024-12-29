import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AutoFormLabel from '../common/label';
import AutoFormTooltip from '../common/tooltip';
import { AutoFormInputComponentProps } from '../types';

export default function AutoFormCustomSelect({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
  selectOptions,
}: AutoFormInputComponentProps) {
  const { className = 'w-full' } = fieldProps;

  //   const baseValues = (getBaseSchema(zodItem) as unknown as z.ZodEnum<any>)._def.values;

  //   let values: [string, string][] = [];
  //   if (!Array.isArray(baseValues)) {
  //     values = Object.entries(baseValues);
  //   } else {
  //     values = baseValues.map((value) => [value, value]);
  //   }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function findItem(value: any) {
    return selectOptions?.find((item) => item.value === value);
  }

  return (
    <div className={`flex flex-row items-center space-x-2 ${className}`}>
      <FormItem className="flex w-full flex-col justify-start">
        <AutoFormLabel label={fieldConfigItem?.label || label} isRequired={isRequired} />
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value} {...fieldProps}>
            <SelectTrigger>
              <SelectValue placeholder={fieldConfigItem.inputProps?.placeholder}>
                {field.value ? findItem(field.value)?.label : 'Select an option'}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {selectOptions?.map((option) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
        <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
        <FormMessage />
      </FormItem>
    </div>
  );
}
