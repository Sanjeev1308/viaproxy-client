import { Main } from '@/components/layout/main';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AdsTable } from '@/features/ads/components/ads-table';
import { Link } from 'react-router-dom';

export function Ads() {
  return (
    <>
      <Main fixed>
        <ScrollArea>
          <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Ads List</h2>
              <p className="text-muted-foreground">Find all the ads you have made</p>
            </div>

            <Button>
              <Link to="/admin/ads/new">Add Ads</Link>
            </Button>
          </div>

          <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
            <AdsTable />
          </div>
        </ScrollArea>
      </Main>
    </>
  );
}
