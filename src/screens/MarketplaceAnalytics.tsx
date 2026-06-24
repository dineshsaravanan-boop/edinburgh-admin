import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MarketplaceAnalytics() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body-md">
      



<main className="flex-1 flex flex-col  overflow-hidden">



<div className="flex-1 overflow-y-auto p-container-padding space-y-6">

<div className="flex justify-between items-end">
<div>
<h2 className="font-display-sm text-display-sm">Marketplace Analytics</h2>
<p className="text-on-surface-variant">Real-time performance metrics and deep-dive seller insights.</p>
</div>
<div className="flex gap-2">
<div className="flex items-center bg-surface-container-high rounded-lg p-1">
<button className="px-4 py-1.5 text-label-md rounded bg-surface shadow-sm font-semibold">30 Days</button>
<button className="px-4 py-1.5 text-label-md text-on-surface-variant hover:text-on-surface">90 Days</button>
<button className="px-4 py-1.5 text-label-md text-on-surface-variant hover:text-on-surface">YTD</button>
</div>
<button className="flex items-center gap-2 border border-outline-variant px-4 py-1.5 rounded-lg text-label-md font-semibold hover:bg-surface-variant/20">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
                        Oct 1 - Oct 31, 2023
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">

<div className="neo-card p-5 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-label-md font-semibold text-on-surface-variant">Gross Merchandise Value</span>
<span className="text-primary text-[20px] material-symbols-outlined" data-icon="trending_up">trending_up</span>
</div>
<div className="mt-2 z-10">
<p className="text-display-sm font-display-sm tracking-tighter">$12.4M</p>
<p className="text-label-md text-primary font-bold">+18.2% <span className="text-on-surface-variant font-normal">vs last month</span></p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0,80 Q25,20 50,60 T100,10" fill="none" stroke="#004ac6" strokeWidth="4"></path>
</svg>
</div>
</div>

<div className="neo-card p-5 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-label-md font-semibold text-on-surface-variant">Average Take Rate</span>
<span className="text-primary text-[20px] material-symbols-outlined" data-icon="percent">percent</span>
</div>
<div className="mt-2 z-10">
<p className="text-display-sm font-display-sm tracking-tighter">14.2%</p>
<p className="text-label-md text-primary font-bold">+0.4% <span className="text-on-surface-variant font-normal">vs last month</span></p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0,50 L20,40 L40,60 L60,30 L80,50 L100,20" fill="none" stroke="#004ac6" strokeWidth="4"></path>
</svg>
</div>
</div>

<div className="neo-card p-5 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-label-md font-semibold text-on-surface-variant">Seller Conv. Rate</span>
<span className="text-error text-[20px] material-symbols-outlined" data-icon="trending_down">trending_down</span>
</div>
<div className="mt-2 z-10">
<p className="text-display-sm font-display-sm tracking-tighter">3.8%</p>
<p className="text-label-md text-error font-bold">-0.2% <span className="text-on-surface-variant font-normal">vs last month</span></p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0,20 Q30,80 60,40 T100,90" fill="none" stroke="#ba1a1a" strokeWidth="4"></path>
</svg>
</div>
</div>

<div className="neo-card p-5 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-label-md font-semibold text-on-surface-variant">Active Sellers</span>
<span className="text-primary text-[20px] material-symbols-outlined" data-icon="store">store</span>
</div>
<div className="mt-2 z-10">
<p className="text-display-sm font-display-sm tracking-tighter">4,821</p>
<p className="text-label-md text-primary font-bold">+12% <span className="text-on-surface-variant font-normal">new this period</span></p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0,70 L25,40 L50,80 L75,30 L100,50" fill="none" stroke="#004ac6" strokeWidth="4"></path>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-8 neo-card rounded-xl p-6 h-[400px] flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm">GMV Performance Trends</h3>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-label-md">Current Period</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-outline-variant"></span>
<span className="text-label-md">Previous Period</span>
</div>
</div>
</div>
<div className="flex-1 relative chart-grid border-l border-b border-outline-variant/30 ml-8 mb-6">

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
<defs>
<linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#004ac6" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#004ac6" stop-opacity="0"></stop>
</linearGradient>
</defs>

<polyline fill="url(#chart-grad)" points="0,350 150,300 300,320 450,250 600,280 750,200 900,150 1100,50"></polyline>
<polyline fill="none" points="0,350 150,300 300,320 450,250 600,280 750,200 900,150 1100,50" stroke="#004ac6" strokeLinejoin="round" strokeWidth="3"></polyline>

<polyline fill="none" opacity="0.4" points="0,380 150,360 300,350 450,340 600,330 750,310 900,300 1100,280" stroke="#737686" stroke-dasharray="4" strokeWidth="2"></polyline>
</svg>

