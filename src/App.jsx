import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import Pagination
import NotFoundPage from './pages/NotFoundPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import TransactionPage from './pages/TransactionPage';
import HistoryPage from './pages/HistoryPage';
import LayoutPage from './pages/LayoutPage';


const App = () => {
  const router = createBrowserRouter([
    {
      element:
        <LayoutPage/>,
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
        <AuthPage/>
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
