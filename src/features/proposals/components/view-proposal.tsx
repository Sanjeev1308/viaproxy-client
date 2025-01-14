/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useProposalById, useUpdateProposalById } from '@/hooks/api/proposal.rq';
import { useToast } from '@/hooks/use-toast';
import { useParams } from 'react-router-dom';

const ViewProposalDetails = () => {
  const { id: proposalId } = useParams();
  const { data, isLoading } = useProposalById(proposalId || '');

  const { mutateAsync, isLoading: isUpdateLoading } = useUpdateProposalById();

  const { toast } = useToast();

  if (isLoading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  const handleReject = async () => {
    try {
      await mutateAsync({ id: proposalId || '', data: { status: 'rejected' } });
      toast({
        variant: 'success',
        title: 'The following item has been rejected',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const handleAccepted = async () => {
    try {
      await mutateAsync({ id: proposalId || '', data: { status: 'accepted' } });
      toast({
        variant: 'success',
        title: 'The following item has been accepted',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const proposalData = data.proposal;

  return (
    <div className="max-w-3xl">
      <Card className="shadow-sm p-2">
        {/* <CardHeader className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <CardTitle className="text-xl font-semibold">{proposalData?.name}</CardTitle>
            </div>
            <div className="flex space-x-2">
              <Badge variant={proposalData?.isActive ? 'default' : 'secondary'}>
                {proposalData?.isActive ? 'Active' : 'Inactive'}
              </Badge>
            </div>
          </div>
        </CardHeader> */}
        <CardContent>
          <div className="space-y-1">
            <span className="text-md font-bold">Message</span>
            {proposalData?.message ? (
              <p className="text-gray-600 leading-relaxed">{proposalData?.message}</p>
            ) : (
              <p className="text-gray-400 italic">No description available</p>
            )}
          </div>

          <div className="flex gap-4 mt-2">
            <Button size="sm" onClick={handleAccepted}>
              Accept
            </Button>
            <Button variant="destructive" size="sm" onClick={handleReject}>
              Reject
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewProposalDetails;
