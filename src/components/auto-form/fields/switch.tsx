import { FormControl, FormItem } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import AutoFormLabel from '../common/label';
import AutoFormTooltip from '../common/tooltip';
import { AutoFormInputComponentProps } from '../types';

export default function AutoFormSwitch({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  const { className = 'w-full' } = fieldProps;

  return (
    <div className={`flex flex-row items-center space-x-2 ${className}`}>
      <FormItem className="flex w-full flex-col justify-start">
        <div className="flex items-center gap-3">
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} {...fieldProps} />
          </FormControl>
          <AutoFormLabel label={fieldConfigItem?.label || label} isRequired={isRequired} />
        </div>
      </FormItem>
      <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
    </div>
  );
}
