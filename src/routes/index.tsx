import {createBrowserRouter} from 'react-router-dom'
import PageNotFound  from '../pages/Error/PageNotFound';
import Home from '../pages/home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);
