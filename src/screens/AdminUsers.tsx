import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminUsers() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body-md">
      



<main className="flex-1 main-content flex flex-col  overflow-hidden cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/roles"); }}>



<div className="p-container-padding space-y-4 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/roles"); }}>
<div className="flex justify-between items-end cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/roles"); }}>
<div onClick={(e) => { e.preventDefault(); navigate("/settings/roles"); }} className="cursor-pointer">
<h2 className="font-display-sm text-display-sm text-on-surface">Admin Management</h2>
<p className="text-on-surface-variant font-body-md cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/roles"); }}>Manage and audit internal portal operators and permissions.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-outline text-on-surface font-label-md hover:bg-surface-variant/30 transition-all flex items-center gap-2 active:scale-95">
<span className="material-symbols-outlined text-base">file_download</span>
                        Export Data
                    </button>
<button className="px-4 py-2 bg-primary text-on-primary font-label-md hover:bg-primary-container transition-all flex items-center gap-2 active:scale-95 shadow-sm">
<span className="material-symbols-outlined text-base">person_add</span>
                        Create New
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="p-4 bg-surface border border-outline-variant flex flex-col gap-1">
<span className="text-on-surface-variant font-label-md">Total Operators</span>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-bold">1,248</span>
<span className="text-green-600 font-label-md flex items-center gap-0.5"><span className="material-symbols-outlined text-sm">trending_up</span>+12%</span>
</div>
</div>
<div className="p-4 bg-surface border border-outline-variant flex flex-col gap-1">
<span className="text-on-surface-variant font-label-md">MFA Compliance</span>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-bold">98.2%</span>
<span className="text-green-600 font-label-md flex items-center gap-0.5"><span className="material-symbols-outlined text-sm">check_circle</span>Target</span>
</div>
</div>
<div className="p-4 bg-surface border border-outline-variant flex flex-col gap-1">
<span className="text-on-surface-variant font-label-md">Active Sessions</span>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-bold">84</span>
<span className="text-primary font-label-md">Live Now</span>
</div>
</div>
<div className="p-4 bg-surface border border-outline-variant flex flex-col gap-1">
<span className="text-on-surface-variant font-label-md">Security Alerts</span>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-bold">0</span>
<span className="text-on-surface-variant font-label-md">Last 24h</span>
</div>
</div>
</div>
</div>

<div className="px-container-padding py-2 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low border border-outline-variant">
<span className="material-symbols-outlined text-base text-on-surface-variant">filter_list</span>
<span className="text-label-md">Role: All</span>
<span className="material-symbols-outlined text-base">expand_more</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low border border-outline-variant">
<span className="text-label-md">Status: Active</span>
<span className="material-symbols-outlined text-base">expand_more</span>
</div>
</div>
<div className="hidden flex items-center gap-4 bg-primary-container/10 border border-primary/20 px-4 py-1.5 rounded-sm" id="bulk-actions">
<span className="text-label-md text-primary font-bold"><span id="selected-count">0</span> Selected</span>
<div className="h-4 w-px bg-primary/20"></div>
<button className="text-primary font-label-md hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-base">block</span> Deactivate
                </button>
<button className="text-primary font-label-md hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-base">edit</span> Change Role
                </button>
</div>
</div>

<div className="flex-1 overflow-auto bg-surface">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead className="sticky top-0 bg-surface-container-low z-10 border-b border-outline-variant">
<tr>
<th className="p-4 w-12">
<input className="rounded-none border-outline text-primary focus:ring-primary w-4 h-4" id="select-all" type="checkbox" />
</th>
<th className="p-4 text-label-md text-on-surface-variant font-semibold uppercase tracking-wider">Admin Name</th>
<th className="p-4 text-label-md text-on-surface-variant font-semibold uppercase tracking-wider">Role</th>
<th className="p-4 text-label-md text-on-surface-variant font-semibold uppercase tracking-wider">Last Active</th>
<th className="p-4 text-label-md text-on-surface-variant font-semibold uppercase tracking-wider">MFA Status</th>
<th className="p-4 text-label-md text-on-surface-variant font-semibold uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">

<tr className="group hover:bg-surface-variant/20 transition-colors">
<td className="p-4">
<input className="row-checkbox rounded-none border-outline text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs">JD</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">Julianne DeMarco</span>
<span className="text-xs text-on-surface-variant font-code-sm">j.demarco@superapp.ent</span>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-primary-container/10 text-primary-fixed-dim text-xs font-semibold border border-primary/20">System Admin</span>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">2 mins ago</span>
<span className="text-[10px] text-on-surface-variant uppercase">IP: 192.168.1.45</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-green-600 font-semibold text-xs uppercase tracking-tight">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified_user</span>
                                Enabled
                            </div>
