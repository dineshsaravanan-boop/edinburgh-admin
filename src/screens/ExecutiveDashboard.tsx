import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExecutiveDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body-md text-on-surface">
      



<main className="flex flex-col relative">



<div className="p-container-padding space-y-gutter">

<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">

<div className="p-4 bg-surface-container-lowest border border-outline-variant flex flex-col justify-between h-32 cursor-pointer hover:border-primary transition-colors" onClick={(e) => { e.preventDefault(); navigate("/finance/wallets"); }}>
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-label-md text-label-md">GROSS MERCHANDISE VALUE</span>
<span className="text-green-600 font-code-sm text-code-sm flex items-center">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +12.4%
                        </span>
</div>
<div>
<div className="font-display-sm text-display-sm text-on-surface">$1.24B</div>
<div className="text-on-surface-variant font-body-sm text-body-sm">Trailing 30 days</div>
</div>
</div>

<div className="p-4 bg-surface-container-lowest border border-outline-variant flex flex-col justify-between h-32 cursor-pointer hover:border-primary transition-colors" onClick={(e) => { e.preventDefault(); navigate("/users"); }}>
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-label-md text-label-md">TOTAL USERS</span>
<span className="text-green-600 font-code-sm text-code-sm flex items-center">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +2.1M
                        </span>
</div>
<div>
<div className="font-display-sm text-display-sm text-on-surface">45.8M</div>
<div className="text-on-surface-variant font-body-sm text-body-sm">Total registered accounts</div>
</div>
</div>

<div className="p-4 bg-surface-container-lowest border border-outline-variant flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-label-md text-label-md">ACTIVE SELLERS</span>
<span className="text-primary font-code-sm text-code-sm flex items-center">
<span className="material-symbols-outlined text-[16px]">horizontal_rule</span> stable
                        </span>
</div>
<div>
<div className="font-display-sm text-display-sm text-on-surface">120,432</div>
<div className="text-on-surface-variant font-body-sm text-body-sm">Verified merchant accounts</div>
</div>
</div>

<div className="p-4 bg-surface-container-lowest border border-outline-variant flex flex-col justify-between h-32 cursor-pointer hover:border-primary transition-colors" onClick={(e) => { e.preventDefault(); navigate("/analytics/platform"); }}>
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-label-md text-label-md">PLATFORM HEALTH</span>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 bg-green-500 rounded-full pulse-live"></div>
<span className="text-green-600 font-label-md text-label-md font-bold">OPERATIONAL</span>
</div>
</div>
<div>
<div className="font-display-sm text-display-sm text-on-surface">99.98%</div>
<div className="text-on-surface-variant font-body-sm text-body-sm">Average uptime (90 days)</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-6 cursor-pointer hover:border-primary transition-colors" onClick={(e) => { e.preventDefault(); navigate("/finance/wallets"); }}>
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Aggregate Revenue Growth</h2>
<p className="text-on-surface-variant font-body-sm text-body-sm">Global transactions and subscription volume</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 text-label-md border border-outline-variant bg-surface-container text-on-surface font-semibold">1M</button>
<button className="px-3 py-1 text-label-md border border-outline-variant hover:bg-surface-variant/20 text-on-surface-variant">3M</button>
<button className="px-3 py-1 text-label-md border border-outline-variant hover:bg-surface-variant/20 text-on-surface-variant">6M</button>
<button className="px-3 py-1 text-label-md border border-outline-variant hover:bg-surface-variant/20 text-on-surface-variant">1Y</button>
</div>
</div>
<div className="h-80 w-full chart-container border-l border-b border-outline-variant relative overflow-hidden">

<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
<defs>
<linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#004ac6" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#004ac6" stop-opacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,80 Q100,75 200,60 T400,55 T600,40 T800,45 T1000,20 L1000,100 L0,100 Z" fill="url(#chartGradient)"></path>
<path d="M0,80 Q100,75 200,60 T400,55 T600,40 T800,45 T1000,20" fill="none" stroke="#004ac6" strokeWidth="2"></path>
</svg>

<div className="absolute left-2 top-0 h-full flex flex-col justify-between text-[10px] text-on-surface-variant font-code-sm pointer-events-none py-2">
<span>$2.0B</span>
<span>$1.5B</span>
<span>$1.0B</span>
<span>$500M</span>
<span>$0</span>
</div>
</div>
<div className="flex justify-between mt-2 px-2 text-[10px] text-on-surface-variant font-code-sm">
<span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">

