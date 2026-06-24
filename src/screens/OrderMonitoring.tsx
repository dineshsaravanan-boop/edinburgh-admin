import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderMonitoring() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      





<main className="p-container-padding">

<section className="mb-gutter">
<div className="flex items-center justify-between mb-4">
<h2 className="font-display-sm text-display-sm text-on-surface">Order Real-time Feed</h2>
<div className="flex items-center gap-2 text-primary bg-primary-container/10 px-3 py-1 rounded-full">
<span className="w-2 h-2 rounded-full bg-primary status-pulse"></span>
<span className="font-label-md font-semibold">LIVE CONNECTED</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-surface-container-lowest border border-outline-variant p-container-padding rounded group hover:border-primary transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-on-surface-variant">Total Volume (24h)</span>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-display-sm text-[32px] font-bold text-on-surface">$1,482,900</span>
<span className="text-green-600 font-label-md flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                            12.5%
                        </span>
</div>
<div className="mt-4 h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[75%]"></div>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-container-padding rounded group hover:border-primary transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-on-surface-variant">Active Logistics</span>
<span className="material-symbols-outlined text-secondary">local_shipping</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-display-sm text-[32px] font-bold text-on-surface">8,291</span>
<span className="text-on-surface-variant font-label-md opacity-60">Fleet active</span>
</div>
<div className="flex gap-1 mt-4">
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-primary rounded-full"></div>
<div className="h-1 flex-1 bg-surface-container rounded-full"></div>
<div className="h-1 flex-1 bg-surface-container rounded-full"></div>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-container-padding rounded group hover:border-primary transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-on-surface-variant">Pending Payouts</span>
<span className="material-symbols-outlined text-tertiary">payments</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-display-sm text-[32px] font-bold text-on-surface">$241.2k</span>
<span className="text-error font-label-md flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">warning</span>
                            High load
                        </span>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-label-md text-on-surface-variant">Est. settlement: 14:00 GMT</span>
<button className="text-primary font-label-md font-bold hover:underline">Speed up</button>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low border border-outline-variant rounded mb-gutter p-4">
<div className="flex flex-wrap gap-4 items-center">
<div className="flex-1 min-w-[200px] relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded font-body-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Order ID, Customer, or Shop" type="text" />
</div>
<div className="flex gap-2">
<select className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 font-body-sm text-on-surface-variant outline-none focus:border-primary">
<option>All Statuses</option>
<option>Processing</option>
<option>Shipped</option>
<option>Delivered</option>
<option>Disputed</option>
</select>
<select className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 font-body-sm text-on-surface-variant outline-none focus:border-primary">
<option>Last 24 Hours</option>
<option>Last 7 Days</option>
<option>Custom Range</option>
</select>
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-outline text-on-surface hover:bg-surface-container transition-colors rounded">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
<span className="font-label-md">Advanced Filters</span>
</button>
<div className="ml-auto flex items-center gap-3">
<span className="font-label-md text-on-surface-variant">Auto-refresh</span>
<div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant bg-surface-container-low">
<th className="px-4 py-3 font-label-md text-outline uppercase tracking-wider">Order ID</th>
<th className="px-4 py-3 font-label-md text-outline uppercase tracking-wider">Date & Time</th>
<th className="px-4 py-3 font-label-md text-outline uppercase tracking-wider">Customer</th>
<th className="px-4 py-3 font-label-md text-outline uppercase tracking-wider">Shop</th>
<th className="px-4 py-3 font-label-md text-outline uppercase tracking-wider">Amount</th>
<th className="px-4 py-3 font-label-md text-outline uppercase tracking-wider">Status</th>
<th className="px-4 py-3 font-label-md text-outline uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="order-row-hover hover:bg-surface-container/30 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/orders/ORD-9284-AX"); }}>
<td className="px-4 py-3 font-code-sm text-primary font-bold">#ORD-94210-X</td>
<td className="px-4 py-3 font-body-sm text-on-surface-variant">Today, 10:42 AM</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold text-[10px]">JD</div>
<span className="font-body-md text-on-surface">James D.</span>
</div>
</td>
<td className="px-4 py-3 font-body-sm text-on-surface">TechVibe Hub</td>
<td className="px-4 py-3 font-body-md font-semibold text-on-surface">$1,299.00</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700 flex items-center gap-1 w-fit">
<span className="w-1.5 h-1.5 bg-blue-700 rounded-full status-pulse"></span>
                                    PROCESSING
                                </span>
