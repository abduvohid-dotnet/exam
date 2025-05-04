import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Components/Home/Home';
import Beef from '../Components/Beef/Beef';
import Store from '../Components/Store/Store';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/menu/:id', element: <Beef /> },
            { path: 'store', element: <Store /> }
        ]
    }
]);

export default router;