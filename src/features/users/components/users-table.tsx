/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllUsers, useDeleteUserById } from '@/hooks/api/user.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterFields, userListSchema } from '../data/schema';
import { usersColumns } from '../data/users-columns';

export function UsersTable() {
  const [userList, setUserList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);
  const { setCurrentRow } = useActions();

  const navigate = useNavigate();
  const { toast } = useToast();

  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllUsers(queryParams);
  const { mutateAsync, isLoading: isUserDeleteLoading } = useDeleteUserById();

  useEffect(() => {
    if (data?.data) {
      setUserList(userListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/users/view/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/${user?.role}/users/${id}`);
  };

  const onDeleteUser = async (id: string) => {
    try {
      await mutateAsync(id);
      const filteredUserList = userList.filter((user: any) => user._id !== id);
      setUserList(filteredUserList);
      setCurrentRow(null);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const columns = usersColumns({ handleView, handleEdit, isDelete: true });

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <DataTable
          mode="server"
          data={userList}
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

      <DataTableActionDialogs handleDelete={onDeleteUser} isLoading={isUserDeleteLoading} />
    </>
  );
}
