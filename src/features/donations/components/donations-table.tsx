/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllDonationOffers } from '@/hooks/api/offer.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { donationsColumns } from '../data/donations-columns';
import { donationListSchema, filterFields } from '../data/schema';

export function DonationsTable() {
  const [donationList, setDonationList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllDonationOffers(queryParams);

  useEffect(() => {
    if (data?.data) {
      setDonationList(donationListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/exchanges/view/${id}`);
  };

  const columns = donationsColumns({ handleView, isDelete: false });

  return isLoading ? (
    <Skeleton />
  ) : (
    <DataTable
      mode="server"
      data={donationList}
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
