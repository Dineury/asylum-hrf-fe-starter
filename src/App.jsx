import './App.css';
import { LandingPage } from './components/pages/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GraphsPage } from './components/pages/DataVisualizations/GraphsPage.jsx';
import { NotFoundPage } from './components/pages/NotFound/index.jsx';
import * as React from 'react';
import Profile from './components/pages/Profile/index.jsx';
import { pageWrapper } from './components/layout/PageWrapper.jsx';
import { Auth0ProviderWithConfig } from './auth/auth0-provider-with-config';
import { ProtectedRoute } from './components/pages/ProtectedRoute/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Auth0ProviderWithConfig>
        {pageWrapper(<LandingPage />)}
      </Auth0ProviderWithConfig>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/graphs',
    element: (
      <Auth0ProviderWithConfig>
        {pageWrapper(<GraphsPage />)}
      </Auth0ProviderWithConfig>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile',
    element: (
      
      <Auth0ProviderWithConfig>
        {pageWrapper(<ProtectedRoute>
          <Profile />
        </ProtectedRoute>)}
      </Auth0ProviderWithConfig>
    ),
    errorElement: <NotFoundPage />,
  },


]);


export const App = () => {
  return (
    
    <div className='font-serif w-[100vw] h-[100vh] m-0 flex-c justify-between align-centre text-center min-h-screen secondary-c'>
      <RouterProvider router={router} />
    </div>
  );
};
