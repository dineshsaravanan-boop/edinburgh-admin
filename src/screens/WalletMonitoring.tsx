import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WalletMonitoring() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md">
      



<main className="flex-1 flex flex-col overflow-hidden">



<section className="flex-1 overflow-y-auto p-container-padding space-y-gutter bg-surface-container-lowest">

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<div className="p-5 bg-white border border-outline-variant rounded-xl flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-6xl">account_balance</span>
</div>
<span className="text-label-md font-medium text-on-surface-variant flex items-center gap-1.5 uppercase tracking-wider">
                        Total Held Balance
                        <span className="material-symbols-outlined text-[14px]">info</span>
</span>
<div className="flex items-baseline gap-2">
<h3 className="font-display-sm text-display-sm">$12,842,091.50</h3>
<span className="text-green-600 font-label-md flex items-center">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                            +4.2%
                        </span>
</div>
<div className="mt-2 h-1 w-full bg-surface-container-low rounded-full overflow-hidden">
<div className="h-full bg-primary w-3/4 rounded-full"></div>
</div>
</div>

<div className="p-5 bg-white border border-outline-variant rounded-xl flex flex-col gap-2 relative overflow-hidden group">
<span className="text-label-md font-medium text-on-surface-variant flex items-center gap-1.5 uppercase tracking-wider">
                        Pending Payouts
                    </span>
<div className="flex items-baseline gap-2">
<h3 className="font-display-sm text-display-sm">$842,102.00</h3>
<span className="text-on-surface-variant font-label-md opacity-60">142 Batches</span>
</div>
<div className="flex gap-1 mt-3">
<div className="h-6 w-1/4 bg-blue-50 border border-blue-100 rounded text-[10px] flex items-center justify-center text-blue-700 font-bold">USA</div>
<div className="h-6 w-1/4 bg-blue-50 border border-blue-100 rounded text-[10px] flex items-center justify-center text-blue-700 font-bold">EU</div>
<div className="h-6 w-1/6 bg-blue-50 border border-blue-100 rounded text-[10px] flex items-center justify-center text-blue-700 font-bold">ASIA</div>
</div>
</div>

<div className="p-5 bg-white border border-outline-variant rounded-xl flex flex-col gap-2 relative overflow-hidden group">
<span className="text-label-md font-medium text-on-surface-variant flex items-center gap-1.5 uppercase tracking-wider">
                        Transaction Volume (24h)
                    </span>
<div className="flex items-baseline gap-2">
<h3 className="font-display-sm text-display-sm">1.4M</h3>
<span className="text-red-500 font-label-md flex items-center">
<span className="material-symbols-outlined text-[16px]">trending_down</span>
                            -0.8%
                        </span>
</div>
<div className="flex items-end gap-1 h-8 mt-2">
<div className="w-full bg-primary/20 h-3 rounded-t-sm"></div>
<div className="w-full bg-primary/20 h-5 rounded-t-sm"></div>
<div className="w-full bg-primary/20 h-4 rounded-t-sm"></div>
<div className="w-full bg-primary/40 h-6 rounded-t-sm"></div>
<div className="w-full bg-primary/40 h-8 rounded-t-sm"></div>
<div className="w-full bg-primary h-7 rounded-t-sm"></div>
<div className="w-full bg-primary/80 h-6 rounded-t-sm"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-8 bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="p-container-padding flex justify-between items-center border-b border-outline-variant/50">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Liquidity Flow</h4>
<p className="text-body-sm text-on-surface-variant">Inflow vs Outflow comparison across all gateways</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 rounded border border-outline-variant text-label-md font-medium hover:bg-surface-container-low">Hourly</button>
<button className="px-3 py-1 rounded bg-primary text-white text-label-md font-medium shadow-sm">Daily</button>
</div>
</div>
<div className="p-8 flex-1 flex flex-col gap-12 relative min-h-[300px]">

<div className="absolute inset-x-8 top-12 bottom-8 border-b-2 border-l-2 border-outline-variant/20"></div>
<div className="flex flex-col gap-10 relative z-10">

