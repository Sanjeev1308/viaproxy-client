/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import { ConfirmDialog } from '@/components/confirm-dialog';
import { AlertTriangle } from 'lucide-react';

interface Props {
  isLoading?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRow: any;
  handleDelete: (id: string) => void;
}

export function DataTableDeleteDialog({ open, onOpenChange, currentRow, handleDelete, isLoading = false }: Props) {
  const handleDeleteClick = () => {
    if (handleDelete) {
      handleDelete(currentRow._id);
    }
    onOpenChange(false);
    toast({
      variant: 'success',
      title: 'The following item has been deleted',
    });
  };

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleDeleteClick}
      disabled={isLoading}
      title={
        <span className="text-destructive">
          <AlertTriangle className="mr-1 inline-block stroke-destructive" size={18} /> Delete Item
        </span>
      }
      desc={
        <div className="space-y-4">
          <p className="mb-2">
            Are you sure you want to delete?
            <br />
            This action will permanently remove the item from the system. This cannot be undone.
          </p>

          <Alert variant="destructive">
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>Please be carefull, this operation can not be rolled back.</AlertDescription>
          </Alert>
        </div>
      }
      confirmText="Delete"
      destructive
    />
  );
}
