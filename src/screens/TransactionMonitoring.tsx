import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TransactionMonitoring() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      

<div className="w-full flex flex-col">



<main className="flex-1  flex flex-col  overflow-hidden">



<div className="flex-1 overflow-y-auto p-container-padding custom-scrollbar bg-surface-container-lowest">

<div className="flex flex-col gap-6 mb-8">
<div className="flex justify-between items-end">
<div>
<h2 className="font-display-sm text-display-sm text-on-surface">Transaction Monitoring</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time log of platform-wide financial activity</p>
</div>
<div className="flex items-center gap-2 text-primary bg-primary-container/10 px-3 py-1.5 rounded-full border border-primary/20">
<span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
<span className="font-label-md text-label-md">Live Sync Active</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="bg-surface border border-outline-variant p-stack-default rounded-xl hover:border-primary transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-label-md text-on-surface-variant">Daily Volume</span>
<span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">trending_up</span>
</div>
<div className="font-display-sm text-display-sm text-on-surface">$142.8k</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-green-600 text-xs font-bold">+12.4%</span>
<span className="text-on-surface-variant text-[10px]">vs yesterday</span>
</div>
</div>
<div className="bg-surface border border-outline-variant p-stack-default rounded-xl hover:border-primary transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-label-md text-on-surface-variant">Success Rate</span>
<span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">check_circle</span>
</div>
<div className="font-display-sm text-display-sm text-on-surface">99.8%</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-green-600 text-xs font-bold">Stable</span>
<span className="text-on-surface-variant text-[10px]">target 99.5%</span>
</div>
</div>
<div className="bg-surface border border-outline-variant p-stack-default rounded-xl hover:border-primary transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-label-md text-on-surface-variant">Pending Payouts</span>
<span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">hourglass_empty</span>
</div>
<div className="font-display-sm text-display-sm text-on-surface">42</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-tertiary text-xs font-bold">Action Needed</span>
<span className="text-on-surface-variant text-[10px]">avg latency 4m</span>
</div>
</div>
<div className="bg-surface border border-outline-variant p-stack-default rounded-xl hover:border-primary transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-label-md text-on-surface-variant">Risk Alerts</span>
<span className="material-symbols-outlined text-error opacity-0 group-hover:opacity-100 transition-opacity">warning</span>
</div>
<div className="font-display-sm text-display-sm text-error">3</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-error text-xs font-bold">Critical</span>
<span className="text-on-surface-variant text-[10px]">last 20 mins</span>
</div>
</div>
</div>
</div>

<div className="bg-surface border border-outline-variant rounded-xl p-4 mb-6 shadow-sm">
<div className="flex flex-wrap gap-4 items-center">
<div className="flex-1 min-w-[300px] relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Search by Txn ID, User Email, or Wallet..." type="text" />
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="px-1.5 py-0.5 text-[10px] bg-surface-variant border border-outline-variant rounded text-on-surface-variant">⌘</kbd>
<kbd className="px-1.5 py-0.5 text-[10px] bg-surface-variant border border-outline-variant rounded text-on-surface-variant">K</kbd>
</div>
</div>
<div className="flex gap-2">
<div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant px-3 py-2 rounded-lg">
<span className="font-label-md text-label-md text-on-surface-variant">Type:</span>
<select className="bg-transparent border-none text-body-md font-medium text-on-surface p-0 focus:ring-0">
<option>All Types</option>
<option>Order</option>
<option>Payout</option>
<option>Refund</option>
</select>
</div>
<div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant px-3 py-2 rounded-lg">
<span className="font-label-md text-label-md text-on-surface-variant">Amount:</span>
<input className="w-16 bg-transparent border-none text-body-md p-0 focus:ring-0 text-right" placeholder="Min" type="number" />
<span className="text-outline-variant">-</span>
<input className="w-16 bg-transparent border-none text-body-md p-0 focus:ring-0" placeholder="Max" type="number" />
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-lg">filter_list</span>
<span className="font-label-md text-label-md">More Filters</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high text-on-surface border border-outline-variant rounded-lg hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined text-lg">file_download</span>
<span className="font-label-md text-label-md">Export</span>
</button>
</div>
</div>
</div>

<div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full border-collapse">
<thead className="bg-surface-container-low sticky top-0 border-b border-outline-variant z-10">
<tr>
<th className="px-4 py-3 text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
<div className="flex items-center gap-2 cursor-pointer hover:text-primary">
                                            Txn ID <span className="material-symbols-outlined text-[14px]">unfold_more</span>
</div>
</th>
<th className="px-4 py-3 text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Type</th>
<th className="px-4 py-3 text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Amount</th>
<th className="px-4 py-3 text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">From</th>
<th className="px-4 py-3 text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">To</th>
<th className="px-4 py-3 text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-4 py-3 text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Risk</th>
<th className="px-4 py-3 text-right font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">

