/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllOffers } from '@/hooks/api/offer.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeColumns } from '../data/exchange-columns';
import { exchangeListSchema, filterFields } from '../data/schema';

export function FindExchanges({ transactionType }: any) {
  const [exchangesList, setExchangesList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);

  const navigate = useNavigate();

  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllOffers(transactionType, queryParams);

  useEffect(() => {
    if (data?.data) {
      setExchangesList(exchangeListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/exchanges/view/${id}`);
  };

  const columns = exchangeColumns({ handleView, isDelete: false });

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
    </>
  );
}
