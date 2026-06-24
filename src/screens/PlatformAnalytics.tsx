import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlatformAnalytics() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface">
      



<main className="flex-1  flex flex-col">



<div className="p-container-padding space-y-gutter flex-1 overflow-auto custom-scrollbar">

<div className="flex justify-between items-end">
<div>
<h2 className="font-display-sm text-display-sm text-on-surface">Platform Ecosystem Analytics</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time health indicators and cross-segment growth metrics.</p>
</div>
<div className="flex gap-2 bg-surface-container p-1 rounded-lg border border-outline-variant">
<button className="px-3 py-1 bg-surface shadow-sm rounded-md text-[12px] font-bold text-on-surface">24H</button>
<button className="px-3 py-1 rounded-md text-[12px] font-medium text-on-surface-variant hover:bg-surface-variant">7D</button>
<button className="px-3 py-1 rounded-md text-[12px] font-medium text-on-surface-variant hover:bg-surface-variant">30D</button>
<button className="px-3 py-1 rounded-md text-[12px] font-medium text-on-surface-variant hover:bg-surface-variant">12M</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between group hover:border-primary transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-widest">Retention Rate</span>
<span className="material-symbols-outlined text-primary text-[20px]">monitoring</span>
</div>
<div className="mt-4">
<h3 className="font-display-sm text-display-sm text-on-surface">84.2%</h3>
<div className="flex items-center gap-1 text-[12px] mt-1 font-bold text-green-600">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> 2.4%
                            <span className="text-on-surface-variant font-normal ml-1">vs last month</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between group hover:border-primary transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-widest">Average LTV</span>
<span className="material-symbols-outlined text-primary text-[20px]">payments</span>
</div>
<div className="mt-4">
<h3 className="font-display-sm text-display-sm text-on-surface">$1,420.50</h3>
<div className="flex items-center gap-1 text-[12px] mt-1 font-bold text-green-600">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12.1%
                            <span className="text-on-surface-variant font-normal ml-1">vs target</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between group hover:border-primary transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-widest">Churn Index</span>
<span className="material-symbols-outlined text-primary text-[20px]">trending_down</span>
</div>
<div className="mt-4">
<h3 className="font-display-sm text-display-sm text-on-surface">2.1%</h3>
<div className="flex items-center gap-1 text-[12px] mt-1 font-bold text-green-600">
<span className="material-symbols-outlined text-[14px]">arrow_downward</span> 0.4%
                            <span className="text-on-surface-variant font-normal ml-1">optimized</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between group hover:border-primary transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-widest">Ecosystem Health</span>
<span className="material-symbols-outlined text-primary text-[20px]">favorite</span>
</div>
<div className="mt-4">
<h3 className="font-display-sm text-display-sm text-on-surface">Stable</h3>
<div className="flex items-center gap-2 mt-2">
<div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[92%]"></div>
</div>
<span className="text-[11px] font-bold text-on-surface">92/100</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">

<div className="xl:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Multi-Year User Acquisition</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Aggregate growth across Marketplace and Creator segments (2020-2024)</p>
</div>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">download</span>
</button>
</div>
<div className="flex-1 min-h-[320px] chart-grid relative border-l border-b border-outline-variant/30">

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
<path d="M0,320 Q50,280 100,290 T200,240 T300,200 T400,210 T500,140 T600,160 T700,80 T800,90 T900,20" fill="none" stroke="var(--tw-color-primary)" strokeWidth="3"></path>
<path d="M0,320 Q50,280 100,290 T200,240 T300,200 T400,210 T500,140 T600,160 T700,80 T800,90 T900,20" fill="url(#gradient-primary)" opacity="0.1" stroke="none"></path>
<path d="M0,320 Q50,300 100,310 T200,280 T300,260 T400,250 T500,220 T600,200 T700,180 T800,150 T900,120" fill="none" stroke="var(--tw-color-secondary)" stroke-dasharray="4" strokeWidth="2"></path>
<defs>
<linearGradient id="gradient-primary" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="var(--tw-color-primary)"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</linearGradient>
</defs>
</svg>

