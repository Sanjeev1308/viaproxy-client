import { Main } from '@/components/layout/main';
import { useOfferById } from '@/hooks/api/offer.rq';
import { useParams } from 'react-router-dom';

const ExchangeDetails = () => {
  const { id: exchangeId } = useParams();
  const { data, isLoading } = useOfferById(exchangeId || '');

  if (isLoading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  const exchangeData = data.offer;

  return (
    <Main>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
          {/* Left: Offer Image */}
          <div className="w-full md:w-1/2">
            <img
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${exchangeData?.offerImage}`}
              alt="Offer"
              className="rounded-lg w-full object-cover shadow-lg h-full"
            />
          </div>

          {/* Right: Offer Details */}
          <div className="flex-grow space-y-4">
            {/* Title and Description */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{exchangeData?.offerTitle}</h1>
              <p className="text-md text-gray-700 leading-relaxed">{exchangeData?.description}</p>
            </div>

            {/* Price */}
            <div className="text-xl font-semibold text-green-600">{exchangeData?.estimatedPrice} €</div>

            {/* List of Details */}
            <div className="space-y-4">
              {[
                { label: 'What do you propose?', value: exchangeData?.proposedItem },
                { label: 'Products or Services Concerned', value: exchangeData?.concernedProductService },
                { label: 'Start Date', value: exchangeData?.offerStartDate },
                { label: 'End Date', value: exchangeData?.offerEndDate },
                { label: 'Desired Form of Exchange', value: exchangeData?.exchangeType },
                { label: 'Form of Payment', value: exchangeData?.paymentType },
                { label: 'Type of Payment or Exchange', value: exchangeData?.paymentMethod },
                { label: 'Geographic Area', value: exchangeData?.geographicArea },
                { label: 'City', value: exchangeData?.city },
                { label: 'Campus', value: exchangeData?.campus },
                { label: 'Delivery Terms', value: exchangeData?.deliveryTermsDescription },
              ].map((item, index) => (
                <div key={index} className="flex justify-between border-b pb-2 border-gray-200">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ExchangeDetails;