</td>
<td className="px-4 py-3 text-right">
<div className="row-actions opacity-0 transition-opacity flex justify-end gap-2">
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
</td>
</tr>

<tr className="order-row-hover hover:bg-surface-container/30 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/orders/ORD-9284-AX"); }}>
<td className="px-4 py-3 font-code-sm text-primary font-bold">#ORD-94208-Y</td>
<td className="px-4 py-3 font-body-sm text-on-surface-variant">Today, 09:15 AM</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-[10px]">SM</div>
<span className="font-body-md text-on-surface">Sarah M.</span>
</div>
</td>
<td className="px-4 py-3 font-body-sm text-on-surface">Luxe Boutique</td>
<td className="px-4 py-3 font-body-md font-semibold text-on-surface">$450.25</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">local_shipping</span>
                                    SHIPPED
                                </span>
</td>
<td className="px-4 py-3 text-right">
<div className="row-actions opacity-0 transition-opacity flex justify-end gap-2">
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
</td>
</tr>

<tr className="order-row-hover hover:bg-surface-container/30 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/orders/ORD-9284-AX"); }}>
<td className="px-4 py-3 font-code-sm text-primary font-bold">#ORD-94195-A</td>
<td className="px-4 py-3 font-body-sm text-on-surface-variant">Yesterday, 11:30 PM</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-[10px]">RL</div>
<span className="font-body-md text-on-surface">Robert L.</span>
</div>
</td>
<td className="px-4 py-3 font-body-sm text-on-surface">Green Garden Shop</td>
<td className="px-4 py-3 font-body-md font-semibold text-on-surface">$89.00</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-700 flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                    DELIVERED
                                </span>
</td>
<td className="px-4 py-3 text-right">
<div className="row-actions opacity-0 transition-opacity flex justify-end gap-2">
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
</td>
</tr>

<tr className="order-row-hover bg-error-container/5 hover:bg-error-container/10 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/orders/ORD-9284-AX"); }}>
<td className="px-4 py-3 font-code-sm text-error font-bold">#ORD-94182-Z</td>
<td className="px-4 py-3 font-body-sm text-on-surface-variant">Yesterday, 04:20 PM</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-error-container/30 flex items-center justify-center text-error font-bold text-[10px]">AK</div>
<span className="font-body-md text-on-surface">Alex K.</span>
</div>
</td>
<td className="px-4 py-3 font-body-sm text-on-surface">Pixel Art Studio</td>
<td className="px-4 py-3 font-body-md font-semibold text-on-surface">$2,400.00</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-error-container text-on-error-container flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">gavel</span>
                                    DISPUTED
                                </span>
</td>
<td className="px-4 py-3 text-right">
<div className="row-actions opacity-0 transition-opacity flex justify-end gap-2">
<button className="p-1 text-error hover:text-error/80 transition-colors"><span className="material-symbols-outlined text-[18px]">warning</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
</td>
</tr>

<tr className="order-row-hover hover:bg-surface-container/30 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/orders/ORD-9284-AX"); }}>
<td className="px-4 py-3 font-code-sm text-primary font-bold">#ORD-94177-B</td>
<td className="px-4 py-3 font-body-sm text-on-surface-variant">Oct 24, 02:10 PM</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant font-bold text-[10px]">ML</div>
<span className="font-body-md text-on-surface">Marie L.</span>
</div>
</td>
<td className="px-4 py-3 font-body-sm text-on-surface">Urban Wear</td>
<td className="px-4 py-3 font-body-md font-semibold text-on-surface">$115.00</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-700 flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                    DELIVERED
                                </span>
