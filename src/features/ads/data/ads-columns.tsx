/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableRowActions } from '@/components/data-table/data-table-row-actions';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { adsTypes } from './data';
import { Ads } from './schema';

export const adsColumns = ({ handleEdit, handleView, isDelete = true }: any): ColumnDef<Ads>[] => [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Ads Name" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('description')}</div>,
  },
  {
    accessorKey: 'serviceType',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
    cell: ({ row }) => {
      const { serviceType } = row.original;
      const badgeColor = adsTypes.get(serviceType);
      return (
        <div className="flex space-x-2">
          <Badge variant="outline" className={cn('capitalize', badgeColor)}>
            {row.getValue('serviceType')}
          </Badge>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'adsStartDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Start Date" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{new Date(row.getValue('adsStartDate')).toDateString()}</div>,
  },
  {
    accessorKey: 'adsEndDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title="End Date" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{new Date(row.getValue('adsEndDate')).toDateString()}</div>,
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
