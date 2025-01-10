import { Main } from '@/components/layout/main';
import AdsDetailsView from '@/features/ads/components/view-ads';

const AdsView = () => {
  return (
    <Main>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Ads Details</h2>
        <AdsDetailsView />
      </div>
    </Main>
  );
};

export default AdsView;
