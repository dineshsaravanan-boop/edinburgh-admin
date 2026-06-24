import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Layout Shell & Login View
import AdminLayout from './components/AdminLayout';
import Login from './screens/Login';

// Import all 24 screen components
import ExecutiveDashboard from './screens/ExecutiveDashboard';
import UsersList from './screens/UsersList';
import UserDetails from './screens/UserDetails';
import SellersList from './screens/SellersList';
import SellerDetails from './screens/SellerDetails';
import CreatorsList from './screens/CreatorsList';
import CreatorDetails from './screens/CreatorDetails';
import ProductModeration from './screens/ProductModeration';
import ProductDetails from './screens/ProductDetails';
import OrderMonitoring from './screens/OrderMonitoring';
import OrderDetails from './screens/OrderDetails';
import ModerationDashboard from './screens/ModerationDashboard';
import ReportedContent from './screens/ReportedContent';
import ContentReviewDetails from './screens/ContentReviewDetails';
import WalletMonitoring from './screens/WalletMonitoring';
import TransactionMonitoring from './screens/TransactionMonitoring';
import PlatformAnalytics from './screens/PlatformAnalytics';
import MarketplaceAnalytics from './screens/MarketplaceAnalytics';
import CreatorAnalytics from './screens/CreatorAnalytics';
import RolesPermissions from './screens/RolesPermissions';
import AdminUsers from './screens/AdminUsers';
import Integrations from './screens/Integrations';
import AuditLogs from './screens/AuditLogs';
import SystemSettings from './screens/SystemSettings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard overview routes (Default fallback to login, but once signed in redirects to dashboard) */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Admin Portal Views - Wrapped in AdminLayout */}
        <Route path="/dashboard" element={<AdminLayout><ExecutiveDashboard /></AdminLayout>} />

        {/* User Management */}
        <Route path="/users" element={<AdminLayout><UsersList /></AdminLayout>} />
        <Route path="/users/:id" element={<AdminLayout><UserDetails /></AdminLayout>} />

        {/* Seller Management */}
        <Route path="/sellers" element={<AdminLayout><SellersList /></AdminLayout>} />
        <Route path="/sellers/:id" element={<AdminLayout><SellerDetails /></AdminLayout>} />

        {/* Creator Management */}
        <Route path="/creators" element={<AdminLayout><CreatorsList /></AdminLayout>} />
        <Route path="/creators/:id" element={<AdminLayout><CreatorDetails /></AdminLayout>} />

        {/* Marketplace Operations */}
        <Route path="/marketplace/moderation" element={<AdminLayout><ProductModeration /></AdminLayout>} />
        <Route path="/marketplace/products/:id" element={<AdminLayout><ProductDetails /></AdminLayout>} />

        {/* Orders */}
        <Route path="/orders" element={<AdminLayout><OrderMonitoring /></AdminLayout>} />
        <Route path="/orders/:id" element={<AdminLayout><OrderDetails /></AdminLayout>} />

        {/* Content Moderation */}
        <Route path="/moderation" element={<AdminLayout><ModerationDashboard /></AdminLayout>} />
        <Route path="/moderation/reports" element={<AdminLayout><ReportedContent /></AdminLayout>} />
        <Route path="/moderation/reports/:id" element={<AdminLayout><ContentReviewDetails /></AdminLayout>} />

        {/* Finance */}
        <Route path="/finance/wallets" element={<AdminLayout><WalletMonitoring /></AdminLayout>} />
        <Route path="/finance/transactions" element={<AdminLayout><TransactionMonitoring /></AdminLayout>} />

        {/* Analytics */}
        <Route path="/analytics/platform" element={<AdminLayout><PlatformAnalytics /></AdminLayout>} />
        <Route path="/analytics/marketplace" element={<AdminLayout><MarketplaceAnalytics /></AdminLayout>} />
        <Route path="/analytics/creators" element={<AdminLayout><CreatorAnalytics /></AdminLayout>} />

        {/* Access Settings & Controls */}
        <Route path="/settings/roles" element={<AdminLayout><RolesPermissions /></AdminLayout>} />
        <Route path="/settings/admins" element={<AdminLayout><AdminUsers /></AdminLayout>} />
        <Route path="/settings/integrations" element={<AdminLayout><Integrations /></AdminLayout>} />
        <Route path="/settings/audit-logs" element={<AdminLayout><AuditLogs /></AdminLayout>} />
        <Route path="/settings/system" element={<AdminLayout><SystemSettings /></AdminLayout>} />

        {/* Catch-all redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
