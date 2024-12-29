/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableRowActions } from '@/components/data-table/data-table-row-actions';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { Exchanges } from './data/schema';

export const exchangeColumns = ({ handleEdit }: any): ColumnDef<Exchanges>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    meta: {
      className: cn(
        'sticky md:table-cell left-0 z-10 rounded-tl',
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
      ),
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'offerTitle',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Offer Title" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('offerTitle')}</div>,
  },
  {
    accessorKey: 'proposedItem',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Product or Service offered" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('proposedItem')}</div>,
  },
  {
    accessorKey: 'concernedProductService',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Product or Service requested" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('concernedProductService')}</div>,
  },
  {
    accessorKey: 'geographicArea',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Geographic Area" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('geographicArea')}</div>,
  },
  {
    accessorKey: 'offerStartDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Offer Start Date" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('offerStartDate')}</div>,
  },
  {
    accessorKey: 'offerEndDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Offer End Date" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('offerEndDate')}</div>,
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} handleEdit={handleEdit} />,
    meta: {
      className: cn(
        'sticky md:table-cell right-0 z-10 rounded-tl',
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
      ),
    },
  },
];
