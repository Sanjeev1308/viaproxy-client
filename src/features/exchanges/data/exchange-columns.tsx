/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableRowActions } from '@/components/data-table/data-table-row-actions';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { callTypes } from './data';
import { Exchanges } from './schema';

export const exchangeColumns = ({ handleEdit, handleView, isDelete = true }: any): ColumnDef<Exchanges>[] => [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   meta: {
  //     className: cn(
  //       'sticky md:table-cell left-0 z-10 rounded-tl',
  //       'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
  //     ),
  //   },
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'offerImage',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Image" />,
    cell: ({ row }) => (
      <img
        src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${row.getValue('offerImage')}`}
        alt="offer-image"
        className="h-12 w-12 object-cover rounded-sm"
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'offerTitle',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('offerTitle')}</div>,
  },
  {
    accessorKey: 'proposedItem',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Product or Service offered" />,
    cell: ({ row }) => {
      const { proposedItem } = row.original;
      const badgeColor = callTypes.get(proposedItem);
      return (
        <div className="flex space-x-2">
          <Badge variant="outline" className={cn('capitalize', badgeColor)}>
            {row.getValue('proposedItem')}
          </Badge>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'concernedProductService',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Product or Service requested" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('concernedProductService')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'geographicArea',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Geographic Area" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('geographicArea')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'offerStartDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Start Date" />,
    cell: ({ row }) => (
      <div className="w-fit text-nowrap">{new Date(row.getValue('offerStartDate')).toDateString()}</div>
    ),
  },
  {
    accessorKey: 'offerEndDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title="End Date" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{new Date(row.getValue('offerEndDate')).toDateString()}</div>,
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