<div className="flex items-center gap-4">
<div className="w-24 text-label-md font-bold text-on-surface-variant">INFLOW</div>
<div className="flex-1 h-4 bg-green-50 rounded-full relative">
<div className="absolute top-0 left-0 h-full bg-green-500 rounded-full flex items-center justify-end px-3" style={{"width":"82%"}}>
<span className="text-[10px] text-white font-bold">$1.2M</span>
</div>
<div className="absolute -top-6 right-[18%] text-[10px] text-green-600 font-bold">82% of capacity</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-24 text-label-md font-bold text-on-surface-variant">OUTFLOW</div>
<div className="flex-1 h-4 bg-orange-50 rounded-full relative">
<div className="absolute top-0 left-0 h-full bg-orange-500 rounded-full flex items-center justify-end px-3" style={{"width":"64%"}}>
<span className="text-[10px] text-white font-bold">$0.8M</span>
</div>
<div className="absolute -top-6 right-[36%] text-[10px] text-orange-600 font-bold">64% of capacity</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-24 text-label-md font-bold text-on-surface-variant">INTERNAL</div>
<div className="flex-1 h-4 bg-primary-fixed rounded-full relative">
<div className="absolute top-0 left-0 h-full bg-primary rounded-full flex items-center justify-end px-3" style={{"width":"45%"}}>
<span className="text-[10px] text-white font-bold">$0.4M</span>
</div>
</div>
</div>
</div>
<div className="mt-auto grid grid-cols-4 gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-outline uppercase tracking-tighter">Net Velocity</span>
<span className="text-body-md font-bold text-green-600">High (0.8s)</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-outline uppercase tracking-tighter">Settlement Gap</span>
<span className="text-body-md font-bold">14 mins</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-outline uppercase tracking-tighter">Error Rate</span>
<span className="text-body-md font-bold text-red-500">0.001%</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-outline uppercase tracking-tighter">Active Nodes</span>
<span className="text-body-md font-bold">1,402</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-gutter">

<div className="bg-on-background text-white rounded-xl p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h5 className="text-label-md font-bold uppercase tracking-widest text-primary-fixed-dim">Security Radar</h5>
<span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
</div>
<div className="space-y-3">
<div className="flex gap-3 p-3 bg-white/10 rounded border border-white/5 items-start">
<span className="material-symbols-outlined text-orange-400">warning</span>
<div className="flex-1">
<p className="text-body-sm font-bold">High-Value Withdraw</p>
<p className="text-[11px] opacity-60">Wallet ID: 0x42...f201 attempting $450k</p>
</div>
<button className="text-[10px] font-bold underline">Review</button>
</div>
<div className="flex gap-3 p-3 bg-white/5 rounded items-start opacity-70">
<span className="material-symbols-outlined text-blue-400">shield</span>
<div className="flex-1">
<p className="text-body-sm font-bold">Node Sync Complete</p>
<p className="text-[11px] opacity-60">All 4 nodes at 100% block height</p>
</div>
</div>
</div>
<button className="w-full py-2 bg-primary text-white rounded font-bold text-label-md hover:bg-primary-container transition-all">Audit Security Logs</button>
</div>

