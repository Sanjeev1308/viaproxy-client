import { Main } from '@/components/layout/main';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TransactionsTable } from '@/features/transactions/components/transactions-table';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Transactions() {
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

              <Button>
                <Link to="/admin/transactions/new">Add Transaction</Link>
              </Button>
            </div>
            <TabsContent value={tab} className="space-y-4">
              <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                <TransactionsTable transactionType={tab} />
              </div>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </Main>
    </>
  );
}
