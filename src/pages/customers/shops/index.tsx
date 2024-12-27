import { Main } from '@/components/layout/main';
import { Button } from '@/components/ui/button';

import { columns } from './shops-columns';

import { DataTable } from '@/components/data-table/data-table';
import { useAllUsers } from '@/hooks/api/user.rq';
import { PlusIcon } from 'lucide-react';
import { userListSchema } from './data/schema';

export function Shops() {
  // Dialog states
  // const [currentRow, setCurrentRow] = useState<Shop | null>(null);
  const { data, isLoading, error } = useAllUsers();

  // Parse user list
  if (isLoading) {
    return <div>loading..</div>;
  }
  const userList = userListSchema.parse(data?.data || []);

  return (
    <Main>
      <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Shop List</h2>
          <p className="text-muted-foreground">Manage your shops.</p>
        </div>
        <div className="flex gap-2">
          <Button className="space-x-1" onClick={() => console.log}>
            <span>Add Shop</span> <PlusIcon size={18} />
          </Button>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <DataTable data={userList} columns={columns} />
      </div>
    </Main>
  );
}
