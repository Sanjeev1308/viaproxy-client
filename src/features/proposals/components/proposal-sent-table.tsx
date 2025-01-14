/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllMineProposal } from '@/hooks/api/proposal.rq';
import { useDataTable } from '@/hooks/use-data-table';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { proposalColumns } from '../data/proposal-columns';
import { filterFields, serviceListSchema } from '../data/schema';

export function ProposalSentTable() {
  const [proposalList, setProposalList] = useState<any>([]);
  const { user } = useTypedSelector((state) => state.auth);

  const navigate = useNavigate();

  const { pagination, filter, sorting, queryParams, handlePaginationChange, handleFiltersChange, handleSortingChange } =
    useDataTable({
      initialPageSize: 10,
    });

  const { data, isLoading } = useAllMineProposal(queryParams);

  useEffect(() => {
    if (data?.data) {
      setProposalList(serviceListSchema.parse(data.data));
    }
  }, [data]);

  const handleView = (id: string) => {
    navigate(`/${user?.role}/proposals/view/${id}`);
  };

  const columns = proposalColumns({ handleView, isDelete: false });

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <DataTable
          mode="server"
          data={proposalList}
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
