import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import Pagination
import NotFoundPage from './pages/NotFoundPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import TransactionPage from './pages/TransactionPage';
import UsersPage from './pages/usersPage';
import LayoutPage from './pages/LayoutPage';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectRoute from './components/RedirectRoute';

const App = () => {
  const router = createBrowserRouter([
    {
      element:
      <ProtectedRoute>
        <LayoutPage/>
      </ProtectedRoute>,
      children:[
        {
          path:'/dashboard',
          element:<DashboardPage/>
        },   {
          path:'/transaction',
          element:<TransactionPage/>
        },   {
          path:'/users',
          element:<UsersPage/>
        },
      ]
    },       
    {
      path:'/',
      element:
      <RedirectRoute>
        <AuthPage/>
      </RedirectRoute>
    },
    {
      path:"*",
      element: <NotFoundPage/>
    }
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