<div className="absolute left-[750px] top-[180px] w-px h-[180px] bg-primary group">
<div className="absolute -top-12 -left-16 bg-on-surface text-surface text-label-md px-3 py-1.5 rounded whitespace-nowrap shadow-xl">
                                Oct 24: $421k (+14%)
                            </div>
<div className="absolute -top-1 left-[-4px] w-2 h-2 rounded-full bg-primary border-2 border-surface"></div>
</div>
</div>
<div className="flex justify-between px-8 text-label-md text-on-surface-variant font-mono">
<span>OCT 01</span>
<span>OCT 07</span>
<span>OCT 14</span>
<span>OCT 21</span>
<span>OCT 28</span>
<span>OCT 31</span>
</div>
</div>

<div className="col-span-4 neo-card rounded-xl p-6 flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm">Category Heatmap</h3>
<button className="text-primary font-semibold text-label-md">View Report</button>
</div>
<div className="flex-1 grid grid-cols-2 grid-rows-3 gap-2">
<div className="bg-primary/90 rounded p-4 text-on-primary flex flex-col justify-between">
<span className="text-label-md">Electronics</span>
<span className="text-headline-sm font-bold">$4.2M</span>
</div>
<div className="bg-primary/60 rounded p-4 text-on-primary flex flex-col justify-between">
<span className="text-label-md">Fashion</span>
<span className="text-headline-sm font-bold">$2.8M</span>
</div>
<div className="bg-primary/40 rounded p-4 text-on-surface flex flex-col justify-between">
<span className="text-label-md">Home & Living</span>
<span className="text-headline-sm font-bold">$1.9M</span>
</div>
<div className="bg-primary/30 rounded p-4 text-on-surface flex flex-col justify-between">
<span className="text-label-md">Beauty</span>
<span className="text-headline-sm font-bold">$1.4M</span>
</div>
<div className="bg-primary/20 rounded p-4 text-on-surface flex flex-col justify-between">
<span className="text-label-md">Automotive</span>
<span className="text-headline-sm font-bold">$0.8M</span>
</div>
<div className="bg-primary/10 rounded p-4 text-on-surface flex flex-col justify-between">
<span className="text-label-md">Sports</span>
<span className="text-headline-sm font-bold">$0.5M</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-label-md">
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary/10"></span>
<span className="text-on-surface-variant">Low Vol</span>
</div>
<div className="flex-1 mx-4 h-1.5 bg-gradient-to-right from-primary/10 via-primary/50 to-primary rounded"></div>
<div className="flex items-center gap-1">
<span className="text-on-surface-variant">High Vol</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
</div>
</div>

<div className="col-span-5 neo-card rounded-xl p-6 h-[400px]">
<h3 className="font-headline-sm text-headline-sm mb-6">Seller Conversion Funnel</h3>
<div className="space-y-4">

<div className="group">
<div className="flex justify-between text-label-md mb-1">
<span className="font-semibold">Inbound Leads</span>
<span className="text-on-surface-variant">12,450 (100%)</span>
</div>
<div className="w-full h-10 bg-surface-container-high rounded-lg overflow-hidden relative">
<div className="h-full bg-primary/20 w-full transition-all group-hover:bg-primary/30"></div>
<div className="absolute inset-0 flex items-center px-4 font-mono text-body-sm font-bold">STAGE 01</div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-label-md mb-1">
<span className="font-semibold">Qualified Applications</span>
<span className="text-on-surface-variant">4,230 (34%)</span>
</div>
<div className="w-full h-10 bg-surface-container-high rounded-lg overflow-hidden relative">
<div className="h-full bg-primary/40 w-[34%] transition-all group-hover:bg-primary/50"></div>
<div className="absolute inset-0 flex items-center px-4 font-mono text-body-sm font-bold">STAGE 02</div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-label-md mb-1">
<span className="font-semibold">KYC Completed</span>
<span className="text-on-surface-variant">2,100 (17%)</span>
</div>
<div className="w-full h-10 bg-surface-container-high rounded-lg overflow-hidden relative">
<div className="h-full bg-primary/60 w-[17%] transition-all group-hover:bg-primary/70"></div>
<div className="absolute inset-0 flex items-center px-4 font-mono text-body-sm font-bold">STAGE 03</div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-label-md mb-1">
<span className="font-semibold">Store Live</span>
<span className="text-on-surface-variant">940 (7.5%)</span>
</div>
<div className="w-full h-10 bg-surface-container-high rounded-lg overflow-hidden relative">
<div className="h-full bg-primary/80 w-[7.5%] transition-all group-hover:bg-primary/90"></div>
<div className="absolute inset-0 flex items-center px-4 font-mono text-body-sm font-bold">STAGE 04</div>
</div>
</div>

