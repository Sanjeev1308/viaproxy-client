/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllService, useDeleteServiceById } from '@/hooks/api/service.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterFields, serviceListSchema } from '../data/schema';
import { serviceColumns } from '../data/services-columns';

export function ServiceTable() {
  const [serviceList, setServiceList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);
  const { setCurrentRow } = useActions();

  const navigate = useNavigate();
  const { toast } = useToast();

  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllService(queryParams);
  const { mutateAsync, isLoading: isServiceDeleteLoading } = useDeleteServiceById();

  useEffect(() => {
    if (data?.data) {
      setServiceList(serviceListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/services/view/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/${user?.role}/services/${id}`);
  };

  const onDeleteService = async (id: string) => {
    try {
      await mutateAsync(id);
      const filteredUserList = serviceList.filter((user: any) => user._id !== id);
      setServiceList(filteredUserList);
      setCurrentRow(null);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const columns = serviceColumns({ handleView, handleEdit, isDelete: true });

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <DataTable
          mode="server"
          data={serviceList}
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

      <DataTableActionDialogs handleDelete={onDeleteService} isLoading={isServiceDeleteLoading} />
    </>
  );
}
