import App from '@/App';
import ForgotPassword from '@/pages/auth/forgot-password';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';
import { VerifyEmail } from '@/pages/auth/verify-email';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { studentRoutes } from './student.route';
import { IRoutes, IRoutesWithChildren } from './types';

const FallbackComponent = () => <div>Page Not Available</div>;
type Role = 'admin' | 'student';

export default function AppRoutes() {
  const role: Role = 'student';

  const hasChildren = (route: IRoutes): route is IRoutesWithChildren => {
    return (route as IRoutesWithChildren).routeChildren !== undefined;
  };

  const renderRoutes = (routes: IRoutes[]) => {
    return routes.map((route) => {
      if (hasChildren(route)) {
        return <Fragment key={route.url}>{renderRoutes(route.routeChildren)}</Fragment>;
      }

      const Component = route.content || FallbackComponent;
      return (
        <Route
          key={route.url}
          path={route.url}
          element={
            <App>
              <Component />
            </App>
          }
        />
      );
    });
  };

  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/verify-email" element={<VerifyEmail />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />

      {role === 'student' ? renderRoutes(studentRoutes) : null}
    </Routes>
  );
}
