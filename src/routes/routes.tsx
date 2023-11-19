import {createBrowserRouter} from 'react-router-dom'

import SignUp from '@/components/auth/SignUp';
import Login from '@/components/auth/Login';
import Home from '@/pages/home/Home';
import PageNotFound from '@/pages/Error/PageNotFound';
import { Cart } from '@/components/cart/Cart';
// categories

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);
