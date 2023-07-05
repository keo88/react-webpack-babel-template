import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import VadPage from './pages/dashboard-pages/VadPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/auth' />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <VadPage />,
      },
    ],
  },
]);

export default appRouter;