<div className="bg-surface-container-lowest border border-outline-variant p-6">
<div className="flex justify-between mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Marketplace Metrics</h3>
<span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 border border-outline-variant bg-surface-container-low">
<span className="text-on-surface-variant text-label-md">Order Volume</span>
<span className="font-code-sm font-bold">14,290 / hr</span>
</div>
<div className="flex items-center justify-between p-3 border border-outline-variant">
<span className="text-on-surface-variant text-label-md">Average Order Value</span>
<span className="font-code-sm font-bold">$84.20</span>
</div>
<div className="flex items-center justify-between p-3 border border-outline-variant">
<span className="text-on-surface-variant text-label-md">Conversion Rate</span>
<span className="font-code-sm font-bold">4.2%</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant">
<div className="flex justify-between text-label-md mb-2">
<span className="text-on-surface-variant">Inventory Health</span>
<span className="text-on-surface">88% Optimal</span>
</div>
<div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[88%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-6">
<div className="flex justify-between mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Creator Ecosystem</h3>
<span className="material-symbols-outlined text-on-surface-variant">person_celebrate</span>
</div>
<div className="flex items-center gap-6 mb-6">
<div className="flex-1">
<div className="text-[32px] font-bold text-on-surface">$412M</div>
<div className="text-on-surface-variant text-label-md">Paid to date</div>
</div>
<div className="flex-1 border-l border-outline-variant pl-6">
<div className="text-[32px] font-bold text-on-surface">12.8K</div>
<div className="text-on-surface-variant text-label-md">Active Creators</div>
</div>
</div>

<table className="w-full text-left text-body-sm">
<thead className="border-b border-outline-variant text-on-surface-variant font-label-md">
<tr>
<th className="pb-2 font-semibold">TIER</th>
<th className="pb-2 font-semibold">COUNT</th>
<th className="pb-2 font-semibold text-right">AVG REV</th>
</tr>
</thead>
<tbody className="text-on-surface">
<tr className="border-b border-outline-variant/30 hover:bg-surface-variant/20 transition-colors">
<td className="py-2">Diamond</td>
<td className="py-2">412</td>
<td className="py-2 text-right">$45,200</td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-variant/20 transition-colors">
<td className="py-2">Platinum</td>
<td className="py-2">1,822</td>
<td className="py-2 text-right">$12,400</td>
</tr>
<tr className="hover:bg-surface-variant/20 transition-colors">
<td className="py-2">Gold</td>
<td className="py-2">10,566</td>
<td className="py-2 text-right">$3,100</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">

<div className="bg-surface-container-lowest border border-outline-variant p-6 lg:col-span-2">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Real-time Operations</h3>
<div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
</div>
<div className="font-code-sm text-on-surface-variant text-code-sm">Last Update: <span id="timestamp">12:44:02 UTC</span></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 bg-surface border border-outline-variant">
<div className="text-on-surface-variant text-label-md mb-1">Live Order Vol</div>
<div className="text-[24px] font-bold text-on-surface" id="live-vol">241/s</div>
</div>
<div className="p-4 bg-surface border border-outline-variant">
<div className="text-on-surface-variant text-label-md mb-1">System Latency</div>
<div className="text-[24px] font-bold text-on-surface">42ms</div>
</div>
<div className="p-4 bg-surface border border-outline-variant">
<div className="text-on-surface-variant text-label-md mb-1">CPU Load (Avg)</div>
<div className="text-[24px] font-bold text-on-surface">14.2%</div>
</div>
</div>
<div className="mt-6 flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
<div className="flex-none p-3 border border-outline-variant w-40">
<div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Gateway</div>
<div className="text-green-600 text-label-md font-bold mt-1">HEALTHY</div>
</div>
<div className="flex-none p-3 border border-outline-variant w-40">
<div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Database</div>
<div className="text-green-600 text-label-md font-bold mt-1">HEALTHY</div>
</div>
<div className="flex-none p-3 border border-outline-variant w-40">
<div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Search Engine</div>
<div className="text-green-600 text-label-md font-bold mt-1">HEALTHY</div>
</div>
<div className="flex-none p-3 border border-outline-variant w-40">
<div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Auth Svc</div>
<div className="text-green-600 text-label-md font-bold mt-1">HEALTHY</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Top Performing Regions</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center border border-outline-variant shrink-0">
<span className="material-symbols-outlined text-primary">public</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="font-body-md font-bold text-on-surface">North America</span>
<span className="font-code-sm text-on-surface-variant">$420M</span>
</div>
<div className="w-full h-1 bg-surface-variant mt-1">
<div className="bg-primary h-full w-[85%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center border border-outline-variant shrink-0">
<span className="material-symbols-outlined text-primary">public</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="font-body-md font-bold text-on-surface">Southeast Asia</span>
<span className="font-code-sm text-on-surface-variant">$380M</span>
</div>
<div className="w-full h-1 bg-surface-variant mt-1">
<div className="bg-primary h-full w-[78%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center border border-outline-variant shrink-0">
<span className="material-symbols-outlined text-primary">public</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="font-body-md font-bold text-on-surface">Europe</span>
<span className="font-code-sm text-on-surface-variant">$215M</span>
</div>
<div className="w-full h-1 bg-surface-variant mt-1">
<div className="bg-primary h-full w-[45%]"></div>
</div>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 border border-outline text-on-surface font-label-md text-label-md rounded hover:bg-surface-variant/20 transition-all">
                        View Detailed Map
                    </button>
</div>
</div>
</div>


</main>


    </div>
  );
}
