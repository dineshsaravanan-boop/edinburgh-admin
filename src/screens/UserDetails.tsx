import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface">
      



<main className="flex-1">



<div className="p-container-padding space-y-gutter">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 neo-card rounded-xl">
<div className="flex items-center gap-6">
<div className="relative">
<img className="w-20 h-20 rounded-xl object-cover ring-4 ring-surface-container" data-alt="A detailed studio portrait of a young male professional in his late 20s. He has a friendly expression, wearing a minimalist white cotton shirt. Behind him is a soft, pastel blue gradient background that complements the clean, professional admin UI. The lighting is soft and even, emphasizing a friendly but capable user profile character." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0bdMLT4fhxTxLshbrdPjqeARJFYS05ptt7tKAu6JoNU-PRQe_cyCd_dxmyT1HpF3Pn6wMVixr7dRkj4fu_Uek4-yZZeFYYOYGD-RMKEsvtulplKduZGAPYvZuTkfnlGrNIY7Mvbkx6i1-O5xyyTpU_j7h77Cjmqcr1Zz4Uo7R_QxPXR6YpSyKGKES0LJPY-MH8LJH4Q-J_g9GQyE8IN5YsAHijqr5scyj7LNbY75vcmbONt9A7GYvS-U8WHPp_EOJIhVqnzqqxkta" />
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h2 className="font-display-sm text-display-sm text-on-surface">Alex Rivera</h2>
<span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[11px] font-bold uppercase rounded">Verified Creator</span>
</div>
<p className="text-on-surface-variant text-body-md flex items-center gap-4">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">mail</span> alex.rivera@superapp.com</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">location_on</span> San Francisco, CA</span>
</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 border border-outline-variant rounded-lg text-body-sm font-semibold hover:bg-surface-container-low transition-colors">
                        Reset Password
                    </button>
<button className="px-4 py-2 border border-outline-variant rounded-lg text-body-sm font-semibold hover:bg-surface-container-low transition-colors">
                        Adjust Balance
                    </button>
<button className="px-4 py-2 bg-error text-on-error rounded-lg text-body-sm font-semibold hover:opacity-90 transition-opacity">
                        Suspend Account
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter">
<div className="neo-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<span className="text-on-surface-variant font-label-md">Total Lifetime Spend</span>
<span className="material-symbols-outlined text-primary">payments</span>
</div>
<div className="text-display-sm font-bold text-on-surface">$12,480.00</div>
<div className="mt-2 text-[12px] text-green-600 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+14.2% from last month</span>
</div>
</div>
<div className="neo-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<span className="text-on-surface-variant font-label-md">Wallet Balance</span>
<span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
</div>
<div className="text-display-sm font-bold text-on-surface">$2,105.45</div>
<div className="mt-2 text-[12px] text-on-surface-variant">Credits available for use</div>
</div>
<div className="neo-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<span className="text-on-surface-variant font-label-md">Support Rating</span>
<span className="material-symbols-outlined text-tertiary">star</span>
</div>
<div className="text-display-sm font-bold text-on-surface">4.9 / 5.0</div>
<div className="mt-2 text-[12px] text-on-surface-variant">Based on 24 resolutions</div>
</div>
</div>

<div className="md:col-span-4 neo-card rounded-xl overflow-hidden flex flex-col">
<div className="p-5 border-b border-outline-variant bg-surface-container-lowest">
<h3 className="font-headline-sm text-on-surface">System Attributes</h3>
</div>
<div className="p-5 space-y-4 flex-1">
<div className="flex justify-between">
<span className="text-on-surface-variant text-body-sm">User ID</span>
<span className="font-code-sm text-code-sm text-on-surface">USR_99281744</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant text-body-sm">Created At</span>
<span className="text-body-sm text-on-surface">Jan 12, 2023</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant text-body-sm">Last Login</span>
<span className="text-body-sm text-on-surface">2 hours ago</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant text-body-sm">IP Address</span>
<span className="font-code-sm text-code-sm text-on-surface">192.168.1.104</span>
</div>
<div className="pt-4 border-t border-outline-variant space-y-2">
<span className="text-[10px] uppercase text-outline font-bold">Linked Roles</span>
<div className="flex gap-2">
<span className="px-2 py-1 bg-surface-container text-primary text-[11px] rounded flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">store</span> Seller
                                </span>
<span className="px-2 py-1 bg-surface-container text-secondary text-[11px] rounded flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">brush</span> Creator
                                </span>
</div>
</div>
</div>
</div>

<div className="md:col-span-8 neo-card rounded-xl overflow-hidden">
<div className="p-5 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-sm text-on-surface">Recent Transactions</h3>
<button className="text-primary font-label-md hover:underline">View All</button>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left">
<thead className="bg-surface-container-low text-[11px] uppercase tracking-wider text-on-surface-variant border-b border-outline-variant">
<tr>
<th className="px-6 py-3 font-semibold">Transaction ID</th>
<th className="px-6 py-3 font-semibold">Date</th>
<th className="px-6 py-3 font-semibold">Amount</th>
<th className="px-6 py-3 font-semibold">Status</th>
<th className="px-6 py-3 font-semibold">Method</th>
</tr>
</thead>
<tbody className="text-body-sm">
<tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
<td className="px-6 py-3 font-code-sm">#TXN-882194</td>
<td className="px-6 py-3">Oct 24, 2023</td>
<td className="px-6 py-3 font-semibold text-on-surface">$240.00</td>
<td className="px-6 py-3">
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[11px] font-bold">SUCCESS</span>
</td>
<td className="px-6 py-3 text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">credit_card</span> Visa ****4242
                                    </td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
