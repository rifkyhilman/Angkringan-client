import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Pagination
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import OrderPage from './pages/orderPage';
import UsersPage from './pages/usersPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>    
    </Router>
  )
}

export default App