<div className="absolute left-[75%] top-[15%] pointer-events-none">
<div className="bg-inverse-surface text-inverse-on-surface p-2 rounded-lg shadow-xl text-[11px] space-y-1">
<p className="font-bold border-b border-white/20 pb-1 mb-1">Oct 2023</p>
<p className="flex justify-between gap-4"><span>Active:</span> <span className="font-mono">1.2M</span></p>
<p className="flex justify-between gap-4"><span>Churn:</span> <span className="font-mono">1.9%</span></p>
</div>
<div className="w-px h-64 bg-primary absolute left-1/2 top-full -translate-x-1/2 mt-1"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter px-2">
<span>Jan 2020</span>
<span>Jan 2021</span>
<span>Jan 2022</span>
<span>Jan 2023</span>
<span>Jan 2024</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col">
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Regional Density</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">User concentration by geo-node.</p>
<div className="flex-1 flex flex-col space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-[12px] font-bold">
<span>North America</span>
<span>42%</span>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[42%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[12px] font-bold">
<span>Europe (EMEA)</span>
<span>28%</span>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[28%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[12px] font-bold">
<span>Asia Pacific</span>
<span>18%</span>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[18%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[12px] font-bold">
<span>LATAM</span>
<span>12%</span>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[12%]"></div>
</div>
</div>
</div>
<div className="mt-8 relative h-32 rounded-lg overflow-hidden border border-outline-variant/30">
<div className="absolute inset-0 bg-surface-variant opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-[64px] text-primary/10">public</span>
</div>
<img className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply" data-alt="A highly detailed topographic digital map of the world, styled in a minimalist enterprise aesthetic. The map uses a monochrome palette of deep slate and soft grays, with vibrant indigo glowing pulses representing data density in major tech hubs. The lighting is low-key with a focus on neon-like data streams, creating a high-tech and sophisticated visual for a global platform analytics dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKX29QpxF3gtit6xu1hxBlDVxWmseWyPNY2nC4T7XuzT9SpBXgRluILhxAZWF4VM1Hu5O5OY5aW3Rqrb-z7XoMnWfb5TFqnFtY4PrEvaEHXbdNr6nTJrytsfGDwDiESbQiO8q1qV0wiYnnirHbZ44I4pTIkR6y1P676u5E3_xmcSkIA4CR7-LePPyp62uBtG2T7RAg5nzFl5iiWzsV6pmS9VCBqoYRZCr9se5bbnzppx9OpZcY0I3aRgP669EaFDeJjG18S7neEGcy" />
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Segment Analysis</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Deep dive into user cohorts and engagement metrics.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-body-sm hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                        </button>
<button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-body-sm hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">sort</span> Sort
                        </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container/50 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
<tr>
<th className="px-6 py-4 border-b border-outline-variant">User Segment</th>
<th className="px-6 py-4 border-b border-outline-variant text-center">Active Users</th>
<th className="px-6 py-4 border-b border-outline-variant text-center">Avg Session</th>
<th className="px-6 py-4 border-b border-outline-variant text-center">Conversion</th>
<th className="px-6 py-4 border-b border-outline-variant text-center">Revenue</th>
<th className="px-6 py-4 border-b border-outline-variant text-right">Health Score</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md text-on-surface">
<tr className="hover:bg-surface-variant/30 transition-colors cursor-pointer group">
<td className="px-6 py-3 border-b border-outline-variant">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">workspace_premium</span>
</div>
<div>
<p className="font-bold">Enterprise Sellers</p>
<p className="text-[11px] text-on-surface-variant">High-volume merchants</p>
</div>
</div>
</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">24,812</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">42m 10s</td>
<td className="px-6 py-3 border-b border-outline-variant text-center">
<span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-[11px] font-bold">12.4%</span>
</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">$1.4M</td>
<td className="px-6 py-3 border-b border-outline-variant text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[94%]"></div>
</div>
<span className="font-bold text-[12px]">94</span>
</div>
</td>
</tr>
<tr className="hover:bg-surface-variant/30 transition-colors cursor-pointer group">
<td className="px-6 py-3 border-b border-outline-variant">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">palette</span>
</div>
<div>
<p className="font-bold">Independent Creators</p>
<p className="text-[11px] text-on-surface-variant">Solo practitioners</p>
</div>
</div>
</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">156,092</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">1h 14m</td>
<td className="px-6 py-3 border-b border-outline-variant text-center">
<span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-[11px] font-bold">8.1%</span>
</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">$2.8M</td>
<td className="px-6 py-3 border-b border-outline-variant text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[88%]"></div>
</div>
<span className="font-bold text-[12px]">88</span>
</div>
</td>
</tr>
<tr className="hover:bg-surface-variant/30 transition-colors cursor-pointer group">
<td className="px-6 py-3 border-b border-outline-variant">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-tertiary-container/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</div>
<div>
<p className="font-bold">Retail Buyers</p>
<p className="text-[11px] text-on-surface-variant">General consumers</p>
</div>
</div>
</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">2,104,502</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">12m 45s</td>
<td className="px-6 py-3 border-b border-outline-variant text-center">
<span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-[11px] font-bold">3.2%</span>
</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">$8.9M</td>
<td className="px-6 py-3 border-b border-outline-variant text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[72%]"></div>
</div>
<span className="font-bold text-[12px]">72</span>
</div>
</td>
</tr>
<tr className="hover:bg-surface-variant/30 transition-colors cursor-pointer group">
<td className="px-6 py-3 border-b border-outline-variant">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-error-container/20 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[18px]">warning</span>
</div>
<div>
<p className="font-bold">At-Risk Accounts</p>
<p className="text-[11px] text-on-surface-variant">Churn probability &gt; 60%</p>
</div>
</div>
</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">12,410</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">2m 05s</td>
<td className="px-6 py-3 border-b border-outline-variant text-center">
<span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-[11px] font-bold">0.8%</span>
</td>
<td className="px-6 py-3 border-b border-outline-variant text-center font-mono text-[13px]">$450k</td>
<td className="px-6 py-3 border-b border-outline-variant text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-error w-[24%]"></div>
</div>
<span className="font-bold text-[12px]">24</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-outline-variant flex justify-between items-center text-[12px] text-on-surface-variant">
<p>Showing 1 to 4 of 24 segments</p>
<div className="flex gap-2">
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant disabled:opacity-30" disabled={true}>Previous</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Retention Cohorts</h4>
<div className="grid grid-cols-6 gap-1 h-32">

<div className="bg-primary/90 rounded-sm" title="Month 1: 90%"></div>
<div className="bg-primary/80 rounded-sm"></div>
<div className="bg-primary/70 rounded-sm"></div>
<div className="bg-primary/60 rounded-sm"></div>
<div className="bg-primary/50 rounded-sm"></div>
<div className="bg-primary/40 rounded-sm"></div>
<div className="bg-primary/85 rounded-sm"></div>
<div className="bg-primary/75 rounded-sm"></div>
<div className="bg-primary/65 rounded-sm"></div>
<div className="bg-primary/55 rounded-sm"></div>
<div className="bg-primary/45 rounded-sm"></div>
<div className="bg-primary/35 rounded-sm"></div>
<div className="bg-primary/80 rounded-sm"></div>
<div className="bg-primary/70 rounded-sm"></div>
<div className="bg-primary/60 rounded-sm"></div>
<div className="bg-primary/50 rounded-sm"></div>
<div className="bg-primary/40 rounded-sm"></div>
<div className="bg-primary/30 rounded-sm"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] font-bold text-on-surface-variant">
<span>New Signups</span>
<span>Month 6</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Real-time Events</h4>
<div className="space-y-3">
<div className="flex items-center gap-3 py-2 border-b border-outline-variant/30 last:border-0">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="font-code-sm text-code-sm text-primary">09:42:01</span>
<p className="font-body-sm text-body-sm truncate">Merchant #88219 completed tier upgrade to 'Gold'</p>
</div>
<div className="flex items-center gap-3 py-2 border-b border-outline-variant/30 last:border-0">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="font-code-sm text-code-sm text-primary">09:41:45</span>
<p className="font-body-sm text-body-sm truncate">Region 'EU-West-1' spike in purchase frequency (+12%)</p>
</div>
<div className="flex items-center gap-3 py-2 border-b border-outline-variant/30 last:border-0">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="font-code-sm text-code-sm text-primary">09:40:12</span>
<p className="font-body-sm text-body-sm truncate">Anomaly detected in Checkout flow (Session #AX92)</p>
</div>
</div>
<button className="w-full mt-4 py-2 border border-outline-variant rounded-lg text-body-sm text-primary font-bold hover:bg-primary/5 transition-colors">
                        Open System Console
                    </button>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 flex flex-col gap-3">
<button className="w-12 h-12 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
<span className="material-symbols-outlined">add</span>
<span className="absolute right-full mr-4 px-3 py-1 bg-inverse-surface text-inverse-on-surface rounded text-[12px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">New Report</span>
</button>
</div>


    </div>
  );
}
