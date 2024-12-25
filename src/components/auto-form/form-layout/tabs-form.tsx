/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import AutoFormObject from '../fields/object';

export default function TabsForm({ multiFormInfo, form, dependencies, fieldConfig }: any) {
  const [activeTab, setActiveTab] = useState('0');

  return (
    <Tabs value={`${activeTab}`} onValueChange={setActiveTab}>
      <TabsList>
        {multiFormInfo.items.map((item: any, index: number) => (
          <TabsTrigger key={item.title} value={`${index}`}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {multiFormInfo.items.map((item: any, index: number) => (
        <TabsContent key={`${item.title}-content`} value={`${index}`}>
          <AutoFormObject schema={item.schema} form={form} dependencies={dependencies} fieldConfig={fieldConfig} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
