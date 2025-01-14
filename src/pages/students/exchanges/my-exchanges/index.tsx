import { Main } from '@/components/layout/main';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MyExchangesTable } from '@/features/exchanges/components/my-exchange-table';
import { useState } from 'react';

export function MyExchanges() {
  const [tab, setTab] = useState('exchange');

  return (
    <>
      <Main fixed>
        <ScrollArea>
          <Tabs orientation="vertical" value={tab} className="space-y-4" onValueChange={setTab}>
            <div className="w-full overflow-x-auto pb-2 flex justify-between">
              <TabsList>
                <TabsTrigger value="exchange">Exchanges</TabsTrigger>
                <TabsTrigger value="donate">Donations</TabsTrigger>
                <TabsTrigger value="sale">Sales</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="exchange" className="space-y-4">
              <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                <MyExchangesTable transactionType="exchange" />
              </div>
            </TabsContent>
            <TabsContent value="donate" className="space-y-4">
              <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                <MyExchangesTable transactionType="donate" />
              </div>
            </TabsContent>
            <TabsContent value="sale" className="space-y-4">
              <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                <MyExchangesTable transactionType="sale" />
              </div>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </Main>
    </>
  );
}
