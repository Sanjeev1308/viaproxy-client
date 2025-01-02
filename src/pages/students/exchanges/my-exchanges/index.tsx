/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Main } from '@/components/layout/main';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllMineOffers, useDeleteOfferById } from '@/hooks/api/offer.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeListSchema, Exchanges } from './data/schema';
import { exchangeColumns } from './exchanges-columns';

export function MyExchanges() {
  const [exchangeList, setExchangeList] = useState<Exchanges[]>([]);
  const { setCurrentRow } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading, error } = useAllMineOffers(queryParams);
  const { mutateAsync, isLoading: isOfferDeleteLoading } = useDeleteOfferById();

  useEffect(() => {
    if (data && data.data) {
      setExchangeList(exchangeListSchema.parse(data.data));
    }
  }, [data]);

  const onDeleteExchange = async (id: string) => {
    try {
      await mutateAsync(id);
      const filteredUserList = exchangeList.filter((exchange: any) => exchange._id !== id);
      setExchangeList(filteredUserList);
      setCurrentRow(null);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/${user?.role}/exchanges/me/${id}`);
  };

  const handleView = (id: string) => {
    navigate(`/${user?.role}/exchanges/me/view/${id}`);
  };

  const columns = exchangeColumns({ handleEdit, handleView, isDelete: true });

  return (
    <>
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">My Exchanges List</h2>
            <p className="text-muted-foreground">Find all the trades you have made</p>
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          {isLoading ? (
            <Skeleton />
          ) : (
            <DataTable
              mode="server"
              data={exchangeList}
              columns={columns}
              pageCount={data?.totalPages}
              isLoading={isLoading}
              pagination={pagination}
              sort={sorting}
              filter={filter}
              // filterFields={filterFields}
              onPaginationChange={handlePaginationChange}
              onSortingChange={handleSortingChange}
              onFiltersChange={handleFiltersChange}
            />
          )}
        </div>
      </Main>

      <DataTableActionDialogs handleDelete={onDeleteExchange} isLoading={isOfferDeleteLoading} />
    </>
  );
}
