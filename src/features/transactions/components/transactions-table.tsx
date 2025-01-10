/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllOffers, useDeleteOfferById } from '@/hooks/api/offer.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeListSchema, filterFields } from '../data/schema';
import { exchangeColumns } from '../data/transaction-columns';

export function TransactionsTable({ transactionType }: any) {
  const [transcationsList, setTranscationsList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);
  const { setCurrentRow } = useActions();

  const navigate = useNavigate();
  const { toast } = useToast();

  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllOffers(transactionType, queryParams);
  const { mutateAsync, isLoading: isTransactionDeleteLoading } = useDeleteOfferById();

  useEffect(() => {
    if (data?.data) {
      setTranscationsList(exchangeListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/transactions/view/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/${user?.role}/transactions/${id}`);
  };

  const onDeleteTransactions = async (id: string) => {
    try {
      await mutateAsync(id);
      const filteredUserList = transcationsList.filter((user: any) => user._id !== id);
      setTranscationsList(filteredUserList);
      setCurrentRow(null);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const columns = exchangeColumns({ handleView, handleEdit, isDelete: true });

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <DataTable
          mode="server"
          data={transcationsList}
          columns={columns}
          pageCount={data?.totalPages}
          isLoading={isLoading}
          pagination={pagination}
          sort={sorting}
          filter={filter}
          filterFields={filterFields}
          onPaginationChange={handlePaginationChange}
          onSortingChange={handleSortingChange}
          onFiltersChange={handleFiltersChange}
        />
      )}

      <DataTableActionDialogs handleDelete={onDeleteTransactions} isLoading={isTransactionDeleteLoading} />
    </>
  );
}
