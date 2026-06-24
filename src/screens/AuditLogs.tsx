import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuditLogs() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary/20">
      





<main className="p-container-padding">

<div className="mb-gutter flex flex-col gap-1">
<h2 className="font-display-sm text-display-sm text-on-surface">Audit Logs</h2>
<p className="text-on-surface-variant">Real-time chronological record of every administrative action across the ecosystem.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-gutter">
<div className="bg-surface-container-lowest p-stack-default border border-outline-variant rounded-lg">
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Total Actions (24h)</p>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-display-sm">12,482</span>
<span className="text-body-sm text-primary font-semibold">↑ 4.2%</span>
</div>
</div>
<div className="bg-surface-container-lowest p-stack-default border border-outline-variant rounded-lg">
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Security Alerts</p>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-display-sm">3</span>
<span className="text-body-sm text-error font-semibold">↑ 100%</span>
</div>
</div>
<div className="bg-surface-container-lowest p-stack-default border border-outline-variant rounded-lg">
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Unique Actors</p>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-display-sm">84</span>
<span className="text-body-sm text-on-surface-variant opacity-60">Stable</span>
</div>
</div>
<div className="bg-surface-container-lowest p-stack-default border border-outline-variant rounded-lg">
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Storage Duration</p>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-display-sm">90 Days</span>
<span className="text-body-sm text-on-surface-variant opacity-60">Policy</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-4 rounded-t-lg border border-outline-variant border-b-0 flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2 border border-outline-variant bg-surface-container-lowest px-3 py-1.5 rounded min-w-[200px]">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">person</span>
<select className="bg-transparent border-none focus:ring-0 text-body-sm p-0 w-full cursor-pointer outline-none">
<option>All Actors</option>
<option>System Admin</option>
<option>Global Moderator</option>
<option>Billing Agent</option>
</select>
</div>
<div className="flex items-center gap-2 border border-outline-variant bg-surface-container-lowest px-3 py-1.5 rounded min-w-[200px]">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">bolt</span>
<select className="bg-transparent border-none focus:ring-0 text-body-sm p-0 w-full cursor-pointer outline-none">
<option>All Action Types</option>
<option>Write Access</option>
<option>Permission Change</option>
<option>Data Export</option>
<option>Login Attempt</option>
</select>
</div>
<div className="flex items-center gap-2 border border-outline-variant bg-surface-container-lowest px-3 py-1.5 rounded min-w-[200px]">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_month</span>
<span className="text-body-sm text-on-surface">Last 24 Hours</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant ml-auto">expand_more</span>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="p-2 hover:bg-surface-variant/30 rounded transition-colors" title="Refresh Feed">
<span className="material-symbols-outlined text-[20px]">refresh</span>
</button>
<button className="p-2 hover:bg-surface-variant/30 rounded transition-colors" title="Table Settings">
<span className="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-b-lg overflow-hidden">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="bg-surface-container/50 border-b border-outline-variant">
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider w-12">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Actor</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Action</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Target Resource</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">IP Address</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Timestamp</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Details</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30 font-body-md text-body-md">

<tr className="hover:bg-surface-variant/10 transition-colors group">
<td className="px-6 py-3">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary text-[14px] font-bold">JD</div>
<div>
<p className="font-semibold text-on-surface">John Doe</p>
<p className="text-label-md text-on-surface-variant">Global Admin</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<span className="px-2 py-1 bg-primary/10 text-primary-fixed-dim text-label-md font-bold rounded uppercase">Update Permission</span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2 font-code-sm text-code-sm bg-surface-container/50 px-2 py-0.5 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">lock</span>
                                    user_role_config.json
                                </div>
</td>
<td className="px-6 py-3 font-code-sm text-code-sm text-on-surface-variant">192.168.1.105</td>
<td className="px-6 py-3">
<p className="text-on-surface font-medium">10:45:22 AM</p>
<p className="text-label-md text-on-surface-variant">Today, Oct 24</p>
</td>
<td className="px-6 py-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-variant/10 transition-colors group">
<td className="px-6 py-3">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-tertiary-container/20 rounded-full flex items-center justify-center text-tertiary text-[14px] font-bold">SS</div>
<div>
<p className="font-semibold text-on-surface">Sarah Smith</p>
<p className="text-label-md text-on-surface-variant">Moderator</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<span className="px-2 py-1 bg-error/10 text-error text-label-md font-bold rounded uppercase">Ban User</span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2 font-code-sm text-code-sm bg-surface-container/50 px-2 py-0.5 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">person</span>
                                    UID_8829103
                                </div>
