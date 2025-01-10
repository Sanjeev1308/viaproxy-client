import { Main } from '@/components/layout/main';
import ServiceDetailsView from '@/features/services/components/view-service';

const ViewService = () => {
  return (
    <Main>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Service Details</h2>
        <ServiceDetailsView />
      </div>
    </Main>
  );
};

export default ViewService;
