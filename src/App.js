// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'jotai';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/common/ProtectedRoute';
import NotificationList from './components/common/NotificationList';
import CustomerLayout from './components/customer/CustomerLayout';
import BillingPage from './pages/BillingPage';
import UsageHistoryPage from './pages/UsageHistoryPage';
import ServiceRequestsPage from './pages/ServiceRequestsPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Router>
          <NotificationList />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <CustomerLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="billing" element={<BillingPage />} />
              <Route path="usage-history" element={<UsageHistoryPage />} />
              <Route path="service-requests" element={<ServiceRequestsPage />} />
              <Route path="support" element={<SupportPage />} />
              <Route path="profile" element={<ProfileSettingsPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;