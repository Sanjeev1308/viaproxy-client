import { Main } from '@/components/layout/main';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ServiceTable } from '@/features/services/components/services-table';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <>
      <Main fixed>
        <ScrollArea>
          <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Services List</h2>
              <p className="text-muted-foreground">Find all the Services you have made</p>
            </div>

            <Button>
              <Link to="/admin/services/new">Add Service</Link>
            </Button>
          </div>
          <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
            <ServiceTable />
          </div>
        </ScrollArea>
      </Main>
    </>
  );
}
