import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import Pagination
import NotFoundPage from './pages/NotFoundPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import TransactionPage from './pages/TransactionPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import LayoutPage from './pages/LayoutPage.jsx';

import ProtectedRoute from './components/ProtectedRoute.jsx';
import RedirectRoute from './components/RedirectRoute.jsx';

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
          path:'/history-transaction',
          element:<HistoryPage/>
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
