/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllSalesOffers } from '@/hooks/api/offer.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { salesColumns } from '../data/sales-columns';
import { filterFields, saleListSchema } from '../data/schema';

export function SalesTable() {
  const [salesList, setSalesList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllSalesOffers(queryParams);

  useEffect(() => {
    if (data?.data) {
      setSalesList(saleListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/exchanges/view/${id}`);
  };

  const columns = salesColumns({ handleView, isDelete: false });

  return isLoading ? (
    <Skeleton />
  ) : (
    <DataTable
      mode="server"
      data={salesList}
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
  );
}
