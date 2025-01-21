/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableRowActions } from '@/components/data-table/data-table-row-actions';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { activeTypes } from './data';
import { Products } from './schema';

export const productsColumns = ({ handleEdit, handleView, isDelete = true }: any): ColumnDef<Products>[] => [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Product Name" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'productCategoryId',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
    cell: ({ row }) => {
      const subCategory = row.original.productCategoryId;
      return <div className="w-fit text-nowrap">{subCategory?.name || 'N/A'}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: 'productSubCategoryId',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Sub Category" />,
    cell: ({ row }) => {
      const subCategory = row.original.productSubCategoryId;
      return <div className="w-fit text-nowrap">{subCategory?.name || 'N/A'}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('description')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'isActive',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Active" />,
    cell: ({ row }) => {
      const { isActive } = row.original;
      const badgeColor = activeTypes.get(isActive ? 'Yes' : 'No');
      return (
        <div className="flex space-x-2">
          <Badge variant="outline" className={cn('capitalize', badgeColor)}>
            {row.getValue('isActive') ? 'Yes' : 'No'}
          </Badge>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'country',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Country" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('country')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'city',
    header: ({ column }) => <DataTableColumnHeader column={column} title="City" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('city')}</div>,
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
