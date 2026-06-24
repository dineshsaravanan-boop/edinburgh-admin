import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  // Check if a navigation item is active
  const isActive = (route: string) => {
    if (route === '/dashboard') {
      return path === '/dashboard' || path === '/';
    }
    return path.startsWith(route);
  };

  // Generate Breadcrumbs from current pathname
  const getBreadcrumbs = () => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return [{ label: 'Dashboard', link: '/dashboard' }];
    
    return segments.map((segment, index) => {
      const link = '/' + segments.slice(0, index + 1).join('/');
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Better formatting for specific routes
      if (segment === 'moderation') label = 'Moderation';
      if (segment === 'wallets') label = 'Wallets';
      if (segment === 'transactions') label = 'Transactions';
      if (segment === 'audit-logs') label = 'Audit Logs';
      if (segment === 'system') label = 'System Settings';
      if (segment === 'admins') label = 'Admin Users';
      if (segment === 'roles') label = 'Roles & Permissions';
      
      return { label, link };
    });
  };

  const breadcrumbs = getBreadcrumbs();

  const navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Users', route: '/users', icon: 'group' },
    { label: 'Creators', route: '/creators', icon: 'person_celebrate' },
    { label: 'Sellers', route: '/sellers', icon: 'store' },
    { label: 'Marketplace', route: '/marketplace', icon: 'storefront' },
    { label: 'Orders', route: '/orders', icon: 'receipt_long' },
    { label: 'Moderation', route: '/moderation', icon: 'gavel' },
    { label: 'Wallet', route: '/finance', icon: 'account_balance_wallet' },
    { label: 'Analytics', route: '/analytics', icon: 'analytics' },
    { label: 'Settings', route: '/settings', icon: 'settings' },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex overflow-hidden">
      
      {/* Sidebar Layout */}
      <aside 
        className={`fixed left-0 top-0 h-full bg-surface-container-low border-r border-outline-variant flex flex-col z-50 transition-all duration-300 ease-in-out ${
          collapsed ? 'w-[64px]' : 'w-[240px]'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-14 px-4 flex items-center gap-3 border-b border-outline-variant/30 overflow-hidden shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-on-primary shrink-0">
            <span className="material-symbols-outlined text-[20px]">shield_person</span>
          </div>
          {!collapsed && (
            <div className="transition-opacity duration-200">
              <h1 
                className="font-headline-sm text-headline-sm font-bold text-on-surface leading-none cursor-pointer hover:text-primary transition-colors"
                onClick={() => navigate('/dashboard')}
              >
                SuperApp Admin
              </h1>
              <p className="text-[10px] font-label-sm text-on-surface-variant mt-1 uppercase tracking-wider">Ops Center</p>
            </div>
          )}
        </div>

        {/* Sidebar Nav Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const active = isActive(item.route);
            return (
              <a
                key={item.label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Map base routes to target sub-pages
                  if (item.route === '/marketplace') {
                    navigate('/marketplace/moderation');
                  } else if (item.route === '/finance') {
                    navigate('/finance/wallets');
                  } else if (item.route === '/analytics') {
                    navigate('/analytics/platform');
                  } else if (item.route === '/settings') {
                    navigate('/settings/system');
                  } else {
                    navigate(item.route);
                  }
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer group ${
                  active
                    ? 'text-primary bg-primary-container/10 border-l-2 border-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-variant/40'
                }`}
                title={item.label}
              >
                <span 
                  className={`material-symbols-outlined shrink-0 ${
                    active ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'
                  }`}
                  style={{ fontVariationSettings: active ? "'FILL' 1" : undefined }}
                >
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className="font-body-md text-body-md transition-opacity duration-200">{item.label}</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-outline-variant/30 flex flex-col gap-3 shrink-0 bg-surface-container-low/50">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/40 bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs shrink-0 cursor-pointer" onClick={() => navigate('/settings/system')}>
                AM
              </div>
              <div className="overflow-hidden cursor-pointer" onClick={() => navigate('/settings/system')}>
                <p className="font-label-md text-label-md text-on-surface font-bold leading-none truncate">Alex Morgan</p>
                <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider truncate">Operator #9042</p>
              </div>
            </div>
          )}
          
          <button 
            onClick={() => {
              alert('Ecosystem health checks: all services operational. Gateway: 100%, Database replica: 100%, Search engine: 100% stable.');
            }}
            className={`w-full py-2 bg-surface-container-highest hover:bg-surface-container-high border border-outline-variant/60 text-on-surface-variant rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 transition-all cursor-pointer ${
              collapsed ? 'px-0' : 'px-3'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-green-600 pulse-live">sensors</span>
            {!collapsed && <span>System Status</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div 
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
          collapsed ? 'ml-[64px]' : 'ml-[240px]'
        }`}
      >
        {/* Header Layout */}
        <header className="h-14 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 flex items-center justify-between px-6 sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            {/* Hamburger Toggle */}
            <button 
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 hover:bg-surface-variant/40 rounded-lg text-on-surface-variant transition-colors cursor-pointer"
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <span className="material-symbols-outlined text-[20px]">
                {collapsed ? 'menu' : 'menu_open'}
              </span>
            </button>

            {/* Breadcrumbs solver */}
            <nav className="hidden md:flex items-center gap-1.5 text-on-surface-variant text-label-md font-label-md">
              <span 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => navigate('/dashboard')}
              >
                Ops Portal
              </span>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.link}>
                  <span className="material-symbols-outlined text-xs opacity-50">chevron_right</span>
                  <span 
                    className={`cursor-pointer transition-colors ${
                      idx === breadcrumbs.length - 1 ? 'text-on-surface font-semibold' : 'hover:text-primary'
                    }`}
                    onClick={() => navigate(crumb.link)}
                  >
                    {crumb.label}
                  </span>
                </React.Fragment>
              ))}
            </nav>
          </div>

          {/* Header Action Items */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Global Search */}
            <div className="relative hidden lg:block w-64 group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] group-focus-within:text-primary transition-colors">
                search
              </span>
              <input 
                className="w-full bg-surface-container border border-outline-variant/60 rounded-lg pl-9 pr-4 py-1 text-body-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/60"
                placeholder="Global Search (⌘+K)" 
                type="text" 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    alert('Mock search: Result sets loaded for operator review.');
                  }
                }}
              />
            </div>

            <div className="flex items-center gap-1">
              <button 
                onClick={() => alert('Platform Notifications: No critical alerts in the last 2 hours. 14 items in moderation review queues.')}
                className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 rounded-full transition-colors cursor-pointer"
                title="Notifications"
              >
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button 
                onClick={() => alert('Operations Support: Operator Guide documentation is loaded in the helper module.')}
                className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 rounded-full transition-colors cursor-pointer"
                title="Support Center"
              >
                <span className="material-symbols-outlined">help</span>
              </button>
            </div>
            
            <div className="h-6 w-[1px] bg-outline-variant/60"></div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => alert('Mock Action: Exporting current view records in CSV format.')}
                className="px-3.5 py-1.5 border border-outline-variant/70 text-on-surface-variant hover:bg-surface-variant/30 rounded-lg font-label-md text-label-md transition-all active:scale-95 cursor-pointer"
              >
                Export
              </button>
              <button 
                onClick={() => {
                  const pathType = path.split('/')[1];
                  if (pathType === 'users') navigate('/users');
                  else if (pathType === 'sellers') navigate('/sellers');
                  else if (pathType === 'creators') navigate('/creators');
                  else navigate('/dashboard');
                  alert(`Operator Prompt: Redirecting to create context.`);
                }}
                className="px-3.5 py-1.5 bg-primary text-white hover:bg-primary-container rounded-lg font-label-md text-label-md transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                Create New
              </button>
            </div>
          </div>
        </header>

        {/* Page Content Panel */}
        <main className="flex-1 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
}
