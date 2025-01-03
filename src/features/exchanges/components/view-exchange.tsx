/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageDialog } from '@/features/messaging/components/message-dialog';
import { useCreateConversation, useSendMessage } from '@/hooks/api/message.rq';
import { useOfferById } from '@/hooks/api/offer.rq';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Calendar, Clock } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ExchangeOfferDetailsView = () => {
  const { id: exchangeId } = useParams();
  const { data, isLoading } = useOfferById(exchangeId || '');
  const [isMessageDialogOpen, setMessageDialogOpen] = useState(false);
  const { user } = useTypedSelector((state) => state.auth);

  const { mutateAsync, isLoading: isCreateConversationLoading } = useCreateConversation();
  const { mutateAsync: mutateAsyncMessage, isLoading: isCreateMessageLoading } = useSendMessage();

  if (isLoading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  const handleMessageSend = async (userId: string, message: string) => {
    try {
      const result = await mutateAsync({ participants: [userId, user?.id], title: data?.offer.offerTitle } as any);
      await mutateAsyncMessage({
        conversationId: result.data._id,
        sender: user?.id,
        content: message,
      } as any);
    } catch (error) {
      console.log('kkk', error);
    }
  };
  const exchangeData = data.offer;

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column - Images and Attachments */}
          <div className="space-y-6">
            {/* Main Image */}
            <Card>
              <CardContent className="p-4">
                <div className="aspect-square w-full bg-gray-100 rounded-lg flex items-center justify-center ">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${exchangeData?.offerImage}`}
                    alt="Product"
                    className="object-cover rounded-lg h-full w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Attachments */}
            {exchangeData?.specialConditionsFile && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Attachments</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <a
                      href={`${import.meta.env.VITE_IMAGE_BASE_URL}/${exchangeData?.specialConditionsFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate text-blue-600 hover:underline"
                    >
                      {exchangeData?.specialConditionsFile || 'View File'}
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Offer Details */}
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{exchangeData?.offerTitle}</h1>
                <Badge variant="default" className="text-lg px-4 py-1">
                  ${exchangeData?.estimatedPrice}
                </Badge>
              </div>

              <div className="">
                <span className="text-gray-700 leading-relaxed">{exchangeData?.concernedProductService}</span>
              </div>

              <div className="flex gap-2">
                <Badge variant="outline" className="capitalize bg-orange-100 text-orange-800">
                  {exchangeData?.exchangeType}
                </Badge>
                <Badge className="capitalize bg-green-100 text-green-800">{exchangeData?.proposedItem}</Badge>
                {/* <Badge className="bg-green-100 text-green-800">{exchangeData?.status}</Badge> */}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span>Start: {new Date(exchangeData?.offerStartDate).toDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span>End: {new Date(exchangeData?.offerEndDate).toDateString()}</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-md font-semibold mb-1">Description</h2>
                <p className="text-gray-700 leading-relaxed">{exchangeData?.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Payment Method:</span>
                  <span>{exchangeData?.paymentMethod}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">Payment Type:</span>
                  <span>{exchangeData?.paymentType}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">Geographic Area:</span>
                  <span>{exchangeData?.geographicArea}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">City:</span>
                  <span>{exchangeData?.city}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">Campus:</span>
                  <span>{exchangeData?.campus}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-md font-semibold mb-1">
                  Description of the terms of delivery or payment of your offer
                </h2>
                <p className="text-gray-700 leading-relaxed">{exchangeData?.deliveryTermsDescription}</p>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="secondary" className="w-full" onClick={() => setMessageDialogOpen(true)}>
                Connect
              </Button>
              <Button className="w-full">Make Proposal</Button>
            </div>
          </div>
        </div>
      </div>

      <MessageDialog
        open={isMessageDialogOpen}
        onOpenChange={() => setMessageDialogOpen(false)}
        userId={exchangeData.createdBy}
        handleConfirm={handleMessageSend}
        isLoading={isCreateConversationLoading}
      />
    </>
  );
};

export default ExchangeOfferDetailsView;
