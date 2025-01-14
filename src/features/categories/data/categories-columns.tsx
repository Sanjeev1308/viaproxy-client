/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableRowActions } from '@/components/data-table/data-table-row-actions';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { categoryTypes } from './data';
import { Categories } from './schema';

export const categoriesColumns = ({ handleEdit, handleView, isDelete = true }: any): ColumnDef<Categories>[] => [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category Name" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('description')}</div>,
  },
  {
    accessorKey: 'categoryType',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
    cell: ({ row }) => {
      const { categoryType } = row.original;
      const badgeColor = categoryTypes.get(categoryType);
      return (
        <div className="flex space-x-2">
          <Badge variant="outline" className={cn('capitalize', badgeColor)}>
            {row.getValue('categoryType')}
          </Badge>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'isSubcategory',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Is A SubCategory?" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('isSubcategory') ? 'Yes' : 'No'}</div>,
    enableSorting: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions row={row} handleEdit={handleEdit} handleView={handleView} isDelete={isDelete} />
    ),
    meta: {
      className: cn(
        'sticky md:table-cell right-0 z-10 rounded-tl',
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
      ),
    },
  },
];
