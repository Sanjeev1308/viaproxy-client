import Dashboard from '@/pages/customers/dashboard/index.tsx';
import Chats from '@/pages/customers/messaging/index.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Login } from './pages/auth/login/index.tsx';
import { Register } from './pages/auth/register/index.tsx';
import { VerifyEmail } from './pages/auth/verify-email/index.tsx';
import { Shops } from './pages/customers/shops/index.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/verify-email" element={<VerifyEmail />} />

          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="shops" element={<Shops />} />
            <Route path="messaging" element={<Chats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
