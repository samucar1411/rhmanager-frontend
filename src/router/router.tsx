// AuthRouter.js
import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { DashboardPage } from '@/pages/home';



export const router = createBrowserRouter([
    {
        path: '/' ,
        children: [
            {
                path: 'dashboard',
                element: <DashboardPage />
            }
        ]
        
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'dashboard',
                element: <DashboardPage />
            }
        ]
    }
])