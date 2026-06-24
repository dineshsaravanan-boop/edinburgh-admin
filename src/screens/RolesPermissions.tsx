import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RolesPermissions() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md">
      



<main className="flex flex-col relative overflow-hidden cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/admins"); }}>



<section className="flex-1 overflow-y-auto custom-scrollbar p-container-padding cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/admins"); }}>
<div className="max-w-7xl mx-auto space-y-gutter cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/admins"); }}>

<div className="flex justify-between items-end">
<div>
<h2 className="font-display-sm text-display-sm text-on-surface">Access Management</h2>
<p className="text-on-surface-variant mt-1">Define and manage granular permissions for administrative staff and stakeholders.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 border border-outline-variant rounded-lg font-label-md text-on-surface hover:bg-surface-variant/20 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">ios_share</span>
                            Export Matrix
                        </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-surface-container border-b border-outline-variant">
<th className="p-4 w-1/4 font-semibold text-on-surface border-r border-outline-variant">Module & Feature</th>
<th className="p-4 text-center">
<div className="flex flex-col items-center">
<span className="font-semibold text-on-surface">Super Admin</span>
<span className="text-[10px] text-primary uppercase tracking-widest font-bold">All Access</span>
</div>
</th>
<th className="p-4 text-center">
<div className="flex flex-col items-center">
<span className="font-semibold text-on-surface">Moderator</span>
<span className="text-[10px] text-tertiary uppercase tracking-widest font-bold">Safety Lead</span>
</div>
</th>
<th className="p-4 text-center">
<div className="flex flex-col items-center">
<span className="font-semibold text-on-surface">Financial Analyst</span>
<span className="text-[10px] text-secondary uppercase tracking-widest font-bold">Audit Level</span>
</div>
</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="bg-surface-container-low/30">
<td className="px-4 py-2 text-label-md font-bold text-on-surface-variant bg-surface-container/50" colSpan={4}>USER MANAGEMENT</td>
</tr>
<tr className="matrix-cell transition-colors">
<td className="p-4 border-r border-outline-variant">
<div className="flex flex-col">
<span className="font-medium">View User Records</span>
<span className="text-body-sm text-on-surface-variant">Ability to see basic profile and logs</span>
</div>
</td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
</tr>
<tr className="matrix-cell transition-colors">
<td className="p-4 border-r border-outline-variant">
<div className="flex flex-col">
<span className="font-medium">Edit User Roles</span>
<span className="text-body-sm text-on-surface-variant">Elevate or revoke permissions</span>
</div>
</td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
</tr>

<tr className="bg-surface-container-low/30">
<td className="px-4 py-2 text-label-md font-bold text-on-surface-variant bg-surface-container/50" colSpan={4}>MARKETPLACE OPERATIONS</td>
</tr>
<tr className="matrix-cell transition-colors">
<td className="p-4 border-r border-outline-variant">
<div className="flex flex-col">
<span className="font-medium">Product Approval</span>
<span className="text-body-sm text-on-surface-variant">Review and push items to live state</span>
</div>
</td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
</tr>
<tr className="matrix-cell transition-colors">
<td className="p-4 border-r border-outline-variant">
<div className="flex flex-col">
<span className="font-medium">Revenue Reporting</span>
<span className="text-body-sm text-on-surface-variant">Export P&L and sales analytics</span>
</div>
</td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
</tr>

