import React from 'react';
import './css/index.css';
import './css/App.css';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
