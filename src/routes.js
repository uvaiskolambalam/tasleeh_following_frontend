import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
// import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import CompaniesPage from './pages/Companies'
import InvoicePage from './pages/Invoice'
import DashboardAppPage from './pages/DashboardAppPage';
import Tables from './components/Table/TableGrid'
// import Users from './pages/Users';
import UserList from './pages/UserLIst';
import Familys from './pages/Familys';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'familys', element: <Familys/> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'companies', element: <CompaniesPage/> },
        { path: 'companies/users/:companyId', element: <UserList/> },
        { path: 'invoice', element:  <InvoicePage/> },
        { path: 'blog', element: <BlogPage /> },
        // { path: 'companies/', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
