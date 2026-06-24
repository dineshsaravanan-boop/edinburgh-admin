import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UsersList() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body-md">
      



<main className="flex-1 flex flex-col  overflow-hidden">



<div className="flex-1 overflow-hidden flex flex-col p-container-padding bg-surface">

<div className="mb-6 space-y-4">
<div className="flex justify-between items-end">
<div>
<h2 className="font-display-sm text-display-sm text-on-surface">Global Users</h2>
<p className="text-body-md text-on-surface-variant">Real-time management for 45,291,084 registered accounts.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-outline-variant rounded hover:bg-surface-variant/20 text-label-md font-label-md">
<span className="material-symbols-outlined text-[18px]">segment</span>
                            Filter by Segment
                        </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-outline-variant rounded hover:bg-surface-variant/20 text-label-md font-label-md">
<span className="material-symbols-outlined text-[18px]">tune</span>
                            Advanced View
                        </button>
</div>
</div>

<div className="grid grid-cols-5 gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/50">
<div className="space-y-1">
<label className="text-label-md font-label-md text-on-surface-variant">Join Date Range</label>
<select className="w-full bg-surface border border-outline-variant rounded px-2 py-1.5 text-body-sm focus:ring-2 focus:ring-primary/20">
<option>Last 30 Days</option>
<option>Year to Date</option>
<option>Custom Range</option>
</select>
</div>
<div className="space-y-1">
<label className="text-label-md font-label-md text-on-surface-variant">Country / Region</label>
<select className="w-full bg-surface border border-outline-variant rounded px-2 py-1.5 text-body-sm focus:ring-2 focus:ring-primary/20">
<option>All Countries</option>
<option>United States</option>
<option>European Union</option>
</select>
</div>
<div className="space-y-1">
<label className="text-label-md font-label-md text-on-surface-variant">Account Tier</label>
<select className="w-full bg-surface border border-outline-variant rounded px-2 py-1.5 text-body-sm focus:ring-2 focus:ring-primary/20">
<option>All Tiers</option>
<option>Premium Plus</option>
<option>Standard</option>
</select>
</div>
<div className="space-y-1">
<label className="text-label-md font-label-md text-on-surface-variant">Activity Status</label>
<select className="w-full bg-surface border border-outline-variant rounded px-2 py-1.5 text-body-sm focus:ring-2 focus:ring-primary/20">
<option>Active & Pending</option>
<option>Active Only</option>
<option>Banned</option>
</select>
</div>
<div className="flex items-end gap-2">
<button className="flex-1 py-1.5 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container transition-colors">Apply Filters</button>
<button className="p-1.5 border border-outline-variant text-on-surface-variant rounded hover:bg-surface-variant/30">
<span className="material-symbols-outlined">restart_alt</span>
</button>
</div>
</div>
</div>

<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
<span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Select All</span>
</label>
<div className="h-4 w-[1px] bg-outline-variant"></div>
<div className="flex gap-2">
<button className="flex items-center gap-1.5 text-label-md font-label-md px-3 py-1 rounded bg-secondary/10 text-secondary hover:bg-secondary/20">
<span className="material-symbols-outlined text-[16px]">mail</span>
                            Send Notification
                        </button>
<button className="flex items-center gap-1.5 text-label-md font-label-md px-3 py-1 rounded bg-tertiary-container/10 text-tertiary-container hover:bg-tertiary-container/20">
<span className="material-symbols-outlined text-[16px]">military_tech</span>
                            Change Tier
                        </button>
</div>
</div>
<div className="text-label-md font-label-md text-on-surface-variant">
                    Showing <span className="text-on-surface font-bold">1-25</span> of 45.2M
                </div>
</div>

<div className="flex-1 border border-outline-variant rounded-lg overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
<div className="table-container flex-1 custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high border-b border-outline-variant">
<th className="w-12 px-4 py-3"><input className="rounded border-outline-variant text-primary" type="checkbox" /></th>
<th className="px-4 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">User Identity</th>
<th className="px-4 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-4 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Tier</th>
<th className="px-4 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Lifetime Value</th>
<th className="px-4 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Last Active</th>
<th className="px-4 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Location</th>
<th className="px-4 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">

<tr className="group hover:bg-surface-variant/10 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/users/USR-98243"); }}>
<td className="px-4 py-2"><input className="rounded border-outline-variant text-primary" type="checkbox" /></td>
<td className="px-4 py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">JD</div>
<div>
<div className="text-body-sm font-bold text-on-surface">Jordan Donovan</div>
<div className="text-[11px] text-on-surface-variant font-code-sm">UID_892348_X9</div>
</div>
</div>
</td>
<td className="px-4 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[11px] font-bold uppercase tracking-tighter">
                                        Active
                                    </span>
</td>
<td className="px-4 py-2">
<div className="flex items-center gap-1.5 text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
                                        Premium
                                    </div>
</td>
<td className="px-4 py-2 text-right text-body-sm font-code-sm">$12,490.50</td>
<td className="px-4 py-2 text-body-sm text-on-surface-variant">2 mins ago</td>
<td className="px-4 py-2 text-body-sm text-on-surface-variant">San Francisco, US</td>
<td className="px-4 py-2 text-right">
<div className="row-hover-actions flex justify-end gap-1">
<button className="p-1.5 hover:bg-surface-variant rounded text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
<button className="p-1.5 hover:bg-surface-variant rounded text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
</td>
</tr>

