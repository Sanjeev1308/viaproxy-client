import { DatePicker } from '@/components/ui/date-picker';
import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import AutoFormLabel from '../common/label';
import AutoFormTooltip from '../common/tooltip';
import { AutoFormInputComponentProps } from '../types';

export default function AutoFormDate({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  const { className = 'w-full' } = fieldProps;

  // Ensure field value is a Date object
  const valueAsDate =
    field.value instanceof Date ? field.value : typeof field.value === 'string' ? new Date(field.value) : null;

  return (
    <div className={`${className}`}>
      <FormItem>
        <AutoFormLabel label={fieldConfigItem?.label || label} isRequired={isRequired} />
        <FormControl>
          <DatePicker
            date={valueAsDate}
            setDate={(date) => {
              if (date instanceof Date && !isNaN(date.getTime())) {
                field.onChange(date); // Update form state with valid Date
              }
            }}
            {...fieldProps}
          />
        </FormControl>
        <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
        <FormMessage />
      </FormItem>
    </div>
  );
}
