/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllAds, useDeleteAdsById } from '@/hooks/api/ads.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adsColumns } from '../data/ads-columns';
import { adsListSchema, filterFields } from '../data/schema';

export function AdsTable() {
  const [adsList, setAdsList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);
  const { setCurrentRow } = useActions();

  const navigate = useNavigate();
  const { toast } = useToast();

  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllAds(queryParams);
  const { mutateAsync, isLoading: isAdsDeleteLoading } = useDeleteAdsById();

  useEffect(() => {
    if (data?.data) {
      setAdsList(adsListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/ads/view/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/${user?.role}/ads/${id}`);
  };

  const onDeleteAds = async (id: string) => {
    try {
      await mutateAsync(id);
      const filteredUserList = adsList.filter((user: any) => user._id !== id);
      setAdsList(filteredUserList);
      setCurrentRow(null);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const columns = adsColumns({ handleView, handleEdit, isDelete: true });

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <DataTable
          mode="server"
          data={adsList}
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

      <DataTableActionDialogs handleDelete={onDeleteAds} isLoading={isAdsDeleteLoading} />
    </>
  );
}
