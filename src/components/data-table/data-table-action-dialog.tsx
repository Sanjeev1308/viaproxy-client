// import { UsersActionDialog } from './users-action-dialog'
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { DataTableDeleteDialog } from './data-table-delete-dialog';

interface Props {
  handleDelete: (id: string) => void;
  // handleEdit: () => void;
  isLoading?: boolean;
}

export function DataTableActionDialogs({ handleDelete, isLoading = false }: Props) {
  const { setOpen } = useActions();
  const { open, currentRow } = useTypedSelector((state) => state.dataTableDialog);

  return (
    <>
      {currentRow && (
        <>
          {/* <UsersActionDialog
            key={`user-edit-${currentRow.id}`}
            open={open === 'view'}
            onOpenChange={() => {
              setOpen('view')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          /> */}

          <DataTableDeleteDialog
            key={`data-delete-${currentRow.id}`}
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete');
            }}
            currentRow={currentRow}
            handleDelete={handleDelete}
            isLoading={isLoading}
          />
        </>
      )}
    </>
  );
}