</td>
<td className="p-4 text-right">
<div className="opacity-0 group-hover:opacity-100 flex justify-end gap-1 transition-opacity">
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Edit Permissions"><span className="material-symbols-outlined text-xl">shield_person</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="View Logs"><span className="material-symbols-outlined text-xl">list_alt</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-error transition-colors" title="Deactivate"><span className="material-symbols-outlined text-xl">person_off</span></button>
</div>
</td>
</tr>

<tr className="group hover:bg-surface-variant/20 transition-colors">
<td className="p-4">
<input className="row-checkbox rounded-none border-outline text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-xs">SK</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">Soren Kierkegaard</span>
<span className="text-xs text-on-surface-variant font-code-sm">s.k@superapp.ent</span>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-secondary-container/10 text-secondary text-xs font-semibold border border-secondary/20">Data Analyst</span>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">14 hours ago</span>
<span className="text-[10px] text-on-surface-variant uppercase">IP: 45.22.12.98</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-green-600 font-semibold text-xs uppercase tracking-tight">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified_user</span>
                                Enabled
                            </div>
</td>
<td className="p-4 text-right">
<div className="opacity-0 group-hover:opacity-100 flex justify-end gap-1 transition-opacity">
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">shield_person</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">list_alt</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-xl">person_off</span></button>
</div>
</td>
</tr>

<tr className="group hover:bg-surface-variant/20 transition-colors bg-error-container/5">
<td className="p-4">
<input className="row-checkbox rounded-none border-outline text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-error text-on-error flex items-center justify-center font-bold text-xs">MA</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">Marcus Aurelius</span>
<span className="text-xs text-on-surface-variant font-code-sm">m.aurelius@superapp.ent</span>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-on-surface-variant/10 text-on-surface-variant text-xs font-semibold border border-outline-variant">Support Tier 1</span>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">3 days ago</span>
<span className="text-[10px] text-on-surface-variant uppercase">IP: 82.11.43.12</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-error font-semibold text-xs uppercase tracking-tight">
<span className="material-symbols-outlined text-sm">warning</span>
                                Disabled
                            </div>
</td>
<td className="p-4 text-right">
<div className="opacity-0 group-hover:opacity-100 flex justify-end gap-1 transition-opacity">
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">shield_person</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">list_alt</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-xl">person_off</span></button>
</div>
</td>
</tr>

<tr className="group hover:bg-surface-variant/20 transition-colors">
<td className="p-4">
<input className="row-checkbox rounded-none border-outline text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">EL</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">Eleanor Long</span>
<span className="text-xs text-on-surface-variant font-code-sm">e.long@superapp.ent</span>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-primary-container/10 text-primary-fixed-dim text-xs font-semibold border border-primary/20">System Admin</span>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">Active Now</span>
<span className="text-[10px] text-on-surface-variant uppercase">IP: 201.33.1.2</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-green-600 font-semibold text-xs uppercase tracking-tight">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified_user</span>
                                Enabled
                            </div>
</td>
<td className="p-4 text-right">
<div className="opacity-0 group-hover:opacity-100 flex justify-end gap-1 transition-opacity">
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">shield_person</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">list_alt</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-xl">person_off</span></button>
</div>
</td>
</tr>

<tr className="group hover:bg-surface-variant/20 transition-colors">
<td className="p-4">
<input className="row-checkbox rounded-none border-outline text-primary focus:ring-primary w-4 h-4" type="checkbox" />
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-xs">TS</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">Thomas Shelby</span>
<span className="text-xs text-on-surface-variant font-code-sm">t.shelby@superapp.ent</span>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary text-xs font-semibold border border-tertiary-container/20">Moderator</span>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">1 month ago</span>
<span className="text-[10px] text-on-surface-variant uppercase">IP: 10.0.0.12</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-green-600 font-semibold text-xs uppercase tracking-tight">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified_user</span>
                                Enabled
                            </div>
</td>
<td className="p-4 text-right">
<div className="opacity-0 group-hover:opacity-100 flex justify-end gap-1 transition-opacity">
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">shield_person</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">list_alt</span></button>
<button className="p-1.5 hover:bg-surface-container text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-xl">person_off</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>


</main>


    </div>
  );
}