</td>
<td className="px-6 py-3 font-code-sm text-code-sm text-on-surface-variant">24.112.5.98</td>
<td className="px-6 py-3">
<p className="text-on-surface font-medium">10:42:01 AM</p>
<p className="text-label-md text-on-surface-variant">Today, Oct 24</p>
</td>
<td className="px-6 py-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-variant/10 transition-colors group">
<td className="px-6 py-3">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-primary-container/20 rounded-full flex items-center justify-center text-primary text-[14px] font-bold">SY</div>
<div>
<p className="font-semibold text-on-surface">SYSTEM</p>
<p className="text-label-md text-on-surface-variant">Automated Task</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<span className="px-2 py-1 bg-secondary/10 text-secondary text-label-md font-bold rounded uppercase">Database Backup</span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2 font-code-sm text-code-sm bg-surface-container/50 px-2 py-0.5 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">database</span>
                                    prod_db_core
                                </div>
</td>
<td className="px-6 py-3 font-code-sm text-code-sm text-on-surface-variant">Internal (AWS)</td>
<td className="px-6 py-3">
<p className="text-on-surface font-medium">10:30:00 AM</p>
<p className="text-label-md text-on-surface-variant">Today, Oct 24</p>
</td>
<td className="px-6 py-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-variant/10 transition-colors group">
<td className="px-6 py-3">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-surface-variant rounded-full flex items-center justify-center text-on-surface-variant text-[14px] font-bold">MK</div>
<div>
<p className="font-semibold text-on-surface">Mike Ross</p>
<p className="text-label-md text-on-surface-variant">Developer</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<span className="px-2 py-1 bg-tertiary/10 text-tertiary text-label-md font-bold rounded uppercase">Schema Change</span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2 font-code-sm text-code-sm bg-surface-container/50 px-2 py-0.5 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">schema</span>
                                    marketplace_v2
                                </div>
</td>
<td className="px-6 py-3 font-code-sm text-code-sm text-on-surface-variant">88.10.154.22</td>
<td className="px-6 py-3">
<p className="text-on-surface font-medium">09:55:18 AM</p>
<p className="text-label-md text-on-surface-variant">Today, Oct 24</p>
</td>
<td className="px-6 py-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-variant/10 transition-colors group">
<td className="px-6 py-3">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary text-[14px] font-bold">JD</div>
<div>
<p className="font-semibold text-on-surface">John Doe</p>
<p className="text-label-md text-on-surface-variant">Global Admin</p>
</div>
</div>
</td>
<td className="px-6 py-3">
<span className="px-2 py-1 bg-outline/10 text-on-surface-variant text-label-md font-bold rounded uppercase">Data Export</span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2 font-code-sm text-code-sm bg-surface-container/50 px-2 py-0.5 rounded w-fit">
<span className="material-symbols-outlined text-[14px]">download</span>
                                    quarterly_earnings.csv
                                </div>
</td>
<td className="px-6 py-3 font-code-sm text-code-sm text-on-surface-variant">192.168.1.105</td>
<td className="px-6 py-3">
<p className="text-on-surface font-medium">09:12:44 AM</p>
<p className="text-label-md text-on-surface-variant">Today, Oct 24</p>
</td>
<td className="px-6 py-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 flex items-center justify-between border-t border-outline-variant">
<span className="text-body-sm text-on-surface-variant">Showing 1-5 of 12,482 actions</span>
<div className="flex items-center gap-1">
<button className="p-1.5 border border-outline-variant rounded hover:bg-surface-variant/30 disabled:opacity-30 disabled:cursor-not-allowed">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="px-3 py-1 text-body-sm font-semibold bg-primary text-on-primary rounded">1</button>
<button className="px-3 py-1 text-body-sm text-on-surface hover:bg-surface-variant/30 rounded">2</button>
<button className="px-3 py-1 text-body-sm text-on-surface hover:bg-surface-variant/30 rounded">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="px-3 py-1 text-body-sm text-on-surface hover:bg-surface-variant/30 rounded">250</button>
<button className="p-1.5 border border-outline-variant rounded hover:bg-surface-variant/30">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-surface-container-highest border border-primary/20 shadow-xl rounded-lg p-4 flex items-center gap-4 translate-y-20 opacity-0 transition-all duration-500 z-[100]" id="status-toast">
<div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">sync</span>
</div>
<div>
<p className="text-body-md font-bold">Syncing Records</p>
<p className="text-label-md text-on-surface-variant">Live feed updated 2 seconds ago.</p>
</div>
<button className="ml-4 text-on-surface-variant hover:text-on-surface" onClick={(e) => { e.preventDefault(); }}>
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</main>


    </div>
  );
}
