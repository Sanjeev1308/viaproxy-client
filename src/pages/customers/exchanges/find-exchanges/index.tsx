/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Main } from '@/components/layout/main';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/context/AuthProvider';
import { useAllOffers, useDeleteOfferById } from '@/hooks/api/offer.rq';
import { useActions } from '@/hooks/useActions';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeListSchema } from './data/schema';
import { exchangeColumns } from './exchanges-columns';

export function Exchanges() {
  const [exchangeList, setExchangeList] = useState<any>([]);
  const { setCurrentRow } = useActions();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data, isLoading, error } = useAllOffers();
  const { mutateAsync, isLoading: isOfferDeleteLoading } = useDeleteOfferById();

  useEffect(() => {
    if (data && data.data) {
      setExchangeList(exchangeListSchema.parse(data.data));
    }
  }, [data]);

  const onDeleteExchange = async (id: string) => {
    await mutateAsync(id);
    const filteredUserList = exchangeList.filter((exchange: any) => exchange._id !== id);
    setExchangeList(filteredUserList);
    setCurrentRow(null);
  };

  const handleEdit = (id: string) => {
    console.log('llll');
    navigate(`/${user?.role}/exchange/${id}`);
  };

  const columns = exchangeColumns({ handleEdit });

  return (
    <>
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Exchanges List</h2>
            <p className="text-muted-foreground">Find all the trades you have made</p>
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          {isLoading ? <Skeleton /> : <DataTable data={exchangeList} columns={columns} />}
        </div>
      </Main>

      <DataTableActionDialogs handleDelete={onDeleteExchange} isLoading={isOfferDeleteLoading} />
    </>
  );
}