<tr className="bg-surface-container-low/30">
<td className="px-4 py-2 text-label-md font-bold text-on-surface-variant bg-surface-container/50" colSpan={4}>FINANCIAL CONTROLS</td>
</tr>
<tr className="matrix-cell transition-colors">
<td className="p-4 border-r border-outline-variant">
<div className="flex flex-col">
<span className="font-medium">Refund Processing</span>
<span className="text-body-sm text-on-surface-variant">Authorize reversal of transactions</span>
</div>
</td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
</tr>
<tr className="matrix-cell transition-colors">
<td className="p-4 border-r border-outline-variant">
<div className="flex flex-col">
<span className="font-medium">Payout Management</span>
<span className="text-body-sm text-on-surface-variant">Withdraw funds to seller accounts</span>
</div>
</td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input defaultChecked={true} className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
<td className="p-4 text-center"><label className="relative inline-flex items-center cursor-pointer"><input className="sr-only permission-toggle" type="checkbox" /><div className="w-9 h-5 bg-outline-variant rounded-full toggle-bg transition-colors"><div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform toggle-dot"></div></div></label></td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
<span className="text-body-sm text-on-surface-variant italic">Changes are auto-saved to current draft</span>
<div className="flex gap-3">
<button className="px-4 py-2 font-label-md text-on-surface-variant hover:text-on-surface transition-colors">Discard Changes</button>
<button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-md shadow-sm active:scale-95 transition-all">Publish Role Config</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/admins"); }}>

<div className="col-span-1 md:col-span-2 bg-surface-container rounded-xl p-6 border border-outline-variant flex gap-6 relative overflow-hidden group">
<div className="flex-1 space-y-3 relative z-10">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">security</span>
</div>
<h3 className="font-headline-sm">Security Best Practices</h3>
<p className="text-body-sm text-on-surface-variant max-w-lg">Always adhere to the "Least Privilege" principle. Grant only the minimum level of access required for a staff member to complete their assigned tasks. Regularly audit Super Admin logs to ensure system integrity.</p>
<button className="text-primary font-label-md flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Compliance Guide <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div className="hidden md:block w-48 shrink-0 relative">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"></div>
<img className="w-full h-full object-cover rounded-lg mix-blend-multiply opacity-50 grayscale hover:grayscale-0 transition-all duration-500" data-alt="Abstract digital illustration showing a series of layered crystalline shields and geometric locks floating in a clean white space, professional tech aesthetic, soft cyan and indigo lighting, ultra-modern graphic design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX8I_J4hSD04c6TS14GEcrgPqd1aG_SfidN5ycsrfv0VNvwBhbYiQJK0yJfXS1xOMhGHut6KiRMc8l1XHSDm9oCs_NCygPro9-wa6UfImKynKS8hwGSvs_ESKjIEf0qMuIA9BrYXoxctgYCANCLecGAf5giKdQzUmC6A-kSU5wq1k2i17eowwOzdoWajOy2PA_-EByfME3Fo6WaXi6lbFU1-FmYObj99tHHdFLl_O-ONgtZuMnfP4XS3-Kl8s3bstJtpf2KWsPQ3p-" />
</div>
</div>

<div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-6 flex flex-col justify-between cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/admins"); }}>
<div className="space-y-1">
<span className="text-label-md opacity-70">ACTIVE OPERATORS</span>
<div className="flex items-baseline gap-2">
<h4 className="text-3xl font-bold tracking-tighter">1,248</h4>
<span className="text-success text-xs font-bold text-green-400">+12%</span>
</div>
</div>
<div className="space-y-3 mt-4 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/admins"); }}>
<div className="flex justify-between items-center text-body-sm cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/admins"); }}>
<span onClick={(e) => { e.preventDefault(); navigate("/settings/admins"); }} className="cursor-pointer">Super Admins</span>
<span className="font-code-sm">12</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full">
<div className="w-2/12 h-full bg-primary rounded-full"></div>
</div>
<div className="flex justify-between items-center text-body-sm">
<span>Moderators</span>
<span className="font-code-sm">842</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full">
<div className="w-9/12 h-full bg-tertiary rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-6 right-6 bg-inverse-surface text-inverse-on-surface px-6 py-3 rounded-full shadow-xl translate-y-24 transition-transform duration-300 flex items-center gap-3" id="save-toast">
<span className="material-symbols-outlined text-green-400">check_circle</span>
<span className="font-label-md">Role configuration saved successfully</span>
</div>
</main>


    </div>
  );
}