<tr className="hover:bg-surface-container transition-colors group">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant/40 text-[18px]">receipt_long</span>
<span className="font-code-sm text-code-sm font-medium">TXN-9842-882</span>
</div>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[11px] font-bold bg-primary/10 text-primary uppercase">Order</span>
</td>
<td className="px-4 py-3">
<span className="font-body-md font-bold text-on-surface">$1,250.00</span>
</td>
<td className="px-4 py-3">
<div className="flex flex-col">
<span className="font-body-sm text-on-surface">Alex Rivera</span>
<span className="text-[10px] text-on-surface-variant font-code-sm">ID: 44021</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">account_balance</span>
<span className="font-body-sm text-on-surface">Main Clearing</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit border border-green-200">
<span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
<span className="text-[11px] font-bold uppercase">Success</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
<span className="text-[11px] font-medium">Low</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="p-1 hover:bg-surface-variant rounded-md transition-all">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="bg-error-container/5 hover:bg-error-container/10 transition-colors group">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-error text-[18px]">warning</span>
<span className="font-code-sm text-code-sm font-medium text-error">TXN-4421-002</span>
</div>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[11px] font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant uppercase">Payout</span>
</td>
<td className="px-4 py-3">
<span className="font-body-md font-bold text-error">$8,400.00</span>
</td>
<td className="px-4 py-3">
<div className="flex flex-col">
<span className="font-body-sm text-on-surface">Digital Assets LLC</span>
<span className="text-[10px] text-on-surface-variant font-code-sm">ID: 8812</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">payments</span>
<span className="font-body-sm text-on-surface">External Wallet</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-full w-fit border border-tertiary/20">
<span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
<span className="text-[11px] font-bold uppercase">Reviewing</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1 text-error">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>priority_high</span>
<span className="text-[11px] font-bold">High</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-2 py-1 bg-primary text-on-primary text-[10px] font-bold rounded uppercase">Flag</button>
<button className="px-2 py-1 bg-surface border border-outline-variant text-[10px] font-bold rounded uppercase">Logs</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant/40 text-[18px]">receipt_long</span>
<span className="font-code-sm text-code-sm font-medium">TXN-7712-332</span>
</div>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary/10 text-secondary uppercase">Refund</span>
</td>
<td className="px-4 py-3">
<span className="font-body-md font-bold text-on-surface">-$152.20</span>
</td>
<td className="px-4 py-3">
<div className="flex flex-col">
<span className="font-body-sm text-on-surface">System Auto</span>
<span className="text-[10px] text-on-surface-variant font-code-sm">Ref ID: 99182</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">person</span>
<span className="font-body-sm text-on-surface">S. Thompson</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded-full w-fit">
<span className="w-1.5 h-1.5 bg-on-surface-variant rounded-full"></span>
<span className="text-[11px] font-bold uppercase">Reversed</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1 text-on-surface-variant opacity-40">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span className="text-[11px] font-medium">Safe</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="p-1 hover:bg-surface-variant rounded-md transition-all">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant/40 text-[18px]">receipt_long</span>
<span className="font-code-sm text-code-sm font-medium">TXN-1102-443</span>
</div>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[11px] font-bold bg-primary/10 text-primary uppercase">Order</span>
</td>
<td className="px-4 py-3">
<span className="font-body-md font-bold text-on-surface">$42.00</span>
</td>
<td className="px-4 py-3">
<div className="flex flex-col">
<span className="font-body-sm text-on-surface">Guest #291</span>
<span className="text-[10px] text-on-surface-variant font-code-sm">IP: 192.168.1.1</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">store</span>
<span className="font-body-sm text-on-surface">Urban Wear</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit border border-green-200">
<span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
<span className="text-[11px] font-bold uppercase">Success</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
<span className="text-[11px] font-medium">Low</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="p-1 hover:bg-surface-variant rounded-md transition-all">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container-low border-t border-outline-variant px-4 py-3 flex items-center justify-between">
<div className="font-label-md text-label-md text-on-surface-variant">
                            Showing <span className="font-bold text-on-surface">1-4</span> of <span className="font-bold text-on-surface">2,842</span> transactions
                        </div>
<div className="flex items-center gap-2">
<button className="p-1.5 border border-outline-variant rounded-lg hover:bg-surface-variant disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded-lg font-bold text-[12px]">1</button>
<button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant rounded-lg text-[12px]">2</button>
<button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant rounded-lg text-[12px]">3</button>
<span className="px-2 py-1 text-on-surface-variant">...</span>
<button className="w-8 h-8 flex items-center justify-center hover:bg-surface-variant rounded-lg text-[12px]">72</button>
</div>
<button className="p-1.5 border border-outline-variant rounded-lg hover:bg-surface-variant">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="mt-8 flex justify-between items-center text-[11px] text-on-surface-variant/60 font-code-sm">
<div className="flex items-center gap-4">
<span>NODE_ID: US-EAST-1A</span>
<span>LATENCY: 14ms</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
<span>SOCKETS_CONNECTED: 4,921</span>
</div>
</div>
</div>
</main>
</div>



    </div>
  );
}
