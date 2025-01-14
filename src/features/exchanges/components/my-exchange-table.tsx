/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllMineOffers, useDeleteOfferById } from '@/hooks/api/offer.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeColumns } from '../data/exchange-columns';
import { exchangeListSchema, filterFields } from '../data/schema';

export function MyExchangesTable({ transactionType }: any) {
  const [exchangesList, setExchangesList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);
  const { setCurrentRow } = useActions();

  const navigate = useNavigate();
  const { toast } = useToast();

  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllMineOffers(transactionType, queryParams);
  const { mutateAsync, isLoading: isOfferDeleteLoading } = useDeleteOfferById();

  useEffect(() => {
    if (data?.data) {
      setExchangesList(exchangeListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/exchanges/me/view/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/${user?.role}/exchanges/me/${id}`);
  };

  const onDeleteExchange = async (id: string) => {
    try {
      await mutateAsync(id);
      const filteredUserList = exchangesList.filter((exchange: any) => exchange._id !== id);
      setExchangesList(filteredUserList);
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
          data={exchangesList}
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

      <DataTableActionDialogs handleDelete={onDeleteExchange} isLoading={isOfferDeleteLoading} />
    </>
  );
}
