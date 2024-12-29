'use client';
import { Form } from '@/components/ui/form';
import React from 'react';
import { DefaultValues, FormState, useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import AutoFormObject from './fields/object';
import Stepper from './form-layout/steps-form';
import TabsForm from './form-layout/tabs-form';
import { Dependency, FieldConfig } from './types';
import { getDefaultValues, getObjectFormSchema, ZodObjectOrWrapped } from './utils';

export function AutoFormSubmit({
  children,
  className,
  disabled,
}: {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <Button type="submit" disabled={disabled} className={className}>
      {children ?? 'Submit'}
    </Button>
  );
}

function AutoForm<SchemaType extends ZodObjectOrWrapped>({
  formSchema,
  values: valuesProp,
  onValuesChange: onValuesChangeProp,
  onParsedValuesChange,
  onSubmit: onSubmitProp,
  fieldConfig,
  children,
  className,
  dependencies,
  multiFormInfo,
}: {
  formSchema: SchemaType;
  values?: Partial<z.infer<SchemaType>>;
  onValuesChange?: (values: Partial<z.infer<SchemaType>>, form: UseFormReturn<z.infer<SchemaType>>) => void;
  onParsedValuesChange?: (values: Partial<z.infer<SchemaType>>, form: UseFormReturn<z.infer<SchemaType>>) => void;
  onSubmit?: (values: z.infer<SchemaType>, form: UseFormReturn<z.infer<SchemaType>>) => void;
  fieldConfig?: FieldConfig<z.infer<SchemaType>>;
  children?: React.ReactNode | ((formState: FormState<z.infer<SchemaType>>) => React.ReactNode);
  className?: string;
  dependencies?: Dependency<z.infer<SchemaType>>[];
  multiFormInfo?: { layout: 'tabs' | 'multi-step' | 'default'; items: { title: string; schema: SchemaType }[] };
}) {
  // const mergedSchema = formSchema.reduce((acc, schema) => (acc as any).merge(schema), formSchema[0]);
  const objectFormSchema = getObjectFormSchema(formSchema);
  const defaultValues: DefaultValues<z.infer<typeof objectFormSchema>> | null = getDefaultValues(
    objectFormSchema,
    fieldConfig,
  );

  const form = useForm<z.infer<typeof objectFormSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues ?? undefined,
    values: valuesProp,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const parsedValues = formSchema.safeParse(values);
    if (parsedValues.success) {
      onSubmitProp?.(parsedValues.data, form);
    }
  }

  React.useEffect(() => {
    const subscription = form.watch((values) => {
      onValuesChangeProp?.(values, form);
      const parsedValues = formSchema.safeParse(values);
      if (parsedValues.success) {
        onParsedValuesChange?.(parsedValues.data, form);
      }
    });

    return () => subscription.unsubscribe();
  }, [form, formSchema, onValuesChangeProp, onParsedValuesChange]);

  const renderChildren =
    typeof children === 'function' ? children(form.formState as FormState<z.infer<SchemaType>>) : children;

  const renderMultiForm = (layout: string) => {
    switch (layout) {
      case 'tabs':
        return (
          <>
            <TabsForm multiFormInfo={multiFormInfo} form={form} dependencies={dependencies} fieldConfig={fieldConfig} />

            {renderChildren}
          </>
        );

      case 'multi-step':
        return (
          <Stepper
            multiFormInfo={multiFormInfo}
            form={form}
            dependencies={dependencies}
            fieldConfig={fieldConfig}
            renderChildren={renderChildren}
          />
        );

      default:
        return null;
    }
  };

  const renderForm = multiFormInfo ? (
    renderMultiForm(multiFormInfo.layout)
  ) : (
    <>
      <AutoFormObject schema={objectFormSchema} form={form} dependencies={dependencies} fieldConfig={fieldConfig} />

      {renderChildren}
    </>
  );

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={(e) => {
            form.handleSubmit(onSubmit)(e);
          }}
          className={cn('space-y-5', className)}
        >
          {renderForm}
        </form>
      </Form>
    </div>
  );
}

export default AutoForm;
