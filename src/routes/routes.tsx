import {createBrowserRouter} from 'react-router-dom'

import SignUp from '@/components/auth/SignUp';
import Login from '@/components/auth/Login';
import Home from '@/pages/home/Home';
import PageNotFound from '@/pages/Error/PageNotFound';
import { Cart } from '@/pages/cart/Cart';
import Fashion from '@/pages/fashion/Fashion';
import Groceries from '@/pages/groceries/Groceries';
import HealthBeauty from '@/pages/health&Beauty/HealthBeauty';
import HomeLifeStyle from '@/pages/homeLifeStyle/HomeLifeStyle';
import MobilesTablets from '@/pages/mobilesTablets/MobilesTablets';
import Automobiles from '@/pages/automobiles/Automobiles';
import ProductDetails from '@/pages/productDetails/ProductDetails';
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
        path: "/fashion",
        element: <Fashion />,
    },
    {
        path: "/groceries",
        element: <Groceries />,
    },
    {
        path: "/health-beauty",
        element: <HealthBeauty />,
    },
    {
        path: "/home-life-style",
        element: <HomeLifeStyle />,
    },
    {
        path: "/mobiles-tablets",
        element: <MobilesTablets />,
    },
    {
        path: "/automobiles",
        element: <Automobiles />,
    },
    {
        path: "/product-details/:id",
        element: <ProductDetails />,
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
