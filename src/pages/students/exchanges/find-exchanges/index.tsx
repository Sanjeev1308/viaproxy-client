/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/data-table/data-table';
import { DataTableActionDialogs } from '@/components/data-table/data-table-action-dialog';
import { Main } from '@/components/layout/main';
import { Skeleton } from '@/components/ui/skeleton';
import { useAllOffers, useDeleteOfferById } from '@/hooks/api/offer.rq';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exchangeListSchema } from './data/schema';
import { exchangeColumns } from './exchanges-columns';

export function Exchanges() {
  const [exchangeList, setExchangeList] = useState<any>([]);
  const { setCurrentRow } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data, isLoading, error } = useAllOffers();
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
    navigate(`/${user?.role}/exchanges/${id}`);
  };

  const handleView = (id: string) => {
    navigate(`/${user?.role}/exchanges/view/${id}`);
  };

  const columns = exchangeColumns({ handleEdit, handleView });

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
