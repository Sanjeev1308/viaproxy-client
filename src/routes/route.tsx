import App from '@/App';
import ComingSoon from '@/components/coming-soon';
import { ChatApp } from '@/features/chats/components/Chats';
import MineExchangeOfferDetailsView from '@/features/exchanges/components/view-my-exchange';
import ViewProposalDetails from '@/features/proposals/components/view-proposal';
import { Ads } from '@/pages/admin/ads';
import AddAds from '@/pages/admin/ads/add';
import EditAds from '@/pages/admin/ads/edit';
import AdsView from '@/pages/admin/ads/view';
import { Categories } from '@/pages/admin/category';
import AddCategory from '@/pages/admin/category/add';
import EditCategory from '@/pages/admin/category/edit';
import CategoryView from '@/pages/admin/category/view';
import { Products } from '@/pages/admin/product';
import AddProduct from '@/pages/admin/product/add';
import EditProduct from '@/pages/admin/product/edit';
import ProductView from '@/pages/admin/product/view';
import { Services } from '@/pages/admin/service';
import AddService from '@/pages/admin/service/add';
import EditService from '@/pages/admin/service/edit';
import ViewService from '@/pages/admin/service/view';
import { Transactions } from '@/pages/admin/transaction';
import AddTransaction from '@/pages/admin/transaction/add';
import EditTransactions from '@/pages/admin/transaction/edit';
import TransactionView from '@/pages/admin/transaction/view';
import { Users } from '@/pages/admin/users';
import EditUser from '@/pages/admin/users/edit';
import UsersDetail from '@/pages/admin/users/view';
import ForgotPassword from '@/pages/auth/forgot-password';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';
import { VerifyEmail } from '@/pages/auth/verify-email';
import LandingPage from '@/pages/landing-page';
import Dashboard from '@/pages/students/dashboard';
import { Exchanges } from '@/pages/students/exchanges/find-exchanges';
import HowItWorks from '@/pages/students/exchanges/how-it-works';
import { MyExchanges } from '@/pages/students/exchanges/my-exchanges';
import SubmitOffer from '@/pages/students/exchanges/submit-an-offer';
import EditExchangeOffer from '@/pages/students/exchanges/submit-an-offer/edit-exchange';
import NewExchangeOffer from '@/pages/students/exchanges/submit-an-offer/new-exchange';
import ExchangeDetails from '@/pages/students/exchanges/submit-an-offer/view-exchange';
import Chats from '@/pages/students/messaging';
import { ProposalRecieved } from '@/pages/students/proposal/recieved';
import { ProposalSent } from '@/pages/students/proposal/sent';
import { Route, Routes } from 'react-router-dom';

// const FallbackComponent = () => <div>Page Not Available</div>;

export default function AppRoutes() {
  // const { user } = useTypedSelector((state) => state.auth);

  // const hasChildren = (route: IRoutes): route is IRoutesWithChildren => {
  //   return (route as IRoutesWithChildren).routeChildren !== undefined;
  // };

  // const renderRoutes = (routes: IRoutes[]) => {
  //   return routes.map((route) => {
  //     if (hasChildren(route)) {
  //       return <Fragment key={route.url}>{renderRoutes(route.routeChildren)}</Fragment>;
  //     }

  //     const Component = route.content || FallbackComponent;
  //     return (
  //       <Route
  //         key={route.url}
  //         path={route.url}
  //         element={
  //           <App>
  //             <Component />
  //           </App>
  //         }
  //       />
  //     );
  //   });
  // };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/verify-email" element={<VerifyEmail />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />

      <Route path="/student" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blogs" element={<ComingSoon />} />
        <Route path="chats" element={<ChatApp />} />

        <Route path="exchanges">
          <Route index element={<Exchanges />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="legal-info" element={<ComingSoon />} />

          <Route path="me">
            <Route index element={<MyExchanges />} />
            <Route path="view/:id" element={<MineExchangeOfferDetailsView />} />
            <Route path=":id" element={<EditExchangeOffer />} />
          </Route>

          <Route path="submit-an-offer" element={<SubmitOffer />} />
          <Route path="new" element={<NewExchangeOffer />} />
          <Route path="view/:id" element={<ExchangeDetails />} />
        </Route>

        {/* <Route path="donations">
          <Route index element={<Donations />} />
          <Route path="me" element={<ComingSoon />} />
        </Route>

        <Route path="sales">
          <Route index element={<Sales />} />
          <Route path="me" element={<ComingSoon />} />
        </Route> */}

        <Route path="proposals">
          <Route path="sent" element={<ProposalSent />} />
          <Route path="recieved" element={<ProposalRecieved />} />
          <Route path="view/:id" element={<ViewProposalDetails />} />
        </Route>
      </Route>

      <Route path="/admin" element={<App />}>
        <Route path="dashboard" element={<ComingSoon />} />
        <Route path="chats" element={<ChatApp />} />

        <Route path="users">
          <Route index element={<Users />} />
          <Route path="view/:id" element={<UsersDetail />} />
          <Route path=":id" element={<EditUser />} />
        </Route>

        <Route path="services">
          <Route index element={<Services />} />
          <Route path="new" element={<AddService />} />
          <Route path="view/:id" element={<ViewService />} />
          <Route path=":id" element={<EditService />} />
        </Route>

        <Route path="products">
          <Route index element={<Products />} />
          <Route path="new" element={<AddProduct />} />
          <Route path="view/:id" element={<ProductView />} />
          <Route path=":id" element={<EditProduct />} />
        </Route>

        <Route path="categories">
          <Route index element={<Categories />} />
          <Route path="new" element={<AddCategory />} />
          <Route path="view/:id" element={<CategoryView />} />
          <Route path=":id" element={<EditCategory />} />
        </Route>

        <Route path="transactions">
          <Route index element={<Transactions />} />
          <Route path="new" element={<AddTransaction />} />
          <Route path="view/:id" element={<TransactionView />} />
          <Route path=":id" element={<EditTransactions />} />
        </Route>

        <Route path="ads">
          <Route index element={<Ads />} />
          <Route path="new" element={<AddAds />} />
          <Route path="view/:id" element={<AdsView />} />
          <Route path=":id" element={<EditAds />} />
        </Route>
      </Route>

      <Route path="/merchant" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="chats" element={<Chats />} />
      </Route>

      <Route path="/eco-citizen" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="chats" element={<Chats />} />
      </Route>
    </Routes>
  );
}
