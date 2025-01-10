/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllCategory, useDeleteCategoryById } from '@/hooks/api/category.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoriesColumns } from '../data/categories-columns';
import { categoriesListSchema, filterFields } from '../data/schema';

export function CategoriesTable() {
  const [categoryList, setCategoryList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);
  const { setCurrentRow } = useActions();

  const navigate = useNavigate();
  const { toast } = useToast();

  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllCategory(queryParams);
  const { mutateAsync, isLoading: isCategoryDeleteLoading } = useDeleteCategoryById();

  useEffect(() => {
    if (data?.data) {
      setCategoryList(categoriesListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/categories/view/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/${user?.role}/categories/${id}`);
  };

  const onDeleteCategory = async (id: string) => {
    try {
      await mutateAsync(id);
      const filteredUserList = categoryList.filter((user: any) => user._id !== id);
      setCategoryList(filteredUserList);
      setCurrentRow(null);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const columns = categoriesColumns({ handleView, handleEdit, isDelete: true });

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <DataTable
          mode="server"
          data={categoryList}
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

      <DataTableActionDialogs handleDelete={onDeleteCategory} isLoading={isCategoryDeleteLoading} />
    </>
  );
}
