import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
    <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