<div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg flex items-center gap-4">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="rocket_launch">rocket_launch</span>
<div>
<p className="text-label-md font-bold text-primary">Conversion Efficiency</p>
<p className="text-body-sm text-on-surface-variant">Market average is 6.2%. You are performing in the top 15% percentile.</p>
</div>
</div>
</div>
</div>

<div className="col-span-7 neo-card rounded-xl p-6 h-[400px] flex flex-col overflow-hidden">
<div className="flex justify-between items-center mb-4">
<h3 className="font-headline-sm text-headline-sm">Top Performing Sellers</h3>
<div className="flex items-center gap-2">
<button className="p-1.5 border border-outline-variant rounded hover:bg-surface-variant/20"><span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span></button>
<button className="p-1.5 border border-outline-variant rounded hover:bg-surface-variant/20"><span className="material-symbols-outlined text-[18px]" data-icon="download">download</span></button>
</div>
</div>
<div className="flex-1 overflow-auto hide-scrollbar">
<table className="w-full text-left">
<thead className="sticky top-0 bg-white z-10 border-b border-outline-variant">
<tr className="text-label-md font-bold text-on-surface-variant">
<th className="py-3 px-2">SELLER</th>
<th className="py-3 px-2">CATEGORY</th>
<th className="py-3 px-2">GMV</th>
<th className="py-3 px-2">GROWTH</th>
<th className="py-3 px-2">STATUS</th>
</tr>
</thead>
<tbody className="text-body-sm divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-2 flex items-center gap-2">
<div className="w-8 h-8 rounded bg-surface-variant/50 flex items-center justify-center font-bold text-[10px]">NX</div>
<div>
<p className="font-semibold">NextGen Tech</p>
<p className="text-[11px] text-on-surface-variant">ID: #89210</p>
</div>
</td>
<td className="py-3 px-2">Electronics</td>
<td className="py-3 px-2 font-mono font-bold">$1.24M</td>
<td className="py-3 px-2 text-primary">+24.5%</td>
<td className="py-3 px-2">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase">Elite</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-2 flex items-center gap-2">
<div className="w-8 h-8 rounded bg-surface-variant/50 flex items-center justify-center font-bold text-[10px]">VL</div>
<div>
<p className="font-semibold">Velvet Lotus</p>
<p className="text-[11px] text-on-surface-variant">ID: #89211</p>
</div>
</td>
<td className="py-3 px-2">Fashion</td>
<td className="py-3 px-2 font-mono font-bold">$980K</td>
<td className="py-3 px-2 text-primary">+12.2%</td>
<td className="py-3 px-2">
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-bold text-[10px] uppercase">Premium</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-2 flex items-center gap-2">
<div className="w-8 h-8 rounded bg-surface-variant/50 flex items-center justify-center font-bold text-[10px]">OC</div>
<div>
<p className="font-semibold">Oceanic Goods</p>
<p className="text-[11px] text-on-surface-variant">ID: #89212</p>
</div>
</td>
<td className="py-3 px-2">Home</td>
<td className="py-3 px-2 font-mono font-bold">$720K</td>
<td className="py-3 px-2 text-error">-4.1%</td>
<td className="py-3 px-2">
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-bold text-[10px] uppercase">Premium</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-2 flex items-center gap-2">
<div className="w-8 h-8 rounded bg-surface-variant/50 flex items-center justify-center font-bold text-[10px]">AB</div>
<div>
<p className="font-semibold">Active Build</p>
<p className="text-[11px] text-on-surface-variant">ID: #89213</p>
</div>
</td>
<td className="py-3 px-2">Automotive</td>
<td className="py-3 px-2 font-mono font-bold">$610K</td>
<td className="py-3 px-2 text-primary">+38.0%</td>
<td className="py-3 px-2">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase">Elite</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-2 flex items-center gap-2">
<div className="w-8 h-8 rounded bg-surface-variant/50 flex items-center justify-center font-bold text-[10px]">PS</div>
<div>
<p className="font-semibold">Pure Skin</p>
<p className="text-[11px] text-on-surface-variant">ID: #89214</p>
</div>
</td>
<td className="py-3 px-2">Beauty</td>
<td className="py-3 px-2 font-mono font-bold">$540K</td>
<td className="py-3 px-2 text-primary">+5.8%</td>
<td className="py-3 px-2">
<span className="px-2 py-0.5 rounded-full bg-outline-variant/30 text-on-surface-variant font-bold text-[10px] uppercase">Standard</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-4 flex items-center justify-between">
<p className="text-label-md text-on-surface-variant">Showing 5 of 4,821 sellers</p>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-variant/20"><span className="material-symbols-outlined text-[16px]" data-icon="chevron_left">chevron_left</span></button>
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-variant/20"><span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>


    </div>
  );
}
