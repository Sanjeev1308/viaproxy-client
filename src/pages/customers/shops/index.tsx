import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';
import { ProfileDropdown } from '@/components/profile-dropdown';

import { columns } from './shops-columns';

import { Shop, userListSchema } from './data/schema';
import { DataTable } from '@/features/exchanges/components/data-table';
import { PlusIcon } from 'lucide-react';

export function Shops() {
  // Dialog states
  const [currentRow, setCurrentRow] = useState<Shop | null>(null);

  // Parse user list
  const userList = userListSchema.parse([]);

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header sticky>
        <div className="ml-auto flex items-center space-x-4">
          <ProfileDropdown />
        </div>
      </Header>

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
    </>
  );
}