<tr className="group hover:bg-surface-variant/10 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/users/USR-98243"); }}>
<td className="px-4 py-2"><input className="rounded border-outline-variant text-primary" type="checkbox" /></td>
<td className="px-4 py-2">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-outline-variant" data-alt="Small round user profile thumbnail of a professional woman with glasses, smiling warmly. Clean studio lighting with soft bokeh background. Colors are muted and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNc3_LY3wHivfqelu-DawUlThwbY6lGmT6FHVU0PfryI-EF39i9h-PG2srpfc9EAxoWq_CbTAcSDC7M91lIwT_K7yoe1-ZHgkhQyCEyi5hh6IJPzv4buxlfcKXxcstyc5PYNR_jdxA1xzG1xBrl66P2d0fV15T8CfZrqT-35EBrwA-NaerkKJJwvx1B2_JA4fyTuVAN00XVWwz9iACKo6RXrQqYNSPwwKbFyiy_7Svd6GB_nbp7q5IbPyDSLX9SMXXlBSrOZKsSRb-" />
<div>
<div className="text-body-sm font-bold text-on-surface">Elena Rodriguez</div>
<div className="text-[11px] text-on-surface-variant font-code-sm">UID_120495_E4</div>
</div>
</div>
</td>
<td className="px-4 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-[11px] font-bold uppercase tracking-tighter">
                                        Pending
                                    </span>
</td>
<td className="px-4 py-2">
<div className="flex items-center gap-1.5 text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">person</span>
                                        Standard
                                    </div>
</td>
<td className="px-4 py-2 text-right text-body-sm font-code-sm">$450.00</td>
<td className="px-4 py-2 text-body-sm text-on-surface-variant">14 hours ago</td>
<td className="px-4 py-2 text-body-sm text-on-surface-variant">Madrid, ES</td>
<td className="px-4 py-2 text-right">
<div className="row-hover-actions flex justify-end gap-1">
<button className="p-1.5 hover:bg-surface-variant rounded text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
<button className="p-1.5 hover:bg-surface-variant rounded text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
</td>
</tr>

<tr className="group hover:bg-surface-variant/10 transition-colors bg-error/5 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/users/USR-98243"); }}>
<td className="px-4 py-2"><input className="rounded border-outline-variant text-primary" type="checkbox" /></td>
<td className="px-4 py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-error-container/20 flex items-center justify-center text-error font-bold text-xs">SK</div>
<div>
<div className="text-body-sm font-bold text-on-surface">S. Kowalski</div>
<div className="text-[11px] text-error font-code-sm">SUSPICIOUS_ACT_99</div>
</div>
</div>
</td>
<td className="px-4 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error text-on-error text-[11px] font-bold uppercase tracking-tighter">
                                        Banned
                                    </span>
</td>
<td className="px-4 py-2">
<div className="flex items-center gap-1.5 text-body-sm text-on-surface opacity-50">
<span className="material-symbols-outlined text-[16px]">person</span>
                                        Standard
                                    </div>
</td>
<td className="px-4 py-2 text-right text-body-sm font-code-sm">$0.00</td>
<td className="px-4 py-2 text-body-sm text-on-surface-variant">32 days ago</td>
<td className="px-4 py-2 text-body-sm text-on-surface-variant">Warsaw, PL</td>
<td className="px-4 py-2 text-right">
<div className="row-hover-actions flex justify-end gap-1">
<button className="p-1.5 hover:bg-surface-variant rounded text-error transition-colors"><span className="material-symbols-outlined text-[18px]">gavel</span></button>
<button className="p-1.5 hover:bg-surface-variant rounded text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</div>
</td>
</tr>


</tbody>
</table>
</div>

<div className="p-4 border-t border-outline-variant bg-surface-container-low flex justify-between items-center">
<div className="flex items-center gap-4 text-label-md font-label-md text-on-surface-variant">
<span>Items per page:</span>
<select className="bg-transparent border-none focus:ring-0 cursor-pointer">
<option>25</option>
<option>50</option>
<option>100</option>
</select>
</div>
<div className="flex items-center gap-1">
<button className="p-1 text-on-surface-variant hover:bg-surface-variant/50 rounded disabled:opacity-30"><span className="material-symbols-outlined">first_page</span></button>
<button className="p-1 text-on-surface-variant hover:bg-surface-variant/50 rounded disabled:opacity-30"><span className="material-symbols-outlined">chevron_left</span></button>
<div className="flex gap-1 px-4">
<button className="w-8 h-8 bg-primary text-on-primary rounded font-bold text-xs">1</button>
<button className="w-8 h-8 hover:bg-surface-variant/50 text-on-surface-variant rounded font-bold text-xs">2</button>
<button className="w-8 h-8 hover:bg-surface-variant/50 text-on-surface-variant rounded font-bold text-xs">3</button>
<span className="flex items-center justify-center w-8 text-on-surface-variant">...</span>
<button className="w-8 h-8 hover:bg-surface-variant/50 text-on-surface-variant rounded font-bold text-xs">181,164</button>
</div>
<button className="p-1 text-on-surface-variant hover:bg-surface-variant/50 rounded"><span className="material-symbols-outlined">chevron_right</span></button>
<button className="p-1 text-on-surface-variant hover:bg-surface-variant/50 rounded"><span className="material-symbols-outlined">last_page</span></button>
</div>
</div>
</div>
</div>
</main>



    </div>
  );
}