<td className="px-6 py-3 font-code-sm">#TXN-882180</td>
<td className="px-6 py-3">Oct 22, 2023</td>
<td className="px-6 py-3 font-semibold text-on-surface">$1,100.00</td>
<td className="px-6 py-3">
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[11px] font-bold">SUCCESS</span>
</td>
<td className="px-6 py-3 text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">account_balance</span> Bank Transfer
                                    </td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
<td className="px-6 py-3 font-code-sm">#TXN-882155</td>
<td className="px-6 py-3">Oct 19, 2023</td>
<td className="px-6 py-3 font-semibold text-on-surface">$45.00</td>
<td className="px-6 py-3">
<span className="px-2 py-0.5 bg-error-container text-error rounded-full text-[11px] font-bold">FAILED</span>
</td>
<td className="px-6 py-3 text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">credit_card</span> Visa ****4242
                                    </td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
<td className="px-6 py-3 font-code-sm">#TXN-882110</td>
<td className="px-6 py-3">Oct 15, 2023</td>
<td className="px-6 py-3 font-semibold text-on-surface">$550.00</td>
<td className="px-6 py-3">
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[11px] font-bold">SUCCESS</span>
</td>
<td className="px-6 py-3 text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">account_balance_wallet</span> Internal Wallet
                                    </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="md:col-span-4 neo-card rounded-xl p-5">
<h3 className="font-headline-sm text-on-surface mb-6">User Activity</h3>
<div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
<div className="relative pl-8">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary border-4 border-surface flex items-center justify-center"></div>
<div className="text-body-sm font-semibold text-on-surface">Product Published</div>
<p className="text-[12px] text-on-surface-variant">"Minimalist Icon Set" was listed in Marketplace.</p>
<span className="text-[10px] text-outline font-medium mt-1 block">4 hours ago</span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary border-4 border-surface flex items-center justify-center"></div>
<div className="text-body-sm font-semibold text-on-surface">Review Submitted</div>
<p className="text-[12px] text-on-surface-variant">Left 5 stars on "UI Kit Ultra Pro".</p>
<span className="text-[10px] text-outline font-medium mt-1 block">Yesterday at 2:14 PM</span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-variant border-4 border-surface flex items-center justify-center">
<span className="material-symbols-outlined text-[12px] text-on-surface-variant">lock_open</span>
</div>
<div className="text-body-sm font-semibold text-on-surface">Password Changed</div>
<p className="text-[12px] text-on-surface-variant">Security credentials updated from mobile app.</p>
<span className="text-[10px] text-outline font-medium mt-1 block">3 days ago</span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-tertiary-container border-4 border-surface flex items-center justify-center"></div>
<div className="text-body-sm font-semibold text-on-surface">Support Ticket Opened</div>
<p className="text-[12px] text-on-surface-variant">"Payment discrepancy with Oct 19 transaction."</p>
<span className="text-[10px] text-outline font-medium mt-1 block">4 days ago</span>
</div>
</div>
<button className="w-full mt-6 py-2 bg-surface-container-low text-on-surface-variant font-label-md rounded border border-outline-variant hover:bg-surface-container transition-colors">
                        Load Full History
                    </button>
</div>

<div className="md:col-span-12 neo-card rounded-xl">
<div className="p-5 border-b border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-3">
<h3 className="font-headline-sm text-on-surface">Active Support Tickets</h3>
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">2 OPEN</span>
</div>
</div>
<div className="p-0">
<div className="flex flex-col">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 hover:bg-surface-container-low/30 transition-colors border-b border-outline-variant gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">confirmation_number</span>
</div>
<div>
<div className="text-body-md font-semibold text-on-surface">Discrepancy in Seller Payout #SUP-9921</div>
<div className="text-body-sm text-on-surface-variant">Assigned to: <span className="font-medium text-on-surface">Sarah Connor (L2 Support)</span></div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase text-outline font-bold">Priority</span>
<span className="text-tertiary font-semibold text-body-sm flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span> High</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase text-outline font-bold">Updated</span>
<span className="text-on-surface text-body-sm">1 hour ago</span>
</div>
<button className="p-2 text-outline-variant hover:text-primary">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 hover:bg-surface-container-low/30 transition-colors border-b border-outline-variant gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">contact_support</span>
</div>
<div>
<div className="text-body-md font-semibold text-on-surface">Clarification on Creator Fees #SUP-9850</div>
<div className="text-body-sm text-on-surface-variant">Assigned to: <span className="font-medium text-on-surface">Unassigned</span></div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase text-outline font-bold">Priority</span>
<span className="text-on-surface-variant font-semibold text-body-sm flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-outline-variant"></span> Low</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase text-outline font-bold">Updated</span>
<span className="text-on-surface text-body-sm">2 days ago</span>
</div>
<button className="p-2 text-outline-variant hover:text-primary">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>




    </div>
  );
}
