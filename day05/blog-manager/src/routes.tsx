import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AllArticles from './pages/AllArticles';
import New from './pages/New';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all',
        element: <AllArticles />,
      },
      {
        path: '/new',
        element: <New />,
      }
    ],
  },
]);