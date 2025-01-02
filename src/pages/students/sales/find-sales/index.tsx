import { Main } from '@/components/layout/main';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SalesTable } from '@/features/sales/components/sales-table';

export function Sales() {
  return (
    <>
      <Main fixed>
        <ScrollArea>
          <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Sales List</h2>
              <p className="text-muted-foreground">Find all the trades you have made</p>
            </div>
          </div>
          <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
            <SalesTable />
          </div>
        </ScrollArea>
      </Main>
    </>
  );
}
