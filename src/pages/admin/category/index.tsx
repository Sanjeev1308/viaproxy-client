import { Main } from '@/components/layout/main';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CategoriesTable } from '@/features/categories/components/categories-table';
import { Link } from 'react-router-dom';

export function Categories() {
  return (
    <>
      <Main fixed>
        <ScrollArea>
          <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Categories List</h2>
              <p className="text-muted-foreground">Find all the Categories you have made</p>
            </div>

            <Button>
              <Link to="/admin/categories/new">Add Category</Link>
            </Button>
          </div>
          <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
            <CategoriesTable />
          </div>
        </ScrollArea>
      </Main>
    </>
  );
}
