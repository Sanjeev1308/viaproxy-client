/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useActions } from '@/hooks/useActions';
import { Row } from '@tanstack/react-table';
import { Edit, Eye, MoreHorizontal, Trash } from 'lucide-react';

interface DataTableRowActionsProps {
  row: Row<any>;
  handleEdit: (id: string) => void;
  handleView: (id: string) => void;
  isDelete?: boolean;
}

export function DataTableRowActions({ row, handleEdit, handleView, isDelete = true }: DataTableRowActionsProps) {
  const { setOpen, setCurrentRow } = useActions();

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          {handleView && (
            <DropdownMenuItem onClick={() => handleView(row.original._id)}>
              View
              <DropdownMenuShortcut>
                <Eye size={16} />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          )}

          {handleEdit && (
            <DropdownMenuItem onClick={() => handleEdit(row.original._id)}>
              Edit
              <DropdownMenuShortcut>
                <Edit size={16} />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          )}
          {isDelete && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setCurrentRow(row.original);
                  setOpen('delete');
                }}
                className="!text-red-500"
              >
                Delete
                <DropdownMenuShortcut>
                  <Trash size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
