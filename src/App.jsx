import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import Pagination
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import OrderPage from './pages/orderPage';
import UsersPage from './pages/usersPage';
import LayoutPage from './pages/LayoutPage';

const App = () => {
  const router = createBrowserRouter([
    {
      element:<LayoutPage/>,
      children:[
        {
          path:'dashboard',
          element:<DashboardPage/>
        },   {
          path:'order',
          element:<OrderPage/>
        },   {
          path:'users',
          element:<UsersPage/>
        },
      ]
    },       
    {
      path:'/',
      element:<AuthPage/>
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
