import App from '@/App';
import ComingSoon from '@/components/coming-soon';
import ForgotPassword from '@/pages/auth/forgot-password';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';
import { VerifyEmail } from '@/pages/auth/verify-email';
import LandingPage from '@/pages/landing-page';
import Dashboard from '@/pages/students/dashboard';
import { Exchanges } from '@/pages/students/exchanges/find-exchanges';
import HowItWorks from '@/pages/students/exchanges/how-it-works';
import SubmitOffer from '@/pages/students/exchanges/submit-an-offer';
import EditExchangeOffer from '@/pages/students/exchanges/submit-an-offer/edit-exchange';
import NewExchangeOffer from '@/pages/students/exchanges/submit-an-offer/new-exchange';
import ExchangeDetails from '@/pages/students/exchanges/submit-an-offer/view-exchange';
import Chats from '@/pages/students/messaging';
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
        <Route path="chats" element={<Chats />} />

        <Route path="exchanges">
          <Route index element={<Exchanges />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="legal-info" element={<ComingSoon />} />
          <Route path="me" element={<ComingSoon />} />
          <Route path="submit-an-offer" element={<SubmitOffer />} />
          <Route path="new" element={<NewExchangeOffer />} />
          <Route path="view/:id" element={<ExchangeDetails />} />
          <Route path=":id" element={<EditExchangeOffer />} />
        </Route>

        <Route path="donations">
          <Route index element={<ComingSoon />} />
          <Route path="me" element={<ComingSoon />} />
        </Route>

        <Route path="sales">
          <Route index element={<ComingSoon />} />
          <Route path="me" element={<ComingSoon />} />
        </Route>
      </Route>

      <Route path="/admin" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<ComingSoon />} />
        <Route path="promotions" element={<ComingSoon />} />
        <Route path="ads" element={<ComingSoon />} />
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