</td>
<td className="px-4 py-3 text-right">
<div className="row-actions opacity-0 transition-opacity flex justify-end gap-2">
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-container-padding py-3 border-t border-outline-variant flex items-center justify-between bg-surface-container-low">
<span className="font-label-md text-on-surface-variant">Showing 1 to 25 of 12,482 entries</span>
<div className="flex items-center gap-1">
<button className="p-1.5 border border-outline rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 font-label-md bg-primary text-white rounded">1</button>
<button className="w-8 h-8 font-label-md text-on-surface-variant hover:bg-surface-container rounded transition-colors">2</button>
<button className="w-8 h-8 font-label-md text-on-surface-variant hover:bg-surface-container rounded transition-colors">3</button>
<span className="px-2">...</span>
<button className="w-8 h-8 font-label-md text-on-surface-variant hover:bg-surface-container rounded transition-colors">499</button>
<button className="p-1.5 border border-outline rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</section>

<section className="mt-gutter grid grid-cols-1 lg:grid-cols-2 gap-gutter">
<div className="bg-surface-container-lowest border border-outline-variant p-container-padding rounded">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-sm text-on-surface">Logistics Distribution</h3>
<span className="material-symbols-outlined text-outline">map</span>
</div>
<div className="h-48 w-full bg-surface-container flex items-center justify-center rounded relative overflow-hidden">
<div className="absolute inset-0 opacity-40" data-location="London" >
<img className="w-full h-full object-cover grayscale brightness-125" data-alt="A detailed digital vector map of a metropolitan area showing real-time logistics routes. The map uses a minimalist dark-themed base with glowing primary blue lines representing high-traffic delivery paths. Subtle circular pulses indicate major warehouse hubs. High-density information design for an enterprise dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFyLBEdVfq0-o2CMU-l5ts5quGCut6vXFqP8sN3EIIsY-xtQiUtU--e7qWOf50JXGhpU7JUkUzIP4i_ZAN-LSSyFh5LmWP6-pADOAzbGCddOVZ1w84EAqAgIaXebf8rD8rQnSENFeYWZ9v1D11QG4Ae7ODyOKmfAGThUc3Xp-6nLcx_UgIwNjHC1qW3njvsEnOWNnz3eM-xC4tMTi82i0r7EzgwN0urVyOCE_2-N-YnWkTB522xopfLp-G8LvUmQV-SfSTaLJSyI-Z" />
</div>
<div className="z-10 bg-white/90 backdrop-blur p-4 rounded border border-outline-variant shadow-sm text-center">
<p className="font-label-md text-primary font-bold">Real-time GPS Tracking</p>
<p className="font-body-sm text-on-surface-variant mt-1">8,291 active drivers currently in transit</p>
<button className="mt-3 px-4 py-1.5 bg-primary text-white text-[11px] font-bold rounded uppercase tracking-widest">Full Screen Map</button>
</div>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-container-padding rounded">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-sm text-on-surface">Dispute Alerts</h3>
<button className="text-error font-label-md font-bold flex items-center gap-1">
                        View All (24)
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
<div className="space-y-3">
<div className="p-3 bg-error/5 border-l-4 border-error flex gap-3">
<span className="material-symbols-outlined text-error">priority_high</span>
<div>
<p className="font-label-md font-bold text-on-surface">Critical Delay: #ORD-94182-Z</p>
<p className="font-body-sm text-on-surface-variant">Customer reported missing package after "Delivered" scan. Automated claim pending.</p>
<div className="mt-2 flex gap-2">
<button className="px-2 py-1 bg-error text-white text-[10px] font-bold rounded">Intervene</button>
<button className="px-2 py-1 border border-outline text-on-surface-variant text-[10px] font-bold rounded">Contact Courier</button>
</div>
</div>
</div>
<div className="p-3 bg-surface-container-low border-l-4 border-outline flex gap-3">
<span className="material-symbols-outlined text-outline">report_problem</span>
<div>
<p className="font-label-md font-bold text-on-surface">System Warning: Payment Gateway</p>
<p className="font-body-sm text-on-surface-variant">Intermittent latency detected in EU-West-1 region. Checkout success rate down 3%.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 right-6 flex items-center gap-2 px-3 py-2 bg-inverse-surface text-inverse-on-surface rounded-full shadow-lg z-50 transform hover:scale-105 transition-all cursor-pointer" id="cmd-k-hint">
<span className="material-symbols-outlined text-[18px]">terminal</span>
<span className="font-label-md">Press <span className="bg-white/20 px-1.5 py-0.5 rounded font-code-sm">⌘K</span> for commands</span>
</div>


    </div>
  );
}