<div className="bg-white border border-outline-variant rounded-xl p-5 flex-1">
<h5 className="text-label-md font-bold uppercase mb-4 text-on-surface-variant">Gateway Health</h5>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-[10px]">STR</div>
<div>
<p className="text-body-sm font-bold">Stripe Connect</p>
<p className="text-[10px] text-green-600">Operational • 42ms</p>
</div>
</div>
<span className="material-symbols-outlined text-green-500">check_circle</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-[10px]">PAY</div>
<div>
<p className="text-body-sm font-bold">PayPal Global</p>
<p className="text-[10px] text-orange-500">Degraded • 240ms</p>
</div>
</div>
<span className="material-symbols-outlined text-orange-500">error</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-[10px]">CRY</div>
<div>
<p className="text-body-sm font-bold">Coinbase API</p>
<p className="text-[10px] text-green-600">Operational • 12ms</p>
</div>
</div>
<span className="material-symbols-outlined text-green-500">check_circle</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="p-4 flex justify-between items-center border-b border-outline-variant/50">
<div className="flex items-center gap-4">
<h4 className="font-headline-sm text-headline-sm">High-Value Movements</h4>
<span className="px-2 py-0.5 bg-error-container text-on-error-container rounded-full text-[10px] font-bold">ACTION REQUIRED (3)</span>
</div>
<div className="flex gap-2">
<input className="px-3 py-1 text-body-sm border border-outline-variant rounded-lg outline-none focus:ring-1 focus:ring-primary" placeholder="Filter by address..." type="text" />
<button className="p-1 hover:bg-surface-container rounded transition-colors"><span className="material-symbols-outlined">filter_list</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-body-sm">
<thead className="bg-surface-container-low text-on-surface-variant font-semibold">
<tr>
<th className="px-6 py-3 border-b border-outline-variant/30">Transaction ID</th>
<th className="px-6 py-3 border-b border-outline-variant/30">User / Wallet</th>
<th className="px-6 py-3 border-b border-outline-variant/30">Amount</th>
<th className="px-6 py-3 border-b border-outline-variant/30">Timestamp</th>
<th className="px-6 py-3 border-b border-outline-variant/30">Risk Score</th>
<th className="px-6 py-3 border-b border-outline-variant/30 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">

<tr className="hover:bg-red-50/30 group transition-colors cursor-pointer">
<td className="px-6 py-4 font-code-sm text-primary">tx_942203k91</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold">JD</div>
<span>John Doe (0x...f12)</span>
</div>
</td>
<td className="px-6 py-4 font-bold text-on-surface">$450,000.00</td>
<td className="px-6 py-4 text-on-surface-variant">2 mins ago</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-red-100 text-red-700 rounded text-[10px] font-extrabold border border-red-200">HIGH (98)</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-primary hover:underline font-bold">Verify</button>
<button className="text-red-600 hover:underline font-bold">Block</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low group transition-colors cursor-pointer">
<td className="px-6 py-4 font-code-sm text-primary">tx_88102x402</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold">SA</div>
<span>Sarah Smith (0x...a4b)</span>
</div>
</td>
<td className="px-6 py-4 font-bold text-on-surface">$82,140.00</td>
<td className="px-6 py-4 text-on-surface-variant">14 mins ago</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-extrabold border border-green-200">LOW (12)</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-primary hover:underline font-bold">Audit</button>
</div>
</td>
</tr>

<tr className="hover:bg-orange-50/30 group transition-colors cursor-pointer">
<td className="px-6 py-4 font-code-sm text-primary">tx_77201w988</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold">??</div>
<span>Unknown (0x...e01)</span>
</div>
</td>
<td className="px-6 py-4 font-bold text-on-surface">$120,000.00</td>
<td className="px-6 py-4 text-on-surface-variant">42 mins ago</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-[10px] font-extrabold border border-orange-200">MID (64)</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-primary hover:underline font-bold">Hold</button>
<button className="text-orange-600 hover:underline font-bold">Flag</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low group transition-colors cursor-pointer">
<td className="px-6 py-4 font-code-sm text-primary">tx_66412p001</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold">MK</div>
<span>Mike King (0x...99d)</span>
</div>
</td>
<td className="px-6 py-4 font-bold text-on-surface">$12,040.55</td>
<td className="px-6 py-4 text-on-surface-variant">1 hr ago</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-extrabold border border-green-200">LOW (05)</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-primary hover:underline font-bold">Details</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 bg-surface-container-low border-t border-outline-variant/30 flex justify-center">
<button className="text-label-md font-bold text-primary hover:underline flex items-center gap-2">
                        View all 4,291 transactions
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>

<div className="h-8"></div>
</section>
</main>



    </div>
  );
}
