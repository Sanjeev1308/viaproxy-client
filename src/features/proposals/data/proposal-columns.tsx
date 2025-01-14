/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableRowActions } from '@/components/data-table/data-table-row-actions';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { Proposal } from './schema';

export const proposalColumns = ({ handleEdit, handleView, isDelete = true }: any): ColumnDef<Proposal>[] => [
  {
    accessorKey: 'message',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Message" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('message')}</div>,
  },
  {
    accessorKey: 'proposer',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Proposer" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{(row.getValue('proposer') as any).email}</div>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => <div className="w-fit text-nowrap">{row.getValue('status')}</div>,
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
